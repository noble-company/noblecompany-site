import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-noble-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Sobre a
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
            Consultoria Noble AI
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            de Processos e Automações
          </h2>

          <div className="w-32 h-1 bg-primary mx-auto mb-8 shimmer-line" />

          <div className="bg-noble-dark/50 border border-noble-red/20 rounded-lg p-8 space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Semanalmente liberamos alguns horários restritos para uma
              consultoria de pré-avaliação focada em empresários que desejam
              obter maiores resultados em seus negócios.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              Nela nós damos um direcionamento personalizado para aplicar a
              automação e inteligência artificial no seu negócio, e ter mais
              lucratividade, previsibilidade e escalabilidade.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
