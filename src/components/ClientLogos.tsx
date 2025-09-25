import { Card } from "@/components/ui/card";
import clientLogosImage from "@/assets/client-logos.jpg";
import { FC } from "react";

// Define TypeScript interface
interface Client {
  name: string;
  logo: string;
}

export const ClientLogos: FC = () => {
  const trustedClients: Client[] = [
    { name: "Prestige Group", logo: "🏢" },
    { name: "Brigade Group", logo: "🏗️" },
    { name: "Godrej Properties", logo: "🌟" },
    { name: "Sobha Limited", logo: "🏘️" },
    { name: "Embassy Group", logo: "🏙️" },
    { name: "Puravankara", logo: "🏰" },
    { name: "Salarpuria Group", logo: "🌆" },
    { name: "Raheja Developers", logo: "🏛️" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {" "}Leading Developers
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Partner with India's most trusted real estate brands for your next investment
          </p>
        </div>

        {/* Scrolling logos */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8 animate-scroll">
            {[...trustedClients, ...trustedClients].map((client, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white hover:shadow-medium transition-all hover:scale-105 cursor-pointer group"
              >
                <div className="text-center">
                  <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">
                    {client.logo}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {client.name}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Active Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
            <p className="text-muted-foreground">Partner Cities</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">₹5000Cr+</div>
            <p className="text-muted-foreground">Transaction Value</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add this to your index.css for the scrolling animation
const scrollAnimation = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
`;