
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Users, Music, Code, Palette, Globe, Microscope, BookOpen, Camera, ChevronRight } from 'lucide-react';

export function CommunitiesPage() {
  const navigate = useNavigate();
  
  const communities = [
    {
      id: 1,
      name: "Coding Club",
      members: 128,
      description: "For students passionate about programming and software development.",
      category: "Technical",
      icon: <Code className="h-6 w-6" />,
      joined: true,
      leaders: [
        { name: "Raj Kumar", role: "President" },
        { name: "Priya Sharma", role: "Secretary" }
      ]
    },
    {
      id: 2,
      name: "Music Society",
      members: 76,
      description: "For all music enthusiasts to collaborate and perform together.",
      category: "Cultural",
      icon: <Music className="h-6 w-6" />,
      joined: false,
      leaders: [
        { name: "Ankit Patel", role: "President" },
        { name: "Meera Reddy", role: "Coordinator" }
      ]
    },
    {
      id: 3,
      name: "Art & Design Club",
      members: 54,
      description: "Explore your creativity through various art forms and design projects.",
      category: "Cultural",
      icon: <Palette className="h-6 w-6" />,
      joined: false,
      leaders: [
        { name: "Vikram Singh", role: "President" },
        { name: "Aarti Gupta", role: "Vice President" }
      ]
    },
    {
      id: 4,
      name: "International Students Association",
      members: 92,
      description: "A community for international students to connect and share experiences.",
      category: "Networking",
      icon: <Globe className="h-6 w-6" />,
      joined: true,
      leaders: [
        { name: "Arjun Menon", role: "President" },
        { name: "Kavita Krishnan", role: "Secretary" }
      ]
    },
    {
      id: 5,
      name: "Science Club",
      members: 63,
      description: "For science enthusiasts to explore and experiment together.",
      category: "Academic",
      icon: <Microscope className="h-6 w-6" />,
      joined: false,
      leaders: [
        { name: "Rahul Khanna", role: "President" },
        { name: "Neha Kapoor", role: "Coordinator" }
      ]
    },
    {
      id: 6,
      name: "Book Club",
      members: 48,
      description: "For literature lovers to read and discuss books together.",
      category: "Academic",
      icon: <BookOpen className="h-6 w-6" />,
      joined: false,
      leaders: [
        { name: "Sanjay Verma", role: "President" },
        { name: "Pooja Mehta", role: "Secretary" }
      ]
    },
    {
      id: 7,
      name: "Photography Club",
      members: 57,
      description: "Capture and share beautiful moments through photography.",
      category: "Hobby",
      icon: <Camera className="h-6 w-6" />,
      joined: true,
      leaders: [
        { name: "Amit Kumar", role: "President" },
        { name: "Divya Agarwal", role: "Coordinator" }
      ]
    },
    {
      id: 8,
      name: "Student Leadership Forum",
      members: 36,
      description: "Develop leadership skills and make a positive impact on campus.",
      category: "Development",
      icon: <Users className="h-6 w-6" />,
      joined: false,
      leaders: [
        { name: "Rohan Desai", role: "President" },
        { name: "Anjali Singh", role: "Vice President" }
      ]
    }
  ];

  const viewClubDetails = (clubId: number) => {
    navigate(`/communities/${clubId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Clubs & Societies</h1>
        <p className="text-muted-foreground">Explore and join clubs based on your interests</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {communities.map((community) => (
          <CommunityCard 
            key={community.id} 
            community={community} 
            onViewClub={() => viewClubDetails(community.id)}
          />
        ))}
      </div>
    </div>
  );
}

interface CommunityProps {
  id: number;
  name: string;
  members: number;
  description: string;
  category: string;
  icon: React.ReactNode;
  joined: boolean;
  leaders: {name: string, role: string}[];
}

function CommunityCard({ community, onViewClub }: { community: CommunityProps, onViewClub: () => void }) {
  return (
    <Card className="card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary">
              {community.icon}
            </div>
            <CardTitle className="text-xl">{community.name}</CardTitle>
          </div>
          <Badge>{community.category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{community.description}</p>
        <p className="mt-2 text-sm"><strong>{community.members}</strong> members</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant={community.joined ? "outline" : "default"} 
          className="w-full"
          onClick={onViewClub}
        >
          View Club
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CommunitiesPage;
