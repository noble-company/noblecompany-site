import { generateEventId, getMetaCookies, sendToMetaCAPI } from "./utils";

// Track page view with Meta Pixel deduplication and fbc
export function trackPageView() {
  // Wait for fbq to be available
  const checkFbq = setInterval(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      clearInterval(checkFbq);

      const metaCookies = getMetaCookies();
      const eventId = generateEventId("pv_");

      // Track page view with deduplication
      (window as any).fbq("track", "PageView", {}, { eventID: eventId });

      // Send to page_view webhook if fbc exists
      if (metaCookies.fbc) {
        fetch('https://webhook.noblecompany.digital/webhook/meta/page_view', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            eventName: 'PageView',
            eventId: eventId,
            eventData: {
              event: 'page_view',
              page_url: window.location.href,
              referrer: document.referrer,
            },
            userData: metaCookies,
          }),
        }).catch((error) => {
          console.error('Page view webhook error:', error);
        });
      }
    }
  }, 100);
}
