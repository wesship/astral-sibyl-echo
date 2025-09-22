
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TarotReading from "./pages/TarotReading";
import OracleCards from "./pages/OracleCards";
import Horoscope from "./pages/Horoscope";
import Blog from "./pages/Blog";
import RuneCasting from "./pages/RuneCasting";
import ChakraHealing from "./pages/ChakraHealing";
import CrystalGuide from "./pages/CrystalGuide";
import Mythology from "./pages/Mythology";
import ChatBot from "./pages/ChatBot";
import ReadingHistory from "./pages/ReadingHistory";
import Journal from "./pages/Journal";
import PlanetaryChart from "./pages/PlanetaryChart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tarot" element={<TarotReading />} />
            <Route path="/oracle" element={<OracleCards />} />
            <Route path="/horoscope" element={<Horoscope />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/runes" element={<RuneCasting />} />
            <Route path="/chakras" element={<ChakraHealing />} />
            <Route path="/crystals" element={<CrystalGuide />} />
            <Route path="/mythology" element={<Mythology />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/history" element={<ReadingHistory />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/planetary-chart" element={<PlanetaryChart />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
