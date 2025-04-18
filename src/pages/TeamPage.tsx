
import MainLayout from "../components/layouts/MainLayout";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";

// Team data
const currentTeam = [
  {
    id: 1,
    name: "Amina El Fassi",
    role: "Editor-in-Chief",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60",
    bio: "Amina leads our editorial team with a passion for student journalism and five years of experience in digital publishing.",
    social: {
      email: "amina@ensiamag.edu",
      linkedin: "https://linkedin.com/in/aminaelfassi",
      instagram: "https://instagram.com/aminaelfassi"
    }
  },
  {
    id: 2,
    name: "Mohammed Tazi",
    role: "Managing Editor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
    bio: "Mohammed oversees the day-to-day operations of the magazine, ensuring quality content and timely publication.",
    social: {
      email: "mohammed@ensiamag.edu",
      linkedin: "https://linkedin.com/in/mohammedtazi",
      facebook: "https://facebook.com/mohammedtazi"
    }
  },
  {
    id: 3,
    name: "Sara Alaoui",
    role: "Technology Editor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60",
    bio: "Sara brings her computer science expertise to curate cutting-edge tech content for our readers.",
    social: {
      email: "sara@ensiamag.edu",
      linkedin: "https://linkedin.com/in/saraalaoui",
      instagram: "https://instagram.com/saraalaoui"
    }
  },
  {
    id: 4,
    name: "Karim El Mansouri",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60",
    bio: "Karim leads the visual design and creative direction of the magazine, creating our distinctive aesthetic.",
    social: {
      email: "karim@ensiamag.edu",
      instagram: "https://instagram.com/karimelmansouri",
      linkedin: "https://linkedin.com/in/karimelmansouri"
    }
  },
  {
    id: 5,
    name: "Leila Ziani",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60",
    bio: "Leila develops our content strategy and ensures our publications align with our mission and audience needs.",
    social: {
      email: "leila@ensiamag.edu",
      linkedin: "https://linkedin.com/in/leilaziani",
      facebook: "https://facebook.com/leilaziani"
    }
  },
  {
    id: 6,
    name: "Yasmine Bennani",
    role: "Lifestyle Editor",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?w=400&auto=format&fit=crop&q=60",
    bio: "Yasmine brings a fresh perspective to our lifestyle section, covering student culture, wellness, and campus life.",
    social: {
      email: "yasmine@ensiamag.edu",
      instagram: "https://instagram.com/yasminebennani",
      linkedin: "https://linkedin.com/in/yasminebennani"
    }
  }
];

const exPromosTeam = [
  {
    id: 1,
    name: "Dr. Hassan Moukhtari",
    role: "Founding Editor-in-Chief (2019-2022)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
    bio: "Dr. Moukhtari established ENIASMAG and set the foundation for its success, bringing academic rigor and journalistic excellence.",
    social: {
      email: "hassan.moukhtari@alumni.edu",
      linkedin: "https://linkedin.com/in/hassanmoukhtari"
    }
  },
  {
    id: 2,
    name: "Fatima Ouazzani",
    role: "Senior Editor (2020-2023)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60",
    bio: "Fatima expanded our readership tenfold and introduced innovative content formats that we continue to use today.",
    social: {
      email: "fatima.ouazzani@alumni.edu",
      linkedin: "https://linkedin.com/in/fatimaouazzani",
      instagram: "https://instagram.com/fatimaouazzani"
    }
  },
  {
    id: 3,
    name: "Omar Benjelloun",
    role: "Technical Director (2019-2022)",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60",
    bio: "Omar built our digital infrastructure and led the transition from print to digital-first publishing.",
    social: {
      email: "omar.benjelloun@alumni.edu",
      linkedin: "https://linkedin.com/in/omarbenjelloun",
      facebook: "https://facebook.com/omarbenjelloun"
    }
  },
  {
    id: 4,
    name: "Nadia Berrada",
    role: "Creative Lead (2021-2024)",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&auto=format&fit=crop&q=60",
    bio: "Nadia established our distinctive visual identity and won multiple design awards for the magazine.",
    social: {
      email: "nadia.berrada@alumni.edu",
      instagram: "https://instagram.com/nadiaberrada",
      linkedin: "https://linkedin.com/in/nadiaberrada"
    }
  }
];

const TeamPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            The dedicated students behind ENIASMAG who bring their passion, creativity, and expertise to every issue.
          </p>
        </div>
      </section>

      {/* Current Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Current Editorial Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our diverse team of talented individuals work together to create engaging and informative content for the ENIASMAG community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentTeam.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
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
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.bio}</p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ex-Promos Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ex-Promos Leadership</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Honoring the visionary leaders who established ENIASMAG's foundation and shaped its direction through the years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exPromosTeam.map((member) => (
              <div key={member.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-ensiasRed-700 text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
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
                </div>
              </div>
            ))}
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
    </MainLayout>
  );
};

export default TeamPage;
