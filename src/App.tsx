import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/Index";
import MernCourse from "./pages/MernCourse";
import MeanCourse from "./pages/MeanCourse";
import DjangoCourse from "./pages/DjangoCourse";
import FlutterCourse from "./pages/FlutterCourse";
import GolangCourse from "./pages/GolangCourse";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/mern" element={<MernCourse />} />
            <Route path="/mean" element={<MeanCourse />} />
            <Route path="/python" element={<DjangoCourse />} />
            <Route path="/flutter" element={<FlutterCourse />} />
            <Route path="/go" element={<GolangCourse />} />

          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
