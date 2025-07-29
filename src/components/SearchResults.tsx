import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Clock, TrendingUp } from "lucide-react";

interface SearchResult {
  id: number;
  title: string;
  category: string;
  price: string;
  location: string;
  distance: string;
  condition: string;
  matchPercentage: string;
  timePosted: string;
  image: string;
  tags: string[];
  sustainability: {
    co2Saved: string;
    materialsRecovered: string;
  };
}

interface SearchResultsProps {
  query: string;
  results: SearchResult[];
}

const SearchResults = ({ query, results }: SearchResultsProps) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20">
        <h2 className="text-2xl font-bold mb-2">
          Smart Search Results for "{query}"
        </h2>
        <p className="text-muted-foreground mb-4">
          Found {results.length} items using AI semantic search and personalized matching
        </p>
        
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Semantic Understanding
          </Badge>
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            Location-Based Ranking
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            Sustainability Score
          </Badge>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result) => (
          <Card key={result.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-0 shadow-medium">
            <div className="relative">
              <img 
                src={result.image} 
                alt={result.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3">
                <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
                  {result.matchPercentage} match
                </Badge>
              </div>
              <div className="absolute top-3 left-3">
                <Badge variant="outline" className="bg-white/90">
                  {result.condition}
                </Badge>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <div>
                <h3 className="font-semibold text-lg line-clamp-2">{result.title}</h3>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-2xl font-bold text-primary">{result.price}</span>
                  <Badge variant="secondary">{result.category}</Badge>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{result.distance}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{result.timePosted}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1">
                {result.tags.map((tag, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex items-center space-x-2 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">Environmental Impact</span>
                </div>
                <div className="text-xs text-green-700 space-y-1">
                  <div>CO₂ Saved: {result.sustainability.co2Saved}</div>
                  <div>Materials: {result.sustainability.materialsRecovered}</div>
                </div>
              </div>
              
              <div className="flex space-x-2 pt-2">
                <Button className="flex-1" size="sm">
                  Contact Seller
                </Button>
                <Button variant="outline" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;