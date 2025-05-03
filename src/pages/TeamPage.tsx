
import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Link } from "react-router-dom";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  X,
  ChevronRight,
  Users
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

// Type definitions for team members
interface SocialLinks {
  email?: string;
  linkedin?: string;
  instagram?: string;
  facebook?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: SocialLinks;
  filiere?: string; // Student's major/field of study
  quote?: string;
}

interface YearTeam {
  year: string;
  teamLeader: string;
  members: TeamMember[];
  groupImage?: string;
}

// Team data by year
const teamHistory: YearTeam[] = [
  {
    year: "2024",
    teamLeader: "ELGARHC YOUSSEF",
    groupImage: "https://images.unsplash.com/photo-1522071901873-411886a10004?w=800&auto=format&fit=crop&q=60",
    members: [
      {
        id: 1,
        name: "ELGARHC YOUSSEF",
        role: "Editor-in-Chief",
        filiere: "Computer Science",
        quote: "Together we can achieve more than we ever imagined.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
        bio: "Leading our team with a passion for student journalism and innovation in digital publishing.",
        social: {
          email: "youssef@ensiamag.edu",
          linkedin: "https://linkedin.com/in/youssefelgarhc",
          instagram: "https://instagram.com/youssefelgarhc"
        }
      },
      {
        id: 2,
        name: "Amina El Fassi",
        role: "Managing Editor",
        filiere: "Data Science",
        quote: "Writing is thinking on paper.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
        bio: "Amina coordinates our editorial team with five years of experience in digital publishing.",
        social: {
          email: "amina@ensiamag.edu",
          linkedin: "https://linkedin.com/in/aminaelfassi",
          instagram: "https://instagram.com/aminaelfassi"
        }
      },
      {
        id: 3,
        name: "Mohammed Tazi",
        role: "Technical Director",
        filiere: "Software Engineering",
        quote: "Technology is best when it brings people together.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
        bio: "Mohammed oversees the technical aspects of the magazine, ensuring quality content and timely publication.",
        social: {
          email: "mohammed@ensiamag.edu",
          linkedin: "https://linkedin.com/in/mohammedtazi",
          facebook: "https://facebook.com/mohammedtazi"
        }
      },
      {
        id: 4,
        name: "Sara Alaoui",
        role: "Technology Editor",
        filiere: "Computer Engineering",
        quote: "The best way to predict the future is to invent it.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60",
        bio: "Sara brings her computer science expertise to curate cutting-edge tech content for our readers.",
        social: {
          email: "sara@ensiamag.edu",
          linkedin: "https://linkedin.com/in/saraalaoui",
          instagram: "https://instagram.com/saraalaoui"
        }
      },
      {
        id: 5,
        name: "Karim El Mansouri",
        role: "Creative Director",
        filiere: "Multimedia Design",
        quote: "Design is intelligence made visible.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
        bio: "Karim leads the visual design and creative direction of the magazine, creating our distinctive aesthetic.",
        social: {
          email: "karim@ensiamag.edu",
          instagram: "https://instagram.com/karimelmansouri",
          linkedin: "https://linkedin.com/in/karimelmansouri"
        }
      },
      {
        id: 6,
        name: "Leila Ziani",
        role: "Content Strategist",
        filiere: "Digital Communications",
        quote: "Content is king, but context is queen.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
        bio: "Leila develops our content strategy and ensures our publications align with our mission and audience needs.",
        social: {
          email: "leila@ensiamag.edu",
          linkedin: "https://linkedin.com/in/leilaziani",
          facebook: "https://facebook.com/leilaziani"
        }
      }
    ]
  },
  {
    year: "2023",
    teamLeader: "Fatima Ouazzani",
    groupImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&auto=format&fit=crop&q=60",
    members: [
      {
        id: 1,
        name: "Fatima Ouazzani",
        role: "Editor-in-Chief",
        filiere: "Journalism",
        quote: "Great magazines don't just inform; they inspire.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60",
        bio: "Fatima led our editorial team with a passion for storytelling and elevating student voices.",
        social: {
          email: "fatima@ensiamag.edu",
          linkedin: "https://linkedin.com/in/fatimaouazzani",
          instagram: "https://instagram.com/fatimaouazzani"
        }
      },
      {
        id: 2,
        name: "Yasmine Bennani",
        role: "Lifestyle Editor",
        filiere: "Cultural Studies",
        quote: "Culture is the arts elevated to a set of beliefs.",
        image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&auto=format&fit=crop&q=60",
        bio: "Yasmine brought a fresh perspective to our lifestyle section, covering student culture and campus life.",
        social: {
          email: "yasmine@ensiamag.edu",
          instagram: "https://instagram.com/yasminebennani",
          linkedin: "https://linkedin.com/in/yasminebennani"
        }
      }
    ]
  },
  {
    year: "2022",
    teamLeader: "Omar Benjelloun",
    members: [
      {
        id: 1,
        name: "Omar Benjelloun",
        role: "Technical Director",
        filiere: "Computer Science",
        quote: "Innovation distinguishes between a leader and a follower.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60",
        bio: "Omar built our digital infrastructure and led the transition from print to digital-first publishing.",
        social: {
          email: "omar.benjelloun@alumni.edu",
          linkedin: "https://linkedin.com/in/omarbenjelloun",
          facebook: "https://facebook.com/omarbenjelloun"
        }
      }
    ]
  },
  {
    year: "2021",
    teamLeader: "Nadia Berrada",
    members: [
      {
        id: 1,
        name: "Nadia Berrada",
        role: "Creative Lead",
        filiere: "Graphic Design",
        quote: "Design is not how it looks, but how it works.",
        image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60",
        bio: "Nadia established our distinctive visual identity and won multiple design awards for the magazine.",
        social: {
          email: "nadia.berrada@alumni.edu",
          instagram: "https://instagram.com/nadiaberrada",
          linkedin: "https://linkedin.com/in/nadiaberrada"
        }
      }
    ]
  },
  {
    year: "2019-2020",
    teamLeader: "Dr. Hassan Moukhtari",
    members: [
      {
        id: 1,
        name: "Dr. Hassan Moukhtari",
        role: "Founding Editor-in-Chief",
        filiere: "Communication Studies",
        quote: "Start where you are. Use what you have. Do what you can.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
        bio: "Dr. Moukhtari established ENIASMAG and set the foundation for its success, bringing academic rigor and journalistic excellence.",
        social: {
          email: "hassan.moukhtari@alumni.edu",
          linkedin: "https://linkedin.com/in/hassanmoukhtari"
        }
      }
    ]
  }
];

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    setDialogOpen(true);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team Timeline</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            From our founding to today: The evolution of ENIASMAG through the passionate students who made it happen.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute h-full w-0.5 bg-ensiasRed-200 left-1/2 transform -translate-x-1/2"></div>
            
            {/* Timeline entries */}
            <div className="space-y-24">
              {teamHistory.map((yearTeam, index) => (
                <div key={yearTeam.year} className={`relative ${index % 2 === 0 ? "" : ""}`}>
                  {/* Year marker */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-ensiasRed-700 text-white h-16 w-16 rounded-full flex items-center justify-center z-10 relative shadow-lg">
                      <span className="font-bold">{yearTeam.year}</span>
                    </div>
                  </div>
                  
                  {/* Content container */}
                  <div className="grid grid-cols-1 gap-8 pt-10">
                    {/* Team leader section */}
                    <div className="text-center mb-6">
                      <h2 className="text-2xl font-bold text-ensiasRed-800">Team Leader: {yearTeam.teamLeader}</h2>
                    </div>

                    {/* Team group photo if available */}
                    {yearTeam.groupImage && (
                      <div className="mb-8">
                        <div className="relative rounded-xl overflow-hidden shadow-xl">
                          <img 
                            src={yearTeam.groupImage} 
                            alt={`${yearTeam.year} ENIASMAG Team`} 
                            className="w-full h-auto object-cover aspect-[16/9]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent pointer-events-none"></div>
                          <div className="absolute bottom-0 left-0 p-6 text-white">
                            <h3 className="text-2xl font-bold">{yearTeam.year} Team</h3>
                            <p className="opacity-90">Click on team members to learn more</p>
                          </div>

                          {/* Clickable areas for team members (simplified) */}
                          <div className="absolute inset-0">
                            {yearTeam.members.map((member, idx) => {
                              // Calculate position for member hotspots (simplistic approach)
                              // In a real app, you'd have precise coordinates
                              const leftPosition = `${20 + (idx * 15)}%`;
                              const topPosition = `${40 + ((idx % 2) * 20)}%`;
                              
                              return (
                                <div
                                  key={member.id}
                                  className="absolute h-16 w-16 rounded-full bg-white/30 hover:bg-white/50 cursor-pointer border-2 border-white flex items-center justify-center transition-all duration-200 hover:scale-110"
                                  style={{ left: leftPosition, top: topPosition }}
                                  onClick={() => handleMemberClick(member)}
                                >
                                  <Avatar className="h-14 w-14">
                                    <AvatarImage src={member.image} alt={member.name} />
                                    <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                                  </Avatar>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Members grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {yearTeam.members.map((member) => (
                        <Card 
                          key={`${yearTeam.year}-${member.id}`} 
                          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                          onClick={() => handleMemberClick(member)}
                        >
                          <div className="aspect-square relative overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ensiasRed-900/80 via-transparent to-transparent flex items-end">
                              <div className="p-6 text-white">
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-ensiasRed-100">{member.role}</p>
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <p className="text-gray-600 mb-4 line-clamp-2">{member.bio}</p>
                            <div className="flex space-x-3">
                              {member.social.email && (
                                <a href={`mailto:${member.social.email}`} className="text-gray-500 hover:text-ensiasRed-700">
                                  <Mail className="h-5 w-5" />
                                </a>
                              )}
                              {member.social.linkedin && (
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ensiasRed-700">
                                  <Linkedin className="h-5 w-5" />
                                </a>
                              )}
                              {member.social.instagram && (
                                <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ensiasRed-700">
                                  <Instagram className="h-5 w-5" />
                                </a>
                              )}
                              {member.social.facebook && (
                                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ensiasRed-700">
                                  <Facebook className="h-5 w-5" />
                                </a>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-16 bg-ensiasRed-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            ENIASMAG is always looking for passionate students to join our team. If you're interested in writing, editing, design, or digital media, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/join-team"
              className="bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Apply to Join
            </Link>
            <Link
              to="/contact"
              className="bg-white border border-ensiasRed-700 text-ensiasRed-700 hover:bg-ensiasRed-50 font-medium py-3 px-6 rounded-md transition-colors"
            >
              Contact the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Alumni Network</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            ENIASMAG alumni have gone on to work in prestigious media organizations, tech companies, and academic institutions around the world.
          </p>
          <a
            href="/alumni"
            className="inline-flex items-center text-ensiasRed-700 hover:text-ensiasRed-900 font-semibold"
          >
            Explore Alumni Network <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Member Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-3xl">
          {selectedMember && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src={selectedMember.image} alt={selectedMember.name} />
                    <AvatarFallback>{selectedMember.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <DialogTitle className="text-2xl">{selectedMember.name}</DialogTitle>
                    <DialogDescription>{selectedMember.role}</DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <img 
                      src={selectedMember.image} 
                      alt={selectedMember.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  {selectedMember.filiere && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Field of Study</h4>
                      <p className="text-lg">{selectedMember.filiere}</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Bio</h4>
                    <p className="text-base">{selectedMember.bio}</p>
                  </div>
                  
                  {selectedMember.quote && (
                    <div className="border-l-4 border-ensiasRed-200 pl-4 italic">
                      <p className="text-gray-700">"{selectedMember.quote}"</p>
                    </div>
                  )}
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Contact</h4>
                    <div className="flex space-x-3 mt-2">
                      {selectedMember.social.email && (
                        <a href={`mailto:${selectedMember.social.email}`} className="text-gray-500 hover:text-ensiasRed-700 flex items-center gap-2">
                          <Mail className="h-5 w-5" />
                          <span className="text-sm">{selectedMember.social.email}</span>
                        </a>
                      )}
                    </div>
                    <div className="flex space-x-3 mt-2">
                      {selectedMember.social.linkedin && (
                        <a href={selectedMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ensiasRed-700">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                      {selectedMember.social.instagram && (
                        <a href={selectedMember.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ensiasRed-700">
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                      {selectedMember.social.facebook && (
                        <a href={selectedMember.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-ensiasRed-700">
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
};

export default TeamPage;
