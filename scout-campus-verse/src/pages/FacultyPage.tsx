
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Mail, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define the faculty members data with Indian names
const facultyMembers = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    position: 'Professor',
    department: 'Computer Science',
    email: 'rajesh.kumar@university.edu',
    phone: '+91 98765 43210',
    expertise: ['Artificial Intelligence', 'Machine Learning', 'Data Science'],
    initials: 'RK',
  },
  {
    id: 2,
    name: 'Dr. Priya Sharma',
    position: 'Associate Professor',
    department: 'Electronics Engineering',
    email: 'priya.sharma@university.edu',
    phone: '+91 87654 32109',
    expertise: ['VLSI Design', 'Embedded Systems', 'Signal Processing'],
    initials: 'PS',
  },
  {
    id: 3,
    name: 'Prof. Amit Patel',
    position: 'Assistant Professor',
    department: 'Mechanical Engineering',
    email: 'amit.patel@university.edu',
    phone: '+91 76543 21098',
    expertise: ['Thermodynamics', 'Fluid Mechanics', 'CAD/CAM'],
    initials: 'AP',
  },
  {
    id: 4,
    name: 'Dr. Ananya Singh',
    position: 'Professor',
    department: 'Mathematics',
    email: 'ananya.singh@university.edu',
    phone: '+91 65432 10987',
    expertise: ['Number Theory', 'Abstract Algebra', 'Cryptography'],
    initials: 'AS',
  },
  {
    id: 5,
    name: 'Dr. Vikram Malhotra',
    position: 'Associate Professor',
    department: 'Physics',
    email: 'vikram.malhotra@university.edu',
    phone: '+91 54321 09876',
    expertise: ['Quantum Physics', 'Theoretical Physics', 'Astrophysics'],
    initials: 'VM',
  },
  {
    id: 6,
    name: 'Dr. Meera Desai',
    position: 'Assistant Professor',
    department: 'Chemical Engineering',
    email: 'meera.desai@university.edu',
    phone: '+91 43210 98765',
    expertise: ['Polymer Science', 'Reaction Engineering', 'Process Control'],
    initials: 'MD',
  },
];

export function FacultyPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Faculty Directory</h1>
        <p className="text-muted-foreground">
          Meet our distinguished faculty members who are experts in their respective fields
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyMembers.map((faculty) => (
          <Card key={faculty.id} className="overflow-hidden transition-all hover:shadow-md">
            <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary/20">
                <AvatarFallback className="bg-primary text-white text-lg">
                  {faculty.initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg">{faculty.name}</h3>
                <p className="text-sm text-muted-foreground">{faculty.position}</p>
                <p className="text-sm font-medium">{faculty.department}</p>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <a href={`mailto:${faculty.email}`} className="text-primary hover:underline">
                    {faculty.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>{faculty.phone}</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-2">Expertise Areas:</p>
                <div className="flex flex-wrap gap-2">
                  {faculty.expertise.map((area, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-primary/10 text-primary-foreground rounded-md text-xs"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full gap-2">
                <Globe className="h-4 w-4" />
                View Profile
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default FacultyPage;
