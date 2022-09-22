```js
import unicodeSubstring from 'unicode-substring';
import {sourcesBackground, sourcesBackgroundMin, } from './base64sources.js'

export function setParam(url, obj) {
    if (typeof obj !== 'object') {
      return url;
    }
  
    for (const key in obj) {
      let value = obj[key];
      if (value === false) {
        value = String(value);
      }
      if (value) {
        url = url.replace(
          new RegExp('(^|\\?|&)' + key + '=[^&]*(?=&|$|#)', 'g'),
          ''
        );
        value = value.splice ? value : [value];
        for (let i = value.length - 1; i >= 0; i--) {
          value[i] = encodeURIComponent(value[i]);
        }
        const p = key + '=' + value.join('&' + key + '=');
        url = url + (/\?/.test(url) ? '&' : '?') + p;
      }
    }
    return url;
  }

export function debounce(func, wait, immediate) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        }, wait);
        if (immediate && !timeout) func.apply(context, args);
    };
  }
  
  export function throttle(func, timeFrame) {
    var lastTime = 0;
    return function (...args) {
        var now = new Date();
        if (now - lastTime >= timeFrame) {
            func(...args);
            lastTime = now;
        }
    };
  }

function wrapText(context, text, x, y, maxWidth, lineHeight, rowLimit) {
    if(!text) {
        text = ''
    }    
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }      
    if (typeof maxWidth != 'number' || typeof lineHeight != 'number') {
        return;
    }               
    // 字符分隔为数组
    let arrText = text.split('');
    let line = '';
    let row = 1;
    for (let n = 0; n < arrText.length; n++) {
        let testLine = line + arrText[n];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            if(row == 3) {                
                for(let n = 0; n< line.length; n++) {
                    let $testLine = unicodeSubstring(line, 0, line.length -1 -n)+"...";
                    let $metrics = context.measureText($testLine);
                    let $testWidth = $metrics.width;
                    if($testWidth<= maxWidth) {
                        context.fillText($testLine, x, y);
                        return;
                    }
                }
            } else if (rowLimit && row && row==rowLimit) {
                for(let n = 0; n< line.length; n++) {
                    let $testLine = unicodeSubstring(line, 0, line.length -1 -n)+"...";
                    let $metrics = context.measureText($testLine);
                    let $testWidth = $metrics.width;
                    if($testWidth<= maxWidth) {
                        context.fillText($testLine, x, y);
                        return;
                    }
                }
            } else {
                context.fillText(line, x, y);
            }
            line = arrText[n];
            y += lineHeight;
            row ++;
        } else {           
            line = testLine;
        }
    }
    context.fillText(line, x, y);
}

function getWrapTextHeight(context, text, maxWidth, lineHeight, rowLimit) {
    if(!text) {
        text = ''
    }
    if (typeof text != 'string') {
        return;
    }      
    if (typeof maxWidth != 'number' || typeof lineHeight != 'number') {
        return;
    }          
    // 字符分隔为数组
    let arrText = text.split('');
    let line = '';
    let row = 1;
    for (let n = 0; n < arrText.length; n++) {
        if(row == 3) {
            break;
        }
        if(rowLimit && row == rowLimit) {
            break;
        }
    
        let testLine = line + arrText[n];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            line = arrText[n];
            row ++;
        } else {
            line = testLine;
        }
    }
    return row * lineHeight
};

function getSubstring(context, text, limit, width) {
   let maxWidth;
   if(width) {
       maxWidth = width
   } else {
     const maxText = '字'.repeat(limit)
     let maxMetrics = context.measureText(maxText);
     maxWidth = maxMetrics.width;
   }
   let metrics = context.measureText(text);
   let testWidth = metrics.width;
   if (testWidth <= maxWidth) {
        return text
    } else {
        for(let n = 0; n< text.length; n++) {
            let testText = unicodeSubstring(text, 0, text.length -1 -n)+"...";              
            let testWidth = context.measureText(testText).width;
            if(testWidth<= maxWidth) {            
                return testText;
            }
        }          
    }   
}

function drawButtonPath (ctx, x, y, width, height, radius) {
    ctx.beginPath();        
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();       
};

/**
 * @description: 计算canvas渐变起始坐标
 * @param {number} canvas width
 * @param {number} canvas height
 * @param {number} angle 角度
 * @return {*}
 */
function calculateGradientCoordinate(
  width,
  height,
  angle = 180,
) {
  if (angle >= 360) angle = angle - 360;
  if (angle < 0) angle = angle + 360;
  angle = Math.round(angle);

  // 当渐变轴垂直于矩形水平边上的两种结果
  if (angle === 0) {
    return {
      x0: Math.round(width / 2),
      y0: height,
      x1: Math.round(width / 2),
      y1: 0,
    };
  }
  if (angle === 180) {
    return {
      x0: Math.round(width / 2),
      y0: 0,
      x1: Math.round(width / 2),
      y1: height,
    };
  }

  // 当渐变轴垂直于矩形垂直边上的两种结果
  if (angle === 90) {
    return {
      x0: 0,
      y0: Math.round(height / 2),
      x1: width,
      y1: Math.round(height / 2),
    };
  }
  if (angle === 270) {
    return {
      x0: width,
      y0: Math.round(height / 2),
      x1: 0,
      y1: Math.round(height / 2),
    };
  }

  // 从矩形左下角至右上角的对角线的角度
  const alpha = Math.round(
    (Math.asin(width / Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))) *
      180) /
      Math.PI,
  );

  // 当渐变轴分别于矩形的两条对角线重合情况下的四种结果
  if (angle === alpha) {
    return {
      x0: 0,
      y0: height,
      x1: width,
      y1: 0,
    };
  }
  if (angle === 180 - alpha) {
    return {
      x0: 0,
      y0: 0,
      x1: width,
      y1: height,
    };
  }
  if (angle === 180 + alpha) {
    return {
      x0: width,
      y0: 0,
      x1: 0,
      y1: height,
    };
  }
  if (angle === 360 - alpha) {
    return {
      x0: width,
      y0: height,
      x1: 0,
      y1: 0,
    };
  }

  // 以矩形的中点为坐标原点，向上为Y轴正方向，向右为X轴正方向建立直角坐标系
  let x0 = 0,
    y0 = 0,
    x1 = 0,
    y1 = 0;

  // 当渐变轴与矩形的交点落在水平线上
  if (
    angle < alpha || // 处于第一象限
    (angle > 180 - alpha && angle < 180) || // 处于第二象限
    (angle > 180 && angle < 180 + alpha) || // 处于第三象限
    angle > 360 - alpha // 处于第四象限
  ) {
    // 将角度乘以（PI/180）即可转换为弧度
    const radian = (angle * Math.PI) / 180;
    // 当在第一或第四象限，y是height / 2，否则y是-height / 2
    const y = angle < alpha || angle > 360 - alpha ? height / 2 : -height / 2;
    const x = Math.tan(radian) * y;
    // 当在第一或第二象限，l是width / 2 - x，否则l是-width / 2 - x
    const l =
      angle < alpha || (angle > 180 - alpha && angle < 180)
        ? width / 2 - x
        : -width / 2 - x;
    const n = Math.pow(Math.sin(radian), 2) * l;
    x1 = x + n;
    y1 = y + n / Math.tan(radian);
    x0 = -x1;
    y0 = -y1;
  }

  // 当渐变轴与矩形的交点落在垂直线上
  if (
    (angle > alpha && angle < 90) || // 处于第一象限
    (angle > 90 && angle < 90 + alpha) || // 处于第二象限
    (angle > 180 + alpha && angle < 270) || // 处于第三象限
    (angle > 270 && angle < 360 - alpha) // 处于第四象限
  ) {
    // 将角度乘以（PI/180）即可转换为弧度
    const radian = ((90 - angle) * Math.PI) / 180;
    // 当在第一或第二象限，x是width / 2，否则x是-width / 2
    const x =
      (angle > alpha && angle < 90) || (angle > 90 && angle < 90 + alpha)
        ? width / 2
        : -width / 2;
    const y = Math.tan(radian) * x;
    // 当在第一或第四象限，l是height / 2 - y，否则l是-height / 2 - y
    const l =
      (angle > alpha && angle < 90) || (angle > 270 && angle < 360 - alpha)
        ? height / 2 - y
        : -height / 2 - y;
    const n = Math.pow(Math.sin(radian), 2) * l;
    x1 = x + n / Math.tan(radian);
    y1 = y + n;
    x0 = -x1;
    y0 = -y1;
  }

  // 坐标系更改为canvas标准，Y轴向下为正方向
  x0 = Math.round(x0 + width / 2);
  y0 = Math.round(height / 2 - y0);
  x1 = Math.round(x1 + width / 2);
  y1 = Math.round(height / 2 - y1);

  return { x0, y0, x1, y1 };
}

function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {

    if (arguments.length === 2) {
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }

    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,   // new prop. width
        nh = ih * r,   // new prop. height
        cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;                             
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
}

// 生成海报
export async function drawCanvas(baseData, callback) {
    // const query = wx.createSelectorQuery();
    let {materialTitle: mainText, materialDigest:subText, qrCode: qrBase64, userName, company, position, avatar, materialPic} = baseData;
    // console.log('baseData', baseData)
    // const mainText = '用户视角下的一类电商设计-1688基础链路专业升级力度设计雷达…!';
    // const subText = '好的界面设计并不始于图片氨基，而好的界面设计并不始于图片，而好的界面设计并不是真的事实在眼前而不始于图片的，设计的精髓在于提高自身…';      
    // const userName = '清晨的太阳';
    // const company = '东普信息设计韵达物流公司';
    // const position = '高级工程师';

    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const windowHeight = wx.getSystemInfoSync().windowHeight;
    const dpr = wx.getSystemInfoSync().pixelRatio;
    const query = wx.createSelectorQuery(); 
    const quoteSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA0CAYAAAAddL/hAAAAAXNSR0IArs4c6QAABP9JREFUeF7NW/fPHTUQnKX33nvvHVEE/z8gRCAkFCUiQFAgTWlKSEgogwbO4T4/+2yf9wXvL5/0bnc8Ht/Za3s/w4KRfBzAKwBsyW/ls/MAPjKz31bG7wgj+QyAFzywZv3lhHd24vp7jJ8VhuTTjoTidiXax2YmEbuNpIQT321YGOiLKfCkgCQfBPAmgDACXsTU3h+TeBrVbiP5GICXK4FCf0v9Cn4SbXGgNwQkeSOADwFcU0mq1e1zMzvWGpTyJ3kLgA8AXOWBF2FI5E/N7NQSdkrA1wHcPwXVjlgt/+/M7Pta55IfyXcA3Fnymz1v6c83ZnaohL1DQJK3A3i3FLTy+Ukz27UydiOM5D3TNOMFOcc5amZ7aoBjAd+ORrR2rghtxf4BX6vXJ2aWnIhriMY+JN8HoE94brn2N8KjH+Y6aIETV83VRbscSPJmAO8VI9Y5fG1mR9eFbkaRvAPAW154Ec5uMztZiz0X8DkAD9cGNvidMrPdDf5FV5Jade8rOrY7HDezr1rC/hGQpP5q5b26JbjCV5/ULjP7tcK3yoWksgOtvN7J/V/Tqts0zQQB9Um8WtWDNidNxvvbQpa9Sd67pQT/5zUZQhDwKQAPeXZ0wtLbd8ETl+TzACSip+nt+8zMLrWCBgE1Id+QCG7Jm+LwE2a2r5VQyZ+k0izvJF9fyoFS26nnNs0pSki9TYnoGU9QkhpkbTG9bc/aeVoCKnl+McMo5FXxhJ37PcBcNLMvvHtJ8m4Az8726KWFJJcXzn8/b2Z713KVgJr7HlkLkIn7pWYb1NrmdHDwQGtcwf8nMzuyFlMCPtExKefexG/N7NxaUrm46cxvvvctfQk1FPb2nElKQCXQt9a0VOnzJ4Avzay0DayE+8+NpKaam5oD8wGXej5fwUpAZfXXO5I6s3ZFK3EgqZMiz2RfmcLBUrtLzyWgjuw90wKlBId7SC18wm844yp5Pt6DKQG1A/E8kDxoZqd7SKVip+3ma864B3rn6iCgJy+d4FYdBS00eszMtDu4bCT16b7kSRTACQA72mnFD59wa9y2/bWKazGKBczlq9vmk8WXgN6j6tGZfRkBtQ8eyiTgcKMKYH9GQKVcQ5kEHG5UAejyKfUJ6/J8KAuJ9FCkAGh1TAm4rcvz1f2XgMONKoAfMgI+ubqnWwqUgMONKoAfMwJq3z6UScDhRhWAkvE4D1Syr2KnoSycxgxFCoCOmFICqg5mKJOAw5ECcCgjoPe5ZfdgSMBHu1H8AbTJT72B27i37mIvAUWq5/KohUCunfj3wxkBVXbXY7XtV7cRjvSrA66Q45GMgN7H+d3dkYBLpNa+ma2XPXFHUqcxWoVryzl62w98iv2XgKEWsHs0HAFUo5KaA70v1LspS8D5qObuMWpHtORXIhza11F7SkDVBKbM43JJuM39l4A5UqXObvO5BNzRmelEWvfCQ5kEHI4UAFWzpgS8ayj1plu5lhrjK8X/dEZAVZENZXoDhyMFQFejqTdQZShDmQS8bShG/5I5mxHQswDApdsScDhSAM5lBIyLyl1E6AGRgCouH81UMZX6hD3LOlz6LAGHIwXgQkZA/RfVUCYBU5Wp/zdJ1Rem3kDPGh6XPkrA4UgBUNVUSsDrXHrtCCIBr3XEc4Eys43/yxXwkFynGmmXjnuB5P7NakiuJD0rs1w0jA8SAuiQXKdNukvHvUBy1a0jcv0bgoH4myEG2UoAAAAASUVORK5CYII=';
    const arrowSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAAAXNSR0IArs4c6QAAA5dJREFUWEfdmM1vVGUUxn8PoGLEr4Au1AVudMNGgy7YQgIaceFGNhA3/AfsxEQl0Q2SAAswgYQQSgJh4wJUQI2BBZDgwpaE2NS0YGz9QANiLF8e87TvJW8vM3fmzp0mlTeZ3HamfeY85+M55z2KCAFICj+bnoh4Frgq6XpTLP9/RLwCXJL0Sz/wpshGxAOJ9K2moBExH1gJ2MAhSXeaYCbbPgQGgSOSbjbBKwj7+TAwD7ghqRHxiHgEeBMw2bOSxpoYGRFPA9ttG7Bb0ple8aYIpyg7MouABcC/wLUm0YmI54DVgLPnJ+CUpKu9GhoRy4EtwIPAOWCnpJ/r4t0lnEgvBBwdk/br71SPPdV3RLwMvJqw/BXf2VhJt+samuxbD7yTBWUA2F8nzWcQTqCPpfQuSPvtK72IUBLE14Hnk5GOtsXspKThuqQT3kfAigxvAvhE0rfd4LUi7PcWAw9loCb/DzBex5vJgcZZBzyZ0rtw5AjwhaQ/ujE0K71HgT2AS8YOLPBOAx9LulyFdw/hTLUtFAbLQV3nvwETklznXZ2IeCqRdskUBvrpY0O/qZPmEfEC8Gmp/IxnkbQzLGwWuHtOS8KJtGvZhuYGFg4w8Gid6ETEMmBNyYGFMy1mn0ka6sqD0610LfBeG/ssZu9LOlHGa0s4kV4CPJGB5tE2eRs6LMnp3vFEhAm/VIF3ETgs6feOYNOkNwNvVeB9DbwrabTA60TYn7tWcuUuk3aau8+OdErzNJRsSJhF5pTxbNuXwLFO80BEuEXtA5w97fCcjTuAbZImKwln9bw0iVjZuPx3T0AXJI1XRSciHgc2AhafKrw/gQOS3Mranoh4BjiUhLYKz2K2aa4THpB0vgbhssjmDvDwU0049b08pcse9Bc0SelWEfGQcxw42kNKt8LzkNNdSkdEWbTKHrx/RCtdAEw491rxs4VgTNKVbtQ0aYGF5bVSG2nSlnw5sUrnbbPAc1v6QJIzZcapGjzcg62COWCvg4eHmLdbCF+vg8eLHi7aDB57gV1dDx6pbovRMo9uv0fLH4HP6wwvKVP6O1pGxGxeHoob2FeSfui2HIq/a3F5MN6vwNaeLg8RMZvXQ5ePW0w/r4cH0/Ww5dxcOUunKahYAFiU/mq4APBuq5id59YCIKWKVzwWpclO/a9TKkaEHfdG2pzMvRXPLCzxVqUl3mCTLMlGW692vu/LEu9/sKb1isg9vy9r2v8ApnmlueEzL1MAAAAASUVORK5CYII='
    // const canvas = wx.createOffscreenCanvas({type: '2d', width: windowWidth, height: windowHeight})
    // canvas.width = windowWidth * dpr
    // canvas.height = windowHeight * dpr

    query.select('#theCanvas')
      .fields({ node: true, size: true })
      .exec(async (res) => {
        const canvas = res[0].node;
        canvas.width = windowWidth * dpr     
        canvas.height = windowHeight * dpr           
        const ctx = canvas.getContext('2d')

        // canvas.width = res[0].width * dpr
        // canvas.height = res[0].height * dpr

        ctx.scale(dpr, dpr)
   
        ctx.font = "15px 'Segoe UI'";                  
        const subTextHeight = getWrapTextHeight(ctx, subText,windowWidth - 20*2, 22)    

        // 主标题          
        let fontSize = 32;
        // ctx.font = 'bold ' + fontSize + "px 'Heiti SC' 'Segoe UI'";   
        ctx.font = `normal bold ${fontSize}px 'Heiti SC','Droidsansfallback','Segoe UI'`

        // ctx.       
        const mainTextHeight = getWrapTextHeight(ctx, mainText,windowWidth - 20*2, 44)     
        const rectHeight = 24+ mainTextHeight + 16 + 4 + 16 + subTextHeight + 16;       
        // ctx.fillStyle = "#1F5AE4";                   
        // 背景图
        const setDefaultCover = () => {
            const { x0:rect_x0, y0:rect_y0, x1: rect_x1, y1: rect_y1 } = calculateGradientCoordinate(windowWidth, rectHeight, 127)
            const rectGi = ctx.createLinearGradient(rect_x0, rect_y0, rect_x1, rect_y1);
            rectGi.addColorStop(0, '#3C76FF')        
            rectGi.addColorStop(1, '#1F5AE4')                
            ctx.fillStyle = rectGi            
            ctx.fillRect(0, 0, windowWidth, rectHeight)
        }
        if(materialPic) {
               const materialImage = canvas.createImage(); 
               try {
                await new Promise((resolve, reject) => {
                    materialImage.onload = resolve
                    materialImage.onerror = reject
                    materialImage.src = materialPic // 要加载的图片 url                   
                 })  
                 ctx.fillStyle = '#ffffff'            
                 ctx.fillRect(0, 0, windowWidth, rectHeight)   
                 drawImageProp(ctx,materialImage, 0, 0 , windowWidth, rectHeight);  
                 const { x0:rect_x0, y0:rect_y0, x1: rect_x1, y1: rect_y1 } = calculateGradientCoordinate(windowWidth, rectHeight, 180)
                 const rectGi = ctx.createLinearGradient(rect_x0, rect_y0, rect_x1, rect_y1);
                 rectGi.addColorStop(0, 'rgba(0,0,0,0.1)')        
                 rectGi.addColorStop(1, 'rgba(0,0,0,0.8)')                    
                 ctx.fillStyle = rectGi            
                 ctx.fillRect(0, 0, windowWidth, rectHeight)                                       
               } catch (error) {
                setDefaultCover()
                console.error('error', error)
               }           
        } else {
            setDefaultCover()
        }
        // 符号
        let quoteImage = canvas.createImage();
        // 等待图片加载
        await new Promise(resolve => {
            quoteImage.onload = resolve
            quoteImage.src = quoteSrc // 要加载的图片 url
        })        
        ctx.drawImage(quoteImage, 20, 10, 40, 26)                 
        ctx.fillStyle = "#ffffff";
        let currentHeight = 24;          
        wrapText(ctx, mainText, 20, currentHeight+ fontSize, windowWidth - 20*2, 44)
        currentHeight += mainTextHeight + 16;          
        //  画线
        ctx.beginPath();
        ctx.moveTo(20, currentHeight);
        ctx.lineTo(20 + 64, currentHeight);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        currentHeight += 4 + 16;
        // 副标题
        fontSize = 15;
        ctx.font = fontSize + "px 'Segoe UI'";    
        // ctx.fillStyle = "#1F5AE4";          
        // ctx.fillRect(0, currentHeight, windowWidth, subTextHeight+ 16)  
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";                  
        wrapText(ctx, subText, 20, currentHeight + fontSize,  windowWidth - 20*2, 22)
        currentHeight += subTextHeight+ 16;
        // 白色背景
        ctx.fillStyle = "#ffffff";         
        ctx.fillRect(0, currentHeight, windowWidth, 100);
        const canvasHeight = currentHeight + 100;
        currentHeight += 16;

        // 头像
        let avatarImage = canvas.createImage();
        // 等待图片加载
        try {
            await new Promise((resolve, reject) => {
                avatarImage.onload = resolve
                avatarImage.onerror = reject
                avatarImage.src = avatar // 要加载的图片 url                
            })            
            const circle = {
                x: 20+ 36 / 2,
                y: currentHeight + 36 / 2,
                r: 36 / 2
            }                    
            ctx.save();
            ctx.beginPath();
            ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
            ctx.clip(); //剪切路径  
            ctx.drawImage(avatarImage, 20, currentHeight, 36, 36)   
            ctx.restore()               
        } catch (error) {
            console.log('error', error)   
        }             
        // 二维码
        let qrcodeImage = canvas.createImage();
        // 等待图片加载
        try {
            await new Promise((resolve, reject) => {
                qrcodeImage.onload = resolve
                qrcodeImage.onerror = reject
                qrcodeImage.src = qrBase64 // 要加载的图片 url
            })        
            ctx.drawImage(qrcodeImage, windowWidth - 20 - 68, currentHeight, 68, 68)            
        } catch (error) {
            console.log('error',error)
        }
        let currentX = 20 + 36 + 12;
        // 用户名
        fontSize = 14;
        ctx.font = fontSize + "px 'Segoe UI'";            
        ctx.fillStyle = "#222222";     
        userName = getSubstring(ctx, userName, 7);   
        ctx.fillText(userName, currentX, currentHeight+ fontSize);
        let usernameMetrics = ctx.measureText(userName);
        let usernameWidth = usernameMetrics.width;
        // 公司
        fontSize = 12;
        ctx.font = fontSize + "px 'Segoe UI'";            
        ctx.fillStyle = "#999999";   
        company = getSubstring(ctx, company, undefined, windowWidth-20*2-36-68-12*2);
        ctx.fillText(company, currentX, currentHeight+ fontSize + 16 + 8);       
        // 职位
        if(position) {
            fontSize = 10;
            ctx.font = fontSize + "px 'Segoe UI'";  
            ctx.fillStyle = "#3C76FF";  
            position = getSubstring(ctx, position, 6)   
            ctx.fillText(position, currentX + usernameWidth+ 8 + 8, currentHeight+ fontSize +2);
            ctx.strokeStyle = "#3C76FF";    
            ctx.lineWidth = 0.5;  
            let positionMetrics = ctx.measureText(position);
            let positionWidth = positionMetrics.width;
            drawButtonPath(ctx, currentX + usernameWidth + 8, currentHeight, positionWidth+16+2, 16, 9)
        }
        // console.log('currentHeight', currentHeight)

        currentHeight += 36+8;
        const buttonWidth = 194;         
        const { x0, y0, x1, y1 } = calculateGradientCoordinate(buttonWidth, 24, 130)
        const gi = ctx.createLinearGradient(48+x0, currentHeight+y0, 48+x1, currentHeight+y1)
        gi.addColorStop(0, '#4C9BFF')        
        gi.addColorStop(1, '#2867FF')                
        ctx.fillStyle = gi  
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#ffffff";         
        drawButtonPath(ctx, 20+ 28, currentHeight, buttonWidth, 24, 14)              
        ctx.fill();           
        fontSize = 12;
        ctx.font = fontSize + "px 'Segoe UI'";  
        ctx.fillStyle = "#ffffff";   
        ctx.fillText('长按识别二维码查看全文',  20+ 28+12, currentHeight+ fontSize +4); 

        // 箭头
        let arrowImage = canvas.createImage();
        // 等待图片加载
        await new Promise(resolve => {
            arrowImage.onload = resolve
            arrowImage.src = arrowSrc // 要加载的图片 url
        })        
        ctx.drawImage(arrowImage,  20+ 28 + buttonWidth - 30 -12 , currentHeight+6, 30, 12)

        // console.log('canvas', canvas);   
        
        wx.canvasToTempFilePath({
            // canvasId: "canvas",
            // x: 0,
            // y: 0,
            // width: 300,
            // height: 300,
            // destWidth: 300,
            height: canvasHeight,                 
            canvas: canvas,
            success(res) {
                console.log("二维码临时路径为：", res.tempFilePath);
                wx.hideLoading()                
                wx.showShareImageMenu({
                    path: res.tempFilePath,
                    success: (res) => {
                        console.log("success", res);
                    },
                    fail: (res) => {
                        console.log("fail", res);
                    },
                    complete:()=> {
                        callback && callback()
                    }
                });
            },
            fail(res) {
                console.error(res);
            },
        });        
      })    
}

// 生成海报
export async function drawCanvasImage(baseData, callback) {
    // const query = wx.createSelectorQuery();
    let {materialTitle: mainText, materialDigest:subText, qrCode: qrBase64, userName, company, position, avatar, materialPic, canvasId} = baseData;
    // console.log('baseData', baseData)
    // const mainText = '用户视角下的一类电商设计-1688基础链路专业升级力度设计雷达…!';
    // const subText = '好的界面设计并不始于图片氨基，而好的界面设计并不始于图片，而好的界面设计并不是真的事实在眼前而不始于图片的，设计的精髓在于提高自身…';      
    // const userName = '清晨的太阳';
    // const company = '东普信息设计韵达物流公司';
    // const position = '高级工程师';
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const windowHeight = wx.getSystemInfoSync().windowHeight;
    const dpr = wx.getSystemInfoSync().pixelRatio;
    const query = wx.createSelectorQuery(); 
    const quoteSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA0CAYAAAAddL/hAAAAAXNSR0IArs4c6QAABP9JREFUeF7NW/fPHTUQnKX33nvvHVEE/z8gRCAkFCUiQFAgTWlKSEgogwbO4T4/+2yf9wXvL5/0bnc8Ht/Za3s/w4KRfBzAKwBsyW/ls/MAPjKz31bG7wgj+QyAFzywZv3lhHd24vp7jJ8VhuTTjoTidiXax2YmEbuNpIQT321YGOiLKfCkgCQfBPAmgDACXsTU3h+TeBrVbiP5GICXK4FCf0v9Cn4SbXGgNwQkeSOADwFcU0mq1e1zMzvWGpTyJ3kLgA8AXOWBF2FI5E/N7NQSdkrA1wHcPwXVjlgt/+/M7Pta55IfyXcA3Fnymz1v6c83ZnaohL1DQJK3A3i3FLTy+Ukz27UydiOM5D3TNOMFOcc5amZ7aoBjAd+ORrR2rghtxf4BX6vXJ2aWnIhriMY+JN8HoE94brn2N8KjH+Y6aIETV83VRbscSPJmAO8VI9Y5fG1mR9eFbkaRvAPAW154Ec5uMztZiz0X8DkAD9cGNvidMrPdDf5FV5Jade8rOrY7HDezr1rC/hGQpP5q5b26JbjCV5/ULjP7tcK3yoWksgOtvN7J/V/Tqts0zQQB9Um8WtWDNidNxvvbQpa9Sd67pQT/5zUZQhDwKQAPeXZ0wtLbd8ETl+TzACSip+nt+8zMLrWCBgE1Id+QCG7Jm+LwE2a2r5VQyZ+k0izvJF9fyoFS26nnNs0pSki9TYnoGU9QkhpkbTG9bc/aeVoCKnl+McMo5FXxhJ37PcBcNLMvvHtJ8m4Az8726KWFJJcXzn8/b2Z713KVgJr7HlkLkIn7pWYb1NrmdHDwQGtcwf8nMzuyFlMCPtExKefexG/N7NxaUrm46cxvvvctfQk1FPb2nElKQCXQt9a0VOnzJ4Avzay0DayE+8+NpKaam5oD8wGXej5fwUpAZfXXO5I6s3ZFK3EgqZMiz2RfmcLBUrtLzyWgjuw90wKlBId7SC18wm844yp5Pt6DKQG1A/E8kDxoZqd7SKVip+3ma864B3rn6iCgJy+d4FYdBS00eszMtDu4bCT16b7kSRTACQA72mnFD59wa9y2/bWKazGKBczlq9vmk8WXgN6j6tGZfRkBtQ8eyiTgcKMKYH9GQKVcQ5kEHG5UAejyKfUJ6/J8KAuJ9FCkAGh1TAm4rcvz1f2XgMONKoAfMgI+ubqnWwqUgMONKoAfMwJq3z6UScDhRhWAkvE4D1Syr2KnoSycxgxFCoCOmFICqg5mKJOAw5ECcCgjoPe5ZfdgSMBHu1H8AbTJT72B27i37mIvAUWq5/KohUCunfj3wxkBVXbXY7XtV7cRjvSrA66Q45GMgN7H+d3dkYBLpNa+ma2XPXFHUqcxWoVryzl62w98iv2XgKEWsHs0HAFUo5KaA70v1LspS8D5qObuMWpHtORXIhza11F7SkDVBKbM43JJuM39l4A5UqXObvO5BNzRmelEWvfCQ5kEHI4UAFWzpgS8ayj1plu5lhrjK8X/dEZAVZENZXoDhyMFQFejqTdQZShDmQS8bShG/5I5mxHQswDApdsScDhSAM5lBIyLyl1E6AGRgCouH81UMZX6hD3LOlz6LAGHIwXgQkZA/RfVUCYBU5Wp/zdJ1Rem3kDPGh6XPkrA4UgBUNVUSsDrXHrtCCIBr3XEc4Eys43/yxXwkFynGmmXjnuB5P7NakiuJD0rs1w0jA8SAuiQXKdNukvHvUBy1a0jcv0bgoH4myEG2UoAAAAASUVORK5CYII=';
    const arrowSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAYCAYAAACmwZ5SAAAAAXNSR0IArs4c6QAAA5dJREFUWEfdmM1vVGUUxn8PoGLEr4Au1AVudMNGgy7YQgIaceFGNhA3/AfsxEQl0Q2SAAswgYQQSgJh4wJUQI2BBZDgwpaE2NS0YGz9QANiLF8e87TvJW8vM3fmzp0mlTeZ3HamfeY85+M55z2KCAFICj+bnoh4Frgq6XpTLP9/RLwCXJL0Sz/wpshGxAOJ9K2moBExH1gJ2MAhSXeaYCbbPgQGgSOSbjbBKwj7+TAwD7ghqRHxiHgEeBMw2bOSxpoYGRFPA9ttG7Bb0ple8aYIpyg7MouABcC/wLUm0YmI54DVgLPnJ+CUpKu9GhoRy4EtwIPAOWCnpJ/r4t0lnEgvBBwdk/br71SPPdV3RLwMvJqw/BXf2VhJt+samuxbD7yTBWUA2F8nzWcQTqCPpfQuSPvtK72IUBLE14Hnk5GOtsXspKThuqQT3kfAigxvAvhE0rfd4LUi7PcWAw9loCb/DzBex5vJgcZZBzyZ0rtw5AjwhaQ/ujE0K71HgT2AS8YOLPBOAx9LulyFdw/hTLUtFAbLQV3nvwETklznXZ2IeCqRdskUBvrpY0O/qZPmEfEC8Gmp/IxnkbQzLGwWuHtOS8KJtGvZhuYGFg4w8Gid6ETEMmBNyYGFMy1mn0ka6sqD0610LfBeG/ssZu9LOlHGa0s4kV4CPJGB5tE2eRs6LMnp3vFEhAm/VIF3ETgs6feOYNOkNwNvVeB9DbwrabTA60TYn7tWcuUuk3aau8+OdErzNJRsSJhF5pTxbNuXwLFO80BEuEXtA5w97fCcjTuAbZImKwln9bw0iVjZuPx3T0AXJI1XRSciHgc2AhafKrw/gQOS3Mranoh4BjiUhLYKz2K2aa4THpB0vgbhssjmDvDwU0049b08pcse9Bc0SelWEfGQcxw42kNKt8LzkNNdSkdEWbTKHrx/RCtdAEw491rxs4VgTNKVbtQ0aYGF5bVSG2nSlnw5sUrnbbPAc1v6QJIzZcapGjzcg62COWCvg4eHmLdbCF+vg8eLHi7aDB57gV1dDx6pbovRMo9uv0fLH4HP6wwvKVP6O1pGxGxeHoob2FeSfui2HIq/a3F5MN6vwNaeLg8RMZvXQ5ePW0w/r4cH0/Ww5dxcOUunKahYAFiU/mq4APBuq5id59YCIKWKVzwWpclO/a9TKkaEHfdG2pzMvRXPLCzxVqUl3mCTLMlGW692vu/LEu9/sKb1isg9vy9r2v8ApnmlueEzL1MAAAAASUVORK5CYII='

    if (canvasId && canvasId == 'canvas-2') {
        // 分享模板2
        query.select(`#${canvasId}`)
        .fields({ node: true, size: true })
        .exec(async (res) => {
          const canvas = res[0].node;
          canvas.width = windowWidth * dpr     
          canvas.height = windowHeight * dpr           
          const ctx = canvas.getContext('2d')
          ctx.scale(dpr, dpr)
  
            // 简述文本             

            ctx.font = "14px 'Segoe UI'";

            const subTextHeight = getWrapTextHeight(ctx, subText, windowWidth - 40*2, 22)    



            // 主标题文本         

            let fontSize = 20;

            ctx.font = `normal bold ${fontSize}px 'Heiti SC','Droidsansfallback','Segoe UI'` 

            const mainTextHeight = getWrapTextHeight(ctx, mainText, windowWidth - 40 * 2, 30, 2)



            // 内容占用高度 

            // 包含图片高度 materialPic 166px

            const materialPicheight = 166

            const materialPicheightAdd = materialPic ? materialPicheight : 0

            const rectHeight = 44 + 44 + 20 + 12*2 + materialPicheightAdd+ mainTextHeight + subTextHeight + 104+ 24;

            console.log(materialPic, 'materialPic')

            console.log(rectHeight, 'rectHeight')


            // 背景图加载失败用背景色

            const setDefaultCover = () => {

                const { x0:rect_x0, y0:rect_y0, x1: rect_x1, y1: rect_y1 } = calculateGradientCoordinate(windowWidth, rectHeight, 127)

                const rectGi = ctx.createLinearGradient(rect_x0, rect_y0, rect_x1, rect_y1);

                rectGi.addColorStop(0, '#3C76FF')        

                rectGi.addColorStop(1, '#1F5AE4')                

                ctx.fillStyle = rectGi            

                ctx.fillRect(0, 0, windowWidth, rectHeight)

            }

            // 背景图

            const BackgroundImage = canvas.createImage(); 

            try {

            await new Promise((resolve, reject) => {

                BackgroundImage.onload = resolve

                BackgroundImage.onerror = reject

                BackgroundImage.src = materialPic ? sourcesBackground : sourcesBackgroundMin // 要加载的图片 背景url                   

                })  

                ctx.fillStyle = '#ffffff'            

                ctx.fillRect(0, 0, windowWidth, rectHeight)   

                ctx.drawImage(BackgroundImage, 0, 0 , windowWidth, rectHeight);                                       

            } catch (error) {

            setDefaultCover()

            console.error('error-BackgroundImage', error)

            }   



            // // 背景白

            // ctx.fillStyle = '#ffffff'            

            // ctx.fillRect(20, 24, windowWidth-40, rectHeight-48) 

            // // 背景白的蓝边框

            // ctx.strokeStyle = "rgba(98, 145, 255, 0.8)";    

            // ctx.lineWidth = 6;

            // ctx.strokeRect(20, 24, windowWidth-40, rectHeight-48)



            // 头像

            let currentY = 44;

            let currentX = 36;

            let avatarSize= 44

            let avatarImage = canvas.createImage();

            // 等待图片加载

            try {

                await new Promise((resolve, reject) => {

                    avatarImage.onload = resolve

                    avatarImage.onerror = reject

                    avatarImage.src = avatar // 要加载的图片 url                

                })            

                const circle = {

                    x: currentX + avatarSize / 2,

                    y: currentY + avatarSize / 2,

                    r: avatarSize / 2

                }                    

                ctx.save();

                ctx.beginPath();

                ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);

                ctx.clip(); //剪切路径  

                ctx.drawImage(avatarImage, currentX, currentY, avatarSize, avatarSize)   

                ctx.restore()               

            } catch (error) {

                console.log('error', error)   

            }     



            // 用户名

            fontSize = 16;

            ctx.font = fontSize + "px 'Segoe UI'";            

            ctx.fillStyle = "#222222";     

            userName = getSubstring(ctx, userName, 7);   

            currentX = currentX + 44 + 12

            ctx.fillText(userName, currentX, currentY + fontSize + 2);

            let usernameMetrics = ctx.measureText(userName);

            let usernameWidth = usernameMetrics.width;



            // 公司

            fontSize = 12;

            ctx.font = fontSize + "px 'Segoe UI'";        

            ctx.fillStyle = "#999999";   

            company = getSubstring(ctx, company, undefined, windowWidth-92-20);

            ctx.fillText(company, currentX, currentY + fontSize + 16 +8);



            // 职位

            if(position) {

                fontSize = 10;

                ctx.font = fontSize + "px 'Segoe UI'";  

                ctx.fillStyle = "#3C76FF";  

                position = getSubstring(ctx, position, 6)   

                ctx.fillText(position, currentX + usernameWidth+ 8 + 8+1, currentY + fontSize + 5 + 2 +0.5);

                ctx.strokeStyle = "#3C76FF";    

                ctx.lineWidth = 0.5;  

                let positionMetrics = ctx.measureText(position);

                let positionWidth = positionMetrics.width;

                drawButtonPath(ctx, currentX + usernameWidth + 8, currentY + 6, positionWidth+16+2, 16, 9)

            }



            // 主标题文本

            currentY = 110         

            fontSize = 20;

            ctx.font = `normal bold ${fontSize}px 'Heiti SC','Droidsansfallback','Segoe UI'` 

            ctx.fillStyle = "#222222";  
  
            wrapText(ctx, mainText, 40, currentY + fontSize,  windowWidth - 40*2, 30, 2)


            currentY += mainTextHeight;

            if(materialPic) {

            currentY += 12;

                const materialPicImage = canvas.createImage(); 

                try {

                await new Promise((resolve, reject) => {

                    materialPicImage.onload = resolve

                    materialPicImage.onerror = reject

                    materialPicImage.src = materialPic          

                })



                ctx.drawImage(materialPicImage, 40, currentY, windowWidth-40*2, materialPicheight);                                       

                } catch (error) {

                console.error('error', error)

                }           

            }



            //  副标题

            currentY += materialPicheightAdd + 12;



            fontSize = 14;

            ctx.font = fontSize + "px 'Segoe UI'";    

            ctx.fillStyle = "#666666";          

            wrapText(ctx, subText, 40, currentY + fontSize,  windowWidth - 40*2, 22)



            currentY += subTextHeight + (materialPic ? 2 : 17);

            // // 二维码背景图

            // let sourceQrbgImage = canvas.createImage();

            // try {

            //     await new Promise((resolve, reject) => {

            //         sourceQrbgImage.onload = resolve

            //         sourceQrbgImage.onerror = reject

            //         sourceQrbgImage.src = sourceQrbg // 要加载的图片 背景url                   

            //         })  

            //         ctx.drawImage(sourceQrbgImage, 26, currentY, windowWidth-20*2-12, 104-6);                                       

            //     } catch (error) { 

            //         console.error('error', error)

            //     }  

            // // 虚线
            // const drawDashLine = ([x1, y1], [x2, y2], step = 5) => {

            //     const x = x2 - x1,

            //         y = y2 - y1,

            //         count = Math.floor(Math.sqrt(x * x + y * y) / step),

            //         xv = x / count,

            //         yv = y / count;

            //     ctx.beginPath();

            //     for (let i = 0; i < count; i ++) {

            //         if (i % 2 === 0) {

            //             ctx.moveTo(x1, y1);

            //         } else {

            //             ctx.lineTo(x1, y1);

            //         }

            //     x1 += xv;

            //     y1 += yv;

            //     }

            //     ctx.lineTo(x2, y2);

            // }



            // const drawDashRect = (left, top, width, height, step = 2) => {

            //     drawDashLine([left, top], [left + width, top], step);

            //     ctx.stroke();

            //     drawDashLine([left + width, top], [left + width, top + height], step);

            //     ctx.stroke();

            //     drawDashLine([left + width, top + height], [left, top + height], step);

            //     ctx.stroke();

            //     drawDashLine([left, top + height], [left, top], step);

            //     ctx.stroke();

            // }



            // drawDashRect(24, currentY, windowWidth-20*2-8, 104-8)



            currentY += 20

            // 二维码

            let qrcodeImage = canvas.createImage();

            // 等待图片加载

            try {

                await new Promise((resolve, reject) => {

                    qrcodeImage.onload = resolve

                    qrcodeImage.onerror = reject

                    qrcodeImage.src = qrBase64 // 要加载的图片 url

                })        

                ctx.drawImage(qrcodeImage, 40, currentY, 64, 64)            

            } catch (error) {

                console.log('error',error)

            }



            // 长按识别二维码

            fontSize = 16;

            // ctx.font = fontSize + "px 'Segoe UI'";  
            ctx.font = `normal bold ${fontSize}px,'Segoe UI'` 

            ctx.fillStyle = "#222222";   

            ctx.fillText('长按识别二维码',  40+ 64+16, currentY+ fontSize + 10); 


            // 阅读全文

            fontSize = 14;

            ctx.font = fontSize + "px 'Segoe UI'";  

            ctx.fillStyle = "#666666";   

            ctx.fillText('阅读全文', 40+ 64+16, currentY+ fontSize + 20 + 16); 



            const canvasHeight = rectHeight

            // 加宏任务解决两个canvans 生成图片问题
            setTimeout(() => {
                wx.canvasToTempFilePath({
    
                    // canvasId: "canvas",
    
                    // x: 0,
    
                    // y: 0,
    
                    // width: 300,
    
                    // height: 300,
    
                    // destWidth: 300,
    
                    height: canvasHeight,                 
    
                    canvas: canvas,
    
                    success(res) {
    
                        console.log("二维码临时路径为：", res.tempFilePath);
                        callback && callback({url:res.tempFilePath,height:canvasHeight,width:windowWidth,dpr:dpr})            
    
                    },
    
                    fail(res) {
    
                        console.error(res);
    
                    },
    
                });        
            },10)
        })    
    } else {
        // 分享模板1
        query.select(`#${canvasId}`)
        .fields({ node: true, size: true })
        .exec(async (res) => {
          const canvas = res[0].node;
          canvas.width = windowWidth * dpr     
          canvas.height = windowHeight * dpr           
          const ctx = canvas.getContext('2d')
  
          // canvas.width = res[0].width * dpr
          // canvas.height = res[0].height * dpr
  
          ctx.scale(dpr, dpr)
     
          ctx.font = "15px 'Segoe UI'";                  
          const subTextHeight = getWrapTextHeight(ctx, subText,windowWidth - 20*2, 22)    
  
          // 主标题          
          let fontSize = 32;
          // ctx.font = 'bold ' + fontSize + "px 'Heiti SC' 'Segoe UI'";   
          ctx.font = `normal bold ${fontSize}px 'Heiti SC','Droidsansfallback','Segoe UI'`
  
          // ctx.       
          const mainTextHeight = getWrapTextHeight(ctx, mainText,windowWidth - 20*2, 44)     
          const rectHeight = 24+ mainTextHeight + 16 + 4 + 16 + subTextHeight + 16;       

        // 白色背景
        ctx.fillStyle = "#ffffff";         
        ctx.fillRect(0, 0, currentHeight, rectHeight);
          // ctx.fillStyle = "#1F5AE4";                   
          // 背景图
          const setDefaultCover = () => {
              const { x0:rect_x0, y0:rect_y0, x1: rect_x1, y1: rect_y1 } = calculateGradientCoordinate(windowWidth, rectHeight, 127)
              const rectGi = ctx.createLinearGradient(rect_x0, rect_y0, rect_x1, rect_y1);
              rectGi.addColorStop(0, '#3C76FF')        
              rectGi.addColorStop(1, '#1F5AE4')                
              ctx.fillStyle = rectGi            
              ctx.fillRect(0, 0, windowWidth, rectHeight)
          }
          if(materialPic) {
                 const materialImage = canvas.createImage(); 
                 try {
                  await new Promise((resolve, reject) => {
                      materialImage.onload = resolve
                      materialImage.onerror = reject
                      materialImage.src = materialPic // 要加载的图片 url                   
                   })  
                   ctx.fillStyle = '#ffffff'            
                   ctx.fillRect(0, 0, windowWidth, rectHeight)   
                   drawImageProp(ctx,materialImage, 0, 0 , windowWidth, rectHeight);  
                   const { x0:rect_x0, y0:rect_y0, x1: rect_x1, y1: rect_y1 } = calculateGradientCoordinate(windowWidth, rectHeight, 180)
                   const rectGi = ctx.createLinearGradient(rect_x0, rect_y0, rect_x1, rect_y1);
                   rectGi.addColorStop(0, 'rgba(0,0,0,0.1)')        
                   rectGi.addColorStop(1, 'rgba(0,0,0,0.8)')                    
                   ctx.fillStyle = rectGi            
                   ctx.fillRect(0, 0, windowWidth, rectHeight)                                       
                 } catch (error) {
                  setDefaultCover()
                  console.error('error', error)
                 }           
          } else {
              setDefaultCover()
          }
          // 符号
          let quoteImage = canvas.createImage();
          // 等待图片加载
          await new Promise(resolve => {
              quoteImage.onload = resolve
              quoteImage.src = quoteSrc // 要加载的图片 url
          })        
          ctx.drawImage(quoteImage, 20, 10, 40, 26)                 
          ctx.fillStyle = "#ffffff";
          let currentHeight = 24;          
          wrapText(ctx, mainText, 20, currentHeight+ fontSize, windowWidth - 20*2, 44)
          currentHeight += mainTextHeight + 16;          
          //  画线
          ctx.beginPath();
          ctx.moveTo(20, currentHeight);
          ctx.lineTo(20 + 64, currentHeight);
          ctx.lineWidth = 4;
          ctx.strokeStyle = "#ffffff";
          ctx.stroke();
          currentHeight += 4 + 16;
          // 副标题
          fontSize = 15;
          ctx.font = fontSize + "px 'Segoe UI'";    
          // ctx.fillStyle = "#1F5AE4";          
          // ctx.fillRect(0, currentHeight, windowWidth, subTextHeight+ 16)  
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)";                  
          wrapText(ctx, subText, 20, currentHeight + fontSize,  windowWidth - 20*2, 22)
          currentHeight += subTextHeight+ 16;
          // 白色背景
          ctx.fillStyle = "#ffffff";         
          ctx.fillRect(0, currentHeight, windowWidth, 100);
          const canvasHeight = currentHeight + 100;
          currentHeight += 16;
  
          // 头像
          let avatarImage = canvas.createImage();
          // 等待图片加载
          try {
              await new Promise((resolve, reject) => {
                  avatarImage.onload = resolve
                  avatarImage.onerror = reject
                  avatarImage.src = avatar // 要加载的图片 url                
              })            
              const circle = {
                  x: 20+ 36 / 2,
                  y: currentHeight + 36 / 2,
                  r: 36 / 2
              }                    
              ctx.save();
              ctx.beginPath();
              ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, false);
              ctx.clip(); //剪切路径  
              ctx.drawImage(avatarImage, 20, currentHeight, 36, 36)   
              ctx.restore()               
          } catch (error) {
              console.log('error', error)   
          }             
          // 二维码
          let qrcodeImage = canvas.createImage();
          // 等待图片加载
          try {
              await new Promise((resolve, reject) => {
                  qrcodeImage.onload = resolve
                  qrcodeImage.onerror = reject
                  qrcodeImage.src = qrBase64 // 要加载的图片 url
              })        
              ctx.drawImage(qrcodeImage, windowWidth - 20 - 68, currentHeight, 68, 68)            
          } catch (error) {
              console.log('error',error)
          }
          let currentX = 20 + 36 + 12;
          // 用户名
          fontSize = 14;
          ctx.font = fontSize + "px 'Segoe UI'";            
          ctx.fillStyle = "#222222";     
          userName = getSubstring(ctx, userName, 7);   
          ctx.fillText(userName, currentX, currentHeight+ fontSize);
          let usernameMetrics = ctx.measureText(userName);
          let usernameWidth = usernameMetrics.width;
          // 公司
          fontSize = 12;
          ctx.font = fontSize + "px 'Segoe UI'";            
          ctx.fillStyle = "#999999";   
          company = getSubstring(ctx, company, undefined, windowWidth-20*2-36-68-12*2);
          ctx.fillText(company, currentX, currentHeight+ fontSize + 16 + 8);       
          // 职位
          if(position) {
              fontSize = 10;
              ctx.font = fontSize + "px 'Segoe UI'";  
              ctx.fillStyle = "#3C76FF";  
              position = getSubstring(ctx, position, 6)   
              ctx.fillText(position, currentX + usernameWidth+ 8 + 8, currentHeight+ fontSize +2);
              ctx.strokeStyle = "#3C76FF";    
              ctx.lineWidth = 0.5;  
              let positionMetrics = ctx.measureText(position);
              let positionWidth = positionMetrics.width;
              drawButtonPath(ctx, currentX + usernameWidth + 8, currentHeight, positionWidth+16+2, 16, 9)
          }
          // console.log('currentHeight', currentHeight)
          currentHeight += 36+8;
          const buttonWidth = 194;         
          const { x0, y0, x1, y1 } = calculateGradientCoordinate(buttonWidth, 24, 130)
          const gi = ctx.createLinearGradient(48+x0, currentHeight+y0, 48+x1, currentHeight+y1)
          gi.addColorStop(0, '#4C9BFF')        
          gi.addColorStop(1, '#2867FF')                
          ctx.fillStyle = gi  
          ctx.lineWidth = 1;
          ctx.strokeStyle = "#ffffff";         
          drawButtonPath(ctx, 20+ 28, currentHeight, buttonWidth, 24, 14)              
          ctx.fill();           
          fontSize = 12;
          ctx.font = fontSize + "px 'Segoe UI'";  
          ctx.fillStyle = "#ffffff";   
          ctx.fillText('长按识别二维码查看全文',  20+ 28+12, currentHeight+ fontSize +4); 
  
          // 箭头
          let arrowImage = canvas.createImage();
          // 等待图片加载
          await new Promise(resolve => {
              arrowImage.onload = resolve
              arrowImage.src = arrowSrc // 要加载的图片 url
          })        
          ctx.drawImage(arrowImage,  20+ 28 + buttonWidth - 30 -12 , currentHeight+6, 30, 12)
          // console.log('canvas', canvas);   
          wx.canvasToTempFilePath({
              // canvasId: "canvas",
              // x: 0,
              // y: 0,
              // width: 300,
              // height: 300,
              // destWidth: 300,
              height: canvasHeight,                 
              canvas: canvas,
              success(res) {
                  console.log("二维码临时路径为：", res.tempFilePath);
                  callback && callback({url:res.tempFilePath,height:canvasHeight,width:windowWidth,dpr:dpr})            
              },
              fail(res) {
                  console.error(res);
              },
          });        
        })    
    }
}
````