// TikTok Pixel ID is supplied per ad in the landing URL as ?pixel=...
(() => {
  const pixelId = new URLSearchParams(window.location.search).get("pixel");
  if (!pixelId) return;

  !(function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    const ttq = w[t] = w[t] || [];
    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"];
    ttq.setAndDefer = function (target, method) {
      target[method] = function () {
        target.push([method].concat(Array.prototype.slice.call(arguments, 0)));
      };
    };
    for (let i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(ttq, ttq.methods[i]);
    }
    ttq.instance = function (id) {
      const instance = ttq._i[id] || [];
      for (let i = 0; i < ttq.methods.length; i++) {
        ttq.setAndDefer(instance, ttq.methods[i]);
      }
      return instance;
    };
    ttq.load = function (id, options) {
      const scriptUrl = "https://analytics.tiktok.com/i18n/pixel/events.js";
      ttq._i = ttq._i || {};
      ttq._i[id] = [];
      ttq._i[id]._u = scriptUrl;
      ttq._t = ttq._t || {};
      ttq._t[id] = +new Date();
      ttq._o = ttq._o || {};
      ttq._o[id] = options || {};
      const script = d.createElement("script");
      script.async = true;
      script.src = scriptUrl + "?sdkid=" + id + "&lib=" + t;
      const firstScript = d.getElementsByTagName("script")[0];
      firstScript.parentNode.insertBefore(script, firstScript);
    };

    ttq.load(pixelId);
    ttq.page();
  })(window, document, "ttq");
})();
