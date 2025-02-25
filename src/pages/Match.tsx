
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";

const Match = () => {
  return (
    <div className="container max-w-md mx-auto py-8 px-4">
      <div className="rounded-3xl overflow-hidden glass-morphism aspect-[3/4] relative animate-fadeIn">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-2xl font-semibold mb-2">Sarah, 25</h3>
          <p className="text-sm opacity-90 mb-4">Loves indie rock and jazz</p>
          <div className="flex gap-3">
            {['Radiohead', 'Jazz', 'Indie'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/20 text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          size="icon"
          variant="outline"
          className="h-16 w-16 rounded-full hover:bg-destructive/10 hover:text-destructive"
        >
          <X className="h-8 w-8" />
        </Button>
        <Button
          size="icon"
          className="h-16 w-16 rounded-full hover:bg-primary/90"
        >
          <Heart className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default Match;
