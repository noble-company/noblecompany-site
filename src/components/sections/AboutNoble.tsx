import { motion } from "framer-motion";

const AboutNoble = () => {
  const textItems = [
    "A Noble Company é uma empresa especializada em negócios digitais, que auxilia outras empresas a otimizarem seus negócios com automações e inteligência artificial, aumentando seus retornos sobre investimento (ROI).",
    "Fundada por Maicon Douglas Zeferino e Luiz Eduardo Rubio Mendes, a Noble Company acumula mais de 3 anos de experiência com negócios digitais e físicos e já ajudou dezenas de empresas a crescerem e prosperarem.",
    "Após alcançarem um faturamento para seus clientes acumulado de quase 8 dígitos, Maicon e Luiz dedicam-se atualmente a assessorar empresários na utilização de automações e inteligência artificial para alavancar seus negócios.",
  ];

  return (
    <section
      id="about-noble"
      className="relative py-20 md:py-28 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/imagens/index/about-noble-bg.png')" }}
    >
      <div className="absolute inset-0 bg-noble-black/85" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Sobre a Noble Company
        </motion.h2>

        <div className="w-32 h-1 bg-primary mx-auto mb-12 shimmer-line" />

        <div className="max-w-3xl mx-auto space-y-6">
          {textItems.map((text, index) => (
            <motion.p
              key={index}
              className="text-lg text-foreground/90 leading-relaxed text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutNoble;
