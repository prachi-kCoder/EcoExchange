import { Recycle, Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Recycle className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">EcoExchange</span>
            </div>
            <p className="text-muted-foreground">
              Transforming waste into opportunity through intelligent circular economy solutions.
            </p>
            <div className="flex space-x-4">
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Mail className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="hover:text-primary cursor-pointer transition-colors">How it Works</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Pricing</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Safety</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Guidelines</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="hover:text-primary cursor-pointer transition-colors">Success Stories</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Blog</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Events</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Partners</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-muted-foreground">
              <div className="hover:text-primary cursor-pointer transition-colors">Help Center</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Contact Us</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Privacy</div>
              <div className="hover:text-primary cursor-pointer transition-colors">Terms</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 EcoExchange. Building a sustainable future together.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;