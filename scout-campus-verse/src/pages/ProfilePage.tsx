
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Mail, Phone, MapPin, Bookmark, FileText, Settings, Calendar, Award } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import EditProfileForm from '@/components/profile/EditProfileForm';

export function ProfilePage() {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-1/3">
          <CardHeader>
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" alt="Student" />
                <AvatarFallback className="text-xl bg-primary text-primary-foreground">JP</AvatarFallback>
              </Avatar>
              <CardTitle className="mt-4">John Peterson</CardTitle>
              <CardDescription>Computer Science • 3rd Year</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>john.peterson@university.edu</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>+1-555-123-4567</span>
              </div>
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>Dormitory B, Room 204</span>
              </div>
              <div className="flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-3 text-muted-foreground" />
                <span>Enrolled: September 2022</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={() => setIsEditDialogOpen(true)}>
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </CardFooter>
        </Card>
        
        <div className="flex-1">
          <Tabs defaultValue="academics" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
              <TabsTrigger value="saved">Saved Items</TabsTrigger>
            </TabsList>
            
            <TabsContent value="academics" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Performance</CardTitle>
                  <CardDescription>Your academic details and progress</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-2">Current GPA</h3>
                    <div className="flex items-center gap-2">
                      <div className="text-3xl font-bold">3.7</div>
                      <div className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                        Top 10%
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Semester Progress</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1 text-sm">
                          <span>Spring 2025</span>
                          <span>Week 5 of 15</span>
                        </div>
                        <Progress value={33} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Current Courses</h3>
                    <div className="space-y-3">
                      <CourseItem 
                        code="CS301" 
                        name="Data Structures & Algorithms" 
                        instructor="Dr. Michael Chen"
                        grade="A"
                      />
                      <CourseItem 
                        code="CS315" 
                        name="Artificial Intelligence" 
                        instructor="Prof. Sarah Johnson"
                        grade="A-"
                      />
                      <CourseItem 
                        code="MTH201" 
                        name="Linear Algebra" 
                        instructor="Prof. Emily Brown"
                        grade="B+"
                      />
                      <CourseItem 
                        code="CS320" 
                        name="Database Systems" 
                        instructor="Dr. Robert Taylor"
                        grade="A"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="achievements" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Achievements & Certifications</CardTitle>
                  <CardDescription>Your awards, scholarships and certifications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <AchievementItem 
                    title="Merit Scholarship"
                    date="September 2023"
                    description="Awarded for outstanding academic performance"
                    icon={<Award className="h-6 w-6" />}
                  />
                  <AchievementItem 
                    title="Hackathon 2024 - 2nd Place"
                    date="February 2024"
                    description="Team project: Smart Campus Navigation System"
                    icon={<Award className="h-6 w-6" />}
                  />
                  <AchievementItem 
                    title="Certificate: Machine Learning Fundamentals"
                    date="December 2023"
                    description="Online certification course - 40 hours"
                    icon={<FileText className="h-6 w-6" />}
                  />
                  <AchievementItem 
                    title="Dean's List"
                    date="Fall 2023"
                    description="For maintaining a GPA above 3.5"
                    icon={<Award className="h-6 w-6" />}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activities" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Extracurricular Activities</CardTitle>
                  <CardDescription>Clubs, events and volunteer work</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ActivityItem 
                    title="Coding Club"
                    role="Vice President"
                    period="2023 - Present"
                    description="Organizing weekly coding sessions and workshops"
                  />
                  <ActivityItem 
                    title="Freshman Orientation Program"
                    role="Volunteer"
                    period="September 2024"
                    description="Guided new students during orientation week"
                  />
                  <ActivityItem 
                    title="Tech Fest 2024"
                    role="Organizer"
                    period="April 2024"
                    description="Helped coordinate the annual technology festival"
                  />
                  <ActivityItem 
                    title="Campus Outreach Program"
                    role="Volunteer"
                    period="2023 - Present"
                    description="Teaching computer basics at local schools"
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="saved" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Items</CardTitle>
                  <CardDescription>Events, notices and resources you've bookmarked</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <SavedItem 
                    title="Tech Fest 2025"
                    type="Event"
                    date="April 15-16, 2025"
                    icon={<Calendar className="h-5 w-5" />}
                  />
                  <SavedItem 
                    title="Scholarship Applications Open"
                    type="Notice"
                    date="Deadline: April 30, 2025"
                    icon={<Award className="h-5 w-5" />}
                  />
                  <SavedItem 
                    title="Career Fair"
                    type="Event"
                    date="May 5, 2025"
                    icon={<Calendar className="h-5 w-5" />}
                  />
                  <SavedItem 
                    title="Research Opportunities in AI"
                    type="Resource"
                    date="Added: March 20, 2025"
                    icon={<FileText className="h-5 w-5" />}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <EditProfileForm open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen} />
    </div>
  );
}

interface CourseItemProps {
  code: string;
  name: string;
  instructor: string;
  grade: string;
}

function CourseItem({ code, name, instructor, grade }: CourseItemProps) {
  return (
    <div className="p-3 border rounded-lg flex justify-between items-center card-hover">
      <div>
        <div className="flex items-center gap-2">
          <span className="font-medium">{code}</span>
          <span>{name}</span>
        </div>
        <p className="text-sm text-muted-foreground">{instructor}</p>
      </div>
      <div className={`text-sm font-medium px-2 py-1 rounded-full ${
        grade.startsWith('A') ? 'bg-green-100 text-green-800' :
        grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {grade}
      </div>
    </div>
  );
}

interface AchievementItemProps {
  title: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

function AchievementItem({ title, date, description, icon }: AchievementItemProps) {
  return (
    <div className="p-4 border rounded-lg flex items-start space-x-4 card-hover">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{date}</p>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  );
}

interface ActivityItemProps {
  title: string;
  role: string;
  period: string;
  description: string;
}

function ActivityItem({ title, role, period, description }: ActivityItemProps) {
  return (
    <div className="p-4 border rounded-lg card-hover">
      <div className="flex justify-between items-start">
        <h3 className="font-medium">{title}</h3>
        <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
          {role}
        </span>
      </div>
      <p className="text-sm text-muted-foreground">{period}</p>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
}

interface SavedItemProps {
  title: string;
  type: string;
  date: string;
  icon: React.ReactNode;
}

function SavedItem({ title, type, date, icon }: SavedItemProps) {
  return (
    <div className="p-4 border rounded-lg flex items-start space-x-4 card-hover">
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          <Button variant="ghost" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-primary">{type}</p>
        <p className="text-sm text-muted-foreground mt-1">{date}</p>
      </div>
    </div>
  );
}

export default ProfilePage;
