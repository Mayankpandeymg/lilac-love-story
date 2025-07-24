import { PhotoModal } from "./PhotoModal";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";

const photos = [
  {
    id: 1,
    image: photo1,
    title: "Her Radiant Smile",
    personality: "Her smile lights up every room she enters. There's something magical about the way her eyes crinkle when she laughs, and how her whole face transforms with pure joy. She has this incredible ability to make everyone around her feel special and loved.",
    traits: [
      "Illuminates any room with her presence",
      "Has the most infectious laugh",
      "Makes everyone feel welcome and valued",
      "Radiates warmth and positivity",
      "Her smile is my favorite sight in the world"
    ]
  },
  {
    id: 2,
    image: photo2,
    title: "Her Joyful Spirit",
    personality: "She approaches life with such enthusiasm and wonder. Every day is an adventure with her, and she finds beauty in the smallest things. Her optimism is contagious, and she has taught me to see the world through more colorful lenses.",
    traits: [
      "Finds magic in everyday moments",
      "Approaches challenges with grace",
      "Has an adventurous and curious heart",
      "Spreads joy wherever she goes",
      "Makes ordinary days feel extraordinary"
    ]
  },
  {
    id: 3,
    image: photo3,
    title: "Her Peaceful Nature",
    personality: "There's a serene quality about her that brings calm to any storm. She has this amazing ability to listen deeply and offer comfort without judgment. Her peaceful presence is like a safe harbor where I can always find rest.",
    traits: [
      "Brings tranquility to chaotic moments",
      "Listens with her whole heart",
      "Offers comfort without words",
      "Has a wise and gentle soul",
      "Makes me feel completely understood"
    ]
  }
];

export const PhotoGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            The Many Faces of
            <span className="bg-gradient-romantic bg-clip-text text-transparent"> Beautiful</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Click on each photo to discover the wonderful personality traits that make her so special
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <PhotoModal 
              key={photo.id}
              image={photo.image}
              title={photo.title}
              personality={photo.personality}
              traits={photo.traits}
            >
              <div 
                className="group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-romantic transition-all duration-500 group-hover:scale-105">
                  <img 
                    src={photo.image} 
                    alt={photo.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lilac-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold mb-1">{photo.title}</h3>
                    <p className="text-sm text-lilac-light">Click to explore her personality</p>
                  </div>
                </div>
              </div>
            </PhotoModal>
          ))}
        </div>
      </div>
    </section>
  );
};