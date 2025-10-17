import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroCarousel from "@/components/HeroCarousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Target, TrendingUp, Heart, Award, Building2 } from "lucide-react";

const Index = () => {
  const stats = [
    { icon: Users, value: "15+", label: "Years in Public Service" },
    { icon: Award, value: "10+", label: "Youth Projects" },
    { icon: Heart, value: "1000+", label: "People Impacted" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <WhatsAppButton />
      
      {/* Hero Section with Carousel */}
      <section className="pt-20 md:pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HeroCarousel />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gradient-to-b from-background to-primary-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Empowering Youth, Building <span className="gradient-text">Tomorrow's India</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Naresh Singh Rajawat is a young political leader, visionary, and entrepreneur from Mathura, Uttar Pradesh, 
              dedicated to public service and youth empowerment. With over 15 years of grassroots experience, 
              he represents the voice of the new generation in Indian politics.
            </p>
            <Button asChild size="lg" className="btn-hero mt-8">
              <Link to="/about">Know More About Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="p-8 text-center card-glow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-primary-light/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <Card className="p-8 md:p-10 card-glow animate-fade-in">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To serve people with honesty and dedication, empowering youth through education, 
                skill development, and leadership training. We strive to build a united, 
                progressive India where every citizen has equal opportunities to succeed and contribute 
                to nation-building.
              </p>
            </Card>

            {/* Vision */}
            <Card className="p-8 md:p-10 card-glow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a self-reliant, prosperous, and culturally rich nation that stands as 
                a global model for leadership and integrity. We envision an India where youth are 
                the driving force of innovation, development, and positive social change.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Key Focus <span className="gradient-text">Areas</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Youth Empowerment",
                description: "Creating opportunities for skill development, employment, and leadership among youth"
              },
              {
                icon: Building2,
                title: "Infrastructure Development",
                description: "Building modern infrastructure through NSR Construction and government initiatives"
              },
              {
                icon: Heart,
                title: "Social Welfare",
                description: "Working towards education, healthcare, and social justice for all communities"
              },
              {
                icon: Award,
                title: "Political Leadership",
                description: "Representing people's voices at state and district levels with integrity"
              },
              {
                icon: TrendingUp,
                title: "Economic Growth",
                description: "Promoting business, entrepreneurship, and economic opportunities in the region"
              },
              {
                icon: Target,
                title: "Nation Building",
                description: "Contributing to a stronger, united, and self-reliant India"
              }
            ].map((area, index) => (
              <Card key={index} className="p-6 card-glow hover:scale-105 transition-transform animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-lg mb-4">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Join the Mission for a Better Tomorrow
            </h2>
            <p className="text-lg md:text-xl text-white/90">
              Be part of the change. Connect with us and contribute to building a progressive India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/contact">Get in Touch</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white hover:bg-white/90 text-primary border-white font-semibold">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
