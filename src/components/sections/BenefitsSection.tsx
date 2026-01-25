import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";
import { useUTMParams } from "@/hooks/useUTMParams";

const BenefitsSection = () => {
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
      utm_content: utmParams.utm_content || "benefits_section",
      button_location: "benefits_section",
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
    <section className="bg-noble-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          BENEFÍCIOS DE UTILIZAR O{" "}
          <span className="highlight">MÉTODO NOBLE AI</span> DE AUTOMAÇÕES NO SEU
          NEGÓCIO
        </motion.h2>

        <div className="w-32 h-1 bg-primary mx-auto mb-12 shimmer-line" />

        <motion.div
          className="max-w-5xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
        >
          <picture>
            <source media="(max-width: 480px)" srcSet="/imagens/index/mobile/beneficios.png" />
            <img
              src="/imagens/index/beneficios.png"
              alt="Benefícios do Método Noble AI"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.button
            onClick={handleWhatsAppClick}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 cursor-pointer border-none"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero ver isso na prática
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
