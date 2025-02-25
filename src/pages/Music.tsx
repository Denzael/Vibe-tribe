
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { useProfileStore } from "@/utils/profileStorage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const Music = () => {
  const profile = useProfileStore((state) => state.profile);
  const navigate = useNavigate();
  const { toast } = useToast();

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

  if (!profile) return null;

  const topArtists = profile.artists.slice(0, 4).map((artist) => ({
    name: artist,
    genre: profile.genres[0],
    image: "https://images.unsplash.com/photo-1618973361585-d066bb75909f",
  }));

  const recentTracks = profile.songs.slice(0, 3).map((song) => ({
    title: song,
    artist: profile.artists[0] || "Unknown Artist",
    duration: "3:00",
  }));

  return (
    <div className="container max-w-md mx-auto py-8 px-4 space-y-8">
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Your Top Artists</h2>
        <div className="grid grid-cols-2 gap-4">
          {topArtists.map((artist) => (
            <div
              key={artist.name}
              className="group relative rounded-xl overflow-hidden aspect-square"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                <div className="text-white">
                  <h3 className="font-medium">{artist.name}</h3>
                  <p className="text-sm opacity-75">{artist.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Recent Tracks</h2>
        <div className="space-y-3">
          {recentTracks.map((track) => (
            <div
              key={track.title}
              className="flex items-center gap-3 p-3 rounded-xl glass-morphism"
            >
              <Button size="icon" variant="ghost" className="shrink-0">
                <PlayCircle className="h-6 w-6" />
              </Button>
              <div className="min-w-0 flex-1">
                <h3 className="font-medium truncate">{track.title}</h3>
                <p className="text-sm text-muted-foreground truncate">
                  {track.artist}
                </p>
              </div>
              <span className="text-sm text-muted-foreground shrink-0">
                {track.duration}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Music;
