import { motion } from "framer-motion";

const MethodSection = () => {
  return (
    <section id="metodo" className="bg-noble-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Existe um processo específico para o seu negócio escalar com I.A.
        </motion.h2>

        <div className="w-32 h-1 bg-primary mx-auto mb-6 shimmer-line" />

        <motion.p
          className="text-center text-lg md:text-xl text-muted-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Sem ele, seu negócio não sai do lugar.
        </motion.p>

        <motion.p
          className="text-center text-2xl md:text-3xl font-bold text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Método Noble AI.
        </motion.p>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <picture>
            <source media="(max-width: 480px)" srcSet="/imagens/index/mobile/metodo.png" />
            <img
              src="/imagens/index/metodo.png"
              alt="Pilares do Método Noble AI"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default MethodSection;
