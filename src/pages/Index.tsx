
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Heart, Music, ArrowRight, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 animate-fadeIn">
      <div className="space-y-6 text-center max-w-2xl mx-auto">
        <div className="flex justify-center gap-3 items-center mb-8">
          <Music className="w-8 h-8 text-primary" />
          <Heart className="w-8 h-8 text-primary" />
        </div>
        
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          Find Your Perfect
          <span className="text-primary"> Harmony</span>
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Connect through music. Create lasting bonds. Experience real harmony.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            onClick={() => navigate("/match")}
            className="group"
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/about")}
          >
            Learn More
          </Button>
        </div>

        <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl glass-morphism space-y-3"
            >
              <feature.icon className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Music,
    title: "Music Connection",
    description: "Find matches based on your music taste and listening habits.",
  },
  {
    icon: Heart,
    title: "Meaningful Matches",
    description: "Connect with people who share your musical journey.",
  },
  {
    icon: Users,
    title: "Vibrant Community",
    description: "Join music-loving communities and share experiences.",
  },
];

export default Index;
