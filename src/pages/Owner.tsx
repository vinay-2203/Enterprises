import { OwnerHeader } from "@/components/OwnerDashBoard/OwnerHeader";

import { HeroSection } from "@/components/OwnerDashboard/HeroSection";
import { AvailableProperties } from "@/components/OwnerDashBoard/AvailableProperties";
import { Footer } from "@/components/Footer";

const OwnerDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <OwnerHeader />
      <main>
        <HeroSection />
        <AvailableProperties />
       
      </main>
      <Footer />
    </div>
  );
};

export default OwnerDashboard;
