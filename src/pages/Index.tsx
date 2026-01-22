import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import ContactCTA from "@/components/sections/ContactCTA";
import MethodSection from "@/components/sections/MethodSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProductSection from "@/components/sections/ProductSection";
import AboutSection from "@/components/sections/AboutSection";
import AboutNoble from "@/components/sections/AboutNoble";
import FAQSection from "@/components/sections/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <ProblemSection />
        <ContactCTA text="Começe a utilizar Agentes I.A. na sua empresa e veja seu negócio decolar!" />
        <MethodSection />
        <BenefitsSection />
        <ProductSection />
        <ContactCTA text="Obtenha a assessoria que vai levar seu negócio ao próximo patamar com a solução Noble I.A.!" />
        <AboutSection />
        <AboutNoble />
        <FAQSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
