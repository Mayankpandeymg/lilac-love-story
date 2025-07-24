import { HeroSection } from "@/components/HeroSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { FavoriteThings } from "@/components/FavoriteThings";
import { Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <HeroSection />
      
      <div id="gallery">
        <PhotoGallery />
      </div>

      {/* Favorite Things Section */}
      <FavoriteThings />
      
      {/* Footer */}
      <footer className="py-12 text-center border-t border-lilac-light/20">
        <div className="flex items-center justify-center space-x-2 text-muted-foreground">
          <Heart className="w-4 h-4 text-pink-accent" />
          <span>Made with endless love</span>
          <Heart className="w-4 h-4 text-pink-accent" />
        </div>
      </footer>
    </div>
  );
};

export default Index;
