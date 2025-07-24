import { PhotoModal } from "./PhotoModal";
import photo1 from "@/assets/photo1.jpg";
import photo2 from "@/assets/photo2.jpg";
import photo3 from "@/assets/photo3.jpg";

const photos = [
  {
    id: 1,
    image: photo1,
    title: "Her Radiant Smile",
    personality: "Her Smile, HMM HER SMILE. I mean how can I even describe her smile to be. Like a ray , no no something more precious , How can I even name something more precious than herself but this time her smile takes over her 'PRECIOUSNESS'",
    traits: [
      "Illuminates any room with her presence",
      "Has the most infectious laugh",
      "Had me glaze her smile so much , now I am making a goddamn website for her",
      "Precious",
      "Her smile is my favorite sight in the world"
    ]
  },
  {
    id: 2,
    image: photo2,
    title: "Her 'RUDE'[Not so rude] behaviour",
    personality: "She taught almost every thing in my life. From love to heartbreaks, from being at the top of the world to the most bottom.",
    traits: [
      "I know how much she had to suffer for her dreams",
      "Eventually she is finding her path somehow now",
      "I admire her resilience and strength",
      "She is the BEST , I mean the best",
      "Makes ordinary days feel extraordinary"
    ]
  },
  {
    id: 3,
    image: photo3,
    title: "Her Cat-Mom Issues",
    personality: "Naah meri English Khatam, par main samajh sakta hoon. She made me into a cat person myself. I cant believe that somehow I , THE GREAT MAYANK PANDEY , had to cry out loud for a cat mommy. I am , as I am making this website for her.",
    traits: [
      "Sudden mood changes like a cat",
      "Mommy to the cutest cats",
      "Buys cat accessories like a pro",
      "Mujhe bhi paal le pleeeeejjjj 😿",
      "ILOVEYOUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU 😿"
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
            Click on each photo to discover "HER"
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