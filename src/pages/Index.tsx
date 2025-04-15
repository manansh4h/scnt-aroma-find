
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const featuredPerfumes = [
  {
    id: 1,
    name: "Ocean Breeze",
    price: 89.99,
    brand: "SCNT",
    type: "Aquatic",
    concentration: "EDP",
    image: "https://images.unsplash.com/photo-1595426496137-5bcb11ea3f51?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Fresh and invigorating scent with notes of sea salt and citrus."
  },
  {
    id: 2,
    name: "Floral Embrace",
    price: 75.50,
    brand: "SCNT",
    type: "Floral",
    concentration: "EDT",
    image: "https://images.unsplash.com/photo-1615219434998-3abb548b4a10?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Elegant bouquet of rose, jasmine, and lily of the valley."
  },
  {
    id: 3,
    name: "Amber Wood",
    price: 120.00,
    brand: "SCNT",
    type: "Woody",
    concentration: "Parfum",
    image: "https://images.unsplash.com/photo-1590736969955-71a6ceb9344e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Rich and warm with notes of amber, sandalwood, and vanilla."
  },
  {
    id: 15,
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 135.00,
    type: "Woody Aromatic",
    concentration: "Parfum",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "A woody aromatic fragrance for men who demand the very best."
  },
  {
    id: 16,
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 95.00,
    type: "Floral Fruity Gourmand",
    concentration: "EDP",
    image: "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "A fragrance that brings out the natural elegance of women."
  },
  {
    id: 19,
    name: "Black Orchid",
    brand: "Tom Ford",
    price: 150.00,
    type: "Oriental Floral",
    concentration: "Parfum",
    image: "https://images.unsplash.com/photo-1531751029405-891804eeefa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "A luxurious and sensual fragrance with rich dark accords."
  },
  {
    id: 10,
    name: "Cool Water",
    brand: "Davidoff",
    price: 65.99,
    type: "Aquatic",
    concentration: "EDT",
    image: "https://images.unsplash.com/photo-1575377569702-32637d6a0eff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "A classic aquatic fragrance with marine and woody notes."
  },
  {
    id: 18,
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    price: 100.00,
    type: "Aquatic",
    concentration: "EDT",
    image: "https://images.unsplash.com/photo-1618329340733-ab4554d28b15?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Inspired by the Mediterranean sea, fresh and masculine."
  }
];

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-[#fcfcfc] to-[#f8f3f0]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596020718504-d196e3733321?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-gray-900">Discover Your Perfect Scent</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-2xl mx-auto">
            Explore our curated collection of exquisite fragrances crafted for the modern connoisseur.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 bg-gray-900 hover:bg-gray-800">
            <Link to="/catalog">
              Shop Collection
            </Link>
          </Button>
        </div>
      </section>

      {/* Featured Perfumes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Featured Fragrances</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPerfumes.map((perfume) => (
              <Card 
                key={perfume.id}
                className="border-none shadow-sm transition-all duration-300 hover:shadow-md"
                onMouseEnter={() => setHoveredCard(perfume.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative overflow-hidden h-[300px]">
                  <img 
                    src={perfume.image} 
                    alt={perfume.name} 
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredCard === perfume.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-medium">{perfume.name}</h3>
                    <span className="text-lg font-light">${perfume.price.toFixed(2)}</span>
                  </div>
                  <div className="flex gap-2 mb-4">
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">{perfume.type}</span>
                    <span className="text-sm bg-gray-100 px-2 py-1 rounded">{perfume.concentration}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{perfume.description}</p>
                  <Button variant="outline" className="w-full border-gray-300 hover:bg-gray-100">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6">The Art of Fragrance</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Scnt, we believe that finding the perfect fragrance is a personal journey. Our carefully curated collection features artisanal perfumes from around the world, each telling its own unique story.
            </p>
            <Button variant="outline" className="rounded-full px-8 border-gray-400">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light mb-12 text-center">Browse By Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Floral", "Woody", "Oriental", "Fresh"].map((category) => (
              <div key={category} className="relative h-40 rounded-lg overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gray-900 opacity-30 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-medium">{category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
