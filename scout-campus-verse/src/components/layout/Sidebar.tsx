
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  BookOpen, 
  Calendar, 
  Users, 
  Award, 
  School, 
  FileText, 
  Bell, 
  Info, 
  LogOut,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarLink = ({ to, icon, label, isActive }: SidebarLinkProps) => (
  <Link 
    to={to} 
    className={cn(
      "menu-item transition-all duration-200 hover:bg-sidebar-accent/80 relative",
      "before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-sidebar-accent/30 before:transition-all before:duration-300",
      "hover:before:w-1",
      isActive && "menu-item-active before:w-1"
    )}
  >
    <div className="flex items-center gap-3">
      <span className="transition-transform duration-200 group-hover:scale-110">{icon}</span>
      <span className="transition-opacity duration-200">{label}</span>
    </div>
  </Link>
);

export function Sidebar() {
  const location = useLocation();
  const pathname = location.pathname;
  const isMobile = useIsMobile();

  const links = [
    { to: "/", icon: <Home size={18} />, label: "Dashboard" },
    { to: "/erp", icon: <School size={18} />, label: "ERP" },
    { to: "/events", icon: <Calendar size={18} />, label: "Events" },
    { to: "/communities", icon: <Users size={18} />, label: "Clubs/Societies" },
    { to: "/reports", icon: <FileText size={18} />, label: "Reports" },
    { to: "/faculty", icon: <BookOpen size={18} />, label: "Faculty" },
    { to: "/noticeboard", icon: <Bell size={18} />, label: "Noticeboard" },
    { to: "/about", icon: <Info size={18} />, label: "About Us" },
  ];

  return (
    <div className={cn(
      "h-full bg-sidebar flex flex-col", 
      isMobile ? "w-full" : "w-60 animate-slide-in shadow-lg"
    )}>
      <div className="p-4 flex items-center gap-2 border-b border-sidebar-border transition-all duration-300 hover:bg-sidebar-accent/20">
        <div className="flex items-center justify-center w-9 h-9 rounded-md bg-white/20 transition-transform duration-200 hover:scale-105">
          <img 
            src="/lovable-uploads/9fae2876-fd54-4014-9acc-c179ae892829.png" 
            alt="Uni Scout" 
            className="w-full h-full object-contain p-1"
          />
        </div>
        <h1 className="text-xl font-bold text-white">Uni Scout</h1>
      </div>
      
      <div className="flex-grow p-3 space-y-1">
        {links.map((link) => (
          <SidebarLink 
            key={link.to} 
            to={link.to} 
            icon={link.icon} 
            label={link.label}
            isActive={pathname === link.to}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-sidebar-border mt-auto">
        <Link to="/login">
          <Button 
            variant="outline" 
            className="w-full justify-start text-white hover:text-white hover:bg-sidebar-border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md bg-sidebar-accent/30 border-white/30"
          >
            <LogOut size={18} className="mr-2 transition-transform duration-200 group-hover:rotate-12" />
            <span>Logout</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
