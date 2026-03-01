(() => {
  const STRIPE_HOST = "buy.stripe.com";
  const EVENT_NAME = "support_donation_click";

  function pageKey() {
    const path = window.location.pathname || "unknown";
    return path.replace(/\/+$/, "") || "/";
  }

  function trackWithPlausible(location) {
    if (typeof window.plausible !== "function") return;
    window.plausible(EVENT_NAME, {
      props: { location }
    });
  }

  function trackWithGoatCounter(location) {
    if (!window.goatcounter || typeof window.goatcounter.count !== "function") {
      return;
    }

    window.goatcounter.count({
      path: `support-click${location}`,
      title: "Support Donation Click",
      event: true
    });
  }

  function trackWithGtag(location) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", EVENT_NAME, {
      event_category: "engagement",
      event_label: location
    });
  }

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    try {
      const url = new URL(link.href, window.location.origin);
      if (!url.hostname.includes(STRIPE_HOST)) return;
    } catch {
      return;
    }

    const location = link.dataset.supportLocation || pageKey();
    trackWithPlausible(location);
    trackWithGoatCounter(location);
    trackWithGtag(location);
  });
})();
