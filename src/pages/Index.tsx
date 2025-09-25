import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SponsoredListings } from "@/components/SponsoredListings";
import { PremiumProjects } from "@/components/PremiumProjects";
import { BankingPartners } from "@/components/BankingPartners";
import { ClientLogos } from "@/components/ClientLogos";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SponsoredListings />
        <PremiumProjects />
        <BankingPartners />
        <ClientLogos />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
