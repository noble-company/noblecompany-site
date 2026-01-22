import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat pt-20"
      style={{ backgroundImage: "url('/imagens/hero-bg.png')" }}
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
          
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Fale com um Especialista
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
