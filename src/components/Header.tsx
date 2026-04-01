import { Button } from "@/components/ui/button";
import { Search, User, Plus, ArrowLeft, Menu, X, Home } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === "/";
  const isMobile = useIsMobile();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: `Found 3 intelligent matches`,
        description: `Semantic search found items matching "${searchQuery}"`,
      });
      setMobileSearchOpen(false);
    }
  };

  const navLinks = [
    { to: "/", label: "Home", icon: Home },
    { to: "/list-item", label: "List Item", icon: Plus },
    { to: "/profile", label: "Profile", icon: User },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/50 transition-all duration-300">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-2">
        {/* Left: Back + Logo */}
        <div className="flex items-center gap-2 min-w-0">
          {!isHomePage && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="rounded-full shrink-0 hover:bg-primary/10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
          )}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-sm">
              <div className="w-4 h-4 rounded-full border-2 border-white/90" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden xs:inline">
              EcoExchange
            </span>
          </Link>
        </div>

        {/* Center: Search (desktop) */}
        <div className="flex-1 max-w-lg mx-2 hidden md:block">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items, services, materials..."
              className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border/50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all text-sm"
            />
          </form>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Mobile search toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden hover:bg-primary/10"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            {mobileSearchOpen ? <X className="w-4 h-4" /> : <Search className="w-4 h-4" />}
          </Button>

          {/* Desktop nav */}
          <div className="hidden sm:flex items-center gap-1.5">
            {!isHomePage && (
              <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary/10" asChild>
                <Link to="/">
                  <Home className="w-4 h-4 mr-1.5" />
                  Home
                </Link>
              </Button>
            )}
            <Button variant="default" size="sm" className="rounded-full shadow-sm" asChild>
              <Link to="/list-item">
                <Plus className="w-4 h-4 mr-1.5" />
                List Item
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10" asChild>
              <Link to="/profile">
                <User className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full sm:hidden hover:bg-primary/10">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 pt-12">
              <nav className="flex flex-col gap-2">
                {navLinks.map(({ to, label, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      location.pathname === to
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Mobile search bar */}
      {mobileSearchOpen && (
        <div className="md:hidden px-4 pb-3 animate-fade-in">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search items, services..."
              autoFocus
              className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border/50 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all text-sm"
            />
          </form>
        </div>
      )}
    </header>
  );
};

export default Header;
