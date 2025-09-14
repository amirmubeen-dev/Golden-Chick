import React from 'react';
import { Award, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: Clock, label: 'Years of Service', value: '8+' },
    { icon: Award, label: 'Quality Rating', value: '4.9/5' },
    { icon: MapPin, label: 'Location', value: 'Faisalabad' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-glow animate-fade-in">
            About Golden Chicks
          </h1>
          <p className="text-xl md:text-2xl opacity-90 animate-slide-in">
            Your trusted partner for delicious fast food since2020
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center transition-spring hover:scale-105">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Golden Chicks was founded in 2020 in 
                Murid Wala on Sammundari Road. What started as a small family business with a 
                passion for serving quality fast food has grown into one of the most trusted 
                names in the local food industry.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment to using fresh ingredients, maintaining consistent quality, and 
                providing exceptional customer service has made us a favorite among food lovers 
                in Faisalabad. Every dish we serve reflects our dedication to excellence and 
                our love for great food.
              </p>
            </div>
            <div className="bg-muted rounded-2xl p-8 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide delicious, high-quality fast food that brings joy to our customers' 
                daily lives while maintaining affordable prices and exceptional service.
              </p>
              <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              <p className="text-muted-foreground">
                To become the leading fast food brand in Punjab, known for our quality, 
                innovation, and commitment to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Fresh Ingredients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We source the freshest ingredients daily to ensure every bite is 
                  bursting with flavor and nutrition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Quick Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our efficient kitchen and delivery system ensures you get your 
                  food fast without compromising on quality.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-xl">Affordable Prices</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe great food should be accessible to everyone, which is 
                  why we keep our prices competitive.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Restaurant
            </h2>
            <p className="text-lg text-muted-foreground">
              Come experience the Golden Chicks difference in person
            </p>
          </div>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-bold text-foreground">Golden Chicks</h3>
                  <p className="text-muted-foreground">
                    Murid Wala, Sammundari Road, Faisalabad, Punjab, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Opening Hours</h4>
                  <p className="text-sm text-muted-foreground">Monday - Thursday: 11:00 AM - 11:00 PM</p>
                  <p className="text-sm text-muted-foreground">Friday - Sunday: 11:00 AM - 12:00 AM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Info</h4>
                  <p className="text-sm text-muted-foreground">Phone: +92 300 1234567</p>
                  <p className="text-sm text-muted-foreground">Email: info@goldenchicks.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;