import { motion } from "framer-motion";

// Placeholder logos - substitua pelos logos reais dos clientes
const clientLogos = [
  { name: "Addept", src: "/imagens/client_logos/adept.png" },
  { name: "FG Advogados", src: "/imagens/client_logos/advogadosfg.png" },
  { name: "Advocacia Mazza", src: "/imagens/client_logos/mazza.png" },
  { name: "Gilli Imóveis", src: "/imagens/client_logos/gilli.png" },
  { name: "Clinica Orall", src: "/imagens/client_logos/orall.png" },
  { name: "Luz Estetic Center", src: "/imagens/client_logos/esteticcenterluz.png" },
  { name: "Secret Look", src: "/imagens/client_logos/secretlook.png" },
  { name: "Reality Buffet", src: "/imagens/client_logos/realitybuffet.png" },
];

const ClientLogos = () => {
  // Duplica os logos para criar efeito infinito seamless
  const duplicatedLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="py-12 md:py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm md:text-base uppercase tracking-widest"
        >
          Empresas que confiam na Noble
        </motion.p>
      </div>

      <div className="relative">
        {/* Gradient overlays para efeito de fade nas bordas */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        {/* Container do carrossel */}
        <div className="flex animate-scroll hover:pause-animation">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center"
            >
              <div className="w-24 h-12 md:w-32 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                {/* Placeholder visual - substitua pela tag img com o logo real */}
                {/*
                <div className="w-full h-full bg-muted/30 rounded-lg flex items-center justify-center border border-border/30">
                  <span className="text-muted-foreground text-xs md:text-sm font-medium">
                    {logo.name}
                  </span>
                </div>
                */}
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
