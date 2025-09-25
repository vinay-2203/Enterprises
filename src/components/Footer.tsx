import { Building2, Mail, Phone, MapPin, MessageCircle, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { FC } from "react";

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                NestBooking
              </span>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              India's leading real estate platform connecting buyers, builders, and channel partners. Find your dream home with trusted developers and transparent processes.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">info@nestbooking.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">+91 9876 543 210</span>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                <span className="text-sm">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "Property Search",
                "Check Availability", 
                "Pre-Launch Projects",
                "Home Loans",
                "Sell Property",
                "Property Management",
                "Investment Calculator",
                "Market Insights"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-6">For Partners</h3>
            <ul className="space-y-3">
              {[
                "Builder Registration",
                "Channel Partner Program", 
                "RERA Verification",
                "CRM Platform",
                "Lead Management",
                "Marketing Tools",
                "Commission Tracking",
                "Support Center"
              ].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
            <p className="text-slate-300 text-sm mb-4">
              Get the latest property updates, market insights, and exclusive deals.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button className="w-full gradient-primary">
                Subscribe Now
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, name: "Facebook" },
                  { icon: Twitter, name: "Twitter" },
                  { icon: Linkedin, name: "LinkedIn" },
                  { icon: Instagram, name: "Instagram" }
                ].map(({ icon: Icon, name }) => (
                  <a
                    key={name}
                    href="#"
                    className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                    aria-label={name}
                  >
                    <Icon className="h-4 w-4 text-slate-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat CTA */}
      <div className="border-t border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card className="bg-gradient-to-r from-primary/20 to-primary-light/20 border-primary/30">
            <div className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Need Instant Help?</h3>
              <p className="text-slate-300 mb-4">
                Chat with our AI assistant for property recommendations, availability checks, and expert guidance.
              </p>
              <Button variant="premium" size="lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                Start AI Chat
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-slate-400">
              © {currentYear} NestBooking. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service", 
                "Cookie Policy",
                "RERA Compliance",
                "Refund Policy"
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-slate-400 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};