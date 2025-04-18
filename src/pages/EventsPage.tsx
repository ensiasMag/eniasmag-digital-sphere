
import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { Calendar, Clock, MapPin, ChevronRight, Filter } from "lucide-react";

// Events data
const upcomingEvents = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    description: "Join us for a day of tech talks, workshops, and networking with industry professionals.",
    date: "May 15, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60",
    path: "/events/tech-symposium"
  },
  {
    id: 2,
    title: "Career Fair 2025",
    description: "Connect with potential employers and explore career opportunities in various industries.",
    date: "May 22-23, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "University Campus",
    category: "Career",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=800&auto=format&fit=crop&q=60",
    path: "/events/career-fair"
  },
  {
    id: 3,
    title: "Art & Literature Festival",
    description: "Celebrate creativity with art exhibitions, poetry readings, and literary discussions.",
    date: "June 5, 2025",
    time: "11:00 AM - 8:00 PM",
    location: "Campus Garden",
    category: "Culture",
    image: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?w=800&auto=format&fit=crop&q=60",
    path: "/events/art-literature-festival"
  },
  {
    id: 4,
    title: "Research Showcase",
    description: "Discover innovative research projects by students and faculty members.",
    date: "June 12, 2025",
    time: "1:00 PM - 6:00 PM",
    location: "Research Center",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=60",
    path: "/events/research-showcase"
  },
];

const pastEvents = [
  {
    id: 5,
    title: "Entrepreneurship Workshop",
    description: "A hands-on workshop on startup creation and business development.",
    date: "April 10, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Business School",
    category: "Career",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=60",
    path: "/events/entrepreneurship-workshop"
  },
  {
    id: 6,
    title: "AI in Education Panel",
    description: "Experts discuss the impact of artificial intelligence on educational practices.",
    date: "April 3, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Virtual Event",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&auto=format&fit=crop&q=60",
    path: "/events/ai-education-panel"
  },
  {
    id: 7,
    title: "Student Leadership Conference",
    description: "Develop leadership skills and connect with student leaders from various institutions.",
    date: "March 25, 2025",
    time: "9:00 AM - 4:00 PM",
    location: "Conference Center",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?w=800&auto=format&fit=crop&q=60",
    path: "/events/leadership-conference"
  },
];

// News data
const latestNews = [
  {
    id: 1,
    title: "ENIASMAG Wins Best Student Publication Award",
    excerpt: "Our magazine has been recognized for excellence in student journalism at the National Student Media Awards.",
    date: "April 18, 2025",
    category: "Awards",
    image: "https://images.unsplash.com/photo-1551676222-62b8901a956c?w=800&auto=format&fit=crop&q=60",
    path: "/news/award-win"
  },
  {
    id: 2,
    title: "New Innovation Lab Opens on Campus",
    excerpt: "A state-of-the-art facility for student entrepreneurs and innovators has been inaugurated this week.",
    date: "April 15, 2025",
    category: "Campus",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
    path: "/news/innovation-lab"
  },
  {
    id: 3,
    title: "Student Research Team Secures Major Grant",
    excerpt: "A group of undergraduate researchers has been awarded a prestigious grant for their work on sustainable technology.",
    date: "April 10, 2025",
    category: "Research",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    path: "/news/research-grant"
  },
];

const EventsPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & News</h1>
            <p className="text-xl opacity-90">
              Stay updated with the latest happenings, events, and news from our community.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-ensiasRed-700">Home</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-ensiasRed-700 font-medium">Events & News</span>
          </div>
        </div>
      </div>

      {/* Filters */}
      <section className="py-8 bg-white shadow-md sticky top-[72px] z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 text-gray-400 mr-2" />
              <span className="font-medium text-gray-700">Filter By:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-ensiasRed-700 text-white rounded-md">
                All
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors">
                Events
              </button>
              <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors">
                News
              </button>
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500">
                <option value="">All Categories</option>
                <option value="technology">Technology</option>
                <option value="career">Career</option>
                <option value="culture">Culture</option>
                <option value="academic">Academic</option>
                <option value="leadership">Leadership</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <div className="h-1 w-20 bg-ensiasRed-700 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Link key={event.id} to={event.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-ensiasRed-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <div className="flex items-center text-white text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{event.date}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-ensiasRed-700 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 text-sm">
                      <div className="flex items-center mr-4 mb-2 sm:mb-0">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <div className="h-1 w-20 bg-ensiasRed-700 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Link key={news.id} to={news.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-ensiasRed-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {news.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-ensiasRed-700 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{news.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{news.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/news"
              className="inline-flex items-center text-ensiasRed-700 hover:text-ensiasRed-900 font-semibold"
            >
              View All News <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Past Events</h2>
            <div className="h-1 w-20 bg-ensiasRed-700 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <Link key={event.id} to={event.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-ensiasRed-700 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow">{event.description}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{event.date}</span>
                      <span className="mx-2">•</span>
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              to="/events/past"
              className="inline-flex items-center text-ensiasRed-700 hover:text-ensiasRed-900 font-semibold"
            >
              View All Past Events <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Subscribe to Events */}
      <section className="py-12 bg-ensiasRed-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to our events newsletter to receive notifications about upcoming events and news.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-md border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
              />
              <button
                type="button"
                className="bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-6 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default EventsPage;
