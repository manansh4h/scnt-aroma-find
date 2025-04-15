
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

// Mock data for perfumes
const perfumes = [
  {
    id: 1,
    name: "Ocean Breeze",
    price: 89.99,
    type: "Aquatic",
    concentration: "EDP",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Fresh and invigorating scent with notes of sea salt and citrus."
  },
  {
    id: 2,
    name: "Floral Embrace",
    price: 75.50,
    type: "Floral",
    concentration: "EDT",
    image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Elegant bouquet of rose, jasmine, and lily of the valley."
  },
  {
    id: 3,
    name: "Amber Wood",
    price: 120.00,
    type: "Woody",
    concentration: "Parfum",
    image: "https://images.unsplash.com/photo-1557673834-5d66d3f22fad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Rich and warm with notes of amber, sandalwood, and vanilla."
  },
  {
    id: 4,
    name: "Citrus Burst",
    price: 65.00,
    type: "Fresh",
    concentration: "EDT",
    image: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Vibrant blend of lemon, bergamot, and grapefruit."
  },
  {
    id: 5,
    name: "Velvet Rose",
    price: 110.00,
    type: "Floral",
    concentration: "EDP",
    image: "https://images.unsplash.com/photo-1594221708779-94832f4320ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Luxurious rose fragrance with hints of peony and musk."
  },
  {
    id: 6,
    name: "Oriental Nights",
    price: 130.00,
    type: "Oriental",
    concentration: "Parfum",
    image: "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    description: "Exotic blend of spices, amber, and vanilla."
  }
];

const concentrations = ["EDT", "EDP", "Parfum"];
const types = ["Aquatic", "Floral", "Woody", "Fresh", "Oriental"];

const Catalog = () => {
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedConcentrations, setSelectedConcentrations] = useState<string[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const handleConcentrationChange = (concentration: string) => {
    setSelectedConcentrations(prev => 
      prev.includes(concentration) 
        ? prev.filter(c => c !== concentration) 
        : [...prev, concentration]
    );
  };

  // Filter perfumes based on selected filters
  const filteredPerfumes = perfumes.filter(perfume => {
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(perfume.type);
    const matchesConcentration = selectedConcentrations.length === 0 || selectedConcentrations.includes(perfume.concentration);
    const matchesPrice = perfume.price >= priceRange.min && perfume.price <= priceRange.max;
    
    return matchesType && matchesConcentration && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-12 text-center">Our Collection</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="sticky top-4 bg-white p-6 border rounded-lg">
              <h2 className="text-xl font-medium mb-6">Filters</h2>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="text-lg mb-4">Price Range</h3>
                <div className="flex items-center gap-2 mb-2">
                  <Input 
                    type="number" 
                    min="0" 
                    placeholder="Min" 
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: Number(e.target.value)})}
                    className="w-24"
                  />
                  <span>to</span>
                  <Input 
                    type="number" 
                    min="0" 
                    placeholder="Max" 
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: Number(e.target.value)})}
                    className="w-24"
                  />
                </div>
              </div>
              
              {/* Perfume Type */}
              <div className="mb-6">
                <h3 className="text-lg mb-4">Scent Type</h3>
                <div className="space-y-2">
                  {types.map(type => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`type-${type}`} 
                        checked={selectedTypes.includes(type)}
                        onCheckedChange={() => handleTypeChange(type)}
                      />
                      <Label htmlFor={`type-${type}`}>{type}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Concentration */}
              <div className="mb-6">
                <h3 className="text-lg mb-4">Concentration</h3>
                <div className="space-y-2">
                  {concentrations.map(concentration => (
                    <div key={concentration} className="flex items-center space-x-2">
                      <Checkbox 
                        id={`concentration-${concentration}`} 
                        checked={selectedConcentrations.includes(concentration)}
                        onCheckedChange={() => handleConcentrationChange(concentration)}
                      />
                      <Label htmlFor={`concentration-${concentration}`}>{concentration}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <Button variant="outline" className="w-full" onClick={() => {
                setSelectedTypes([]);
                setSelectedConcentrations([]);
                setPriceRange({ min: 0, max: 200 });
              }}>
                Reset Filters
              </Button>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            {filteredPerfumes.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-500">No perfumes match your selected filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPerfumes.map((perfume) => (
                  <Card 
                    key={perfume.id}
                    className="border-none shadow-sm transition-all duration-300 hover:shadow-md"
                    onMouseEnter={() => setHoveredCard(perfume.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative overflow-hidden h-[250px]">
                      <img 
                        src={perfume.image} 
                        alt={perfume.name} 
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{
                          transform: hoveredCard === perfume.id ? 'scale(1.05)' : 'scale(1)'
                        }}
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-medium">{perfume.name}</h3>
                        <span className="text-lg font-light">${perfume.price.toFixed(2)}</span>
                      </div>
                      <div className="flex gap-2 mb-3">
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{perfume.type}</span>
                        <span className="text-xs bg-gray-100 px-2 py-1 rounded">{perfume.concentration}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{perfume.description}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Details
                        </Button>
                        <Button size="sm" className="flex-1">
                          Add to Cart
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
