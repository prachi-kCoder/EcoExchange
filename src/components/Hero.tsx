import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, TreePine, Globe } from "lucide-react";
import heroImage from "@/assets/hero-circular-economy.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transform
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block">
                Waste into Wonder
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join the circular economy revolution. Discover, trade, and transform materials 
              that would otherwise go to waste into valuable resources for tomorrow.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground rounded-xl shadow-soft hover:shadow-medium transition-all group">
              Start Trading
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-xl border-primary/20 hover:bg-primary/5">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Recycle className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground">Items Rescued</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <TreePine className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-2xl font-bold text-foreground">120T</div>
              <div className="text-sm text-muted-foreground">CO₂ Saved</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                <Globe className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">25K+</div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
          <img
            src={heroImage}
            alt="Circular Economy Visualization"
            className="relative z-10 w-full h-auto rounded-3xl shadow-medium"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;