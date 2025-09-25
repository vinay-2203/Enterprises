// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { MapPin, Home, DollarSign } from "lucide-react";
// import { FC } from "react";

// interface AvailableProperty {
//   id: number;
//   title: string;
//   location: string;
//   pricePerMonth: string;
//   image: string;
//   paymentDetail: string;
// }

// export const AvailableProperties: FC = () => {
//   const properties: AvailableProperty[] = [
//     {
//       id: 1,
//       title: "2BHK Apartment at Green Enclave",
//       location: "Kondapur, Hyderabad",
//       pricePerMonth: "₹35,000 / Month",
//       image: "/api/placeholder/400/300",
//       paymentDetail: "EMI options available"
//     },
//     {
//       id: 2,
//       title: "Cozy Studio Apartment",
//       location: "Madhapur, Hyderabad",
//       pricePerMonth: "₹25,000 / Month",
//       image: "/api/placeholder/400/300",
//       paymentDetail: "Flexible rental plans"
//     },
//     {
//       id: 3,
//       title: "Luxury 3BHK Flat",
//       location: "Jubilee Hills, Hyderabad",
//       pricePerMonth: "₹55,000 / Month",
//       image: "/api/placeholder/400/300",
//       paymentDetail: "Maintenance included"
//     },
//     {
//       id: 4,
//       title: "1BHK Affordable Home",
//       location: "Gachibowli, Hyderabad",
//       pricePerMonth: "₹18,000 / Month",
//       image: "/api/placeholder/400/300",
//       paymentDetail: "No brokerage"
//     },
//     {
//     id: 1,
//     title: "2BHK Apartment at Green Enclave",
//     location: "Kondapur, Hyderabad",
//     pricePerMonth: "₹35,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "EMI options available"
//   },
//   {
//     id: 2,
//     title: "Cozy Studio Apartment",
//     location: "Madhapur, Hyderabad",
//     pricePerMonth: "₹25,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "Flexible rental plans"
//   },
//   {
//     id: 3,
//     title: "Luxury 3BHK Flat",
//     location: "Jubilee Hills, Hyderabad",
//     pricePerMonth: "₹55,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "Maintenance included"
//   },
//   {
//     id: 4,
//     title: "1BHK Affordable Home",
//     location: "Gachibowli, Hyderabad",
//     pricePerMonth: "₹18,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "No brokerage"
//   },
//   {
//     id: 5,
//     title: "Premium Villa with Garden",
//     location: "Shamshabad, Hyderabad",
//     pricePerMonth: "₹1,20,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "Fully furnished"
//   },
//   {
//     id: 6,
//     title: "Smart 2BHK at Tech Towers",
//     location: "HITEC City, Hyderabad",
//     pricePerMonth: "₹40,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "IoT-enabled smart home"
//   },
//   {
//     id: 7,
//     title: "Family 4BHK Duplex",
//     location: "Kukatpally, Hyderabad",
//     pricePerMonth: "₹70,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "Parking included"
//   },
//   {
//     id: 8,
//     title: "Modern 1BHK Studio",
//     location: "Begumpet, Hyderabad",
//     pricePerMonth: "₹22,000 / Month",
//     image: "/api/placeholder/400/300",
//     paymentDetail: "Close to metro station"
//   }
//   ];

//   return (
//     <section className="py-16 bg-muted">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Availability of Properties
//           </h2>
//           <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
//             Explore the latest available rental and sale properties in your area
//           </p>
//         </div>

//         {/* Grid of properties */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {properties.map((property, index) => (
//             <Card
//               key={property.id}
//               className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="relative">
//                 <div className="h-40 bg-gradient-to-br from-primary/10 to-primary-light/10 flex items-center justify-center">
//                   <div className="text-center">
//                     <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
//                       <Home className="h-8 w-8 text-primary" />
//                     </div>
//                     <p className="text-sm text-muted-foreground">Property Image</p>
//                   </div>
//                 </div>
//                 <Badge className="absolute top-2 left-2 bg-blue-500 text-white">
//                   {property.pricePerMonth}
//                 </Badge>
//               </div>

//               <CardContent className="p-6">
//                 <div className="space-y-3">
//                   <div>
//                     <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
//                       {property.title}
//                     </h3>
//                     <div className="flex items-center text-muted-foreground text-sm mt-1">
//                       <MapPin className="h-4 w-4 mr-1" />
//                       {property.location}
//                     </div>
//                   </div>

//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <DollarSign className="h-4 w-4 mr-1" />
//                     {property.paymentDetail}
//                   </div>

//                   <div className="flex gap-2 mt-4">
//                     <Button className="flex-1" variant="outline">
//                       View All
//                     </Button>
//                     <Button className="flex-1 gradient-primary">
//                       Claim Property
//                     </Button>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="text-center mt-12">
//           <Button size="lg" variant="outline" className="hover:border-primary hover:text-primary">
//             Load More
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { MapPin } from "lucide-react";
// import { FC } from "react";

// interface AvailableProperty {
//     id: number;
//     title: string;
//     location: string;
//     pricePerMonth: string;
//     image: string;
//     paymentDetail: string[];
//     bedrooms?: string;
//     bathrooms?: string;
//     area?: string;
// }

// export const AvailableProperties: FC = () => {
//     const properties: AvailableProperty[] = [
//         {
//             id: 1,
//             title: "2BHK Apartment at Green Enclave",
//             location: "Kondapur, Hyderabad",
//             pricePerMonth: "₹35,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "2 BHK",
//             bathrooms: "2 Bath",
//             area: "1200 sq ft",
//             paymentDetail: ["EMI options available", "Zero maintenance for 1 year"]
//         },
//         {
//             id: 2,
//             title: "Cozy Studio Apartment",
//             location: "Madhapur, Hyderabad",
//             pricePerMonth: "₹25,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "1 BHK",
//             bathrooms: "1 Bath",
//             area: "600 sq ft",
//             paymentDetail: ["Flexible rental plans", "Furnished available"]
//         },
//         {
//             id: 3,
//             title: "Luxury 3BHK Flat",
//             location: "Jubilee Hills, Hyderabad",
//             pricePerMonth: "₹55,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "3 BHK",
//             bathrooms: "3 Bath",
//             area: "1800 sq ft",
//             paymentDetail: ["Maintenance included", "24/7 Security"]
//         },
//         {
//             id: 4,
//             title: "1BHK Affordable Home",
//             location: "Gachibowli, Hyderabad",
//             pricePerMonth: "₹18,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "1 BHK",
//             bathrooms: "1 Bath",
//             area: "700 sq ft",
//             paymentDetail: ["No brokerage", "Close to IT hub"]
//         },
//         {
//             id: 5,
//             title: "Premium Villa with Garden",
//             location: "Shamshabad, Hyderabad",
//             pricePerMonth: "₹1,20,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "4 BHK",
//             bathrooms: "4 Bath",
//             area: "3500 sq ft",
//             paymentDetail: ["Fully furnished", "Private parking"]
//         },
//         {
//             id: 6,
//             title: "Smart 2BHK at Tech Towers",
//             location: "HITEC City, Hyderabad",
//             pricePerMonth: "₹40,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "2 BHK",
//             bathrooms: "2 Bath",
//             area: "1100 sq ft",
//             paymentDetail: ["IoT-enabled smart home", "Gym access included"]
//         },
//         {
//             id: 7,
//             title: "Family 4BHK Duplex",
//             location: "Kukatpally, Hyderabad",
//             pricePerMonth: "₹70,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "4 BHK",
//             bathrooms: "3 Bath",
//             area: "2400 sq ft",
//             paymentDetail: ["Parking included", "Children play area"]
//         },
//         {
//             id: 8,
//             title: "Modern 1BHK Studio",
//             location: "Begumpet, Hyderabad",
//             pricePerMonth: "₹22,000 / Month",
//             image: "/api/placeholder/400/300",
//             bedrooms: "1 BHK",
//             bathrooms: "1 Bath",
//             area: "650 sq ft",
//             paymentDetail: ["Close to metro station", "Furnished option available"]
//         }

//         // add more...
//     ];

//     return (
//         <section className="py-16 bg-muted">
//             <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
//                     Availability of Properties
//                 </h2>

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {properties.map((property) => (
//                         <Card key={property.id} className="overflow-hidden">
//                             <CardContent className="p-6 flex gap-4">
//                                 {/* Left side image */}
//                                 <div className="w-1/3 flex items-center justify-center bg-primary/10">
//                                     <span className="text-sm text-muted-foreground">Image</span>
//                                 </div>

//                                 {/* Right side details */}
//                                 <div className="w-2/3 space-y-3">
//                                     <h3 className="font-bold text-lg">{property.title}</h3>
//                                     <div className="flex items-center text-sm text-muted-foreground">
//                                         <MapPin className="h-4 w-4 mr-1" />
//                                         {property.location}
//                                     </div>

//                                     {/* Small detail boxes */}
//                                     <div className="flex gap-2 text-xs">
//                                         <span className="px-2 py-1 border rounded">{property.bedrooms}</span>
//                                         <span className="px-2 py-1 border rounded">{property.bathrooms}</span>
//                                     </div>

//                                     {/* Area box */}
//                                     <div className="text-xs px-2 py-1 border rounded w-fit">
//                                         {property.area}
//                                     </div>

//                                     {/* Price + View All */}
//                                     <div className="flex justify-between items-center mt-2">
//                                         <span className="font-semibold text-primary">
//                                             {property.pricePerMonth}
//                                         </span>
//                                         <Button variant="link" className="p-0 h-auto text-sm">
//                                             View All
//                                         </Button>
//                                     </div>

//                                     {/* Payment Details */}
//                                     <div className="space-y-1">
//                                         <p className="text-sm font-medium">Payment Detail</p>
//                                         {property.paymentDetail.map((detail, i) => (
//                                             <div
//                                                 key={i}
//                                                 className="w-full h-6 bg-muted-foreground/10 rounded px-2 flex items-center text-xs text-muted-foreground"
//                                             >
//                                                 {detail}
//                                             </div>
//                                         ))}
//                                     </div>

//                                     {/* Claim Property Button */}
//                                     <Button className="w-full mt-3 gradient-primary">
//                                         Claim Property
//                                     </Button>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>

//                 <div className="text-center mt-12">
//                     <Button size="lg" variant="outline" className="hover:border-primary hover:text-primary">
//                         Load More
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// };
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { FC, useState } from "react";

interface AvailableProperty {
  id: number;
  title: string;
  location: string;
  pricePerMonth: string;
  image: string;
  paymentDetail: string[];
  bedrooms?: string;
  bathrooms?: string;
  area?: string;
}

export const AvailableProperties: FC = () => {
  const properties: AvailableProperty[] = [
    {
      id: 1,
      title: "2BHK Apartment at Green Enclave",
      location: "Kondapur, Hyderabad",
      pricePerMonth: "₹35,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "2 BHK",
      bathrooms: "2 Bath",
      area: "1200 sq ft",
      paymentDetail: ["EMI options available", "Zero maintenance for 1 year"]
    },
    {
      id: 2,
      title: "Cozy Studio Apartment",
      location: "Madhapur, Hyderabad",
      pricePerMonth: "₹25,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "1 BHK",
      bathrooms: "1 Bath",
      area: "600 sq ft",
      paymentDetail: ["Flexible rental plans", "Furnished available"]
    },
    {
      id: 3,
      title: "Luxury 3BHK Flat",
      location: "Jubilee Hills, Hyderabad",
      pricePerMonth: "₹55,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "3 BHK",
      bathrooms: "3 Bath",
      area: "1800 sq ft",
      paymentDetail: ["Maintenance included", "24/7 Security"]
    },
    {
      id: 4,
      title: "1BHK Affordable Home",
      location: "Gachibowli, Hyderabad",
      pricePerMonth: "₹18,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "1 BHK",
      bathrooms: "1 Bath",
      area: "700 sq ft",
      paymentDetail: ["No brokerage", "Close to IT hub"]
    },
    {
      id: 5,
      title: "Premium Villa with Garden",
      location: "Shamshabad, Hyderabad",
      pricePerMonth: "₹1,20,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "4 BHK",
      bathrooms: "4 Bath",
      area: "3500 sq ft",
      paymentDetail: ["Fully furnished", "Private parking"]
    },
    {
      id: 6,
      title: "Smart 2BHK at Tech Towers",
      location: "HITEC City, Hyderabad",
      pricePerMonth: "₹40,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "2 BHK",
      bathrooms: "2 Bath",
      area: "1100 sq ft",
      paymentDetail: ["IoT-enabled smart home", "Gym access included"]
    },
    {
      id: 7,
      title: "Family 4BHK Duplex",
      location: "Kukatpally, Hyderabad",
      pricePerMonth: "₹70,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "4 BHK",
      bathrooms: "3 Bath",
      area: "2400 sq ft",
      paymentDetail: ["Parking included", "Children play area"]
    },
    {
      id: 8,
      title: "Modern 1BHK Studio",
      location: "Begumpet, Hyderabad",
      pricePerMonth: "₹22,000 / Month",
      image: "/api/placeholder/400/300",
      bedrooms: "1 BHK",
      bathrooms: "1 Bath",
      area: "650 sq ft",
      paymentDetail: ["Close to metro station", "Furnished option available"]
    }
  ];

  // State to manage how many cards to show
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4); // har click pe 4 aur cards dikhao
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Availability of Properties
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {properties.slice(0, visibleCount).map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <CardContent className="p-6 flex gap-4">
                {/* Left side image */}
                <div className="w-1/3 flex items-center justify-center bg-primary/10">
                  <span className="text-sm text-muted-foreground">Image</span>
                </div>

                {/* Right side details */}
                <div className="w-2/3 space-y-3">
                  <h3 className="font-bold text-lg">{property.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </div>

                  {/* Small detail boxes */}
                  <div className="flex gap-2 text-xs">
                    <span className="px-2 py-1 border rounded">{property.bedrooms}</span>
                    <span className="px-2 py-1 border rounded">{property.bathrooms}</span>
                  </div>

                  {/* Area box */}
                  <div className="text-xs px-2 py-1 border rounded w-fit">
                    {property.area}
                  </div>

                  {/* Price + View All */}
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold text-primary">
                      {property.pricePerMonth}
                    </span>
                    <Button variant="link" className="p-0 h-auto text-sm">
                      View All
                    </Button>
                  </div>

                  {/* Payment Details */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium">Payment Detail</p>
                    {property.paymentDetail.map((detail, i) => (
                      <div
                        key={i}
                        className="w-full h-6 bg-muted-foreground/10 rounded px-2 flex items-center text-xs text-muted-foreground"
                      >
                        {detail}
                      </div>
                    ))}
                  </div>

                  {/* Claim Property Button */}
                  <Button className="w-full mt-3 gradient-primary">
                    Claim Property
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < properties.length && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="hover:border-primary hover:text-primary"
              onClick={handleLoadMore}
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailableProperties;