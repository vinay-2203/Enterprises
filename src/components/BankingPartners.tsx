import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Landmark, CreditCard, Shield, Percent, TrendingDown, CheckCircle, LucideIcon } from "lucide-react";
import { FC } from "react";

// Define TypeScript interfaces
interface BankPartner {
  name: string;
  logo: string;
  interestRate: string;
  processingFee: string;
  maxLoanAmount: string;
  features: string[];
}

interface LoanBenefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const BankingPartners: FC = () => {
  const bankPartners: BankPartner[] = [
    {
      name: "State Bank of India",
      logo: "🏦",
      interestRate: "8.5%",
      processingFee: "0.5%",
      maxLoanAmount: "₹5 Cr",
      features: ["Quick Approval", "Lowest Rates", "Digital Process"]
    },
    {
      name: "HDFC Bank",
      logo: "🏛️",
      interestRate: "8.75%",
      processingFee: "0.5%",
      maxLoanAmount: "₹10 Cr",
      features: ["Express Approval", "Flexi EMI", "Top-up Loans"]
    },
    {
      name: "ICICI Bank",
      logo: "🏢",
      interestRate: "8.9%",
      processingFee: "0.5%",
      maxLoanAmount: "₹7.5 Cr",
      features: ["Same Day Approval", "Pre-approved Loans", "Balance Transfer"]
    },
    {
      name: "Axis Bank",
      logo: "🌟",
      interestRate: "9.0%",
      processingFee: "0.5%",
      maxLoanAmount: "₹5 Cr",
      features: ["Quick Disbursal", "Competitive Rates", "Minimal Documentation"]
    },
    {
      name: "LIC Housing Finance",
      logo: "🛡️",
      interestRate: "8.6%",
      processingFee: "0.5%",
      maxLoanAmount: "₹3 Cr",
      features: ["Special Rates", "Long Tenure", "Flexible EMI"]
    },
    {
      name: "PNB Housing Finance",
      logo: "🏠",
      interestRate: "8.8%",
      processingFee: "0.5%",
      maxLoanAmount: "₹4 Cr",
      features: ["Zero Processing Fee", "Fast Track", "EMI Holiday"]
    }
  ];

  const loanBenefits: LoanBenefit[] = [
    {
      icon: TrendingDown,
      title: "Lowest Interest Rates",
      description: "Starting from 8.5% per annum"
    },
    {
      icon: CheckCircle,
      title: "Quick Approval",
      description: "Get approved in 24-48 hours"
    },
    {
      icon: Shield,
      title: "Secure Process",
      description: "100% safe and encrypted"
    },
    {
      icon: Percent,
      title: "Zero Hidden Charges",
      description: "Transparent fee structure"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 via-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2">
            <Landmark className="h-4 w-4 mr-2" />
            Banking Partners
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
              Trusted Home Loan Partners
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Get the best home loan deals with our verified banking partners. Compare rates, apply online, and get instant approval.
          </p>
        </div>

        {/* Loan Benefits */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {loanBenefits.map((benefit, index) => (
            <Card 
              key={index}
              className="text-center p-6 hover:shadow-medium transition-all hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>

        {/* Bank Partners */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {bankPartners.map((bank, index) => (
            <Card 
              key={index}
              className="hover:shadow-strong transition-all hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{bank.logo}</div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                    {bank.name}
                  </h3>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Interest Rate</span>
                    <span className="font-semibold text-green-600">{bank.interestRate} p.a.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Processing Fee</span>
                    <span className="font-semibold">{bank.processingFee}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Max Loan</span>
                    <span className="font-semibold text-primary">{bank.maxLoanAmount}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Key Features:</p>
                  <div className="flex flex-wrap gap-1">
                    {bank.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 gradient-primary">
                    Apply Now
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 hover:border-primary">
                    Compare
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-transparent to-primary-light/10 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need Help Finding the Right Loan?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our loan experts will help you compare offers and choose the best home loan with the lowest interest rates and fastest approval.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary">
                <CreditCard className="mr-2 h-5 w-5" />
                Calculate EMI
              </Button>
              <Button size="lg" variant="outline" className="hover:border-primary hover:text-primary">
                Talk to Expert
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};