import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, MapPin, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { featuredItems } from "@/data/menuItems";
import { toast } from "@/hooks/use-toast";
import icon from "@/assets/icon.png";
const Index = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item: any) => {
    addToCart(item);
    toast({
      title: "Added to cart!",
      description: `${item.name} has been added to your cart.`,
    });
  };

  const deals = [
    {
      title: "Family Feast Deal",
      description: "2 Burgers + 2 Fries + 2 Drinks",
      price: "₨899",
      originalPrice: "₨1200",
      discount: "25% OFF",
    },
    {
      title: "Crispy Combo",
      description: "1 Zinger Burger + Fries + Drink",
      price: "₨649",
      originalPrice: "₨780",
      discount: "17% OFF",
    },
    {
      title: "Pizza Party",
      description: "Large Pizza + 4 Drinks",
      price: "₨999",
      originalPrice: "₨1120",
      discount: "11% OFF",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* center div */}
          <div className="text-center space-y-6 md:space-y-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-primary bg-white/5">
              <img
                src={icon}
                alt="Golden Chicks Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-glow">
              Golden <span className="text-primary-glow">Chicks</span>
            </h1>
            <p className="text-xl md:text-3xl font-medium opacity-90 max-w-3xl mx-auto animate-slide-in">
              Experience the taste of perfection with our premium chicken & fast
              food
            </p>
            <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
              Fresh ingredients • Quick delivery • Unbeatable taste since 2020
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/menu">
                <Button className="btn-golden hover:text-gray-900 text-xl px-8 py-6 animate-glow">
                  Order Now
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  variant="outline"
                  className="text-black border-white hover:bg-white hover:text-gray-500 text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float hidden md:block"></div>
        <div
          className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float hidden md:block"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Special Deals Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Today's Special Deals
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-in">
              Limited time offers you can't resist!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deals.map((deal, index) => (
              <Card
                key={index}
                className="food-card relative overflow-hidden border-primary/20"
              >
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground animate-scale-in">
                  {deal.discount}
                </Badge>
                <CardHeader>
                  <CardTitle className="text-xl">{deal.title}</CardTitle>
                  <CardDescription className="text-base">
                    {deal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-primary">
                      {deal.price}
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      {deal.originalPrice}
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
  <Button
    onClick={() =>
      handleAddToCart({
        id: `deal-${index}`, // unique id for deals
        name: deal.title,
        description: deal.description,
        price: parseInt(deal.price.replace("₨", "").replace(",", "")), // number form
        category: "Deal",
        image: "/deal-placeholder.png", // agar tumhare pass koi deal image ho
      })
    }
    className="w-full btn-golden"
  >
    Order This Deal
  </Button>
</CardFooter>

              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Available Items
            </h2>
            <p className="text-lg text-muted-foreground animate-slide-in">
              Our customers' absolute favorites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item) => (
              <Card
                key={item.id}
                className="food-card border-border/50 overflow-hidden"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-smooth hover:scale-110"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                    Featured
                  </Badge>
                  <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-black/70 text-white px-2 py-1 rounded">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm">4.9</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      ₨{item.price}
                    </span>
                    <Badge variant="outline">{item.category}</Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    className="w-full btn-golden"
                    size="sm"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/menu">
              <Button variant="outline" className="text-lg px-8 py-4">
                View Full Menu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
              Why Choose Golden Chicks?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-scale-in">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Fast Delivery
              </h3>
              <p className="text-muted-foreground">
                Hot, fresh food delivered to your door in 30-45 minutes or less
              </p>
            </div>

            <div
              className="text-center space-y-4 animate-scale-in"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Premium Quality
              </h3>
              <p className="text-muted-foreground">
                Only the finest ingredients and authentic recipes for the best
                taste
              </p>
            </div>

            <div
              className="text-center space-y-4 animate-scale-in"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Local Favorite
              </h3>
              <p className="text-muted-foreground">
                Proudly serving Faisalabad with 8+ years of trusted service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-glow">
            Ready to Order?
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Your favorite meal is just a click away!
          </p>
          <Link to="/menu">
            <Button className="bg-white text-foreground hover:bg-white/90 text-xl px-12 py-6 animate-glow">
              Start Ordering Now
              <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
