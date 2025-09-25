import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Users, Smartphone, Mail } from "lucide-react";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [userType, setUserType] = useState<string>("");

  const UserTypeCard = ({
    icon: Icon,
    title,
    description,
    value,
    onClick
  }: {
    icon: any;
    title: string;
    description: string;
    value: string;
    onClick: () => void;
  }) => (
    <Card
      className={`p-6 cursor-pointer transition-all hover:shadow-medium border-2 ${userType === value
        ? 'border-primary shadow-medium'
        : 'border-border hover:border-primary/50'
        }`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <Icon className={`h-12 w-12 ${userType === value ? 'text-primary' : 'text-muted-foreground'}`} />
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Join NestBooking
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {!userType ? (
            <div>
              <h3 className="text-lg font-semibold text-center mb-6">Choose your role</h3>
              <div className="grid gap-4">
                <UserTypeCard
                  icon={User}
                  title="Property Owner/Buyer"
                  description="Search properties, manage bookings, and track your investments"
                  value="buyer"
                  onClick={() => setUserType("buyer")}
                />
                <UserTypeCard
                  icon={Building2}
                  title="Builder/Developer"
                  description="Manage projects, track leads, and boost sales with our CRM"
                  value="builder"
                  onClick={() => setUserType("builder")}
                />
                <UserTypeCard
                  icon={Users}
                  title="Channel Partner/Broker"
                  description="Earn commissions by referring qualified leads to projects"
                  value="partner"
                  onClick={() => setUserType("partner")}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {userType === "buyer" && "Property Owner/Buyer Login"}
                  {userType === "builder" && "Builder/Developer Login"}
                  {userType === "partner" && "Channel Partner Login"}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setUserType("")}>
                  Change Role
                </Button>
              </div>

              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>

                {/* Buyer */}
                {userType === "buyer" && (
                  <>
                    <TabsContent value="login" className="space-y-4 p-4 bg-muted/20 rounded-lg">
                      <div className="space-y-2">
                        <Label htmlFor="buyer-username">User Name</Label>
                        <Input id="buyer-username" placeholder="Enter your username" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="buyer-email">Email</Label>
                        <Input id="buyer-email" type="email" placeholder="Enter your email" />
                      </div>
                      <Button className="w-full  text-white">Submit</Button>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="User-Name">UserName</Label>
                          <Input id="User-Name" placeholder="Enter username" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="Name">Name</Label>
                          <Input id="Name" placeholder="Enter your Name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="Number">Mobile Number</Label>
                          <Input id="Number" placeholder="Enter your Mobile Number" />
                        </div>
                        <div className="col-span-2 space-y-2">
                          <Label htmlFor="buyer-password">Password</Label>
                          <Input id="buyer-password" type="password" placeholder="********" />
                        </div>
                      </div>
                      <Button className="w-full  text-white">Register</Button>
                    </TabsContent>
                  </>
                )}

                {/* Builder */}
                {userType === "builder" && (
                  <>
                    <TabsContent value="login" className="space-y-4 p-4 sm:p-6 bg-muted/20 rounded-lg w-full">
                      <div className="space-y-2">
                        <Label htmlFor="User-Name">User Name</Label>
                        <Input id="User-Name"  placeholder="UserName" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="builder-password">Password</Label>
                        <Input id="builder-password" type="password" placeholder="********" />
                      </div>
                      <Button className="w-full text-white">
                        Login as Builder
                      </Button>
                    </TabsContent>

                    {/* Builder Signup (Company Profile) */}
                    <TabsContent value="signup" className="space-y-4 p-4 bg-muted/20 rounded-lg ">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name</Label>
                        <Input id="companyName" placeholder="Your company name" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="builder-phone">Phone Number</Label>
                          <Input id="builder-phone" placeholder="Enter phone number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="builder-email-signup">Email</Label>
                          <Input id="builder-email-signup" type="email" placeholder="Work Email" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="builder-address">Address</Label>
                        <Input id="builder-address" placeholder="Enter full address" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="builder-state">State</Label>
                          <Input id="builder-state" placeholder="Enter state" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="builder-city">City</Label>
                          <Input id="builder-city" placeholder="Enter city" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="builder-zipcode">Zipcode</Label>
                          <Input id="builder-zipcode" placeholder="Enter zipcode" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="builder-about">About Us</Label>
                        <Input id="builder-about" placeholder="Tell us about your company" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="builder-website">Website URL</Label>
                          <Input id="builder-website" placeholder="https://example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="builder-logo">Company Logo</Label>
                          <Input id="builder-logo" type="file" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="builder-password-signup">Password</Label>
                        <Input id="builder-password-signup" type="password" placeholder="********" />
                      </div>

                      <Button className="w-full  text-white">
                        Register Builder
                      </Button>
                    </TabsContent>
                  </>
                )}

                {/* Partner */}
                {userType === "partner" && (
                  <>
                    <TabsContent value="login" className="space-y-4 p-4 bg-muted/20 rounded-lg">
                      <Label htmlFor="partner-email">Email</Label>
                      <Input id="partner-email" type="email" placeholder="Enter email" />
                      <Label htmlFor="partner-password">Password</Label>
                      <Input id="partner-password" type="password" placeholder="********" />
                      <Button className="w-full  text-white">Login as Partner</Button>
                    </TabsContent>

                    <TabsContent value="signup" className="space-y-4">
                      <Label htmlFor="reraId">RERA Agent ID</Label>
                      <Input id="reraId" placeholder="Enter your RERA ID" />
                      <Label htmlFor="reraState">RERA State</Label>
                      <Input id="reraState" placeholder="Select state" />
                      <Label htmlFor="partner-password">Password</Label>
                      <Input id="partner-password" type="password" placeholder="********" />
                      <Button className="w-full  text-white">Register Partner</Button>
                    </TabsContent>
                  </>
                )}
              </Tabs>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};


// import { useState, FC } from "react";
// import { useRouter } from "next/router";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Building2, User, Users } from "lucide-react";

// interface LoginDialogProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
// }

// export const LoginDialog: FC<LoginDialogProps> = ({ open, onOpenChange }) => {
//   const [userType, setUserType] = useState<string>("");
//   const router = useRouter();

//   // ------------------ Dummy Login/Signup Handlers ------------------

//   const handleLogin = (role: string) => {
//     let data: any = {};
//     if (role === "buyer") {
//       data.username = (document.getElementById("buyer-username") as HTMLInputElement)?.value;
//       data.email = (document.getElementById("buyer-email") as HTMLInputElement)?.value;
//       localStorage.setItem("buyerData", JSON.stringify(data));
//       router.push("/owner-dashboard");
//     } else if (role === "builder") {
//       data.username = (document.getElementById("User-Name") as HTMLInputElement)?.value;
//       data.password = (document.getElementById("builder-password") as HTMLInputElement)?.value;
//       localStorage.setItem("builderData", JSON.stringify(data));
//       router.push("/builder-dashboard");
//     } else if (role === "partner") {
//       data.email = (document.getElementById("partner-email") as HTMLInputElement)?.value;
//       data.password = (document.getElementById("partner-password") as HTMLInputElement)?.value;
//       localStorage.setItem("partnerData", JSON.stringify(data));
//       router.push("/partner-dashboard");
//     }
//   };

//   const handleSignup = (role: string) => {
//     let data: any = {};
//     if (role === "buyer") {
//       data.username = (document.getElementById("User-Name") as HTMLInputElement)?.value;
//       data.name = (document.getElementById("Name") as HTMLInputElement)?.value;
//       data.email = (document.getElementById("email") as HTMLInputElement)?.value;
//       data.mobile = (document.getElementById("Number") as HTMLInputElement)?.value;
//       data.password = (document.getElementById("buyer-password") as HTMLInputElement)?.value;
//       localStorage.setItem("buyerData", JSON.stringify(data));
//       router.push("/owner-dashboard");
//     } else if (role === "builder") {
//       data.companyName = (document.getElementById("companyName") as HTMLInputElement)?.value;
//       data.email = (document.getElementById("builder-email-signup") as HTMLInputElement)?.value;
//       data.phone = (document.getElementById("builder-phone") as HTMLInputElement)?.value;
//       data.address = (document.getElementById("builder-address") as HTMLInputElement)?.value;
//       localStorage.setItem("builderData", JSON.stringify(data));
//       router.push("/builder-dashboard");
//     } else if (role === "partner") {
//       data.reraId = (document.getElementById("reraId") as HTMLInputElement)?.value;
//       data.reraState = (document.getElementById("reraState") as HTMLInputElement)?.value;
//       data.password = (document.getElementById("partner-password") as HTMLInputElement)?.value;
//       localStorage.setItem("partnerData", JSON.stringify(data));
//       router.push("/partner-dashboard");
//     }
//   };

//   // ------------------ Role Card Component ------------------

//   const UserTypeCard = ({
//     icon: Icon,
//     title,
//     description,
//     value,
//     onClick,
//   }: {
//     icon: any;
//     title: string;
//     description: string;
//     value: string;
//     onClick: () => void;
//   }) => (
//     <Card
//       className={`p-6 cursor-pointer transition-all hover:shadow-medium border-2 ${
//         userType === value ? "border-primary shadow-medium" : "border-border hover:border-primary/50"
//       }`}
//       onClick={onClick}
//     >
//       <div className="flex flex-col items-center text-center space-y-3">
//         <Icon className={`h-12 w-12 ${userType === value ? "text-primary" : "text-muted-foreground"}`} />
//         <h3 className="font-semibold">{title}</h3>
//         <p className="text-sm text-muted-foreground">{description}</p>
//       </div>
//     </Card>
//   );

//   // ------------------ JSX ------------------

//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl">
//         <DialogHeader>
//           <DialogTitle className="text-center text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
//             Join NestBooking
//           </DialogTitle>
//         </DialogHeader>

//         <div className="space-y-6">
//           {!userType ? (
//             <div>
//               <h3 className="text-lg font-semibold text-center mb-6">Choose your role</h3>
//               <div className="grid gap-4">
//                 <UserTypeCard icon={User} title="Property Owner/Buyer" description="Search properties, manage bookings, and track your investments" value="buyer" onClick={() => setUserType("buyer")} />
//                 <UserTypeCard icon={Building2} title="Builder/Developer" description="Manage projects, track leads, and boost sales with our CRM" value="builder" onClick={() => setUserType("builder")} />
//                 <UserTypeCard icon={Users} title="Channel Partner/Broker" description="Earn commissions by referring qualified leads to projects" value="partner" onClick={() => setUserType("partner")} />
//               </div>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-lg font-semibold">
//                   {userType === "buyer" && "Property Owner/Buyer Login"}
//                   {userType === "builder" && "Builder/Developer Login"}
//                   {userType === "partner" && "Channel Partner Login"}
//                 </h3>
//                 <Button variant="ghost" size="sm" onClick={() => setUserType("")}>
//                   Change Role
//                 </Button>
//               </div>

//               <Tabs defaultValue="login" className="w-full">
//                 <TabsList className="grid w-full grid-cols-2">
//                   <TabsTrigger value="login">Login</TabsTrigger>
//                   <TabsTrigger value="signup">Sign Up</TabsTrigger>
//                 </TabsList>

//                 {/* Buyer */}
//                 {userType === "buyer" && (
//                   <>
//                     <TabsContent value="login" className="space-y-4 p-4 bg-muted/20 rounded-lg">
//                       <div className="space-y-2">
//                         <Label htmlFor="buyer-username">User Name</Label>
//                         <Input id="buyer-username" placeholder="Enter your username" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="buyer-email">Email</Label>
//                         <Input id="buyer-email" type="email" placeholder="Enter your email" />
//                       </div>
//                       <Button className="w-full text-white" onClick={() => handleLogin("buyer")}>Submit</Button>
//                     </TabsContent>

//                     <TabsContent value="signup" className="space-y-4">
//                       <div className="grid grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="User-Name">UserName</Label>
//                           <Input id="User-Name" placeholder="Enter username" />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="email">Email</Label>
//                           <Input id="email" type="email" placeholder="Enter your email" />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="Name">Name</Label>
//                           <Input id="Name" placeholder="Enter your Name" />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="Number">Mobile Number</Label>
//                           <Input id="Number" placeholder="Enter your Mobile Number" />
//                         </div>
//                         <div className="col-span-2 space-y-2">
//                           <Label htmlFor="buyer-password">Password</Label>
//                           <Input id="buyer-password" type="password" placeholder="********" />
//                         </div>
//                       </div>
//                       <Button className="w-full text-white" onClick={() => handleSignup("buyer")}>Register</Button>
//                     </TabsContent>
//                   </>
//                 )}

//                 {/* Builder */}
//                 {userType === "builder" && (
//                   <>
//                     <TabsContent value="login" className="space-y-4 p-4 sm:p-6 bg-muted/20 rounded-lg w-full">
//                       <div className="space-y-2">
//                         <Label htmlFor="User-Name">User Name</Label>
//                         <Input id="User-Name" placeholder="UserName" />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="builder-password">Password</Label>
//                         <Input id="builder-password" type="password" placeholder="********" />
//                       </div>
//                       <Button className="w-full text-white" onClick={() => handleLogin("builder")}>Login as Builder</Button>
//                     </TabsContent>

//                     <TabsContent value="signup" className="space-y-4 p-4 bg-muted/20 rounded-lg">
//                       <div className="space-y-2">
//                         <Label htmlFor="companyName">Company Name</Label>
//                         <Input id="companyName" placeholder="Your company name" />
//                       </div>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div className="space-y-2">
//                           <Label htmlFor="builder-phone">Phone Number</Label>
//                           <Input id="builder-phone" placeholder="Enter phone number" />
//                         </div>
//                         <div className="space-y-2">
//                           <Label htmlFor="builder-email-signup">Email</Label>
//                           <Input id="builder-email-signup" type="email" placeholder="Work Email" />
//                         </div>
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="builder-address">Address</Label>
//                         <Input id="builder-address" placeholder="Enter full address" />
//                       </div>
//                       <Button className="w-full text-white" onClick={() => handleSignup("builder")}>Register Builder</Button>
//                     </TabsContent>
//                   </>
//                 )}

//                 {/* Partner */}
//                 {userType === "partner" && (
//                   <>
//                     <TabsContent value="login" className="space-y-4 p-4 bg-muted/20 rounded-lg">
//                       <Label htmlFor="partner-email">Email</Label>
//                       <Input id="partner-email" type="email" placeholder="Enter email" />
//                       <Label htmlFor="partner-password">Password</Label>
//                       <Input id="partner-password" type="password" placeholder="********" />
//                       <Button className="w-full text-white" onClick={() => handleLogin("partner")}>Login as Partner</Button>
//                     </TabsContent>

//                     <TabsContent value="signup" className="space-y-4">
//                       <Label htmlFor="reraId">RERA Agent ID</Label>
//                       <Input id="reraId" placeholder="Enter your RERA ID" />
//                       <Label htmlFor="reraState">RERA State</Label>
//                       <Input id="reraState" placeholder="Select state" />
//                       <Label htmlFor="partner-password">Password</Label>
//                       <Input id="partner-password" type="password" placeholder="********" />
//                       <Button className="w-full text-white" onClick={() => handleSignup("partner")}>Register Partner</Button>
//                     </TabsContent>
//                   </>
//                 )}
//               </Tabs>
//             </div>
//           )}
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };
