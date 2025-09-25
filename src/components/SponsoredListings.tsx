import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Star, Clock } from "lucide-react";
import { FC } from "react";

interface SponsoredProperty {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  developer: string;
  bedrooms: string;
  bathrooms: string;
  area: string;
  rating: number;
  status: string;
  sponsored: boolean;
  amenities: string[];
}

export const SponsoredListings: FC = () => {
  const sponsoredProperties: SponsoredProperty[] = [
    {
      id: 1,
      title: "Luxury Apartments at Sky Heights",
      location: "Gachibowli, Hyderabad",
      price: "₹85 Lakhs - ₹1.2 Cr",
      image: "/api/placeholder/400/300",
      developer: "Prestige Group",
      bedrooms: "2-3 BHK",
      bathrooms: "2-3",
      area: "1200-1800 sq ft",
      rating: 4.8,
      status: "Ready to Move",
      sponsored: true,
      amenities: ["Swimming Pool", "Gym", "Parking", "Security"]
    },
    {
      id: 2,
      title: "Premium Villas at Green Valley",
      location: "Jubilee Hills, Hyderabad",
      price: "₹2.5 Cr - ₹4 Cr",
      image: "/api/placeholder/400/300",
      developer: "Brigade Group",
      bedrooms: "3-4 BHK",
      bathrooms: "3-4",
      area: "2500-3500 sq ft",
      rating: 4.9,
      status: "Under Construction",
      sponsored: true,
      amenities: ["Club House", "Garden", "Security", "Power Backup"]
    },
    {
      id: 3,
      title: "Smart Homes at Tech City",
      location: "HITEC City, Hyderabad",
      price: "₹95 Lakhs - ₹1.5 Cr",
      image: "/api/placeholder/400/300",
      developer: "Godrej Properties",
      bedrooms: "2-3 BHK",
      bathrooms: "2-3",
      area: "1100-1600 sq ft",
      rating: 4.7,
      status: "Launching Soon",
      sponsored: true,
      amenities: ["Smart Home", "Gym", "Kids Play", "Maintenance"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Sponsored Listings
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium properties featured by our trusted developer partners
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsoredProperties.map((property, index) => (
            <Card 
              key={property.id} 
              className="group hover:shadow-strong transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">Premium Property Image</p>
                  </div>
                </div>
                {property.sponsored && (
                  <Badge className="absolute top-2 left-2 bg-yellow-500 text-black hover:bg-yellow-600">
                    Sponsored
                  </Badge>
                )}
                <Badge 
                  className={`absolute top-2 right-2 ${
                    property.status === "Ready to Move" 
                      ? "bg-green-500 hover:bg-green-600" 
                      : property.status === "Under Construction"
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  <Clock className="h-3 w-3 mr-1" />
                  {property.status}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      by {property.developer}
                    </p>
                  </div>

                  <div className="text-2xl font-bold text-primary">
                    {property.price}
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.bedrooms}
                    </div>
                    <div className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms}
                    </div>
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.area}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                    <Badge variant="outline">
                      {property.amenities.length} Amenities
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" variant="outline">
                      View Details
                    </Button>
                    <Button className="flex-1 gradient-primary">
                      Contact Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover:border-primary hover:text-primary">
            View All Sponsored Properties
          </Button>
        </div>
      </div>
    </section>
  );
};