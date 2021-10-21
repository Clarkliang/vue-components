// 解决微信设置字体放大后浏览器展示异常的问题

// 安卓：
(function () {
  if (typeof WeixinJSBridge == 'object' && typeof WeixinJSBridge.invoke == 'function') {
    handleFontSize();
  } else {
    if (document.addEventListener) {
      document.addEventListener('WeixinJSBridgeReady', handleFontSize, false);
    } else if (document.attachEvent) {
      // IE浏览器，非W3C规范
      document.attachEvent('onWeixinJSBridgeReady', handleFontSize);
    }
  }
  function handleFontSize() {
    // 设置网页字体为默认大小
    WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
    // 重写设置网页字体大小的事件
    WeixinJSBridge.on('menu:setfont', function () {
      WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 });
    });
  }
})();
