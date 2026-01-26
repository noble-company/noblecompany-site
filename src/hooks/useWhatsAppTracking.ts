import { useCallback } from "react";
import { getWhatsAppLink, generateEventId, getMetaCookies, sendToMetaCAPI } from "@/lib/utils";
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

      const metaCookies = getMetaCookies();
      const eventId = generateEventId();

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
      sendToMetaCAPI({
        eventName: 'Contact',
        eventId: eventId,
        eventData: eventData,
        userData: metaCookies,
      });

      // Open WhatsApp in new window/tab
      console.log("[WhatsApp Click] Opening WhatsApp");
      window.open(getWhatsAppLink(), "_blank");
    },
    [utmParams]
  );

  return { handleWhatsAppClick };
}
