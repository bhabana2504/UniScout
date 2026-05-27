
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Users, Filter, MapPin, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';

export function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventCardProps | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const handleEventClick = (event: EventCardProps) => {
    setSelectedEvent(event);
  };

  const handleRegisterClick = () => {
    setIsRegisterOpen(true);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Successfully registered for ${selectedEvent?.title}!`);
    setIsRegisterOpen(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">University Events</h1>
        <p className="text-muted-foreground">Explore upcoming and past events</p>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="student-council">Student Council</TabsTrigger>
          <TabsTrigger value="tech-council">Tech Council</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <EventCard 
              title="Tech Fest 2025"
              date="April 15-16, 2025"
              location="Main Campus"
              organizer="Tech Council"
              image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="tech"
              description="Annual technology festival featuring coding competitions, hackathons, tech exhibitions, and workshops by industry experts. Join us for two days of innovation and learning."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Cultural Night"
              date="April 20, 2025"
              location="Campus Auditorium"
              organizer="Student Council"
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="cultural"
              description="A night of cultural performances showcasing talent from across the university. Featuring dance, music, drama, and fashion show by students representing diverse cultural backgrounds."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Career Fair"
              date="May 5, 2025"
              location="Business School"
              organizer="Placement Cell"
              image="https://images.unsplash.com/photo-1560523159-4a9692d222ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="career"
              description="Connect with over 50 companies looking to recruit fresh talent. Opportunities for internships, full-time positions, and networking with industry professionals."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Hackathon 2025"
              date="May 12-13, 2025"
              location="Computer Science Building"
              organizer="Tech Council"
              image="https://images.unsplash.com/photo-1544819679-32f59f9a82cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="tech"
              description="48-hour coding marathon where teams compete to build innovative solutions to real-world problems. Prizes worth ₹50,000 to be won, with opportunities for incubation support."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Sports Festival"
              date="May 25-27, 2025"
              location="University Stadium"
              organizer="Student Council"
              image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="sports"
              description="Annual inter-college sports tournament featuring cricket, football, basketball, volleyball, athletics, and more. Participate or cheer for your favorite teams."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Alumni Meet"
              date="June 10, 2025"
              location="Main Hall"
              organizer="Alumni Association"
              image="https://images.unsplash.com/photo-1539494580123-4a527acd248f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="networking"
              description="Annual gathering of alumni to reconnect with their alma mater and network with current students. Special panels on career guidance and mentorship opportunities."
              onClick={handleEventClick}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="student-council" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <EventCard 
              title="Cultural Night"
              date="April 20, 2025"
              location="Campus Auditorium"
              organizer="Student Council"
              image="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="cultural"
              description="A night of cultural performances showcasing talent from across the university. Featuring dance, music, drama, and fashion show by students representing diverse cultural backgrounds."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Sports Festival"
              date="May 25-27, 2025"
              location="University Stadium"
              organizer="Student Council"
              image="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="sports"
              description="Annual inter-college sports tournament featuring cricket, football, basketball, volleyball, athletics, and more. Participate or cheer for your favorite teams."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Fresher's Welcome"
              date="August 10, 2025"
              location="Main Hall"
              organizer="Student Council"
              image="https://images.unsplash.com/photo-1513279922550-250c2129b13a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="cultural"
              description="Welcome celebration for new students joining the university. Fun activities, ice-breakers, and performances to help freshers integrate into the university community."
              onClick={handleEventClick}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="tech-council" className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <EventCard 
              title="Tech Fest 2025"
              date="April 15-16, 2025"
              location="Main Campus"
              organizer="Tech Council"
              image="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="tech"
              description="Annual technology festival featuring coding competitions, hackathons, tech exhibitions, and workshops by industry experts. Join us for two days of innovation and learning."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Hackathon 2025"
              date="May 12-13, 2025"
              location="Computer Science Building"
              organizer="Tech Council"
              image="https://images.unsplash.com/photo-1544819679-32f59f9a82cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="tech"
              description="48-hour coding marathon where teams compete to build innovative solutions to real-world problems. Prizes worth ₹50,000 to be won, with opportunities for incubation support."
              onClick={handleEventClick}
            />
            <EventCard 
              title="Workshop: AI Fundamentals"
              date="June 5, 2025"
              location="Tech Lab"
              organizer="Tech Council"
              image="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80"
              category="workshop"
              description="Hands-on workshop introducing the fundamentals of artificial intelligence and machine learning. Perfect for beginners looking to start their journey in AI."
              onClick={handleEventClick}
            />
          </div>
        </TabsContent>
      </Tabs>

      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
              <DialogDescription>{selectedEvent.date} at {selectedEvent.location}</DialogDescription>
            </DialogHeader>
            <div className="mt-2 space-y-4">
              <div className="aspect-video w-full overflow-hidden rounded-lg">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="space-y-2">
                <p>{selectedEvent.description}</p>
                
                <div className="flex items-center text-sm mt-4">
                  <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Organized by {selectedEvent.organizer}</span>
                </div>
                
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>{selectedEvent.location}</span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleRegisterClick}>Register for Event</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      {selectedEvent && (
        <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Register for {selectedEvent.title}</DialogTitle>
              <DialogDescription>
                Fill out this form to register for the event
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRegisterSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input id="studentId" placeholder="Enter your student ID" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="course">Course/Program</Label>
                  <Input id="course" placeholder="Your course or program" required />
                </div>
              </div>
              
              <DialogFooter>
                <Button type="submit">Submit Registration</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  organizer: string;
  image: string;
  category: string;
  description: string;
  onClick: (event: EventCardProps) => void;
}

function EventCard(props: EventCardProps) {
  const { title, date, location, organizer, image, category, onClick } = props;
  
  return (
    <Card className="overflow-hidden card-hover cursor-pointer" onClick={() => onClick(props)}>
      <div className="h-48 w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
            {category}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-sm">
            <Users className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{organizer}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="ml-auto flex items-center gap-1">
          View Details
          <ChevronRight className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default EventsPage;
