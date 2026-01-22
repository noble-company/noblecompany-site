import { motion } from "framer-motion";

const problemTexts = [
  "Se você se identifica com algum desses problemas, talvez seja hora de pensar em automatizar seus processos com I.A.",
  "Hoje, as empresas que estão crescendo com rapidez, são as que estão investindo em automação e inteligência artificial...",
  "Mesmo tendo um produto ou serviço de qualidade, a falta de automação e sistemas robustos impede o crescimento rápido e sustentável.",
];

const ProblemSection = () => {
  return (
    <section className="bg-noble-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          PRA QUEM É ESSA SOLUÇÃO?
        </motion.h2>

        <div className="w-32 h-1 bg-primary mx-auto mb-8 shimmer-line" />

        <motion.p
          className="text-center text-lg md:text-xl text-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Se você é <span className="highlight">EMPRESÁRIO</span> e tem alguns
          desses problemas abaixo
          <br />
          <span className="text-muted-foreground">Essa solução é pra você:</span>
        </motion.p>

        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <picture>
            <source media="(max-width: 480px)" srcSet="/imagens/mobile/problemas.png" />
            <img
              src="/imagens/problemas.png"
              alt="Principais problemas que o empresário enfrenta"
              className="w-full h-auto rounded-lg"
            />
          </picture>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {problemTexts.map((text, index) => (
            <motion.div
              key={index}
              className="bg-noble-dark/50 border border-noble-red/20 rounded-lg p-6 hover:border-noble-red/40 transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <p className="text-foreground/90 text-lg leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
