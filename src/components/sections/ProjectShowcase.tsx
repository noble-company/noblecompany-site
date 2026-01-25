import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects as defaultProjects, Project } from "../../lib/projectData";

interface ProjectShowcaseProps {
  projects?: Project[];
}

const ProjectShowcase = ({ projects = defaultProjects }: ProjectShowcaseProps) => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="project-showcase" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Projetos feitos pela <span className="text-primary">Noble AI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De automação de processos a análises avançadas, veja cases reais de como transformamos negócios com inteligência artificial.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Project List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {projects.map((project) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-5 rounded-xl border transition-all duration-300 group ${
                  selectedProject.id === project.id
                    ? "bg-noble-dark border-primary shadow-lg shadow-primary/20"
                    : "bg-secondary/50 border-border hover:border-primary/50 hover:bg-secondary"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight 
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      selectedProject.id === project.id
                        ? "text-primary rotate-0"
                        : "text-muted-foreground group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1"
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Right - Video Player */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-8"
          >
            <div className="bg-secondary/50 rounded-2xl p-4 border border-border">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* YouTube Embed */}
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-noble-black">
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?rel=0`}
                      title={selectedProject.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Video Info */}
                  <div className="mt-4">
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {selectedProject.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {selectedProject.description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
