
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-light mb-12 text-center">About Us</h1>
        
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-full">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Manan Shah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h2 className="text-2xl font-medium mb-4">Manan Shah</h2>
                <p className="text-gray-500 mb-2">Perfume Connoisseur</p>
                <p className="text-gray-700 mb-6">
                  With over a decade of experience in the fragrance industry, Manan Shah has cultivated an exceptional 
                  understanding of perfumery. His journey began in the traditional perfume markets of India and expanded 
                  through extensive travel across France, Italy, and the Middle East.
                </p>
                <p className="text-gray-700 mb-6">
                  At SCNT., Manan personally curates each fragrance, ensuring that only the finest and most 
                  distinctive scents become part of our collection. His passion for perfumery and dedication to quality 
                  has made SCNT. a trusted name for fragrance enthusiasts.
                </p>
              </div>
            </div>
          </Card>

          <div className="prose prose-lg max-w-none">
            <h3 className="text-xl font-medium mb-4">Our Philosophy</h3>
            <p className="mb-6">
              At SCNT., we believe that fragrance is a form of self-expression. Each perfume tells a story and evokes emotions 
              that words often cannot express. Our mission is to help you find that perfect scent that resonates with your 
              personality and becomes an extension of who you are.
            </p>

            <h3 className="text-xl font-medium mb-4">Our Collection</h3>
            <p className="mb-6">
              Every fragrance in our collection has been thoughtfully selected based on its quality, uniqueness, and the story it tells. 
              We work directly with master perfumers and niche fragrance houses around the world to bring you an exclusive selection 
              that you won't find elsewhere.
            </p>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="rounded-full px-8 bg-gray-900 hover:bg-gray-800">
                <a href="/catalog">Explore Our Collection</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
