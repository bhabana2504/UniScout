
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { School, Award, MapPin, Phone, Mail, Globe, Users, BookOpen } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold">About Uni Scout</h1>
        <p className="text-xl text-muted-foreground mt-2">Your comprehensive university student portal</p>
      </div>
      
      <Card className="hero-gradient text-white overflow-hidden">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Empowering Students</h2>
              <p className="text-white/90">
                Uni Scout is designed to enhance your university experience by providing a centralized 
                platform for academic resources, community engagement, and campus activities.
              </p>
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="h-5 w-5" />
                  </div>
                  <span>Connect with peers and faculty</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span>Access academic resources</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Award className="h-5 w-5" />
                  </div>
                  <span>Track achievements and progress</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <School className="h-24 w-24" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <School className="h-5 w-5 text-primary" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              To create a seamless digital environment that supports academic excellence, 
              fosters community building, and enhances the overall university experience.
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              For Students
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Uni Scout provides students with tools to manage their academic journey, 
              discover campus activities, join communities, and stay informed about 
              university events and announcements.
            </p>
          </CardContent>
        </Card>
        
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              For Faculty
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Faculty members can use Uni Scout to communicate with students, 
              share resources, post announcements, and engage with the university 
              community more effectively.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Reach out to us for support or inquiries</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    Gautam Buddha Nagar<br />
                    Greater Noida
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-sm text-muted-foreground">
                    6003400833
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-muted-foreground">
                    UniScout@gmail.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Website</h3>
                  <p className="text-sm text-muted-foreground">
                    www.uniscout.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutPage;
