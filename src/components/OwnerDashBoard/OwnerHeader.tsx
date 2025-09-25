import { useState, FC } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, MessageCircle, Building2, Search, ChevronDown } from "lucide-react";
import { LoginDialog } from "../LoginDialog";

export const OwnerHeader: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [showLoginDialog, setShowLoginDialog] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
        <div className="flex items-center space-x-2">
            <img 
              src="/Media/Svg Logo/Dark Format Logo.svg" 
              alt="Nestbooking" 
              className="h-8" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 flex-wrap gap-4">
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
              <span>Home Loan</span>
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
             <span>Dashboard</span>
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
             <span>Hire Broker</span>
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
                <span>Claim Your Property</span>
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-smooth">
              <span>List your projects with us</span>
            </a>
            <div className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-smooth cursor-pointer">
              <MessageCircle className="h-4 w-4" />
              <span>AI Chat</span>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="premium" 
              size="sm"
              onClick={() => setShowLoginDialog(true)}
            >
              Owner Dashboard
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-accent transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-sm font-medium hover:text-primary transition-smooth py-2">
                Dashboard
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-smooth py-2">
                Home Loan
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-smooth py-2">
                Sell Property
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-smooth py-2">
                Pre-Launch
              </a>
              <div className="flex items-center space-x-1 text-sm font-medium hover:text-primary transition-smooth py-2">
                <MessageCircle className="h-4 w-4" />
                <span>AI Chat</span>
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" size="sm">
                  List Your Projects
                </Button>
                <Button variant="ghost" size="sm">
                  Claim Property
                </Button>
                <Button 
                  variant="premium" 
                  size="sm"
                  onClick={() => setShowLoginDialog(true)}
                >
                  Join Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>

      <LoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog} 
      />
    </header>
  );
};

export default OwnerHeader;