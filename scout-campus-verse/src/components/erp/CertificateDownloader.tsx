
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Eye } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Certificate {
  id: string;
  title: string;
  date: string;
  type: string;
}

interface CertificateDownloaderProps {
  certificates: Certificate[];
}

export function CertificateDownloader({ certificates }: CertificateDownloaderProps) {
  const handleDownload = (certificate: Certificate) => {
    // In a real implementation, this would initiate a file download
    toast.success(`Downloading ${certificate.title}...`);
    
    // Simulate download delay
    setTimeout(() => {
      toast.success(`${certificate.title} downloaded successfully!`);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Your Certificates</h3>
      
      <div className="overflow-hidden rounded-lg border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {certificates.map((certificate) => (
              <tr key={certificate.id} className="animate-scale-in">
                <td className="p-2">{certificate.title}</td>
                <td className="p-2">{certificate.date}</td>
                <td className="p-2">{certificate.type}</td>
                <td className="p-2 space-x-2 flex">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{certificate.title}</DialogTitle>
                      </DialogHeader>
                      <div className="bg-slate-100 p-8 rounded-md flex flex-col items-center text-center space-y-6">
                        <div className="text-xl font-bold uppercase tracking-wider">University Certificate</div>
                        <div className="text-2xl font-serif">Certificate of {certificate.type}</div>
                        <div className="py-6 italic">This is to certify that</div>
                        <div className="text-xl font-semibold">Student Name</div>
                        <div className="py-4">has successfully completed the requirements for</div>
                        <div className="text-xl font-semibold">{certificate.title}</div>
                        <div className="pt-10 text-sm">Date Issued: {certificate.date}</div>
                        <div className="flex justify-between w-full pt-10">
                          <div>Director</div>
                          <div>University Registrar</div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <Button onClick={() => handleDownload(certificate)} size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CertificateDownloader;
