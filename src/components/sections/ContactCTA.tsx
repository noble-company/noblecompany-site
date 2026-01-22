import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/utils";

interface ContactCTAProps {
  text: string;
  buttonText?: string;
}

const ContactCTA = ({ text, buttonText = "Agende uma Demonstração" }: ContactCTAProps) => {
  return (
    <section className="bg-noble-dark py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
            {text}
          </p>
          
          <div className="w-24 h-0.5 bg-primary mx-auto mb-8 shimmer-line" />
          
          <motion.a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {buttonText}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
