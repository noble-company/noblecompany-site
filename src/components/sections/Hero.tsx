import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";
import { useUTMParams } from "@/hooks/useUTMParams";

const Hero = () => {
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
      utm_content: utmParams.utm_content || "hero_section",
      button_location: "hero_section",
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
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: "url('/imagens/index/hero-bg.png')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-noble-black/60 via-noble-black/40 to-noble-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8">
            Descubra como você pode transformar seus processos e escalar seus
            resultados com as soluções de{" "}
            <span className="text-primary">Agentes Noble AI.</span>
          </h1>
          
          <motion.button
            onClick={handleWhatsAppClick}
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 cursor-pointer border-none"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale com um Especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
