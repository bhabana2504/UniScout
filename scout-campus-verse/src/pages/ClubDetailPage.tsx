
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Calendar, Users, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export function ClubDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  
  // Find club by id
  const allClubs = [
    {
      id: "1",
      name: "Coding Club",
      members: 128,
      description: "For students passionate about programming and software development.",
      category: "Technical",
      joined: true,
      leaders: [
        { name: "Raj Kumar", role: "President" },
        { name: "Priya Sharma", role: "Secretary" }
      ],
      events: [
        { 
          id: 1, 
          title: "Hackathon 2025", 
          date: "February 15, 2025", 
          location: "Computer Science Building",
          description: "A 24-hour coding competition where participants build innovative solutions."
        },
        { 
          id: 2, 
          title: "Web Development Workshop", 
          date: "January 20, 2025", 
          location: "Tech Lab 2",
          description: "Learn the fundamentals of modern web development with React and Node.js."
        },
        { 
          id: 3, 
          title: "Open Source Contribution Day", 
          date: "December 5, 2024", 
          location: "Online",
          description: "Join us for a day dedicated to contributing to open source projects and learning collaborative development."
        }
      ]
    },
    {
      id: "2",
      name: "Music Society",
      members: 76,
      description: "For all music enthusiasts to collaborate and perform together.",
      category: "Cultural",
      joined: false,
      leaders: [
        { name: "Ankit Patel", role: "President" },
        { name: "Meera Reddy", role: "Coordinator" }
      ],
      events: [
        { 
          id: 1, 
          title: "Annual Music Festival", 
          date: "April 10, 2025", 
          location: "Campus Auditorium",
          description: "A celebration of musical talent featuring performances from students across various genres."
        },
        { 
          id: 2, 
          title: "Acoustic Night", 
          date: "March 5, 2025", 
          location: "Student Center",
          description: "An intimate evening of acoustic performances in a relaxed setting."
        },
        { 
          id: 3, 
          title: "Music Production Workshop", 
          date: "February 18, 2025", 
          location: "Music Studio",
          description: "Learn the basics of music production and recording techniques from industry professionals."
        }
      ]
    },
    {
      id: "3",
      name: "Art & Design Club",
      members: 54,
      description: "Explore your creativity through various art forms and design projects.",
      category: "Cultural",
      joined: false,
      leaders: [
        { name: "Vikram Singh", role: "President" },
        { name: "Aarti Gupta", role: "Vice President" }
      ],
      events: [
        { 
          id: 1, 
          title: "Art Exhibition", 
          date: "May 12, 2025", 
          location: "Campus Gallery",
          description: "Showcase of student artwork spanning different mediums and styles."
        },
        { 
          id: 2, 
          title: "Design Thinking Workshop", 
          date: "April 22, 2025", 
          location: "Design Studio",
          description: "Learn the principles of design thinking and how to apply them to solve real-world problems."
        },
        { 
          id: 3, 
          title: "Sketching Competition", 
          date: "March 15, 2025", 
          location: "Fine Arts Department",
          description: "A competition for sketching enthusiasts with prizes for the best works."
        }
      ]
    },
    {
      id: "4",
      name: "International Students Association",
      members: 92,
      description: "A community for international students to connect and share experiences.",
      category: "Networking",
      joined: true,
      leaders: [
        { name: "Arjun Menon", role: "President" },
        { name: "Kavita Krishnan", role: "Secretary" }
      ],
      events: [
        { 
          id: 1, 
          title: "Cultural Exchange Fair", 
          date: "April 28, 2025", 
          location: "University Square",
          description: "A celebration of diverse cultures featuring food, performances, and traditions from around the world."
        },
        { 
          id: 2, 
          title: "International Food Festival", 
          date: "March 22, 2025", 
          location: "Campus Grounds",
          description: "Sample cuisines from different countries prepared by international students."
        },
        { 
          id: 3, 
          title: "Global Networking Event", 
          date: "February 10, 2025", 
          location: "Business School",
          description: "Connect with alumni and professionals from various countries and industries."
        }
      ]
    },
    {
      id: "5",
      name: "Science Club",
      members: 63,
      description: "For science enthusiasts to explore and experiment together.",
      category: "Academic",
      joined: false,
      leaders: [
        { name: "Rahul Khanna", role: "President" },
        { name: "Neha Kapoor", role: "Coordinator" }
      ],
      events: [
        { 
          id: 1, 
          title: "Science Fair", 
          date: "May 18, 2025", 
          location: "Science Building",
          description: "An exhibition of student science projects showcasing innovative research and experiments."
        },
        { 
          id: 2, 
          title: "Astronomy Night", 
          date: "April 15, 2025", 
          location: "Observatory",
          description: "Stargazing event with telescopes and guided tour of the night sky."
        },
        { 
          id: 3, 
          title: "Environmental Awareness Campaign", 
          date: "March 5, 2025", 
          location: "Campus-wide",
          description: "A week-long campaign to raise awareness about environmental issues and sustainability."
        }
      ]
    },
    {
      id: "6",
      name: "Book Club",
      members: 48,
      description: "For literature lovers to read and discuss books together.",
      category: "Academic",
      joined: false,
      leaders: [
        { name: "Sanjay Verma", role: "President" },
        { name: "Pooja Mehta", role: "Secretary" }
      ],
      events: [
        { 
          id: 1, 
          title: "Monthly Book Discussion", 
          date: "April 25, 2025", 
          location: "Library Meeting Room",
          description: "Discussion of the monthly selected book 'The Midnight Library' by Matt Haig."
        },
        { 
          id: 2, 
          title: "Author Talk Series", 
          date: "March 18, 2025", 
          location: "Auditorium",
          description: "Renowned author Amitav Ghosh discusses his works and writing process."
        },
        { 
          id: 3, 
          title: "Poetry Slam", 
          date: "February 22, 2025", 
          location: "Student Center",
          description: "An evening of poetry performances and creative expression."
        }
      ]
    },
    {
      id: "7",
      name: "Photography Club",
      members: 57,
      description: "Capture and share beautiful moments through photography.",
      category: "Hobby",
      joined: true,
      leaders: [
        { name: "Amit Kumar", role: "President" },
        { name: "Divya Agarwal", role: "Coordinator" }
      ],
      events: [
        { 
          id: 1, 
          title: "Photography Exhibition", 
          date: "May 5, 2025", 
          location: "Arts Building",
          description: "Showcase of student photography highlighting diverse themes and techniques."
        },
        { 
          id: 2, 
          title: "Wildlife Photography Workshop", 
          date: "April 12, 2025", 
          location: "Nearby Wildlife Sanctuary",
          description: "Hands-on workshop on wildlife photography techniques and ethics."
        },
        { 
          id: 3, 
          title: "Night Photography Walk", 
          date: "March 8, 2025", 
          location: "Campus & Surroundings",
          description: "Guided photography session exploring night photography and long exposure techniques."
        }
      ]
    },
    {
      id: "8",
      name: "Student Leadership Forum",
      members: 36,
      description: "Develop leadership skills and make a positive impact on campus.",
      category: "Development",
      joined: false,
      leaders: [
        { name: "Rohan Desai", role: "President" },
        { name: "Anjali Singh", role: "Vice President" }
      ],
      events: [
        { 
          id: 1, 
          title: "Leadership Summit", 
          date: "April 20, 2025", 
          location: "Conference Center",
          description: "A day of keynote speeches, workshops, and networking with leaders from various fields."
        },
        { 
          id: 2, 
          title: "Community Service Project", 
          date: "March 15, 2025", 
          location: "Local Community",
          description: "Volunteer initiative to support local organizations and develop leadership through service."
        },
        { 
          id: 3, 
          title: "Public Speaking Workshop", 
          date: "February 25, 2025", 
          location: "Seminar Hall",
          description: "Develop essential public speaking and presentation skills with expert guidance."
        }
      ]
    }
  ];
  
  const club = allClubs.find(c => c.id === id);
  
  if (!club) {
    return (
      <div className="flex items-center justify-center h-full">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Club Not Found</CardTitle>
            <CardDescription>The club you're looking for doesn't exist.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button onClick={() => navigate('/communities')} className="w-full">
              Return to Clubs/Societies
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const handleJoinClub = () => {
    setIsFormOpen(true);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Successfully applied to join ${club.name}!`);
    setIsFormOpen(false);
    setTimeout(() => navigate('/communities'), 1500);
  };

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-primary/20 to-primary/10">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl">{club.name}</CardTitle>
              <CardDescription className="text-base mt-2">{club.description}</CardDescription>
            </div>
            <div className="flex flex-col items-end">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-sm font-medium">
                {club.members} members
              </span>
              <span className="text-sm mt-2">{club.category} Club</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Club Leaders</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {club.leaders.map((leader, idx) => (
                  <Card key={idx} className="bg-muted/50">
                    <CardContent className="p-3 flex justify-between items-center">
                      <span>{leader.name}</span>
                      <span className="text-sm text-muted-foreground">{leader.role}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleJoinClub} className="w-full">
            Join Club
          </Button>
        </CardFooter>
      </Card>

      <div>
        <h2 className="text-2xl font-bold mb-4">Previous Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {club.events.map(event => (
            <Card key={event.id} className="card-hover">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Join {club.name}</DialogTitle>
            <DialogDescription>
              Please complete this form to apply for membership.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admissionNumber">Admission Number</Label>
                <Input id="admissionNumber" placeholder="Enter your admission number" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enrollmentNumber">Enrollment Number</Label>
                <Input id="enrollmentNumber" placeholder="Enter your enrollment number" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="semester">Semester</Label>
                <Input id="semester" placeholder="Current semester" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" placeholder="Enter your phone number" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="course">Course</Label>
                <Input id="course" placeholder="Your course/program" required />
              </div>
            </div>
            
            <DialogFooter>
              <Button type="submit">Join Club</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ClubDetailPage;
