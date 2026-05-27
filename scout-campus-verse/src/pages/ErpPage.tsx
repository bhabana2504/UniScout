
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, FileText, AlertTriangle, MessageSquare, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';

export function ErpPage() {
  const navigate = useNavigate();
  
  // Handle scholarship application
  const handleScholarshipApply = (scholarshipId: string) => {
    navigate(`/scholarships/${scholarshipId}`);
  };

  // Handle complaint submission
  const handleComplaintSubmit = () => {
    navigate('/complaints/new');
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">ERP Portal</h1>
        <p className="text-muted-foreground">Manage your academic resources</p>
      </div>
      
      <Tabs defaultValue="scholarships" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="electives">Electives</TabsTrigger>
          <TabsTrigger value="complaints">Complaints</TabsTrigger>
          <TabsTrigger value="faculty">Faculty</TabsTrigger>
        </TabsList>
        
        <TabsContent value="scholarships" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Available Scholarships
              </CardTitle>
              <CardDescription>Scholarships you can apply for based on your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div 
                className="p-4 border rounded-lg flex justify-between items-center bg-card card-hover cursor-pointer"
                onClick={() => handleScholarshipApply('merit-scholarship')}
              >
                <div>
                  <h3 className="font-medium">Merit Scholarship</h3>
                  <p className="text-sm text-muted-foreground">Deadline: April 30, 2025</p>
                  <p className="text-sm text-muted-foreground">For students with GPA above 3.7</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">$2,500</p>
                  <Button size="sm" className="mt-2">Apply</Button>
                </div>
              </div>
              
              <div 
                className="p-4 border rounded-lg flex justify-between items-center bg-card card-hover cursor-pointer"
                onClick={() => handleScholarshipApply('research-grant')}
              >
                <div>
                  <h3 className="font-medium">Research Grant</h3>
                  <p className="text-sm text-muted-foreground">Deadline: May 15, 2025</p>
                  <p className="text-sm text-muted-foreground">For students involved in research projects</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">$1,800</p>
                  <Button size="sm" className="mt-2">Apply</Button>
                </div>
              </div>
              
              <div 
                className="p-4 border rounded-lg flex justify-between items-center bg-card card-hover cursor-pointer"
                onClick={() => handleScholarshipApply('financial-aid')}
              >
                <div>
                  <h3 className="font-medium">Financial Aid</h3>
                  <p className="text-sm text-muted-foreground">Deadline: Ongoing</p>
                  <p className="text-sm text-muted-foreground">Need-based financial assistance</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-lg">Varies</p>
                  <Button size="sm" className="mt-2">Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="certificates" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Your Certificates
              </CardTitle>
              <CardDescription>Certificates and achievements you've earned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg flex justify-between items-center bg-card">
                  <div>
                    <h3 className="font-medium">Course Completion: Introduction to Programming</h3>
                    <p className="text-sm text-muted-foreground">Issued on: March 15, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
                <div className="p-4 border rounded-lg flex justify-between items-center bg-card">
                  <div>
                    <h3 className="font-medium">Hackathon Participation Certificate</h3>
                    <p className="text-sm text-muted-foreground">Issued on: February 5, 2025</p>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="electives" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-primary" />
                Elective Selection
              </CardTitle>
              <CardDescription>Choose your elective courses for the upcoming semester</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>Elective selection is currently closed.</p>
                <p className="text-sm">The next elective selection window opens on June 1, 2025.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="complaints" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Complaints & Feedback
              </CardTitle>
              <CardDescription>Submit and track your complaints or feedback</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button onClick={handleComplaintSubmit} className="transition-all duration-200 hover:scale-105">Submit New Complaint</Button>
                
                <div className="mt-6">
                  <h3 className="font-medium mb-3">Recent Complaints</h3>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Wi-Fi Connectivity Issues</h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">In Progress</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Submitted on: March 28, 2025</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <h4 className="font-medium">Library Air Conditioning</h4>
                        <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Resolved</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Submitted on: March 15, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="faculty" className="animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-primary" />
                Concerned Faculty
              </CardTitle>
              <CardDescription>Faculty members assigned to you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg flex items-start space-x-4 bg-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Prof. Jennifer Williams</h3>
                    <p className="text-sm">Academic Advisor</p>
                    <p className="text-sm text-primary mt-1">jennifer.w@university.edu</p>
                    <p className="text-xs text-muted-foreground mt-2">Office Hours: Mon, Wed 2-4 PM</p>
                  </div>
                </div>
                
                <div className="p-4 border rounded-lg flex items-start space-x-4 bg-card">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Dr. Michael Chen</h3>
                    <p className="text-sm">Department Coordinator</p>
                    <p className="text-sm text-primary mt-1">m.chen@university.edu</p>
                    <p className="text-xs text-muted-foreground mt-2">Office Hours: Tue, Thu 10-12 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ErpPage;
