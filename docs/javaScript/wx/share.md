```js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      lineA: '',
      lineB: '',
      row: [],
      permissionsFlag: false,
      activityVO: {},
      product_temp: '',
      qrcode_temp: '',
      canvasImage: '',
      imagePath: '',
      windowHeight: '',
      windowWidth: '',
      rpx: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
      let activityVO = JSON.parse(wx.getStorageSync('activityVO'))
      console.log('activityVO', activityVO)
      this.setData({
          activityVO: activityVO
      })
      let _this = this
      wx.getSetting({
          complete(res) {
              if (res.authSetting['scope.writePhotosAlbum'] == true) {
                  _this.setData({
                      permissionsFlag: true
                  })
              } else if (res.authSetting['scope.writePhotosAlbum'] == false) {
                  _this.setData({
                      permissionsFlag: false
                  })
              }
          }
      })
      if (wx.getStorageSync('time')) {
          this.downImageFn()
          wx.removeStorageSync('time')
      }
  },
  createImage() {
      let _this = this
      wx.showLoading({
          title: '海报生成中...',
      })
      wx.getSystemInfo({
          success: function(res) {
              _this.setData({
                  rpx: res.windowWidth / 750,
                  windowWidth: res.windowWidth,
                  windowHeight: res.windowHeight
              })
          },
      })
      console.log('当前屏幕高度', _this.data.windowHeight)
      wx.downloadFile({
          url: _this.data.activityVO.productPicUrl,
          success: function(res1) {
              _this.setData({
                  product_temp: res1.tempFilePath
              })
              //缓存canvas绘制小程序二维码
              wx.downloadFile({
                  url: _this.data.activityVO.qrcodeUrl,
                  success: function(res2) {
                      console.log('二维码：' + res2.tempFilePath)
                      _this.setData({
                          qrcode_temp: res2.tempFilePath
                      })
                      console.log('开始绘制图片')
                      _this.drawImage();
                  }
              })
          }
      })
  },
  gotoPermissions() {
      wx.setStorageSync('time', '1')
  },
  downImageFn() {
      let _this = this
      wx.getSetting({
          success(res) {
              console.log('用户授权信息', res)
              if (!res.authSetting['scope.writePhotosAlbum']) {
                  console.log('未授权')
                  wx.authorize({
                      scope: 'scope.writePhotosAlbum',
                      success() {
                          _this.createImage()
                          setTimeout(() => {
                              _this.setData({
                                  permissionsFlag: true
                              })
                              wx.hideLoading()
                              console.log('2312312123哈哈哈哈', _this.data.activityVO.id)
                              wx.saveImageToPhotosAlbum({
                                  filePath: _this.data.canvasImage,
                                  success(res) {
                                      wx.showModal({
                                          title: '提示',
                                          showCancel: false,
                                          confirmText: '好的',
                                          content: '图片已保存到相册，赶紧晒一下吧',
                                          success(res) {
                                              wx.navigateTo({
                                                  url: '/pages/detail/detail?id' + _this.data.activityVO.id,
                                              })
                                          }
                                      })
                                  },
                                  fail(res) {
                                      wx.showToast({
                                          icon: 'none',
                                          title: '保存失败，稍后再尝试～',
                                      })
                                  }
                              })
                          }, 6000)
                      },
                      fail() {

                      }
                  })
              }
          },
          complete(res) {
              console.log('授权完了', res)
              console.log("res.authSetting['scope.writePhotosAlbum'].value", res.authSetting['scope.writePhotosAlbum'])
              if (res.authSetting['scope.writePhotosAlbum'] == true) {
                  _this.setData({
                      permissionsFlag: true
                  })
                  console.log('授权通过')
                  _this.createImage()
                  setTimeout(() => {
                      wx.hideLoading()
                      console.log(_this.data.canvasImage)
                      wx.saveImageToPhotosAlbum({
                          filePath: _this.data.canvasImage,
                          success(res) {
                              wx.showModal({
                                  title: '提示',
                                  showCancel: false,
                                  confirmText: '好的',
                                  content: '图片已保存到相册，赶紧晒一下吧',
                                  success(res) {
                                      if (res.confirm) {
                                          wx.navigateTo({
                                              url: '/pages/detail/detail?id=' + _this.data.activityVO.id,
                                          })
                                      }
                                  }
                              })
                          },
                          fail(res) {
                              wx.showToast({
                                  icon: 'none',
                                  title: '保存失败，稍后再尝试～',
                              })
                          }
                      })
                  }, 6000)
              } else if (res.authSetting['scope.writePhotosAlbum'] == false) {

              }
          }
      })
  },
  drawRoundRect: function(cxt, x, y, width, height, radius) {
      cxt.beginPath();
      cxt.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2);
      cxt.lineTo(width - radius + x, y);
      cxt.arc(width - radius + x, radius + y, radius, Math.PI * 3 / 2, Math.PI * 2);
      cxt.lineTo(width + x, height + y - radius);
      cxt.arc(width - radius + x, height - radius + y, radius, 0, Math.PI * 1 / 2);
      cxt.lineTo(radius + x, height + y);
      cxt.arc(radius + x, height - radius + y, radius, Math.PI * 1 / 2, Math.PI);
      cxt.closePath();
  },
  drawImage: function() {
      let windowWidth = this.data.windowWidth
      let windowHeight = this.data.windowHeight
      let rpx = this.data.rpx
      let _this = this
      //绘制canvas图片
      //指定上下文this，否则图片空白
      const ctx = wx.createCanvasContext('myCanvas', _this)
      let text = _this.data.activityVO.productSalesName
      if (text.length > 24) {
          text = text.slice(0, 24)
      }
      ctx.setFillStyle('#fff');
      ctx.fillRect(0, 0, windowWidth, windowHeight * 2 * rpx);
      this.drawRoundRect(ctx, 35 * rpx, 124 * rpx, 680 * rpx, windowHeight * 2 * rpx, 4);
      ctx.drawImage(this.data.product_temp, 35 * rpx, 124 * rpx, 680 * rpx, 680 * rpx); //图片路径，x轴坐标，y轴坐标，图片宽，图片高
      console.log('product_temp', this.data.product_temp)
      ctx.drawImage(this.data.qrcode_temp, 477 * rpx, 834 * rpx, 210 * rpx, 210 * rpx);
      console.log('qrcode_temp', this.data.qrcode_temp)
      ctx.setFontSize(32 * rpx); //字体大小
      ctx.setFillStyle('#4A4A4A'); //字体颜色
      ctx.setTextAlign('left'); //字体对齐方式
      var fn = function(resolve, reject) {
          if (text.length > 12) {
              resolve();
          } else {
              reject();
          }
      }
      var p = new Promise(fn);
      p.then(() => {
          _this.LineFeed(text)
      }, () => {
          ctx.fillText(text, 63 * rpx, 864 * rpx, 414 * rpx);
      }).then(() => {
          ctx.fillText(_this.data.lineA, 63 * rpx, 864 * rpx, 414 * rpx);
          ctx.fillText(_this.data.lineB, 63 * rpx, 900 * rpx, 414 * rpx);
          ctx.setFontSize(24 * rpx);
          ctx.setFillStyle('#4A4A4A');
          ctx.setTextAlign('left');
          ctx.fillText(this.data.activityVO.teamSize + '人团购价', 63 * rpx, 970 * rpx);
          ctx.setFontSize(48 * rpx);
          ctx.setFillStyle('#FF4D58');
          ctx.setTextAlign('left');
          ctx.fillText('¥' + this.data.activityVO.activityPrice, 63 * rpx, 1032 * rpx);
          ctx.setFontSize(24 * rpx); //字体大小
          ctx.setFillStyle('#9B9B9B'); //字体颜色
          ctx.setTextAlign('center'); //字体对齐方式
          ctx.fillText('扫描二维码抢购', windowWidth / 2, 1060 * rpx);
          // //异步操作防止白屏
          ctx.draw(true, function() {
              _this.canvasToImage()
          });
      })
  },
  canvasToImage: function() {
      var that = this
      wx.canvasToTempFilePath({
          x: 0,
          y: 0,
          width: that.data.windowWidth,
          height: that.data.windowHeight,
          destWidth: that.data.windowWidth * 4,
          destHeight: that.data.windowHeight * 4,
          canvasId: 'myCanvas',
          success: function(res) {
              // wx.hideLoading()
              that.data.canvasImage = res.tempFilePath
              console.log('canvasImage' + res.tempFilePath)
              // wx.previewImage({
              //     current: res.tempFilePath, // 当前显示图片的http链接
              //     urls: [res.tempFilePath] // 需要预览的图片http链接列表
              // })
          },
          fail: function(err) {
              wx.hideLoading()
              console.log('失败')
              console.log(err)
          }
      }, this)
  },
  LineFeed: function (text) {
      let strLength = text.length
      let aLine = ''
      let bLIne = ''
      if (strLength < 12) {
          aLine = text.slice()
      } else if (12 < strLength < 24) {
          aLine = text.slice(0, 12)
          bLIne = text.slice(12)
      } else if (strLength == 24) {
          aLine = text.slice(0, 12)
          bLIne = text.slice(12, 24) + '...'
      }
      this.setData({
          lineA: aLine,
          lineB: bLIne
      })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
```