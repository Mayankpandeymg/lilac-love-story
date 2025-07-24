import { Button } from "@/components/ui/button";
import { Heart, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  const scrollToGallery = () => {
    const gallery = document.getElementById('gallery');
    gallery?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lilac-dark/40 via-primary/30 to-pink-accent/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Heart className="w-16 h-16 text-white mx-auto mb-8 animate-romantic-pulse" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            My Beautiful
            <span className="block bg-gradient-to-r from-lilac-light to-pink-accent bg-clip-text text-transparent">
              Love Story
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            A celebration of the most wonderful person in my life, captured in photos and memories that tell her beautiful story
          </p>
          
          <Button 
            onClick={scrollToGallery}
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm text-lg px-8 py-6 rounded-full shadow-glow transition-all duration-300 hover:scale-105"
          >
            Discover Her Beauty
            <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
          </Button>
        </div>
      </div>
      
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart 
            key={i}
            className="absolute text-white/20 animate-romantic-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          />
        ))}
      </div>
    </section>
  );
};