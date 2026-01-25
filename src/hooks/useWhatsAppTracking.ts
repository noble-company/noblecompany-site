import { useCallback } from "react";
import { getWhatsAppLink } from "@/lib/utils";
import { useUTMParams } from "./useUTMParams";

export function useWhatsAppTracking() {
  const utmParams = useUTMParams();

  const handleWhatsAppClick = useCallback(
    (buttonLocation: string = "direct") => {
      console.log(`[WhatsApp Click] Button location: ${buttonLocation}`);
      
      const eventData = {
        event: "whatsapp_click",
        utm_source: utmParams.utm_source || "direct",
        utm_campaign: utmParams.utm_campaign || "organic",
        utm_medium: utmParams.utm_medium || "direct",
        utm_content: utmParams.utm_content || buttonLocation,
        button_location: buttonLocation,
      };

      console.log("[WhatsApp Click] Event data:", eventData);

      // Extract Meta cookies for CAPI
      const fbp = document.cookie.match(/_fbp=([^;]+)/)?.[1];
      const fbc = document.cookie.match(/_fbc=([^;]+)/)?.[1];

      // Generate unique event ID for deduplication
      const eventId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // Push to GTM dataLayer
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        console.log("[WhatsApp Click] Pushing to GTM dataLayer");
        (window as any).dataLayer.push(eventData);
      }

      // Also fire GA4 event
      if (typeof window !== "undefined" && (window as any).gtag) {
        console.log("[WhatsApp Click] Firing GA4 event");
        (window as any).gtag("event", "whatsapp_click", eventData);
      }

      // Fire Meta Pixel event with eventID for deduplication
      if (typeof window !== "undefined" && (window as any).fbq) {
        console.log("[WhatsApp Click] Firing Meta Pixel event");
        (window as any).fbq("track", "Contact", {
          content_name: "WhatsApp Inquiry",
          content_category: buttonLocation,
          custom_data: {
            utm_source: eventData.utm_source,
            utm_campaign: eventData.utm_campaign,
            utm_medium: eventData.utm_medium,
          },
        }, {
          eventID: eventId,
        });
      }

      // Send event to Meta CAPI via server webhook
      console.log("[WhatsApp Click] Sending to Meta CAPI webhook");
      fetch('https://webhook.noblecompany.digital/webhook/meta/conversion', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventName: 'Contact',
          eventId: eventId,
          eventData: eventData,
          userData: {
            fbp: fbp || null,
            fbc: fbc || null,
          },
        }),
      }).catch((error) => {
        console.error('Meta CAPI error:', error);
        // Silently fail - doesn't block WhatsApp click
      });

      // Open WhatsApp in new window/tab
      console.log("[WhatsApp Click] Opening WhatsApp");
      window.open(getWhatsAppLink(), "_blank");
    },
    [utmParams]
  );

  return { handleWhatsAppClick };
}
