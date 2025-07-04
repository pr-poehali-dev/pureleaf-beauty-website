import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-sage-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="Leaf" size={28} className="text-sage-700" />
            <span className="text-2xl font-bold text-sage-800">
              PureLeaf Beauty
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-sage-600 hover:text-sage-800 transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sage-600 hover:text-sage-800 transition-colors font-medium"
            >
              Catalog
            </a>
            <a
              href="#"
              className="text-sage-600 hover:text-sage-800 transition-colors font-medium"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-sage-600 hover:text-sage-800 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
          <Button
            className="bg-sage-600 hover:bg-sage-700 text-white"
            size="sm"
          >
            <Icon name="ShoppingBag" size={16} className="mr-2" />
            Cart
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-sage-50 to-sage-100">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-sage-800 leading-tight">
              Pure. Natural.
              <span className="text-sage-600">Beautiful.</span>
            </h1>
            <p className="text-xl text-sage-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover certified organic cosmetics that nurture your skin with
              the power of nature. Every product is carefully crafted with
              sustainably sourced ingredients.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4"
              >
                Shop Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-4"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-sage-800">
            Certified Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Award"
                  size={48}
                  className="text-sage-600 mb-4 mx-auto"
                />
                <CardTitle className="text-sage-800">USDA Organic</CardTitle>
                <CardDescription className="text-sage-600">
                  Certified organic by the United States Department of
                  Agriculture for the highest quality standards.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Leaf"
                  size={48}
                  className="text-sage-600 mb-4 mx-auto"
                />
                <CardTitle className="text-sage-800">Cruelty-Free</CardTitle>
                <CardDescription className="text-sage-600">
                  Never tested on animals. Certified by Leaping Bunny for
                  ethical beauty practices.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-sage-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Icon
                  name="Recycle"
                  size={48}
                  className="text-sage-600 mb-4 mx-auto"
                />
                <CardTitle className="text-sage-800">Sustainable</CardTitle>
                <CardDescription className="text-sage-600">
                  Eco-friendly packaging and carbon-neutral shipping to protect
                  our planet.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-4 bg-sage-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-sage-800">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-sage-200">
              <CardHeader className="pb-4">
                <div className="aspect-square bg-sage-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Sparkles" size={32} className="text-sage-600" />
                </div>
                <CardTitle className="text-sage-800">Skincare</CardTitle>
                <CardDescription className="text-sage-600">
                  Gentle cleansers, nourishing serums, and protective
                  moisturizers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-sage-200">
              <CardHeader className="pb-4">
                <div className="aspect-square bg-sage-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Palette" size={32} className="text-sage-600" />
                </div>
                <CardTitle className="text-sage-800">Makeup</CardTitle>
                <CardDescription className="text-sage-600">
                  Natural pigments and organic formulas for radiant beauty.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-sage-200">
              <CardHeader className="pb-4">
                <div className="aspect-square bg-sage-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Flower" size={32} className="text-sage-600" />
                </div>
                <CardTitle className="text-sage-800">Fragrance</CardTitle>
                <CardDescription className="text-sage-600">
                  Essential oil blends and natural perfumes that captivate.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-sage-200">
              <CardHeader className="pb-4">
                <div className="aspect-square bg-sage-100 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name="Heart" size={32} className="text-sage-600" />
                </div>
                <CardTitle className="text-sage-800">Body Care</CardTitle>
                <CardDescription className="text-sage-600">
                  Luxurious oils, butters, and treatments for silky skin.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-sage-800">
                Our Story
              </h2>
              <p className="text-lg text-sage-600 mb-6 leading-relaxed">
                Founded in 2018, PureLeaf Beauty began as a small family
                business with a simple mission: to create the purest, most
                effective organic cosmetics using only the finest natural
                ingredients.
              </p>
              <p className="text-lg text-sage-600 mb-8 leading-relaxed">
                Every product is handcrafted in small batches to ensure quality
                and freshness. We work directly with organic farmers and
                sustainable suppliers to bring you beauty products that are kind
                to your skin and the environment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge
                  variant="secondary"
                  className="bg-sage-100 text-sage-700 px-4 py-2"
                >
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  100% Organic
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-sage-100 text-sage-700 px-4 py-2"
                >
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Cruelty-Free
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-sage-100 text-sage-700 px-4 py-2"
                >
                  <Icon name="CheckCircle" size={16} className="mr-2" />
                  Sustainable
                </Badge>
              </div>
            </div>
            <div className="aspect-square bg-sage-100 rounded-2xl overflow-hidden">
              <img
                src="/img/432132b4-4989-46dd-809f-cc3c70d125ae.jpg"
                alt="Natural organic cosmetics ingredients"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-sage-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <Icon name="Leaf" size={28} className="text-sage-300" />
                <span className="text-2xl font-bold">PureLeaf Beauty</span>
              </div>
              <p className="text-sage-300 mb-6 max-w-md">
                Discover the power of nature with our certified organic
                cosmetics. Pure ingredients, exceptional results.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sage-300 hover:text-white"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sage-300 hover:text-white"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-sage-300 hover:text-white"
                >
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-sage-200">Shop</h3>
              <ul className="space-y-3 text-sage-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Skincare
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Makeup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fragrance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Body Care
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-sage-200">Support</h3>
              <ul className="space-y-3 text-sage-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-sage-700 mt-12 pt-8 text-center text-sage-400">
            <p>&copy; 2024 PureLeaf Beauty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
