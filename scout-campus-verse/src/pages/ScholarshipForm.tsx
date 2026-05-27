
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ScholarshipForm = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [file, setFile] = useState<File | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    admissionNumber: '',
    enrollmentNumber: '',
    email: '',
    phoneNumber: '',
    parentsIncome: '',
    address: '',
    reason: '',
  });
  
  // Form validation state
  const [errors, setErrors] = useState({
    name: '',
    admissionNumber: '',
    enrollmentNumber: '',
    email: '',
    phoneNumber: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };
  
  const validateForm = () => {
    const newErrors = {
      name: '',
      admissionNumber: '',
      enrollmentNumber: '',
      email: '',
      phoneNumber: '',
    };
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.admissionNumber) newErrors.admissionNumber = 'Admission number is required';
    if (!formData.enrollmentNumber) newErrors.enrollmentNumber = 'Enrollment number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    console.log('Form submitted:', formData);
    console.log('File:', file);
    
    toast({
      title: 'Application Submitted',
      description: 'Your scholarship application has been received.',
    });
    
    // Reset form
    setFormData({
      name: '',
      admissionNumber: '',
      enrollmentNumber: '',
      email: '',
      phoneNumber: '',
      parentsIncome: '',
      address: '',
      reason: '',
    });
    setFile(null);
  };
  
  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <Home className="h-4 w-4" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/erp">ERP</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>Scholarship Application</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <Card className="animate-fade-in">
        <CardHeader>
          <CardTitle>Apply for {id} Scholarship</CardTitle>
          <CardDescription>Fill out the form below to apply for this scholarship opportunity.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admissionNumber">Admission Number</Label>
                <Input 
                  id="admissionNumber"
                  name="admissionNumber"
                  value={formData.admissionNumber}
                  onChange={handleInputChange}
                />
                {errors.admissionNumber && <p className="text-sm text-destructive">{errors.admissionNumber}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="enrollmentNumber">Enrollment Number</Label>
                <Input 
                  id="enrollmentNumber"
                  name="enrollmentNumber"
                  value={formData.enrollmentNumber}
                  onChange={handleInputChange}
                />
                {errors.enrollmentNumber && <p className="text-sm text-destructive">{errors.enrollmentNumber}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input 
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <p className="text-sm text-destructive">{errors.phoneNumber}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="parentsIncome">Parents Annual Income</Label>
                <Input 
                  id="parentsIncome"
                  name="parentsIncome"
                  value={formData.parentsIncome}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Permanent Address</Label>
              <Textarea 
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason">Why do you deserve this scholarship?</Label>
              <Textarea 
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                rows={4}
              />
            </div>
            
            <div className="border rounded-md p-4 space-y-2">
              <Label htmlFor="certificate">Upload Bonafide Certificate (PDF)</Label>
              <div className="flex items-center gap-4">
                <Input 
                  id="certificate"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                />
                <Button type="button" variant="outline" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
              {file && <p className="text-sm text-muted-foreground">File selected: {file.name}</p>}
            </div>
            
            <div className="flex justify-end space-x-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => window.history.back()}
              >
                Cancel
              </Button>
              <Button type="submit">Submit Application</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScholarshipForm;
