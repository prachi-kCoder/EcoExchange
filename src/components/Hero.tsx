import { Button } from "@/components/ui/button";
import { ArrowRight, Recycle, TreePine, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 py-12 sm:py-0 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Transform
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent block">
                Waste into Wonder
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Join the circular economy revolution. Discover, trade, and transform materials
              that would otherwise go to waste into valuable resources.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-hover hover:from-primary-hover hover:to-primary text-primary-foreground rounded-full shadow-soft hover:shadow-medium transition-all group" asChild>
              <Link to="/list-item">
                Start Trading
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/5" asChild>
              <Link to="/profile">View Impact</Link>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-8">
            {[
              { icon: Recycle, value: "50K+", label: "Items Rescued", color: "primary" },
              { icon: TreePine, value: "120T", label: "CO₂ Saved", color: "secondary" },
              { icon: Globe, value: "25K+", label: "Active Users", color: "accent" },
            ].map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="text-center group">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${color}/10 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}`} />
                </div>
                <div className="text-xl sm:text-2xl font-bold text-foreground">{value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
          <div className="relative z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 border border-primary/10 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: "♻️", title: "Recycle", desc: "Give items a second life" },
                { emoji: "🔧", title: "Repair", desc: "Fix & restore value" },
                { emoji: "🎨", title: "Upcycle", desc: "Creative transformation" },
                { emoji: "🤝", title: "Trade", desc: "Community exchange" },
              ].map((item) => (
                <div key={item.title} className="bg-card/80 backdrop-blur-sm rounded-2xl p-5 text-center hover:shadow-medium transition-all hover:-translate-y-1 cursor-default">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="font-semibold text-sm">{item.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
