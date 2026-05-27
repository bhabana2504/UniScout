
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, Calendar, User, Search, Settings, LogOut, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import EditProfileForm from '../profile/EditProfileForm';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { useSearch } from '../../contexts/SearchContext';

export function Header() {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const navigate = useNavigate();
  const { 
    searchQuery, 
    setSearchQuery, 
    searchResults, 
    performSearch, 
    isSearching, 
    setIsSearching 
  } = useSearch();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchQuery) {
        performSearch(searchQuery);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, performSearch]);

  const handleCalendarClick = () => {
    setIsCalendarOpen(true);
    toast.info("Calendar opened! You can view your upcoming events here.");
  };

  const navigateToEvents = () => {
    navigate('/events');
    setIsCalendarOpen(false);
  };

  const navigateToCalendar = () => {
    navigate('/noticeboard?tab=calendar');
    setIsCalendarOpen(false);
  };

  const navigateToNoticeboard = () => {
    navigate('/noticeboard');
  };

  const navigateToProfile = () => {
    navigate('/profile');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (!query) {
      setIsSearching(false);
    }
  };

  const handleSearchItemClick = (path: string) => {
    navigate(path);
    setIsSearching(false);
    setSearchQuery('');
  };

  const clearSearch = () => {
    setSearchQuery('');
    setIsSearching(false);
  };

  return (
    <header className="h-16 border-b px-6 flex items-center justify-between bg-white">
      <div className="flex items-center w-full max-w-md relative">
        <div className="relative w-full">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full pl-8 rounded-md border border-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <button 
              onClick={clearSearch}
              className="absolute right-2.5 top-2.5"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>

        {/* Search Results Dropdown */}
        {isSearching && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
            {searchResults.length > 0 ? (
              <div className="p-1">
                {searchResults.map((result) => (
                  <div 
                    key={result.id}
                    className="px-3 py-2 hover:bg-muted rounded-sm cursor-pointer flex justify-between items-center"
                    onClick={() => handleSearchItemClick(result.path)}
                  >
                    <span>{result.title}</span>
                    <span className="text-xs text-muted-foreground capitalize">{result.type}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-3 text-center text-muted-foreground">No results found</div>
            )}
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          aria-label="Calendar"
          className="transition-all duration-200 hover:bg-primary/10 hover:text-primary"
          onClick={handleCalendarClick}
        >
          <Calendar className="h-5 w-5 text-muted-foreground transition-transform hover:scale-110" />
        </Button>
        
        <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Your Calendar</DialogTitle>
            </DialogHeader>
            <div className="p-4">
              <h3 className="font-medium">Upcoming Events</h3>
              <ul className="mt-2 space-y-2">
                <li className="p-2 border rounded-md cursor-pointer hover:bg-muted/50" onClick={navigateToCalendar}>
                  <p className="font-medium">Tech Fest 2025</p>
                  <p className="text-sm text-muted-foreground">Apr 15-16, 2025</p>
                </li>
                <li className="p-2 border rounded-md cursor-pointer hover:bg-muted/50" onClick={navigateToCalendar}>
                  <p className="font-medium">Cultural Night</p>
                  <p className="text-sm text-muted-foreground">Apr 20, 2025</p>
                </li>
                <li className="p-2 border rounded-md cursor-pointer hover:bg-muted/50" onClick={navigateToCalendar}>
                  <p className="font-medium">Career Fair</p>
                  <p className="text-sm text-muted-foreground">May 5, 2025</p>
                </li>
              </ul>
              <div className="flex gap-2 mt-4">
                <Button onClick={navigateToEvents} className="flex-1">View All Events</Button>
                <Button onClick={navigateToCalendar} className="flex-1" variant="outline">Open Calendar</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Notifications"
              className="transition-all duration-200 hover:bg-primary/10 hover:text-primary"
            >
              <Bell className="h-5 w-5 text-muted-foreground transition-transform hover:scale-110" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 animate-fade-in">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-80 overflow-auto">
              <DropdownMenuItem className="cursor-pointer flex flex-col items-start transition-all duration-200 hover:bg-primary/5" onClick={navigateToNoticeboard}>
                <p className="font-medium">Tech Fest Registration Open</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer flex flex-col items-start transition-all duration-200 hover:bg-primary/5" onClick={navigateToNoticeboard}>
                <p className="font-medium">Scholarship Application Reminder</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer flex flex-col items-start transition-all duration-200 hover:bg-primary/5" onClick={navigateToNoticeboard}>
                <p className="font-medium">New Club Announcement</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="justify-center mt-2">
                <Button variant="outline" size="sm" className="w-full" onClick={navigateToNoticeboard}>View All Notifications</Button>
              </DropdownMenuItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button 
              variant="ghost" 
              className="relative h-10 w-10 rounded-full transition-transform duration-200 hover:scale-105 hover:ring-2 hover:ring-primary/20"
            >
              <Avatar>
                <AvatarImage src="" alt="User" />
                <AvatarFallback className="bg-primary text-primary-foreground">US</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="animate-fade-in">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              className="cursor-pointer transition-all duration-200 hover:bg-primary/5" 
              onClick={navigateToProfile}
            >
              <User className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer transition-all duration-200 hover:bg-primary/5">
              <Settings className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild className="cursor-pointer transition-all duration-200 hover:bg-primary/5 hover:text-destructive">
              <Link to="/login" className="flex items-center">
                <LogOut className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                <span>Logout</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <EditProfileForm open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} />
    </header>
  );
}
