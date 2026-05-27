
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, Users, Filter, Download, ExternalLink, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

export function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<EventReport | null>(null);
  
  // Sample event reports
  const eventReports = [
    {
      id: 1,
      title: "Tech Fest 2024",
      date: "April 15-16, 2024",
      organizer: "Tech Council",
      category: "Technical",
      description: "Annual technology festival featuring competitions, workshops, and exhibits.",
      highlights: ["1500+ participants", "25 technical events", "10 industry partners"],
      reportLink: "#",
      imageGallery: "#",
      fullReport: `# Tech Fest 2024 - Event Report

## Overview
Tech Fest 2024, held on April 15-16, was a resounding success with over 1,500 participants from 30 different colleges across the region. The two-day festival featured coding competitions, robotics challenges, technical workshops, and industry exhibitions.

## Key Highlights
- **Participation**: 1,500+ students from 30 colleges
- **Events**: 25 technical competitions and workshops
- **Industry Partners**: 10 leading technology companies participated
- **Keynote Speakers**: 5 industry experts delivered talks
- **Prize Money**: ₹2,00,000 awarded across competitions

## Major Events
1. **Hackathon**: 48-hour coding challenge with 50 teams
2. **Robotics Competition**: 35 teams showcased autonomous robots
3. **Technical Paper Presentation**: 40 research papers presented
4. **Industry Workshops**: 8 hands-on workshops by industry experts
5. **Tech Exhibition**: 15 student projects and 10 industry booths

## Outcomes
- 3 student projects received incubation offers
- 45 students received internship offers from participating companies
- The event generated ₹5,00,000 in sponsorship revenue

## Financial Summary
- **Total Budget**: ₹8,00,000
- **Expenditure**: ₹7,50,000
- **Revenue from Sponsors**: ₹5,00,000
- **Revenue from Registrations**: ₹3,00,000
- **Net Surplus**: ₹50,000 (transferred to Student Development Fund)

## Organizers
The event was successfully organized by a team of 60 student volunteers led by the Tech Council.

## Recommendations for Next Year
1. Increase industry participation and sponsorship
2. Expand workshop offerings to include emerging technologies
3. Introduce international participation categories
4. Enhance live streaming of major events
5. Develop a mobile app for event navigation

## Conclusion
Tech Fest 2024 successfully achieved its objectives of promoting technical innovation, providing a platform for students to showcase their skills, and facilitating industry-academia interactions.`
    },
    {
      id: 2,
      title: "Cultural Night 2024",
      date: "March 20, 2024",
      organizer: "Student Council",
      category: "Cultural",
      description: "Annual cultural show showcasing dance, music, and theatrical performances.",
      highlights: ["30+ performances", "700+ attendees", "Alumni participation"],
      reportLink: "#",
      imageGallery: "#",
      fullReport: `# Cultural Night 2024 - Event Report

## Overview
The Cultural Night 2024, held on March 20, was a vibrant celebration of diverse art forms and cultural expressions. Over 700 attendees enjoyed performances ranging from classical dance and music to contemporary theatrical productions.

## Key Highlights
- **Attendance**: 700+ audience members including students, faculty, and guests
- **Performances**: 30+ performances across various cultural forms
- **Alumni Involvement**: 15 alumni participated in special performances
- **Cultural Diversity**: Representations from 8 different cultural traditions

## Notable Performances
1. **Classical Dance Ensemble**: Bharatanatyam, Kathak, and Odissi fusion
2. **Music Band Competition**: 5 student bands performed original compositions
3. **Theatrical Production**: "Echoes of Time" - an original student play
4. **Folk Dance Showcase**: Traditional dances from various Indian states
5. **International Cultural Exchange**: Performances by international students

## Achievements
- Best College Cultural Program Award from the District Cultural Association
- Three performers selected for the Inter-University Cultural Festival
- Media coverage in two local newspapers

## Financial Summary
- **Total Budget**: ₹3,00,000
- **Expenditure**: ₹2,80,000
- **Sponsorships**: ₹1,00,000
- **Ticket Sales**: ₹1,50,000
- **Net Funds Raised**: ₹70,000 (allocated to Cultural Development Fund)

## Organizers
The event was orchestrated by the Student Council Cultural Committee comprising 25 dedicated student volunteers.

## Recommendations for Future
1. Enhance stage design and technical aspects
2. Increase seating capacity to accommodate growing audience
3. Develop a cultural talent exchange program with other universities
4. Introduce workshops preceding the main event
5. Create a dedicated website for future cultural events

## Conclusion
Cultural Night 2024 successfully celebrated the rich cultural tapestry of our university community while providing students a platform to showcase their talents and creative expressions.`
    },
    {
      id: 3,
      title: "Hackathon 2024",
      date: "February 10-11, 2024",
      organizer: "Tech Council",
      category: "Technical",
      description: "48-hour coding marathon where students develop innovative solutions.",
      highlights: ["150 participants", "35 projects", "Industry judges"],
      reportLink: "#",
      imageGallery: "#",
      fullReport: `# Hackathon 2024 - Event Report

## Overview
Hackathon 2024, a 48-hour coding marathon, was held on February 10-11, bringing together 150 participants forming 35 teams. Participants tackled real-world problems through innovative technological solutions.

## Key Highlights
- **Participation**: 150 students (35 teams)
- **Project Categories**: Healthcare, Education, Sustainability, FinTech, Smart Cities
- **Judging Panel**: 7 judges from leading tech companies and startups
- **Mentorship**: 12 industry mentors provided guidance throughout the event
- **Prize Pool**: ₹1,00,000 across various categories

## Winning Projects
1. **HealthTrack**: AI-based health monitoring system (First Prize - ₹40,000)
2. **EduReach**: Platform connecting rural students with urban educators (Second Prize - ₹25,000)
3. **WasteSort**: Smart waste segregation using computer vision (Third Prize - ₹15,000)
4. **FinLiteracy**: Gamified financial education app (Innovation Award - ₹10,000)
5. **CarbonTrack**: Personal carbon footprint monitoring app (Sustainability Award - ₹10,000)

## Technical Stack Highlights
Most popular technologies used:
- Frontend: React, Flutter, Vue.js
- Backend: Node.js, Django, Flask
- Database: MongoDB, PostgreSQL
- AI/ML: TensorFlow, PyTorch
- Cloud: AWS, Google Cloud

## Industry Engagement
- Three projects received incubation offers from tech incubators
- Five teams were offered internship opportunities
- Two projects received seed funding interest from angel investors

## Organization
The event was organized by the Tech Council with support from the Computer Science Department. 20 student volunteers managed logistics, technical infrastructure, and participant support.

## Recommendations for Next Hackathon
1. Increase pre-event workshops on emerging technologies
2. Expand industry partner participation for mentorship
3. Create separate tracks for beginners and experienced developers
4. Improve hardware resources for IoT and embedded systems projects
5. Establish post-event incubation support program

## Conclusion
Hackathon 2024 successfully fostered innovation, collaboration, and practical application of technical skills among participants, while creating valuable connections with industry partners.`
    },
    {
      id: 4,
      title: "Sports Festival 2024",
      date: "January 25-27, 2024",
      organizer: "Sports Council",
      category: "Sports",
      description: "Annual inter-college sports competition featuring various sports.",
      highlights: ["10 sports", "20 participating colleges", "500+ athletes"],
      reportLink: "#",
      imageGallery: "#",
      fullReport: `# Sports Festival 2024 - Event Report

## Overview
The Sports Festival 2024, held from January 25-27, was a comprehensive inter-collegiate sporting event featuring 10 different sports disciplines. The event saw participation from 20 colleges with over 500 athletes competing.

## Key Highlights
- **Participation**: 500+ athletes from 20 colleges
- **Sports Disciplines**: 10 different sports
- **Medal Tally**: 90 medals awarded across all events
- **Chief Guest**: Olympic medalist (Badminton)
- **Special Feature**: Para-sports exhibition matches

## Sports and Winners
1. **Cricket**: Champions - University Engineering College, Runners-up - City Science College
2. **Football**: Champions - University Arts & Commerce College, Runners-up - State Technical University
3. **Basketball**: Champions - National Management Institute, Runners-up - University Engineering College
4. **Volleyball**: Champions - University Engineering College, Runners-up - Regional Medical College
5. **Athletics**: Overall Champions - University Engineering College (8 gold, 5 silver, 3 bronze)
6. **Table Tennis**: Champions - State Technical University
7. **Badminton**: Champions - City Science College
8. **Chess**: Champions - University Arts & Commerce College
9. **Swimming**: Champions - National Management Institute
10. **Kabaddi**: Champions - Regional Agricultural College

## Special Achievements
- Three university records broken in athletics
- Two students scouted by state-level sports teams
- Exhibition match between Paralympic athletes and university students

## Organizational Structure
The event was managed by the Sports Council comprising 50 student volunteers and supported by the Physical Education Department.

## Budget Summary
- **Total Expenditure**: ₹5,00,000
- **Sponsorships**: ₹3,00,000
- **University Funding**: ₹2,00,000
- **Major Expenses**: Equipment, referees, medals, hospitality, security arrangements

## Recommendations for Future
1. Expand facilities to accommodate more spectators
2. Include additional sports like archery and fencing
3. Develop a digital scoring and results system
4. Enhance medical support services
5. Establish formal partnerships with sports associations

## Conclusion
Sports Festival 2024 successfully promoted sporting excellence, healthy competition, and inter-collegiate relationships while showcasing the university's commitment to holistic student development.`
    },
    {
      id: 5,
      title: "Career Fair 2023",
      date: "November 15, 2023",
      organizer: "Placement Cell",
      category: "Career",
      description: "Annual job fair connecting students with potential employers.",
      highlights: ["50+ companies", "300+ job openings", "Mock interview sessions"],
      reportLink: "#",
      imageGallery: "#",
      fullReport: `# Career Fair 2023 - Event Report

## Overview
Career Fair 2023, held on November 15, was a significant success connecting over 800 students with 50+ companies offering more than 300 job opportunities across various sectors.

## Key Highlights
- **Corporate Participation**: 50+ companies from IT, finance, manufacturing, consulting, and more
- **Student Participation**: 800+ students from final and pre-final years
- **Job Offerings**: 300+ full-time positions and 150+ internship opportunities
- **Industries Represented**: IT/ITES, Banking & Finance, Manufacturing, Consulting, E-commerce, Healthcare
- **Special Activities**: Mock interviews, CV clinics, industry panel discussions

## Placement Statistics
- **On-spot Offers**: 120 students received on-the-spot offers
- **Interview Calls**: 350+ students shortlisted for further interview rounds
- **Highest Package**: ₹18 LPA (IT Sector)
- **Average Package**: ₹6.8 LPA
- **Internship Conversions**: 80+ internship offers with stipends ranging from ₹15,000-40,000 per month

## Company Highlights
1. **Tech Sector**: Google, Microsoft, TCS, Infosys, Wipro
2. **Finance Sector**: HDFC Bank, ICICI Bank, Goldman Sachs
3. **Consulting**: Deloitte, EY, KPMG
4. **Manufacturing**: Tata Motors, Mahindra & Mahindra, L&T
5. **Startups**: 10 emerging startups participated with competitive packages

## Value-Added Sessions
- Resume Building Workshop: 200+ participants
- Mock Interview Sessions: 150+ students participated
- Industry Expert Talks: 5 sessions with leaders from various sectors
- Alumni Networking Session: 25 alumni returned as recruiters

## Organization
The event was organized by the University Placement Cell with a team of 30 student placement coordinators who managed logistics, company relations, and student registration.

## Feedback Summary
- **Companies**: 90% rated the event organization as excellent
- **Students**: 85% satisfaction rate with job opportunities
- **Faculty**: Positive feedback on industry-academia integration

## Recommendations for Next Year
1. Extend the fair to two days to accommodate more companies
2. Create sector-specific zones for better navigation
3. Introduce pre-scheduling of interviews for efficiency
4. Expand pre-event preparation workshops
5. Develop a mobile app for the career fair

## Conclusion
Career Fair 2023 successfully bridged the gap between industry requirements and student aspirations, resulting in significant placement opportunities and valuable industry exposure for students.`
    },
    {
      id: 6,
      title: "Alumni Meet 2023",
      date: "October 10, 2023",
      organizer: "Alumni Association",
      category: "Networking",
      description: "Annual gathering of alumni to connect and share experiences.",
      highlights: ["200+ alumni", "Networking sessions", "Career counseling"],
      reportLink: "#",
      imageGallery: "#",
      fullReport: `# Alumni Meet 2023 - Event Report

## Overview
The Alumni Meet 2023, held on October 10, brought together over 200 alumni spanning across graduation years from 1990 to 2022, creating a vibrant atmosphere of nostalgia, networking, and knowledge exchange.

## Key Highlights
- **Attendance**: 200+ alumni from 30+ graduating batches
- **Distinguished Alumni**: 5 notable alumni recognized for exceptional achievements
- **Alumni Contributions**: ₹25 lakhs raised for the Alumni Endowment Fund
- **Career Counseling**: 15 alumni offered mentorship to current students
- **International Participation**: 25 alumni joined virtually from abroad

## Program Structure
1. **Welcome Address**: Vice-Chancellor's speech on university developments
2. **Distinguished Alumni Awards**: Honoring exceptional alumni in various fields
3. **Panel Discussion**: "Industry 4.0 and Future of Work" with 6 expert alumni
4. **Networking Lunch**: Batch-wise seating arrangement for reconnection
5. **Campus Tour**: Showcasing new infrastructure and facilities
6. **Cultural Program**: Performances by current students and nostalgic alumni performances
7. **Mentorship Launch**: Inauguration of Alumni-Student Mentorship Program

## Impact and Outcomes
- **Mentorship Commitments**: 50+ alumni signed up as mentors
- **Internship Offers**: 30+ internship opportunities offered by alumni
- **Guest Lecture Commitments**: 25 alumni volunteered for guest lectures
- **Research Collaborations**: 5 potential industry-academia research projects identified
- **Fundraising**: ₹25 lakhs contributed to the Alumni Endowment Fund

## Alumni Achievements Showcase
The event highlighted exceptional achievements of alumni across various sectors:
- Corporate leadership positions in Fortune 500 companies
- Entrepreneurial ventures with significant social impact
- Research breakthroughs in science and technology
- Notable contributions to public service and policy
- Excellence in arts, literature, and sports

## Organization
The event was coordinated by the Alumni Relations Cell with support from 40 student volunteers who managed registration, hospitality, and event flow.

## Recommendations for Future Meets
1. Extend to a two-day format with more interactive sessions
2. Create industry-specific networking opportunities
3. Establish regional alumni chapters for continuous engagement
4. Develop a comprehensive alumni database and portal
5. Introduce alumni-sponsored scholarships and projects

## Conclusion
Alumni Meet 2023 successfully strengthened the university-alumni bond, created valuable networking opportunities, and established platforms for alumni to contribute meaningfully to their alma mater's growth and development.`
    }
  ];

  const handleReportClick = (report: EventReport) => {
    setSelectedReport(report);
  };

  const handleDownload = () => {
    // Simulate download
    toast.success("Report downloaded successfully!");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Event Reports</h1>
        <p className="text-muted-foreground">Comprehensive reports from past campus events</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
        <Button variant="outline">All Events</Button>
        <Button variant="outline">Technical</Button>
        <Button variant="outline">Cultural</Button>
        <Button variant="outline">Sports</Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {eventReports.map((report) => (
          <EventReportCard key={report.id} report={report} onClick={handleReportClick} />
        ))}
      </div>

      {selectedReport && (
        <Dialog open={!!selectedReport} onOpenChange={() => setSelectedReport(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedReport.title}</DialogTitle>
              <DialogDescription>{selectedReport.date} | {selectedReport.organizer}</DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <Badge>{selectedReport.category}</Badge>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleDownload}>
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </Button>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <pre className="whitespace-pre-wrap text-sm bg-muted/50 p-4 rounded-md">
                  {selectedReport.fullReport}
                </pre>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface EventReport {
  id: number;
  title: string;
  date: string;
  organizer: string;
  category: string;
  description: string;
  highlights: string[];
  reportLink: string;
  imageGallery: string;
  fullReport: string;
}

function EventReportCard({ report, onClick }: { report: EventReport, onClick: (report: EventReport) => void }) {
  return (
    <Card className="overflow-hidden card-hover cursor-pointer" onClick={() => onClick(report)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{report.title}</CardTitle>
            <CardDescription>{report.date}</CardDescription>
          </div>
          <Badge>{report.category}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{report.description}</p>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Highlights</h4>
          <div className="flex flex-wrap gap-2">
            {report.highlights.map((highlight, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center text-sm">
          <Users className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Organized by {report.organizer}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={(e) => {
            e.stopPropagation();
            window.open(report.imageGallery, '_blank');
          }}>
            <ExternalLink className="h-4 w-4" />
            <span>Image Gallery</span>
          </Button>
          
          <Button size="sm" className="flex items-center gap-1">
            <FileText className="h-4 w-4" />
            <span>View Full Report</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ReportsPage;
