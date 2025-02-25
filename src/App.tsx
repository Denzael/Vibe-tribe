
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Match from "./pages/Match";
import Chat from "./pages/Chat";
import Music from "./pages/Music";
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import CreateProfile from "./pages/CreateProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <Layout showNav={false}>
                    <Index />
                  </Layout>
                }
              />
              <Route
                path="/auth"
                element={
                  <Layout showNav={false}>
                    <Auth />
                  </Layout>
                }
              />
              <Route
                path="/create-profile"
                element={
                  <Layout>
                    <CreateProfile />
                  </Layout>
                }
              />
              <Route
                path="/match"
                element={
                  <Layout>
                    <Match />
                  </Layout>
                }
              />
              <Route
                path="/chat"
                element={
                  <Layout>
                    <Chat />
                  </Layout>
                }
              />
              <Route
                path="/music"
                element={
                  <Layout>
                    <Music />
                  </Layout>
                }
              />
              <Route
                path="/community"
                element={
                  <Layout>
                    <Community />
                  </Layout>
                }
              />
              <Route
                path="/settings"
                element={
                  <Layout>
                    <Settings />
                  </Layout>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
