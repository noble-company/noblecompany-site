import { motion } from "framer-motion";

// Placeholder logos - substitua pelos logos reais dos clientes
const clientLogos = [
  { name: "Addept", src: "/imagens/index/client_logos/adept.png", url: "https://addept.ai/" },
  { name: "FG Advogados", src: "/imagens/index/client_logos/advogadosfg.png", url: "https://www.instagram.com/dra.rose.fgadvogados/" },
  { name: "Advocacia Mazza", src: "/imagens/index/client_logos/mazza.png", url: "https://advocaciamazza.com.br/" },
  { name: "Gilli Imóveis", src: "/imagens/index/client_logos/gilli.png", url: "" },
  { name: "Clinica Orall", src: "/imagens/index/client_logos/orall.png", url: "https://www.instagram.com/clinicaorall/" },
  { name: "Luz Estetic Center", src: "/imagens/index/client_logos/esteticcenterluz.png", url: "https://luzesteticcenter.com/" },
  { name: "Secret Look", src: "/imagens/index/client_logos/secretlook.png", url: "https://www.instagram.com/secretlooklisboa/" },
  { name: "Reality Buffet", src: "/imagens/index/client_logos/realitybuffet.png", url: "https://www.instagram.com/buffetreality/" },
];

const ClientLogos = () => {
  // Duplica os logos 3x para criar efeito infinito seamless
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

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
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <a
              key={`${logo.name}-${index}`}
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 mx-10 md:mx-14 flex items-center justify-center cursor-pointer"
            >
              <div className="w-36 h-18 md:w-48 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
