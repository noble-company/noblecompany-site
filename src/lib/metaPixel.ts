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
        try {
          // Use sendBeacon for better reliability and CORS-free handling
          navigator.sendBeacon('https://webhook.noblecompany.digital/webhook/meta/page_view', JSON.stringify({
            eventName: 'PageView',
            eventId: eventId,
            eventData: {
              event: 'page_view',
              page_url: window.location.href,
              referrer: document.referrer,
            },
            userData: metaCookies,
          }));
        } catch (error) {
          console.error('Page view beacon error:', error);
        }
      }
    }
  }, 100);
}
