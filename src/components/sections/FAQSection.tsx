import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "O que eu posso esperar da Consultoria?",
    answer:
      "Na consultoria vamos te dar um direcionamento sobre como aplicar automações e inteligência artificial no seu negócio para aumentar lucratividade, previsibilidade e escalabilidade.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer:
      "Geralmente, as primeiras melhorias podem ser notadas em poucas semanas, mas o tempo total depende da complexidade dos processos da empresa.",
  },
  {
    question: "Quanto tempo dura o diagnóstico?",
    answer:
      "O diagnóstico tem uma duração média de 30 minutos, tempo suficiente para analisarmos os pontos críticos do seu negócio e como a Noble AI pode ajudar.",
  },
  {
    question: "Quem faz o diagnóstico?",
    answer:
      "A call é feita 100% online através da plataforma segura do Google Meet com um de nossos especialistas. Caso a consultoria não atenda às suas expectativas, você pode sair a qualquer momento sem ressentimentos.",
  },
  {
    question: "Devo participar sozinho?",
    answer:
      "Você tem a liberdade de convidar quem quiser para participar da consultoria, mas recomendamos que todos os decisores da sua empresa estejam presentes.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-noble-black py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-foreground mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="w-32 h-1 bg-primary mx-auto mb-12 shimmer-line" />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-noble-dark/50 border border-noble-red/20 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-noble-dark/70 transition-colors"
              >
                <span className="text-lg font-medium text-foreground pr-4">
                  {faq.question}
                </span>
                <motion.span
                  className="text-primary flex-shrink-0"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <Minus size={24} />
                  ) : (
                    <Plus size={24} />
                  )}
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-foreground/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
