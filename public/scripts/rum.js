(function () {
  if (typeof window === "undefined" || typeof PerformanceObserver === "undefined") {
    return;
  }
  var script = document.currentScript;
  var endpoint = script && script.dataset.endpoint ? script.dataset.endpoint : "/api/rum";
  var clsValue = 0;
  var inpValue = 0;

  try {
    var lcpObserver = new PerformanceObserver(function (entryList) {
      var entries = entryList.getEntries();
      if (!entries.length) return;
      var lastEntry = entries[entries.length - 1];
      sendMetric("LCP", lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime);
      lcpObserver.disconnect();
    });
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
  } catch (error) {
    console.warn("LCP observer unavailable", error);
  }

  try {
    var clsObserver = new PerformanceObserver(function (entryList) {
      entryList.getEntries().forEach(function (entry) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
    });
    clsObserver.observe({ type: "layout-shift", buffered: true });
    window.addEventListener("beforeunload", function () {
      if (clsValue > 0) sendMetric("CLS", clsValue);
    });
  } catch (error) {
    console.warn("CLS observer unavailable", error);
  }

  try {
    var inpObserver = new PerformanceObserver(function (entryList) {
      entryList.getEntries().forEach(function (entry) {
        if (entry.interactionId && entry.duration > inpValue) {
          inpValue = entry.duration;
        }
      });
    });
    inpObserver.observe({ type: "event", buffered: true, durationThreshold: 16 });
    window.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden" && inpValue > 0) {
        sendMetric("INP", inpValue);
      }
    });
  } catch (error) {
    console.warn("INP observer unavailable", error);
  }

  function sendMetric(name, value) {
    try {
      var payload = JSON.stringify({
        name: name,
        value: Math.round(value),
        path: window.location.pathname,
        timestamp: Date.now(),
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon(endpoint, payload);
      } else {
        fetch(endpoint, {
          method: "POST",
          body: payload,
          keepalive: true,
          headers: { "Content-Type": "application/json" },
        }).catch(function () {});
      }
    } catch (err) {
      console.warn("RUM send failed", err);
    }
  }
})();
