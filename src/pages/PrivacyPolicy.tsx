import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-noble-dark border-b border-noble-red/20 py-4">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          Política de Privacidade
        </h1>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              1. Informações Gerais
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              A Noble Company está comprometida em proteger a privacidade dos
              usuários de nossos serviços. Esta Política de Privacidade explica
              como coletamos, usamos e protegemos suas informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              2. Coleta de Informações
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Coletamos informações que você nos fornece diretamente, como nome,
              e-mail, telefone e informações sobre seu negócio quando você entra
              em contato conosco ou solicita nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              3. Uso das Informações
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Utilizamos suas informações para fornecer e melhorar nossos
              serviços, entrar em contato com você sobre nossa consultoria,
              enviar comunicações de marketing (com seu consentimento) e cumprir
              obrigações legais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              4. Compartilhamento de Informações
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Não vendemos ou compartilhamos suas informações pessoais com
              terceiros, exceto quando necessário para fornecer nossos serviços
              ou quando exigido por lei.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              5. Segurança
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais
              apropriadas para proteger suas informações pessoais contra acesso
              não autorizado, alteração, divulgação ou destruição.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              6. Seus Direitos
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Você tem o direito de acessar, corrigir ou excluir suas informações
              pessoais. Para exercer esses direitos, entre em contato conosco
              através do WhatsApp ou e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              7. Contato
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Se você tiver dúvidas sobre esta Política de Privacidade, entre em
              contato conosco pelo WhatsApp: +55 35 9110-1380.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              8. Atualizações
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Podemos atualizar esta Política de Privacidade periodicamente. A
              versão mais recente estará sempre disponível em nosso site.
            </p>
            <p className="text-muted-foreground mt-4">
              Última atualização: Janeiro de 2025
            </p>
          </section>
        </div>
      </main>

      <footer className="bg-noble-dark border-t border-noble-red/20 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2025 Noble Company. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
