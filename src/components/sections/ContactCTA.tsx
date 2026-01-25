import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";
import { useUTMParams } from "@/hooks/useUTMParams";

interface ContactCTAProps {
  text: string;
  buttonText?: string;
}

const ContactCTA = ({ text, buttonText = "Agende uma Demonstração" }: ContactCTAProps) => {
  const utmParams = useUTMParams();

  const handleWhatsAppClick = () => {
    console.log("WhatsApp button clicked!"); // Debug log
    console.log("UTM Params:", utmParams); // Debug log
    console.log("dataLayer:", (window as any).dataLayer); // Debug log

    const eventData = {
      event: "whatsapp_click",
      utm_source: utmParams.utm_source || "direct",
      utm_campaign: utmParams.utm_campaign || "organic",
      utm_medium: utmParams.utm_medium || "direct",
      utm_content: utmParams.utm_content || "contact_cta",
      button_location: "contact_cta",
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

    // Open WhatsApp in new window/tab
    window.open(getWhatsAppLink(), "_blank");
  };
  return (
    <section className="bg-noble-dark py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
            {text}
          </p>
          
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8 shimmer-line" />
          
          <motion.button
            onClick={handleWhatsAppClick}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 cursor-pointer border-none"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
