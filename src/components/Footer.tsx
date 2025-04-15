
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg font-medium mb-4">About SCNT.</h3>
            <p className="text-gray-600 mb-4">
              Elevate your presence with our curated collection of luxury fragrances for the modern connoisseur.
              Personally selected by Manan Shah to bring you the finest scents from around the world.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/catalog" className="text-gray-600 hover:text-gray-900">Shop All</a></li>
              <li><a href="/catalog" className="text-gray-600 hover:text-gray-900">New Arrivals</a></li>
              <li><a href="/catalog" className="text-gray-600 hover:text-gray-900">Best Sellers</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SCNT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
