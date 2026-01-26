// Track page view with Meta Pixel deduplication and fbc
export function trackPageView() {
  // Wait for fbq to be available
  const checkFbq = setInterval(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      clearInterval(checkFbq);

      // Extract fbc from cookies
      const fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1];

      // Generate unique event ID for deduplication
      const eventId = `pv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Track page view with deduplication
      (window as any).fbq("track", "PageView", {}, { eventID: eventId });

      // Send to CAPI webhook if fbc exists
      if (fbc) {
        fetch('https://webhook.noblecompany.digital/webhook/meta/conversion', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventName: 'PageView',
            eventId: eventId,
            eventData: {
              event: 'page_view',
              page_url: window.location.href,
              referrer: document.referrer,
            },
            userData: {
              fbp: document.cookie.match(/_fbp=([^;]+)/)?.[1] || null,
              fbc: fbc,
            },
          }),
        }).catch((error) => {
          console.error('Meta CAPI PageView error:', error);
        });
      }
    }
  }, 100);
}
