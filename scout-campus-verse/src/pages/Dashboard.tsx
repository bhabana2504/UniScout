
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, Bell, School } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

export function Dashboard() {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState('');
  
  useEffect(() => {
    // Get current date in the format: Weekday, Month Day, Year
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    setCurrentDate(date.toLocaleDateString('en-US', options));
  }, []);

  // Sample upcoming events
  const upcomingEvents = [
    { id: 1, title: "Tech Fest 2025", date: "April 15-16", type: "Tech Council" },
    { id: 2, title: "Cultural Night", date: "April 20", type: "Student Council" },
    { id: 3, title: "Career Fair", date: "May 5", type: "Placement Cell" },
  ];

  // Sample announcements
  const announcements = [
    { id: 1, title: "Scholarship Applications Open", date: "April 3, 2025" },
    { id: 2, title: "Summer Internship Drive", date: "April 1, 2025" },
    { id: 3, title: "Library Timing Changes", date: "March 30, 2025" },
    { id: 4, title: "Mid-semester Exam Schedule", date: "March 28, 2025" },
  ];

  const handleEventClick = (eventId: number) => {
    navigate('/noticeboard?tab=calendar');
  };

  const handleAnnouncementClick = (announcementId: number) => {
    navigate('/noticeboard');
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Welcome, Student</h1>
        <p className="text-muted-foreground">{currentDate}</p>
      </div>
      
      {/* Quick links section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <QuickLink 
          icon={<School className="h-5 w-5" />} 
          title="ERP Portal" 
          description="Access academics, scholarships & certificates"
          href="/erp"
          color="bg-gradient-to-r from-purple-500 to-uscout-purple-light"
        />
        <QuickLink 
          icon={<Users className="h-5 w-5" />} 
          title="Clubs/Societies" 
          description="Join student clubs and organizations"
          href="/communities"
          color="bg-gradient-to-r from-blue-500 to-uscout-teal"
        />
        <QuickLink 
          icon={<Calendar className="h-5 w-5" />} 
          title="Upcoming Events" 
          description="Campus events and activities"
          href="/events"
          color="bg-gradient-to-r from-orange-500 to-uscout-coral"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming events */}
        <Card className="col-span-2 card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Events
            </CardTitle>
            <CardDescription>Events happening this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div 
                  key={event.id} 
                  className="block transition-transform hover:scale-[1.01] hover:shadow-md cursor-pointer"
                  onClick={() => handleEventClick(event.id)}
                >
                  <div className="flex items-start gap-4 p-3 rounded-lg border bg-card animate-scale-in">
                    <div className="w-14 h-14 rounded-md flex flex-col items-center justify-center bg-primary/10 text-primary">
                      <span className="text-sm font-semibold">{event.date.split(' ')[0]}</span>
                      <span className="text-xs">{event.date.split(' ')[1] || ''}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">Organized by {event.type}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/events">View All Events</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Announcements */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="h-5 w-5 text-primary" />
              Announcements
            </CardTitle>
            <CardDescription>Latest updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {announcements.map((announcement) => (
                <div 
                  key={announcement.id} 
                  className="block border-b pb-2 last:border-0 last:pb-0 hover:bg-muted/30 p-2 rounded-md transition-colors cursor-pointer"
                  onClick={() => handleAnnouncementClick(announcement.id)}
                >
                  <h4 className="font-medium">{announcement.title}</h4>
                  <p className="text-xs text-muted-foreground">{announcement.date}</p>
                </div>
              ))}
              <Button variant="outline" className="w-full" asChild>
                <Link to="/noticeboard">View Noticeboard</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

interface QuickLinkProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  color: string;
}

function QuickLink({ icon, title, description, href, color }: QuickLinkProps) {
  return (
    <Link 
      to={href} 
      className={`rounded-lg overflow-hidden card-hover ${color} text-white p-6 flex flex-col gap-2 transition-transform hover:scale-[1.02]`}
    >
      <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </Link>
  );
}

export default Dashboard;
