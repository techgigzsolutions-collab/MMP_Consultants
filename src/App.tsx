import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import ServiceCategoryPage from "./pages/ServiceCategoryPage";
import ContactPage from "./pages/ContactPage";
import FloatingActions from "./components/common/FloatingActions";
import ScrollToTop from "./components/common/ScrollToTop";
import Service_mobile_Page from "./pages/services_mobile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:slug" element={<ServiceCategoryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Legacy redirects */}
          <Route path="/service" element={<ServicePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingActions />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
