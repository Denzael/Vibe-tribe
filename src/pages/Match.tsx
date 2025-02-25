
import { Button } from "@/components/ui/button";
import { Heart, X, Music2, Headphones, Users } from "lucide-react";
import { useProfileStore } from "@/utils/profileStorage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PotentialMatch {
  id: string;
  name: string;
  age: number;
  image: string;
  topGenres: string[];
  topArtists: string[];
  listeningStyle: string;
  compatibility: number;
}

const Match = () => {
  const profile = useProfileStore((state) => state.profile);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock potential matches based on user's profile
  const [matches] = useState<PotentialMatch[]>([
    {
      id: "1",
      name: "Sarah",
      age: 25,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      topGenres: profile?.genres.slice(0, 3) || [],
      topArtists: profile?.artists.slice(0, 2) || [],
      listeningStyle: profile?.listeningMoods[0] || "Energetic & Upbeat",
      compatibility: 85,
    },
    // Add more mock matches as needed
  ]);

  const [currentMatch, setCurrentMatch] = useState<PotentialMatch | null>(
    matches[0] || null
  );

  useEffect(() => {
    if (!profile) {
      toast({
        title: "Profile Required",
        description: "Please create your profile first",
        variant: "destructive",
      });
      navigate("/create-profile");
    }
  }, [profile, navigate, toast]);

  const handleSwipe = (liked: boolean) => {
    toast({
      title: liked ? "It's a match! 🎵" : "Maybe next time",
      description: liked 
        ? "You both have similar music taste!" 
        : "Keep swiping to find your musical match",
    });
    // Here you would typically fetch the next match
    // For now, we'll just remove the current match
    setCurrentMatch(null);
  };

  if (!profile || !currentMatch) return null;

  return (
    <div className="container max-w-md mx-auto py-8 px-4">
      <div className="rounded-3xl overflow-hidden glass-morphism aspect-[3/4] relative animate-fadeIn">
        <img
          src={currentMatch.image}
          alt={currentMatch.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-sm font-medium">
              {currentMatch.compatibility}% Match
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-2xl font-semibold mb-2">
            {currentMatch.name}, {currentMatch.age}
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Music2 className="h-4 w-4" />
              <p className="text-sm opacity-90">
                Top genres: {currentMatch.topGenres.join(", ")}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Headphones className="h-4 w-4" />
              <p className="text-sm opacity-90">
                Favorite artists: {currentMatch.topArtists.join(", ")}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <p className="text-sm opacity-90">
                Listening style: {currentMatch.listeningStyle}
              </p>
            </div>

            <div className="flex gap-2 mt-4">
              {currentMatch.topGenres.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-white/20 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <Button
          size="icon"
          variant="outline"
          className="h-16 w-16 rounded-full hover:bg-destructive/10 hover:text-destructive"
          onClick={() => handleSwipe(false)}
        >
          <X className="h-8 w-8" />
        </Button>
        <Button
          size="icon"
          className="h-16 w-16 rounded-full hover:bg-primary/90"
          onClick={() => handleSwipe(true)}
        >
          <Heart className="h-8 w-8" />
        </Button>
      </div>
    </div>
  );
};

export default Match;
