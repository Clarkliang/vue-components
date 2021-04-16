# 存放平时常用的 vue 组件

### 移动端 rem 计算

```javascript
(function (doc, win) {
  /**
   * 设置REM
   */
  var docEl = doc.documentElement;
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  if (!doc.addEventListener) {
    return;
  }

  var recalc = function recalc() {
    var clientWidth = docEl.clientWidth || doc.body.clientWidth;
    if (!clientWidth) {
      return;
    }

    var docElWidth = 100 * (clientWidth / 750);

    if (docElWidth > 100) {
      docElWidth = 100;
    }

    docEl.style.fontSize = docElWidth + 'px';

    // 适配横屏
    if (Math.abs(window.orientation) === 90) {
      var clientHeight = docEl.clientHeight || doc.body.clientHeight;
      if (!clientHeight) {
        return;
      }
      docElWidth = 100 * (clientHeight / 1438);
      docEl.style.fontSize = docElWidth + 'px';
    }
  };

  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
```
