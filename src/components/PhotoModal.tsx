import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Heart, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhotoModalProps {
  image: string;
  title: string;
  personality: string;
  traits: string[];
  children: React.ReactNode;
}

export const PhotoModal = ({ image, title, personality, traits, children }: PhotoModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-subtle border-lilac-light/30 shadow-romantic">
        <div className="grid md:grid-cols-2 gap-8 p-6">
          <div className="space-y-4">
            <img 
              src={image} 
              alt={title}
              className="w-full h-96 object-cover rounded-xl shadow-soft"
            />
          </div>
          
          <div className="space-y-6">
            <div className="text-center">
              <Heart className="w-8 h-8 text-pink-accent mx-auto mb-4 animate-heart-beat" />
              <h2 className="text-3xl font-bold text-foreground mb-2">{title}</h2>
            </div>
            
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">{personality}</p>
              
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Beautiful Qualities</h3>
                <div className="grid grid-cols-1 gap-2">
                  {traits.map((trait, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-lilac-light/20 rounded-lg animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Heart className="w-4 h-4 text-pink-accent" />
                      <span className="text-foreground">{trait}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};