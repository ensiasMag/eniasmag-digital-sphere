
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, MapPin } from "lucide-react";
import MainLayout from "../components/layouts/MainLayout";

const featuredMagazines = [
  {
    id: 1,
    title: "Insider Insights",
    subtitle: "H.R's Golden Advice",
    image: "/lovable-uploads/9c9b8d00-e38e-48a7-bb1c-a0906c3c112c.png",
    path: "/magazine/insider-insights"
  },
  {
    id: 2,
    title: "First Edition",
    subtitle: "Ink Knows No Boundaries",
    image: "/lovable-uploads/8e534848-7ce5-4500-8352-821ba180bcc4.png",
    path: "/magazine/first-edition"
  },
  {
    id: 3,
    title: "Career Success 101",
    subtitle: "Unlocking Insights To Be Recruited",
    image: "/lovable-uploads/6b553504-20d1-4b3f-a696-8a26ca9dd859.png",
    path: "/magazine/career-success"
  }
];

const latestArticles = [
  {
    id: 1,
    title: "The Future of AI in Education",
    excerpt: "Exploring how artificial intelligence is transforming the educational landscape for students worldwide.",
    category: "Technology",
    author: "Ahmed Alaoui",
    date: "April 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    path: "/articles/technology/future-of-ai-in-education"
  },
  {
    id: 2,
    title: "Student Life Balance: A Guide",
    excerpt: "Practical tips and strategies for maintaining a healthy balance between academic work and personal well-being.",
    category: "Lifestyle",
    author: "Yasmine Bennani",
    date: "April 8, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    path: "/articles/lifestyle/student-life-balance"
  },
  {
    id: 3,
    title: "Campus Innovation Hub Launches",
    excerpt: "The new innovation space provides resources for students to develop entrepreneurial projects and startups.",
    category: "Campus News",
    author: "Karim El Mansouri",
    date: "April 5, 2025",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    path: "/articles/campus-news/innovation-hub-launches"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Tech Symposium",
    date: "May 15, 2025",
    location: "Main Auditorium",
    path: "/events/tech-symposium"
  },
  {
    id: 2,
    title: "Career Fair 2025",
    date: "May 22-23, 2025",
    location: "University Campus",
    path: "/events/career-fair"
  },
  {
    id: 3,
    title: "Art & Literature Festival",
    date: "June 5, 2025",
    location: "Campus Garden",
    path: "/events/art-literature-festival"
  }
];

const HomePage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to ENIASMAG
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                A vibrant digital space for students, showcasing the latest publications, articles, and creative content.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/magazine"
                  className="bg-white text-ensiasRed-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Browse Magazine
                </Link>
                <Link
                  to="/submit"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-ensiasRed-800 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Submit Content
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/d6bb3b0a-969f-4152-bb5e-ee81260916ec.png"
                alt="ENIASMAG Logo"
                className="h-52 md:h-64 lg:h-80 w-auto animate-pulse"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Magazine Issues */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Magazine Issues</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore our most recent publications featuring insights, stories, and creative content from our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMagazines.map((magazine) => (
              <Link key={magazine.id} to={magazine.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={magazine.image}
                      alt={magazine.title}
                      className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-r from-ensiasRed-700 to-ensiasRed-900 text-white">
                    <h3 className="text-xl font-bold mb-1">{magazine.title}</h3>
                    <p className="text-ensiasRed-100 text-sm">{magazine.subtitle}</p>
                    <div className="mt-4 flex justify-end">
                      <span className="inline-flex items-center text-white group-hover:underline">
                        Read Issue <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link 
              to="/magazine/archives"
              className="inline-flex items-center text-ensiasRed-700 hover:text-ensiasRed-900 font-semibold"
            >
              View All Issues <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Dive into thought-provoking articles written by students and faculty members on various topics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <Link key={article.id} to={article.path} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-ensiasRed-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-ensiasRed-700 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                    <div className="flex items-center text-gray-500 text-xs border-t border-gray-100 pt-4">
                      <span className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {article.date}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link 
              to="/articles"
              className="inline-flex items-center text-ensiasRed-700 hover:text-ensiasRed-900 font-semibold"
            >
              View All Articles <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events & Subscription */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <Link key={event.id} to={event.path} className="block">
                    <div className="p-6 bg-gray-50 hover:bg-ensiasRed-50 rounded-lg flex items-start transition-colors">
                      <div className="bg-ensiasRed-700 text-white rounded-lg p-3 text-center min-w-[4rem] mr-4">
                        <span className="block text-sm font-semibold">
                          {event.date.split(",")[0].split(" ")[0]}
                        </span>
                        <span className="block text-xl font-bold">
                          {event.date.split(",")[0].split(" ")[1]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg hover:text-ensiasRed-700 transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          <span className="inline-flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            {event.date}
                          </span>
                          <span className="mx-2">•</span>
                          <span className="inline-flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {event.location}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Link
                  to="/events"
                  className="inline-flex items-center text-ensiasRed-700 hover:text-ensiasRed-900 font-semibold"
                >
                  View All Events <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-ensiasRed-700 to-ensiasRed-900 text-white rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-6 opacity-90">
                Subscribe to our newsletter to receive the latest updates, articles, and exclusive content.
              </p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ensiasRed-600"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-ensiasRed-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-ensiasRed-800 hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
              <p className="mt-4 text-sm opacity-75">
                By subscribing, you agree to receive our newsletter. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-ensiasRed-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Share Your Voice?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Join our community of writers and content creators. Submit your articles, stories, artwork, and more to ENIASMAG.
          </p>
          <Link
            to="/submit"
            className="inline-block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium px-8 py-4 rounded-md transition-colors text-lg"
          >
            Submit Your Content
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;
