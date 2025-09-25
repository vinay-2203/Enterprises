import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { FC } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  project: string;
}

export const Testimonials: FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Property Investor",
      location: "Bangalore",
      rating: 5,
      text: "NestBooking made my property search incredibly easy. The AI chat feature helped me find the perfect 3BHK apartment in just 2 weeks. The entire booking process was transparent and hassle-free.",
      project: "Prestige Lakeside Habitat"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "First-time Home Buyer",
      location: "Hyderabad",
      rating: 5,
      text: "As a first-time buyer, I was overwhelmed with options. NestBooking's team guided me through every step, from property selection to loan approval. Highly recommended!",
      project: "Brigade Cornerstone Utopia"
    },
    {
      id: 3,
      name: "Amit Patel",
      role: "Builder",
      location: "Pune",
      rating: 5,
      text: "The CRM platform has revolutionized how we manage leads and bookings. Our sales efficiency increased by 40% within the first quarter. Outstanding support team!",
      project: "Using NestBooking CRM"
    },
    {
      id: 4,
      name: "Sneha Reddy",
      role: "Channel Partner",
      location: "Chennai",
      rating: 5,
      text: "Being a RERA certified agent, I love how the platform validates credentials and helps build trust with clients. The commission tracking is transparent and timely.",
      project: "Channel Partner Program"
    },
    {
      id: 5,
      name: "Vikram Singh",
      role: "Property Owner",
      location: "Mumbai",
      rating: 5,
      text: "The property management features are excellent. I can track my investments, rental income, and get market insights all in one place. Very user-friendly interface.",
      project: "Portfolio Management"
    },
    {
      id: 6,
      name: "Kavita Agarwal",
      role: "NRI Investor",
      location: "Dubai",
      rating: 5,
      text: "Investing in Indian real estate from overseas was always challenging. NestBooking's virtual site visits and documentation support made it seamless. Truly global service!",
      project: "Godrej Properties"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {" "}Customers Say
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Join thousands of satisfied customers who found their dream homes and grew their businesses with NestBooking
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="relative overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-2 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                  <Quote className="h-8 w-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-sm leading-relaxed mb-6 text-muted-foreground">
                  "{testimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-muted-foreground">Project:</p>
                      <p className="text-xs font-medium text-primary">{testimonial.project}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="bg-gradient-to-r from-primary/10 via-transparent to-primary-light/10 border-primary/20">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15K+</div>
                <p className="text-sm text-muted-foreground">Happy Reviews</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-sm text-muted-foreground">Customer Satisfaction</p>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
                <p className="text-sm text-muted-foreground">Successful Transactions</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <Button size="lg" className="gradient-primary px-8">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};