import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Clock, MapPin, Building2 } from "lucide-react";
import { FC } from "react";

interface PremiumProject {
  id: number;
  title: string;
  developer: string;
  location: string;
  priceRange: string;
  type: string;
  totalUnits: number;
  availableUnits: number;
  possession: string;
  highlights: string[];
  roi: string;
  featured: boolean;
}

export const PremiumProjects: FC = () => {
  const premiumProjects: PremiumProject[] = [
    {
      id: 1,
      title: "The Skyline Residences",
      developer: "Prestige Group",
      location: "Banjara Hills, Hyderabad",
      priceRange: "₹1.2 Cr - ₹2.8 Cr",
      type: "Ultra Luxury Apartments",
      totalUnits: 180,
      availableUnits: 45,
      possession: "Dec 2025",
      highlights: ["Rooftop Infinity Pool", "Sky Lounge", "Concierge Service", "Valet Parking"],
      roi: "18% Expected ROI",
      featured: true
    },
    {
      id: 2,
      title: "Green Valley Villas",
      developer: "Brigade Group",
      location: "Kondapur, Hyderabad",
      priceRange: "₹3.5 Cr - ₹6.2 Cr",
      type: "Premium Villas",
      totalUnits: 85,
      availableUnits: 12,
      possession: "Ready to Move",
      highlights: ["Private Gardens", "Home Automation", "Solar Panels", "24x7 Security"],
      roi: "22% Expected ROI",
      featured: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Premium Collections
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-primary-light to-accent-foreground bg-clip-text text-transparent">
              Exclusive Premium Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Handpicked luxury developments with exceptional investment potential and world-class amenities
          </p>
        </div>

        <div className="space-y-8">
          {premiumProjects.map((project, index) => (
            <Card 
              key={project.id}
              className="overflow-hidden shadow-strong hover:shadow-[0_25px_80px_rgba(124,58,237,0.3)] transition-all duration-500 hover:scale-[1.02] animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary-light/5" />
                
                <CardContent className="p-8 md:p-12 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div>
                        {project.featured && (
                          <Badge className="mb-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                            <Sparkles className="h-3 w-3 mr-1" />
                            Featured Project
                          </Badge>
                        )}
                        <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-lg">
                          by {project.developer}
                        </p>
                      </div>

                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-5 w-5 mr-2" />
                        <span className="text-lg">{project.location}</span>
                      </div>

                      <div className="space-y-3">
                        <div className="text-3xl font-bold text-primary">
                          {project.priceRange}
                        </div>
                        <p className="text-lg text-muted-foreground">{project.type}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Building2 className="h-4 w-4 mr-2 text-primary" />
                          <span>{project.availableUnits}/{project.totalUnits} Available</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <span>{project.possession}</span>
                        </div>
                      </div>

                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {project.roi}
                      </Badge>
                    </div>

                    {/* Highlights & Actions */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Premium Highlights</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {project.highlights.map((highlight, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center text-sm bg-accent/50 rounded-lg p-3 hover:bg-accent transition-colors"
                            >
                              <Sparkles className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button size="lg" className="flex-1 gradient-primary hover:shadow-strong transition-all">
                          Schedule Site Visit
                        </Button>
                        <Button size="lg" variant="outline" className="flex-1 hover:border-primary hover:text-primary">
                          Download Brochure
                        </Button>
                      </div>

                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Limited time offer • Only {project.availableUnits} units left
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="premium" className="px-8">
            Explore All Premium Projects
          </Button>
        </div>
      </div>
    </section>
  );
};