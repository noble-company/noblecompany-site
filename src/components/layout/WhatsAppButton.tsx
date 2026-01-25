import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";
import { useUTMParams } from "@/hooks/useUTMParams";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const utmParams = useUTMParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    console.log("WhatsApp button clicked!"); // Debug log
    console.log("UTM Params:", utmParams); // Debug log
    console.log("dataLayer:", (window as any).dataLayer); // Debug log

    const eventData = {
      event: "whatsapp_click",
      utm_source: utmParams.utm_source || "direct",
      utm_campaign: utmParams.utm_campaign || "organic",
      utm_medium: utmParams.utm_medium || "direct",
      utm_content: utmParams.utm_content || "floating_button",
      button_location: "floating_button",
    };

    console.log("Event Data:", eventData); // Debug log

    // Push to GTM dataLayer
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      console.log("Pushing to dataLayer..."); // Debug log
      (window as any).dataLayer.push(eventData);
      console.log("Pushed successfully!"); // Debug log
    } else {
      console.log("dataLayer not found!"); // Debug log
    }

    // Also fire GA4 event
    if (typeof window !== "undefined" && (window as any).gtag) {
      console.log("Firing GA4 event..."); // Debug log
      (window as any).gtag("event", "whatsapp_click", eventData);
    }

    // Fire Meta Pixel event
    if (typeof window !== "undefined" && (window as any).fbq) {
      console.log("Firing Meta Pixel event..."); // Debug log
      (window as any).fbq("track", "Contact", {
        content_name: "WhatsApp Inquiry",
        content_category: eventData.button_location,
        custom_data: {
          utm_source: eventData.utm_source,
          utm_campaign: eventData.utm_campaign,
          utm_medium: eventData.utm_medium,
        },
      });
      console.log("Meta Pixel fired!"); // Debug log
    } else {
      console.log("Meta Pixel not found!"); // Debug log
    }

    // Open WhatsApp in new window/tab
    window.open(getWhatsAppLink(), "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Fale conosco no WhatsApp"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MessageCircle size={28} fill="white" />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
