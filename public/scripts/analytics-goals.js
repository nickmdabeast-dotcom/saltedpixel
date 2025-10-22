(function () {
  if (typeof window === "undefined") return;
  function track(event) {
    var goal = event.currentTarget.getAttribute("data-analytics-goal");
    if (!goal) return;
    if (typeof window.gtag === "function") {
      window.gtag("event", "goal", {
        event_category: "engagement",
        event_label: goal,
      });
    }
  }
  window.addEventListener("load", function () {
    document.querySelectorAll("[data-analytics-goal]").forEach(function (element) {
      element.addEventListener("click", track);
    });
  });
})();
