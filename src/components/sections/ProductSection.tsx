import { motion } from "framer-motion";

const ProductSection = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/imagens/index/hero-bg2.png')" }}    >
    
      <div className="absolute inset-0 bg-gradient-to-b from-noble-black via-noble-black/80 to-noble-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          E no que se consiste a Noble AI?
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl font-bold text-primary text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          É A SOLUÇÃO COMPLETA PRO SEU NEGÓCIO.
        </motion.p>

        <div className="w-32 h-1 bg-primary mx-auto mb-8 shimmer-line" />

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            No sistema Noble AI, os fundamentos são definições e estruturações dos
            processos do seu negócio, a criação de agentes de automação nesses
            processos e a integração com sistemas dentro da sua empresa. Todas
            essas etapas bem estruturadas permitirão a sua empresa crescer e
            prosperar mesmo quando você não está presente.
          </p>
          <p className="text-xl font-semibold text-primary">
            Utilizando o poder da Inteligência Artificial.
          </p>
        </motion.div>

        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
        >
          <picture>
            <source media="(max-width: 480px)" srcSet="/imagens/index/mobile/produtos.png" />
            <img
              src="/imagens/index/produtos.png"
              alt="O que entregamos para nossos clientes"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
