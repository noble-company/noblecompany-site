import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-noble-dark border-t border-noble-red/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Noble Company. Todos os direitos reservados.
          </p>
          <nav>
            <Link
              to="/politica-de-privacidade"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Política de Privacidade
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
