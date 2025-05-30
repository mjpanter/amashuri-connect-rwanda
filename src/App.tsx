
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import School from "./pages/School";
import SchoolDetail from "./pages/SchoolDetail";
import Buying from "./pages/Buying";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import SchoolWebsite from "./pages/SchoolWebsite";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/schools" element={<School />} />
          <Route path="/school/:id" element={<SchoolDetail />} />
          <Route path="/buying" element={<Buying />} />
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path="/school-website" element={<SchoolWebsite />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
