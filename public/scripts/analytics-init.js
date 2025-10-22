(function () {
  if (typeof window === "undefined") return;
  var script = document.currentScript;
  if (!script) return;
  var measurementId = script.getAttribute("data-measurement-id");
  if (!measurementId) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, { send_page_view: true });
})();
