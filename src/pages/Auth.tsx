
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Key, Music, ArrowLeft } from "lucide-react";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const musicServices = [
    { name: "Spotify", color: "bg-[#1DB954]" },
    { name: "Apple Music", color: "bg-[#FC3C44]" },
    { name: "YouTube Music", color: "bg-[#FF0000]" },
    { name: "Deezer", color: "bg-[#00C7F2]" },
    { name: "Audiomack", color: "bg-[#FFA200]" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">
            {isSignUp ? "Create an account" : "Welcome back"}
          </h1>
          <p className="text-muted-foreground">
            {isSignUp
              ? "Get started by creating your account"
              : "Sign in to your account"}
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
              icon={<Mail className="h-4 w-4 text-muted-foreground" />}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12"
              icon={<Key className="h-4 w-4 text-muted-foreground" />}
            />
          </div>

          <Button className="w-full h-12" size="lg">
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <div className="grid gap-2">
            {musicServices.map((service) => (
              <Button
                key={service.name}
                variant="outline"
                className="h-12"
                onClick={() => {/* Firebase auth will be added here */}}
              >
                <Music className="mr-2 h-4 w-4" />
                Continue with {service.name}
              </Button>
            ))}
          </div>

          <div className="text-center text-sm">
            <button
              className="text-primary hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp
                ? "Already have an account? Sign in"
                : "Need an account? Sign up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
