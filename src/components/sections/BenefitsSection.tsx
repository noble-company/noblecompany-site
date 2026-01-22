import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";

const BenefitsSection = () => {
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
            <source media="(max-width: 480px)" srcSet="/imagens/mobile/beneficios.png" />
            <img
              src="/imagens/beneficios.png"
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
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Quero ver isso na prática
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
