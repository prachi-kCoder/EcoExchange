import { Camera, Search, DollarSign, BarChart3, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Camera,
    title: "Smart Listing",
    description: "Upload images and let AI automatically categorize and enhance your item descriptions.",
    color: "primary",
    link: "/list-item"
  },
  {
    icon: Search,
    title: "Intelligent Discovery",
    description: "Find exactly what you need with semantic search and personalized recommendations.",
    color: "secondary",
    link: "/"
  },
  {
    icon: DollarSign,
    title: "AI-Driven Pricing",
    description: "Get fair, data-backed price suggestions based on market conditions and item value.",
    color: "accent",
    link: "/list-item"
  },
  {
    icon: BarChart3,
    title: "Impact Tracking",
    description: "Visualize your environmental impact and contribution to the circular economy.",
    color: "primary",
    link: "/profile"
  },
  {
    icon: Users,
    title: "Community Hub",
    description: "Connect with repair services, upcycling artists, and like-minded eco-warriors.",
    color: "secondary",
    link: "/profile"
  },
  {
    icon: MapPin,
    title: "Local Services",
    description: "Discover nearby repair shops, recycling centers, and sustainable services.",
    color: "accent",
    link: "/"
  }
];

const Features = () => {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Powered by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced AI capabilities make circular economy trading effortless,
            transparent, and impactful.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="group bg-card rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-primary/10"
            >
              <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${
                feature.color === 'primary' ? 'bg-primary/10' :
                feature.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'
              }`}>
                <feature.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                  feature.color === 'primary' ? 'text-primary' :
                  feature.color === 'secondary' ? 'text-secondary' : 'text-accent'
                }`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
