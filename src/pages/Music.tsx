
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

const Music = () => {
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

const topArtists = [
  {
    name: "Taylor Swift",
    genre: "Pop",
    image: "https://images.unsplash.com/photo-1618973361585-d066bb75909f",
  },
  {
    name: "Ed Sheeran",
    genre: "Pop/Folk",
    image: "https://images.unsplash.com/photo-1516280906200-bf8c2f10174f",
  },
  {
    name: "Drake",
    genre: "Hip Hop",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f",
  },
  {
    name: "Dua Lipa",
    genre: "Pop",
    image: "https://images.unsplash.com/photo-1604882737276-48efa182febd",
  },
];

const recentTracks = [
  {
    title: "Cruel Summer",
    artist: "Taylor Swift",
    duration: "2:58",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: "3:53",
  },
  {
    title: "Don't Start Now",
    artist: "Dua Lipa",
    duration: "3:03",
  },
];

export default Music;
