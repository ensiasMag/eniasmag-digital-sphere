import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Search } from "lucide-react";
import MainLayout from "../components/layouts/MainLayout";

// Magazine data
const currentMagazine = {
  id: 1,
  title: "Insider Insights",
  subtitle: "H.R's Golden Advice",
  edition: "Vol. 12, Issue 3",
  date: "April 2025",
  description: "Explore career guidance from industry professionals and HR experts, featuring insider tips on job interviews, resume building, and professional development opportunities.",
  image: "/lovable-uploads/9c9b8d00-e38e-48a7-bb1c-a0906c3c112c.png",
  path: "/magazine/insider-insights"
};

const previousIssues = [
  {
    id: 2,
    title: "First Edition",
    subtitle: "Ink Knows No Boundaries",
    edition: "Vol. 12, Issue 2",
    date: "March 2025",
    description: "Our first edition explores the unlimited creative potential of student writers and artists, showcasing original works that break conventional boundaries.",
    image: "/lovable-uploads/8e534848-7ce5-4500-8352-821ba180bcc4.png",
    path: "/magazine/first-edition"
  },
  {
    id: 3,
    title: "Career Success 101",
    subtitle: "Unlocking Insights To Be Recruited",
    edition: "Vol. 12, Issue 1",
    date: "February 2025",
    description: "A comprehensive guide to career development, featuring advice from alumni and industry leaders on navigating the job market.",
    image: "/lovable-uploads/6b553504-20d1-4b3f-a696-8a26ca9dd859.png",
    path: "/magazine/career-success"
  },
  {
    id: 4,
    title: "Tech Innovations",
    subtitle: "The Future is Now",
    edition: "Vol. 11, Issue 4",
    date: "December 2024",
    description: "Exploring cutting-edge technologies and innovations developed by students and faculty members.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    path: "/magazine/tech-innovations"
  },
  {
    id: 5,
    title: "Arts & Culture",
    subtitle: "Expressions of Creativity",
    edition: "Vol. 11, Issue 3",
    date: "November 2024",
    description: "Celebrating the diverse artistic and cultural expressions within our student community.",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60",
    path: "/magazine/arts-culture"
  },
  {
    id: 6,
    title: "Research Spotlight",
    subtitle: "Discoveries and Breakthroughs",
    edition: "Vol. 11, Issue 2",
    date: "October 2024",
    description: "Highlighting significant research projects and academic achievements from our community.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    path: "/magazine/research-spotlight"
  }
];

const MagazinePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">ENIASMAG Publications</h1>
            <p className="text-lg opacity-90">
              Explore our collection of student-led magazines, featuring articles, stories, and creative content from our vibrant community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white shadow-md sticky top-[72px] z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                placeholder="Search magazines by title, topic..."
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500">
                <option value="">All Categories</option>
                <option value="technology">Technology</option>
                <option value="career">Career</option>
                <option value="culture">Culture</option>
                <option value="academic">Academic</option>
              </select>
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500">
                <option value="">Sort By: Latest</option>
                <option value="oldest">Sort By: Oldest</option>
                <option value="title-asc">Sort By: Title (A-Z)</option>
                <option value="title-desc">Sort By: Title (Z-A)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Current Issue */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Current Issue</h2>
            <div className="h-1 w-20 bg-ensiasRed-700 mt-2"></div>
          </div>

          <div className="bg-ensiasRed-50 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-ensiasRed-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {currentMagazine.edition}
                  </span>
                  <span className="ml-2 text-ensiasRed-700 text-sm font-medium">
                    {currentMagazine.date}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-2">{currentMagazine.title}</h3>
                <p className="text-xl italic text-ensiasRed-700 mb-4">{currentMagazine.subtitle}</p>
                <p className="text-gray-600 mb-6">
                  {currentMagazine.description}
                </p>
                <div className="space-x-4">
                  <Link
                    to={`/magazine/${currentMagazine.id}`}
                    className="inline-block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Read Now
                  </Link>
                  <Link
                    to={`${currentMagazine.path}/download`}
                    className="inline-block bg-transparent border border-ensiasRed-700 text-ensiasRed-700 hover:bg-ensiasRed-50 font-medium py-2 px-6 rounded-md transition-colors"
                  >
                    Download PDF
                  </Link>
                </div>
              </div>
              <div className="relative aspect-[3/4] md:aspect-auto overflow-hidden">
                <img
                  src={currentMagazine.image}
                  alt={currentMagazine.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-black/30 md:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Previous Issues */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Previous Issues</h2>
            <div className="h-1 w-20 bg-ensiasRed-700 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousIssues.map((issue) => (
              <Link key={issue.id} to={issue.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={issue.image}
                      alt={issue.title}
                      className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold mb-1">{issue.title}</h3>
                        <p className="text-sm text-white/80 mb-2">{issue.subtitle}</p>
                        <div className="flex items-center text-sm text-white/70">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{issue.date}</span>
                          <span className="mx-2">•</span>
                          <span>{issue.edition}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {issue.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="inline-flex items-center text-ensiasRed-700 font-medium group-hover:underline">
                        Read Issue <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                      <Link
                        to={`${issue.path}/download`}
                        className="text-sm text-gray-500 hover:text-ensiasRed-700"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download PDF
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </a>
              <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-ensiasRed-700">
                1
              </a>
              <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                2
              </a>
              <a href="#" className="py-2 px-4 border-t border-b border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                3
              </a>
              <a href="#" className="py-2 px-4 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Archives */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for Older Issues?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Access our complete archive of past magazines, dating back to our very first issue.
          </p>
          <Link
            to="/magazine/archives"
            className="inline-block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Browse Full Archives
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default MagazinePage;
