// import { useState, FC } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Search, MapPin, Home, CheckCircle, MessageCircle } from "lucide-react";
// import heroImage from "@/assets/hero-buildings.jpg";

// export const HeroSection: FC = () => {
//   const [searchType, setSearchType] = useState<string>("search");

//   return (
//     <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 gradient-hero opacity-70" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
//           {/* Hero Text */}
//           <div className="space-y-4">
//             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//               Find Your
//               <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-glow">
//                 Dream Home
//               </span>
//             </h1>
//             <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
//               Discover premium properties, track availability, and connect with trusted builders in one seamless platform.
//             </p>
//           </div>

//           {/* AI Chat CTA */}
//           <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//             <Button size="lg" variant="hero" className="text-lg px-8 py-4 animate-float">
//               <MessageCircle className="mr-2 h-5 w-5" />
//               Chat with AI Assistant
//             </Button>
//             <p className="text-white/80 text-sm">
//               Get instant property recommendations
//             </p>
//           </div>

//           {/* Search Interface */}
//           <Card className="bg-white/95 backdrop-blur-sm shadow-strong p-6 md:p-8 animate-slide-up w-full max-w-4xl mx-auto h-[300px] flex flex-col overflow-y-auto">
//             <Tabs value={searchType} onValueChange={setSearchType} className="w-full">
//               <TabsList className="grid w-full grid-cols-3 mb-6">
//                 <TabsTrigger value="search" className="flex items-center gap-2">
//                   <Search className="h-4 w-4" />
//                   Property Search
//                 </TabsTrigger>
//                 <TabsTrigger value="availability" className="flex items-center gap-2">
//                   <CheckCircle className="h-4 w-4" />
//                   Check Availability
//                 </TabsTrigger>
//                 <TabsTrigger value="services" className="flex items-center gap-2">
//                   <Home className="h-4 w-4" />
//                   Services
//                 </TabsTrigger>
//               </TabsList>

//               <TabsContent value="search" className="space-y-4">
//                 <div className="grid md:grid-cols-4 gap-4">
//                   <Input
//                     placeholder="Any Type"
//                     className="h-12"
//                   />
//                   <div className="relative">
//                     <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       placeholder="Location"
//                       className="pl-10 h-12"
//                     />
//                   </div>


//                   <Input
//                     placeholder="Budget Range"
//                     className="h-12"
//                   />
//                   <Input
//                     placeholder="List Type"
//                     className="h-12"
//                   />
//                   <div className="flex justify-center col-span-3">
//                     <Button className="h-12 gradient-primary">
//                       <CheckCircle className="mr-2 h-4 w-4" />
//                       Check Status
//                     </Button>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-2 mt-4">
//                   {["1 BHK", "2 BHK", "3 BHK", "Villa", "Plot", "Commercial"].map((type) => (
//                     <Button key={type} variant="outline" size="sm" className="hover:border-primary hover:text-primary">
//                       {type}
//                     </Button>
//                   ))}
//                 </div>
//               </TabsContent>

//               <TabsContent value="availability" className="space-y-4">
//                 <div className="grid md:grid-cols-3 gap-4">
//                   <Input
//                     placeholder="Project Name"
//                     className="h-12"
//                   />
//                   <Input
//                     placeholder="Builder Name"
//                     className="h-12"
//                   />
//                   <Input
//                     placeholder="Unit Number (Optional)"
//                     className="h-12"
//                   />
//                   <div className="flex justify-center col-span-3">
//                     <Button className="h-12 gradient-primary">
//                       <CheckCircle className="mr-2 h-4 w-4" />
//                       Check Status
//                     </Button>
//                   </div>

//                 </div>
//                 <p className="text-sm text-muted-foreground text-left">
//                   Enter project name to see all available units, or include unit number for specific status.
//                 </p>
//               </TabsContent>

//               <TabsContent value="services" className="space-y-4">
//                 <div className="grid md:grid-cols-2 gap-4">
//                   <Input
//                     placeholder="Service Type"
//                     className="h-12"
//                   />
//                   <Button className="h-12 gradient-primary">
//                     <Home className="mr-2 h-4 w-4" />
//                     Find Services
//                   </Button>
//                 </div>
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">
//                   {["Interior Design", "Legal Services", "Home Loans", "Property Management"].map((service) => (
//                     <Button key={service} variant="outline" size="sm" className="hover:border-primary hover:text-primary">
//                       {service}
//                     </Button>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState, FC } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Home, CheckCircle, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-buildings.jpg";

export const HeroSection: FC = () => {
  const [searchType, setSearchType] = useState<string>("search");

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 gradient-hero opacity-70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Hero Text */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Find Your
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent animate-glow">
                Dream Home
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Discover premium properties, track availability, and connect with trusted builders in one seamless platform.
            </p>
          </div>

          {/* AI Chat CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4 animate-float flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat with AI Assistant
            </Button>
            <p className="text-white/80 text-sm">
              Get instant property recommendations
            </p>
          </div>

          {/* Search Interface */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-strong p-6 md:p-8 animate-slide-up w-full max-w-4xl mx-auto h-[250px] flex flex-col overflow-y-auto">
            <Tabs value={searchType} onValueChange={setSearchType} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="search" className="flex items-center gap-2">
                  <Search className="h-4 w-4" />
                  Property Search
                </TabsTrigger>
                <TabsTrigger value="availability" className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Check Availability
                </TabsTrigger>
                <TabsTrigger value="services" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Services
                </TabsTrigger>
              </TabsList>

              {/* Property Search Tab */}
              <TabsContent value="search" className="space-y-4">
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-start">
                    <label htmlFor="property-type" className="text-sm font-medium text-gray-800 mb-1 ml-2">
                      Property Type
                    </label>
                    <Input id="property-type" placeholder="Any Type" className="h-12" />
                  </div>

                  <div className="flex flex-col items-start relative">
                    <label htmlFor="location" className="text-sm font-medium text-gray-800 mb-1 ml-2">
                      Location
                    </label>
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="location" placeholder="Location" className="pl-10 h-12" />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="budget-range" className="text-sm font-medium text-gray-800 mb-1 ml-2">
                      Budget Range
                    </label>
                    <Input id="budget-range" placeholder="Budget Range" className="h-12" />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="list-type" className="text-sm font-medium text-gray-800 mb-1 ml-2">
                      List Type
                    </label>
                    <Input id="list-type" placeholder="List Type" className="h-12" />
                  </div>
                </div>


                {/* Centered Button */}
                <div className="flex justify-center w-full mt-4">
                  <Button className="h-12 gradient-primary flex items-center gap-2 px-4">
                    <CheckCircle className="h-4 w-4" />
                    Search Providers
                  </Button>
                </div>

                {/* <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {["1 BHK", "2 BHK", "3 BHK", "Villa", "Plot", "Commercial"].map((type) => (
                    <Button key={type} variant="outline" size="sm" className="hover:border-primary hover:text-primary">
                      {type}
                    </Button>
                  ))}
                </div> */}
              </TabsContent>

              {/* Availability Tab */}
              <TabsContent value="availability" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-start">
                    <label htmlFor="project-name" className="text-sm font-medium text-gray-800 mb-1 ml-2">
                      Project Name
                    </label>
                    <Input id="project-name" placeholder="Project Name" className="h-12" />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="builder-name" className="text-sm font-medium text-gray-800 mb-1 ml-2">
                      Builder Name
                    </label>
                    <Input id="builder-name" placeholder="Builder Name" className="h-12" />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="unit-number" className="text-sm font-medium text-gray-800 mb-1  ml-2">
                      Unit Number
                    </label>
                    <Input id="unit-number" placeholder="Unit Number" className="h-12" />
                  </div>
                </div>

                {/* Centered Button */}
                <div className="flex justify-center w-full mt-4">
                  <Button className="h-12 gradient-primary flex items-center gap-2 px-4">
                    <CheckCircle className="h-4 w-4" />
                    Track Availability
                  </Button>
                </div>

                {/* <p className="text-sm text-muted-foreground text-left">
                  Enter project name to see all available units, or include unit number for specific status.
                </p> */}
              </TabsContent>

              {/* Services Tab */}
              <TabsContent value="services" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex flex-col items-start">
                    <label htmlFor="service-type" className="text-sm font-medium text-dark mb-1 ml-2">
                      Service Type
                    </label>
                    <Input id="service-type" placeholder="Select Service Type" className="h-12" />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="location" className="text-sm font-medium text-dark mb-1 ml-2">
                      Location
                    </label>
                    <Input id="location" placeholder="Any Location" className="h-12" />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="min-rating" className="text-sm font-medium text-dark mb-1 ml-2">
                      Minimum Rating
                    </label>
                    <Input id="min-rating" placeholder="Min Rating" className="h-12" />
                  </div>
                </div>
                {/* Centered Button */}
                <div className="flex justify-center w-full mt-4">
                  <Button className="h-12 gradient-primary flex items-center gap-2 px-4">
                    <Home className="h-4 w-4" />
                    Find Services
                  </Button>
                </div>

                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4 justify-center">
                  {["Interior Design", "Legal Services", "Home Loans", "Property Management"].map((service) => (
                    <Button key={service} variant="outline" size="sm" className="hover:border-primary hover:text-primary">
                      {service}
                    </Button>
                  ))}
                </div> */}
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </div>
    </section>
  );
};
