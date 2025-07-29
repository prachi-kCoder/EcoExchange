import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import SearchResults from "@/components/SearchResults";
import { useState } from "react";

const Index = () => {
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Mock search results with AI-powered matching
  const mockSearchResults = [
    {
      id: 1,
      title: "MacBook Pro 13-inch - Perfect for Students",
      category: "Electronics",
      price: "$850",
      location: "San Francisco, CA",
      distance: "2.3 km",
      condition: "Good",
      matchPercentage: "94%",
      timePosted: "3h ago",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      tags: ["laptop", "apple", "student-friendly", "portable"],
      sustainability: {
        co2Saved: "25kg",
        materialsRecovered: "Aluminum, rare metals"
      }
    },
    {
      id: 2,
      title: "Universal Laptop Charger - Multiple Tips",
      category: "Electronics",
      price: "$35",
      location: "Oakland, CA",
      distance: "5.1 km", 
      condition: "Excellent",
      matchPercentage: "89%",
      timePosted: "1d ago",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
      tags: ["charger", "universal", "compatible", "warranty"],
      sustainability: {
        co2Saved: "3kg",
        materialsRecovered: "Copper, plastic"
      }
    },
    {
      id: 3,
      title: "Upcycled Laptop Stand - Handmade Wood",
      category: "Furniture", 
      price: "$45",
      location: "Berkeley, CA",
      distance: "8.2 km",
      condition: "Excellent",
      matchPercentage: "76%",
      timePosted: "5h ago",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400",
      tags: ["handmade", "ergonomic", "sustainable", "local-artisan"],
      sustainability: {
        co2Saved: "12kg",
        materialsRecovered: "Reclaimed wood"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {showSearchResults ? (
          <div className="container mx-auto px-4 py-8">
            <SearchResults 
              query={searchQuery} 
              results={mockSearchResults}
            />
          </div>
        ) : (
          <>
            <Hero />
            <Features />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
