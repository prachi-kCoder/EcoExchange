import { Camera, Search, DollarSign, BarChart3, Users, MapPin } from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Smart Listing",
    description: "Upload images and let AI automatically categorize and enhance your item descriptions.",
    color: "primary"
  },
  {
    icon: Search,
    title: "Intelligent Discovery",
    description: "Find exactly what you need with our semantic search and personalized recommendations.",
    color: "secondary"
  },
  {
    icon: DollarSign,
    title: "AI-Driven Pricing",
    description: "Get fair, data-backed price suggestions based on market conditions and item value.",
    color: "accent"
  },
  {
    icon: BarChart3,
    title: "Impact Tracking",
    description: "Visualize your environmental impact and contribution to the circular economy.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with repair services, upcycling artists, and like-minded eco-warriors.",
    color: "secondary"
  },
  {
    icon: MapPin,
    title: "Local Services",
    description: "Discover nearby repair shops, recycling centers, and sustainable services.",
    color: "accent"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powered by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI and ML capabilities make circular economy trading effortless, 
            transparent, and impactful for everyone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                feature.color === 'primary' ? 'bg-primary/10' :
                feature.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
              }`}>
                <feature.icon className={`w-6 h-6 ${
                  feature.color === 'primary' ? 'text-primary' :
                  feature.color === 'secondary' ? 'text-secondary' : 'text-accent'
                }`} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;