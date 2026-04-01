import { Recycle, Github, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-10 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Recycle className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">EcoExchange</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming waste into opportunity through intelligent circular economy solutions.
            </p>
            <div className="flex gap-3">
              {[Github, Twitter, Mail].map((Icon, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 cursor-pointer transition-colors">
                  <Icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </div>
              ))}
            </div>
          </div>

          {[
            { title: "Platform", items: ["How it Works", "Pricing", "Safety", "Guidelines"] },
            { title: "Community", items: ["Success Stories", "Blog", "Events", "Partners"] },
            { title: "Support", items: ["Help Center", "Contact Us", "Privacy", "Terms"] },
          ].map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-3 sm:mb-4 text-sm uppercase tracking-wider text-muted-foreground">{section.title}</h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item} className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 mt-10 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 EcoExchange. Building a sustainable future together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
