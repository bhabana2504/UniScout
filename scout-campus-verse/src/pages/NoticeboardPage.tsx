
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar as CalendarIcon, Bell, User, BookOpen, Award, School } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useSearchParams } from 'react-router-dom';

export function NoticeboardPage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState('noticeboard');
  const [activeCategory, setActiveCategory] = useState('All Announcements');
  
  useEffect(() => {
    if (tabParam === 'calendar') {
      setActiveTab('calendar');
    }
  }, [tabParam]);
  
  const allAnnouncements = [
    {
      id: 1,
      title: "Mid-semester Exam Schedule Released",
      date: "April 3, 2025",
      category: "Academic",
      icon: <BookOpen className="h-5 w-5" />,
      content: "The mid-semester examination schedule has been released. Please check your student portal for details."
    },
    {
      id: 2, 
      title: "Library Timing Changes",
      date: "March 30, 2025",
      category: "Facility",
      icon: <School className="h-5 w-5" />,
      content: "The library will now be open from 8 AM to 10 PM on weekdays and 10 AM to 6 PM on weekends."
    },
    {
      id: 3,
      title: "Scholarship Applications Open",
      date: "March 28, 2025",
      category: "Financial",
      icon: <Award className="h-5 w-5" />,
      content: "Applications for the annual merit scholarship are now open. Eligible students can apply through the ERP portal."
    },
    {
      id: 4,
      title: "New Faculty Appointment",
      date: "March 25, 2025",
      category: "Administrative",
      icon: <User className="h-5 w-5" />,
      content: "Dr. Sarah Johnson has joined the Computer Science department as an Associate Professor."
    },
    {
      id: 5,
      title: "Summer Internship Drive",
      date: "March 20, 2025",
      category: "Career",
      icon: <Award className="h-5 w-5" />,
      content: "The career services department is organizing a summer internship drive on April 10, 2025."
    }
  ];
  
  const categories = [
    { label: "All Announcements", count: allAnnouncements.length },
    { label: "Academic", count: allAnnouncements.filter(a => a.category === 'Academic').length },
    { label: "Administrative", count: allAnnouncements.filter(a => a.category === 'Administrative').length },
    { label: "Financial", count: allAnnouncements.filter(a => a.category === 'Financial').length },
    { label: "Events", count: allAnnouncements.filter(a => a.category === 'Events').length },
    { label: "Facility", count: allAnnouncements.filter(a => a.category === 'Facility').length },
    { label: "Career", count: allAnnouncements.filter(a => a.category === 'Career').length }
  ];

  const filteredAnnouncements = activeCategory === 'All Announcements'
    ? allAnnouncements
    : allAnnouncements.filter(announcement => announcement.category === activeCategory);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Noticeboard & Calendar</h1>
        <p className="text-muted-foreground">Important announcements and upcoming events</p>
      </div>
      
      <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="noticeboard">Noticeboard</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="noticeboard" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Latest Announcements
                  </CardTitle>
                  <CardDescription>
                    {activeCategory === 'All Announcements' 
                      ? 'Important notices and updates' 
                      : `Filtered by ${activeCategory}`}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {filteredAnnouncements.map((announcement) => (
                    <AnnouncementItem 
                      key={announcement.id}
                      title={announcement.title}
                      date={announcement.date}
                      category={announcement.category}
                      icon={announcement.icon}
                      content={announcement.content}
                    />
                  ))}
                  {filteredAnnouncements.length === 0 && (
                    <div className="text-center p-6 text-muted-foreground">
                      No announcements found in the selected category.
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-primary" />
                    Categories
                  </CardTitle>
                  <CardDescription>Filter announcements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <CategoryButton 
                        key={category.label}
                        label={category.label} 
                        count={category.count} 
                        active={activeCategory === category.label}
                        onClick={() => setActiveCategory(category.label)}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="calendar" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>Your academic and extracurricular calendar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <CalendarEvent 
                      title="Mid-semester Examinations"
                      date="April 10-15, 2025"
                      time="As per schedule"
                      location="Examination Halls"
                      type="Academic"
                    />
                    <CalendarEvent 
                      title="Tech Fest 2025"
                      date="April 15-16, 2025"
                      time="9 AM - 6 PM"
                      location="Main Campus"
                      type="Event"
                    />
                    <CalendarEvent 
                      title="Cultural Night"
                      date="April 20, 2025"
                      time="6 PM - 10 PM"
                      location="Campus Auditorium"
                      type="Event"
                    />
                    <CalendarEvent 
                      title="Career Fair"
                      date="May 5, 2025"
                      time="10 AM - 4 PM"
                      location="Business School"
                      type="Career"
                    />
                    <CalendarEvent 
                      title="Hackathon 2025"
                      date="May 12-13, 2025"
                      time="9 AM onwards"
                      location="Computer Science Building"
                      type="Event"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5 text-primary" />
                    Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Calendar 
                    mode="single"
                    className="rounded-md border pointer-events-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

interface AnnouncementItemProps {
  title: string;
  date: string;
  category: string;
  content: string;
  icon: React.ReactNode;
}

function AnnouncementItem({ title, date, category, content, icon }: AnnouncementItemProps) {
  return (
    <div className="p-4 border rounded-lg bg-card card-hover">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
          {icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{title}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
              {category}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">{date}</p>
          <p className="text-sm mt-2">{content}</p>
        </div>
      </div>
    </div>
  );
}

interface CategoryButtonProps {
  label: string;
  count: number;
  active?: boolean;
  onClick: () => void;
}

function CategoryButton({ label, count, active = false, onClick }: CategoryButtonProps) {
  return (
    <button
      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm ${
        active 
          ? 'bg-primary text-primary-foreground' 
          : 'hover:bg-accent text-foreground'
      }`}
      onClick={onClick}
    >
      <span>{label}</span>
      <span className={`px-2 py-0.5 rounded-full text-xs ${
        active 
          ? 'bg-primary-foreground text-primary' 
          : 'bg-muted text-muted-foreground'
      }`}>
        {count}
      </span>
    </button>
  );
}

interface CalendarEventProps {
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

function CalendarEvent({ title, date, time, location, type }: CalendarEventProps) {
  return (
    <div className="p-4 border rounded-lg flex items-start gap-4 bg-card card-hover">
      <div className="w-12 h-12 rounded-md flex flex-col items-center justify-center bg-primary/10 text-primary shrink-0">
        <CalendarIcon className="h-6 w-6" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
            {type}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{date} • {time}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
}

export default NoticeboardPage;
