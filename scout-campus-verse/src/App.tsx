
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { AnimatedIntro } from "./components/ui/animated-intro";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ErpPage from "./pages/ErpPage";
import EventsPage from "./pages/EventsPage";
import CommunitiesPage from "./pages/CommunitiesPage";
import ReportsPage from "./pages/ReportsPage";
import FacultyPage from "./pages/FacultyPage";
import NoticeboardPage from "./pages/NoticeboardPage";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
import NotFound from "./pages/NotFound";
import ScholarshipForm from "./pages/ScholarshipForm";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ComplaintForm } from "./components/erp/ComplaintForm";
import ComplaintFormPage from "./pages/ComplaintFormPage";
import { CertificateDownloader } from "./components/erp/CertificateDownloader";
import ClubDetailPage from "./pages/ClubDetailPage";
import { SearchProvider } from "./contexts/SearchContext";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  
  useEffect(() => {
    // Hide the intro after 2.5 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SearchProvider>
          <TooltipProvider>
            {showIntro && <AnimatedIntro />}
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/login" element={<Login />} />
              
              <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/erp" element={<ErpPage />} />
                <Route path="/scholarships/:id" element={<ScholarshipForm />} />
                <Route path="/events" element={<EventsPage />} />
                <Route path="/communities" element={<CommunitiesPage />} />
                <Route path="/communities/:id" element={<ClubDetailPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/faculty" element={<FacultyPage />} />
                <Route path="/noticeboard" element={<NoticeboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/complaints" element={<ComplaintForm />} />
                <Route path="/complaints/new" element={<ComplaintFormPage />} />
                <Route path="/certificates" element={<CertificateDownloader certificates={[
                  { id: '1', title: 'Course Completion', date: 'March 15, 2025', type: 'Academic' },
                  { id: '2', title: 'Hackathon Winner', date: 'February 10, 2025', type: 'Achievement' },
                  { id: '3', title: 'Leadership Program', date: 'January 05, 2025', type: 'Extra-curricular' },
                ]} />} />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </SearchProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
