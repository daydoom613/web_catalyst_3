import { useState } from "react";
import { Search, MessageCircle, CreditCard, CheckCircle, Star, Shield, Clock, Award } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Browse & Discover",
    description: "Explore thousands of services across 500+ categories. Use filters to find exactly what you need.",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    details: [
      "Advanced search filters",
      "Category browsing", 
      "Professional portfolios",
      "Real client reviews"
    ]
  },
  {
    id: 2,
    title: "Connect & Discuss",
    description: "Message freelancers directly. Discuss your project requirements and get custom quotes.",
    icon: MessageCircle,
    color: "from-green-500 to-teal-500", 
    details: [
      "Direct messaging",
      "Custom proposals",
      "Project timeline discussion",
      "Requirements clarification"
    ]
  },
  {
    id: 3,
    title: "Order & Pay Securely",
    description: "Place your order with confidence. Your payment is protected until you're completely satisfied.",
    icon: CreditCard,
    color: "from-purple-500 to-pink-500",
    details: [
      "Secure payment processing",
      "Milestone-based payments",
      "Escrow protection",
      "Multiple payment methods"
    ]
  },
  {
    id: 4,
    title: "Receive & Review",
    description: "Get your completed work on time. Review and request revisions if needed.",
    icon: CheckCircle,
    color: "from-orange-500 to-red-500",
    details: [
      "Quality delivery",
      "Revision rounds included",
      "Final approval process",
      "Rate your experience"
    ]
  }
];

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your payments are protected with our secure escrow system"
  },
  {
    icon: Clock,
    title: "On-Time Delivery", 
    description: "96% of projects are delivered on time or early"
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Get unlimited revisions until you're 100% satisfied"
  },
  {
    icon: Star,
    title: "Top Talent",
    description: "Work with verified professionals with proven track records"
  }
];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            How <span className="gradient-text">WorkConnect</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Getting started is simple. Follow these four easy steps to connect with talented professionals 
            and bring your projects to life.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {/* Step Navigation */}
          <div className="flex flex-wrap justify-center mb-12">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => setActiveStep(step.id)}
                  className={`relative p-4 rounded-full transition-all hover-lift ${
                    activeStep === step.id 
                      ? 'glass glow-primary' 
                      : 'glass hover:bg-surface-elevated'
                  }`}
                >
                  <div className={`p-3 rounded-full bg-gradient-to-r ${step.color}`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  {activeStep === step.id && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  )}
                </button>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-16 h-0.5 bg-gradient-to-r from-muted to-muted-foreground/20 mx-4"></div>
                )}
              </div>
            ))}
          </div>

          {/* Active Step Content */}
          {steps.map((step) => (
            activeStep === step.id && (
              <div key={step.id} className="glass-card p-8 md:p-12 animate-scale-in">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color}`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">Step {step.id}</div>
                        <h3 className="text-2xl md:text-3xl font-bold gradient-text">{step.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>

                    <button className="px-6 py-3 bg-gradient-primary rounded-xl font-medium hover:shadow-glow hover-lift transition-all">
                      Get Started Now
                    </button>
                  </div>

                  {/* Visual */}
                  <div className="relative">
                    <div className="glass-card p-8 hover-glow">
                      <div className="space-y-4">
                        {/* Mock interface based on step */}
                        {step.id === 1 && (
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-3 bg-surface/30 rounded-lg">
                              <Search className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">Search: "Logo Design"</span>
                            </div>
                            {[1, 2, 3].map((i) => (
                              <div key={i} className="p-4 bg-surface/20 rounded-lg flex items-center space-x-3">
                                <div className="w-12 h-12 bg-gradient-primary rounded-lg"></div>
                                <div className="flex-1">
                                  <div className="h-3 bg-muted/30 rounded mb-2"></div>
                                  <div className="h-2 bg-muted/20 rounded w-2/3"></div>
                                </div>
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                              </div>
                            ))}
                          </div>
                        )}

                        {step.id === 2 && (
                          <div className="space-y-4">
                            <div className="text-right p-3 bg-primary/20 rounded-lg">
                              <div className="text-sm">Hi! I need a logo for my startup...</div>
                            </div>
                            <div className="text-left p-3 bg-surface/30 rounded-lg">
                              <div className="text-sm">I'd love to help! Let me share some ideas...</div>
                            </div>
                            <div className="text-right p-3 bg-primary/20 rounded-lg">
                              <div className="text-sm">Perfect! What's your timeline?</div>
                            </div>
                          </div>
                        )}

                        {step.id === 3 && (
                          <div className="space-y-4">
                            <div className="p-4 border border-success/30 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-medium">Logo Design Package</span>
                                <span className="text-success font-bold">$150</span>
                              </div>
                              <div className="text-sm text-muted-foreground">3 concepts + 2 revisions</div>
                            </div>
                            <button className="w-full p-3 bg-gradient-primary rounded-lg font-medium">
                              Secure Payment
                            </button>
                          </div>
                        )}

                        {step.id === 4 && (
                          <div className="space-y-4">
                            <div className="p-4 bg-success/20 border border-success/30 rounded-lg">
                              <div className="flex items-center space-x-2 mb-2">
                                <CheckCircle className="w-5 h-5 text-success" />
                                <span className="font-medium">Project Completed!</span>
                              </div>
                              <div className="text-sm text-muted-foreground">Your logo is ready for download</div>
                            </div>
                            <div className="flex space-x-2">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <div className="text-sm text-center">Rate your experience</div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Features */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-6 text-center hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 bg-primary/20 rounded-full mb-4 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 gradient-text">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}