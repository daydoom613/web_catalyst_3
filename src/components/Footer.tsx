import { 
  Facebook, Twitter, Instagram, Linkedin, Youtube, 
  Mail, Phone, MapPin, Globe, Star, Shield, Award, Users 
} from "lucide-react";

const footerLinks = {
  Categories: [
    "Graphics & Design",
    "Digital Marketing", 
    "Writing & Translation",
    "Video & Animation",
    "Music & Audio",
    "Programming & Tech",
    "Business",
    "Lifestyle"
  ],
  About: [
    "Careers",
    "Press & News", 
    "Partnerships",
    "Privacy Policy",
    "Terms of Service",
    "Intellectual Property Claims",
    "Investor Relations"
  ],
  Support: [
    "Help & Support",
    "Trust & Safety", 
    "Selling on WorkConnect",
    "Buying on WorkConnect",
    "Community Standards"
  ],
  Community: [
    "Customer Success Stories",
    "Community Hub",
    "Forum",
    "Events",
    "Blog",
    "Influencers",
    "Affiliates",
    "Podcast"
  ],
  Business: [
    "WorkConnect Business",
    "WorkConnect Pro",
    "WorkConnect Logo Maker", 
    "WorkConnect Guides",
    "Get Inspired",
    "WorkConnect Select",
    "ClearVoice",
    "Skill Tests"
  ]
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" }
];

const trustIndicators = [
  { icon: Shield, text: "SSL Secure", description: "Your data is protected" },
  { icon: Award, text: "Quality Guaranteed", description: "100% satisfaction promise" },
  { icon: Users, text: "2M+ Users", description: "Trusted worldwide" },
  { icon: Star, text: "4.9 Rating", description: "Excellent service" }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface-elevated to-surface opacity-95"></div>
      
      <div className="relative z-10">
        {/* Newsletter Section */}
        <section className="py-16 border-b border-glass-border">
          <div className="container mx-auto px-6">
            <div className="glass-card p-8 lg:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4 gradient-text">
                Stay in the loop
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and be the first to know about new features, 
                exclusive offers, and success stories from our community.
              </p>
              
              <div className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-surface/50 border border-glass-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent text-foreground"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-primary rounded-xl font-medium hover:shadow-glow hover-lift transition-all">
                  Subscribe
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Join 500K+ subscribers. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>

        {/* Main Footer Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-6 gap-12">
              {/* Brand Column */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <div className="text-3xl font-space-grotesk font-bold gradient-text mb-4">
                    WorkConnect
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    The world's largest marketplace for digital services. 
                    Connecting businesses with talented freelancers worldwide.
                  </p>
                </div>
                
                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>San Francisco, CA & Global</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>support@workconnect.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>190+ countries served</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-center space-x-2 text-xs">
                      <indicator.icon className="w-4 h-4 text-primary" />
                      <div>
                        <div className="font-medium">{indicator.text}</div>
                        <div className="text-muted-foreground">{indicator.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links Columns */}
              {Object.entries(footerLinks).map(([category, links], index) => (
                <div key={category} className="space-y-4" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="font-semibold text-foreground">{category}</h4>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#" 
                          className="text-muted-foreground hover:text-foreground transition-colors hover-lift text-sm block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <section className="py-8 border-t border-glass-border">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-sm text-muted-foreground">
                © 2024 WorkConnect Ltd. All rights reserved.
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground mr-2">Follow us:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 glass rounded-lg hover:bg-primary/20 hover-lift transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>

              {/* Language/Currency */}
              <div className="flex items-center space-x-4 text-sm">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>English</span>
                </button>
                <span className="text-muted-foreground">|</span>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  USD
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Floating Action Button */}
        <button className="fixed bottom-6 right-6 p-4 bg-gradient-primary rounded-full shadow-glow hover:shadow-xl hover-lift transition-all z-50">
          <Mail className="w-6 h-6 text-white" />
        </button>
      </div>
    </footer>
  );
}