import { useCallback } from "react";
import { getWhatsAppLink } from "@/lib/utils";
import { useUTMParams } from "./useUTMParams";

export function useWhatsAppTracking() {
  const utmParams = useUTMParams();

  const handleWhatsAppClick = useCallback(
    (buttonLocation: string = "direct") => {
      const eventData = {
        event: "whatsapp_click",
        utm_source: utmParams.utm_source || "direct",
        utm_campaign: utmParams.utm_campaign || "organic",
        utm_medium: utmParams.utm_medium || "direct",
        utm_content: utmParams.utm_content || buttonLocation,
        button_location: buttonLocation,
      };

      // Push to GTM dataLayer
      if (typeof window !== "undefined" && (window as any).dataLayer) {
        (window as any).dataLayer.push(eventData);
      }

      // Also fire GA4 event
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "whatsapp_click", eventData);
      }

      // Fire Meta Pixel event
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Contact", {
          content_name: "WhatsApp Inquiry",
          content_category: buttonLocation,
          custom_data: {
            utm_source: eventData.utm_source,
            utm_campaign: eventData.utm_campaign,
            utm_medium: eventData.utm_medium,
          },
        });
      }

      // Open WhatsApp in new window/tab
      window.open(getWhatsAppLink(), "_blank");
    },
    [utmParams]
  );

  return { handleWhatsAppClick };
}
