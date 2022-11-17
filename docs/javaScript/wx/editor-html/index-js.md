```js
// components/editor-html/index.js
/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2022-09-14 10:57:58
 * @LastEditors: zhangyu
 * @LastEditTime: 2022-09-16 09:42:45
 * @Description: 
 */

const {  uploadMaterial } = require('../../utils/services/material');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**是否显示工具栏 */
    showTabBar: {
      type: 'Boolean',
      value: true
    },
    height: {
        type: 'String',
        value: '200rpx'
    },  
    placeholder: {
      type: 'String',
      value: '请输入相关内容'
    },
    name: {
      type: 'String',
      value: ''
    },
    uploadImageURL: {
      type: 'String',
      value: ''
    },
    // 修改时显示内容
    richTextContents: {
        type: String,
        value: "",
    },
    // 编辑的富文本的索引
    index: {
        type: Number,
        value: 0,
    },
    // 默认内容
    defaultContent: {
        type: String,
        value: "",
        observer(val) {
            val && this.initData()   // 当visible变为true的时候 会触发initData
         }
    },
  },

  observers: {
    visible(val) {
      console.log(val) // 这里会一直监听着的
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    formats:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initData() {
        wx.nextTick(() => {
            setTimeout(()=>{
                this.properties.defaultContent && this.setContents(this.properties.defaultContent); //设置富文本内容
            },1500)
        })
    },
    // 编辑器初始化完成时触发 
    _onEditorReady: function () {
      const that = this;
      // 通知父组件
      that.triggerEvent('onEditorReady');
      that.createSelectorQuery().select('#editor').context(function (res) {
        that.editorCtx = res.context
        // if (wx.  ("content")) { // 设置~历史值
        //     that.editorCtx.insertText(wx.getStorageSync("content")) // 注意：插入的是对象
        // }
        // that.properties.defaultContent && that.setContents(that.properties.defaultContent); //设置富文本内容
      }).exec()
    },
    // 设置富文本内容
    setContents(rechtext) {
      this.editorCtx.setContents({
        html: rechtext,
        success: (res) => {
          // 富文本内容设置成功
          // console.log("[setContents success]", res);
        },
      });
    },
    //监控输入  富文本编辑器输入时，获取值
    _onInputting(e) {
      let html = e.detail.html;
      let text = e.detail.text;
      this.triggerEvent("getEditorValue", { html: html, text: text });
      wx.setStorageSync("content", html); // 缓存本地
    },
    // 工具栏选项选中，图标出现选中样式
    _onStatusChange(e) {
        let self = this;
        self.setData({
          formats: e.detail,
        });
    },
    //插入图片 van-upload
    afterRead(event) {
        const { file } = event.detail;
        wx.showLoading({
            title: '上传中',
            mask: true
          });
        uploadMaterial(file).then(res => {
            wx.hideLoading()
            try {
                const { data } = res;
                this.editorCtx.insertImage({
                  src: data.fullPath
                });
            } catch (error) {
                wx.showToast({
                    title: '图片上传失败',
                    icon: 'none'
                })
            }
        })
    },
    //插入图片
    _addImage: function (event) {
      let _this = this;
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album'],
        success: function (res) {
        //   wx.showLoading({
        //     title: '上传中',
        //     mask: true
        //   });

        //   _this._uploadImage(res.tempFilePaths[0], event.currentTarget.dataset.uploadimageurl);
        }
      });
    },
    // _uploadImage: function (tempFilePath, uploadImageURL) {
    //   let _this = this;
    //   wx.uploadFile({
    //     filePath: tempFilePath,
    //     name: 'image',
    //     url: uploadImageURL,
    //     success: function (res) {
    //       res = JSON.parse(res.data);
    //       wx.hideLoading({
    //         success: () => {
    //           if (res.code === 200) {
    //             _this.editorCtx.insertImage({
    //               src: res.data
    //             });
    //           } else {
    //             wx.showToast({
    //               icon: 'error',
    //               title: '服务器错误,稍后重试！',
    //               mask: true
    //             })
    //           }
    //         },
    //       });
    //     }
    //   });
    // },
    //设置斜体
    _addItalic: function () {
      this.editorCtx.format("italic")
    },
    //添加粗体样式
    _addBold: function () {
      this.editorCtx.format("bold")
    },
    //设置标题
    _addHeader: function (e) {
      let headerType = e.currentTarget.dataset.header;
      this.editorCtx.format("header", headerType)
    },
    //设置文字的排列方式
    _addAlign: function (e) {
      let alignType = e.currentTarget.dataset.align;
      this.editorCtx.format("align", alignType);
    },
    //设置列表
    _addList: function (e) {
      let listType = e.currentTarget.dataset.list;
      this.editorCtx.format("list", listType);
    },
    //撤销
    _undo: function () {
      this.editorCtx.undo();
    },
    // 清空所有
    clear() {
        this.editorCtx.clear({
        success: function(res) {
            console.log("清空成功")
        }
        })
    },
    // 清除样式
    removeFormat() {
        this.editorCtx.removeFormat()
    },
    // 记录样式 点击工具栏格式化编辑文本
    format(e) {
        let {
        name,
        value
        } = e.target.dataset
        if (!name) return
        // 富文本编辑器格式化内容方法
        this.editorCtx.format(name, value)
    },
  }
})
```