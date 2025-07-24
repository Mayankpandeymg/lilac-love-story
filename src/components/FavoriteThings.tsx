import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart, Plus, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

interface FavoriteThing {
  id: string;
  name: string;
  emoji: string;
  addedAt: Date;
}

export const FavoriteThings = () => {
  const [favorites, setFavorites] = useState<FavoriteThing[]>([]);
  const [newFavorite, setNewFavorite] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const getRandomEmoji = () => {
    const emojis = ["💖", "🌸", "🦋", "✨", "🌺", "🎀", "💫", "🌙", "🌻", "🎨", "📚", "🍓", "🧸", "💐", "🎵"];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  const addFavorite = () => {
    if (!newFavorite.trim()) return;

    const favorite: FavoriteThing = {
      id: crypto.randomUUID(),
      name: newFavorite.trim(),
      emoji: getRandomEmoji(),
      addedAt: new Date()
    };

    setFavorites(prev => [...prev, favorite]);
    setNewFavorite("");
    setIsAdding(false);
    toast(`${favorite.emoji} "${favorite.name}" added to your favorites!`);
  };

  const removeFavorite = (id: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== id));
    toast("Favorite removed!");
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-lilac-light/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-pink-accent mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-pink-accent bg-clip-text text-transparent">
              Your Favorite Things
            </h2>
            <Sparkles className="w-8 h-8 text-pink-accent ml-2" />
          </div>
          <p className="text-xl text-muted-foreground mb-8">
            Add the things that make you happiest, and watch them come to life! ✨
          </p>
        </div>

        {/* Add New Favorite */}
        <Card className="p-6 mb-8 bg-gradient-to-r from-lilac-light/20 to-pink-accent/10 border-lilac-light/30">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                value={newFavorite}
                onChange={(e) => setNewFavorite(e.target.value)}
                placeholder="What makes you happy? (e.g., chocolate, books, sunsets...)"
                className="text-lg h-12 bg-white/50 border-lilac-light/40"
                onKeyPress={(e) => e.key === 'Enter' && addFavorite()}
              />
            </div>
            <Button 
              onClick={addFavorite}
              disabled={!newFavorite.trim()}
              className="h-12 px-8 bg-gradient-to-r from-primary to-pink-accent hover:from-primary/90 hover:to-pink-accent/90"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add to Favorites
            </Button>
          </div>
        </Card>

        {/* Favorites Grid */}
        {favorites.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((favorite, index) => (
              <Card 
                key={favorite.id}
                className={`p-6 bg-gradient-to-br from-white/80 to-lilac-light/20 border-lilac-light/30 
                  hover:shadow-elegant hover:scale-105 transition-all duration-300 
                  animate-scale-in group relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Floating hearts animation */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <Heart className="absolute w-4 h-4 text-pink-accent/30 animate-float-up top-4 right-4" />
                  <Heart className="absolute w-3 h-3 text-lilac/40 animate-float-up-delayed bottom-6 left-6" />
                </div>

                <button
                  onClick={() => removeFavorite(favorite.id)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                </button>

                <div className="text-center">
                  <div className="text-4xl mb-3 animate-bounce-gentle">
                    {favorite.emoji}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {favorite.name}
                  </h3>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Sparkles className="w-3 h-3 mr-1" />
                    <span>Added to your happiness collection</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {favorites.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">💕</div>
            <p className="text-xl text-muted-foreground">
              Start adding your favorite things to see the magic happen!
            </p>
          </div>
        )}

        {favorites.length > 0 && (
          <div className="text-center mt-12">
            <Card className="inline-block p-6 bg-gradient-to-r from-primary/10 to-pink-accent/10 border-primary/20">
              <div className="flex items-center justify-center text-lg font-medium text-foreground">
                <Heart className="w-5 h-5 text-pink-accent mr-2" />
                You have {favorites.length} beautiful favorite{favorites.length !== 1 ? 's' : ''}!
                <Heart className="w-5 h-5 text-pink-accent ml-2" />
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};