
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, User, ChevronDown } from "lucide-react";
import MainLayout from "../components/layouts/MainLayout";

// Article data
const articleCategories = [
  { id: "all", name: "All Articles" },
  { id: "technology", name: "Technology" },
  { id: "academic", name: "Academic" },
  { id: "lifestyle", name: "Lifestyle" },
  { id: "campus", name: "Campus News" },
  { id: "culture", name: "Culture" },
];

const featuredArticle = {
  id: 1,
  title: "The Digital Revolution in Student Learning",
  excerpt: "Exploring how digital tools and platforms are transforming the educational landscape for students worldwide, creating new opportunities and challenges.",
  category: "Technology",
  author: "Professor Amina El Fassi",
  date: "April 15, 2025",
  readTime: "8 min read",
  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
  path: "/articles/technology/digital-revolution"
};

const articles = [
  {
    id: 2,
    title: "Sustainable Campus Initiatives: A Student Perspective",
    excerpt: "Students share their experiences participating in sustainability projects across campus and their impact on the community.",
    category: "Campus",
    author: "Yasmine Bennani",
    date: "April 12, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=60",
    path: "/articles/campus/sustainable-initiatives"
  },
  {
    id: 3,
    title: "AI Ethics: Navigating the Future of Technology",
    excerpt: "Examining the ethical considerations of artificial intelligence development and its implications for society.",
    category: "Technology",
    author: "Dr. Hassan Moukhtari",
    date: "April 10, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60",
    path: "/articles/technology/ai-ethics"
  },
  {
    id: 4,
    title: "The Art of Effective Study Methods",
    excerpt: "Research-backed strategies to enhance learning retention and improve academic performance.",
    category: "Academic",
    author: "Sara Alaoui",
    date: "April 8, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    path: "/articles/academic/effective-study-methods"
  },
  {
    id: 5,
    title: "Campus Innovation Hub: Where Ideas Come to Life",
    excerpt: "A look at the new innovation space that provides resources for students to develop entrepreneurial projects and startups.",
    category: "Campus",
    author: "Mohammed Tazi",
    date: "April 5, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    path: "/articles/campus/innovation-hub"
  },
  {
    id: 6,
    title: "The Intersection of Art and Technology",
    excerpt: "How digital tools are enabling new forms of artistic expression and creativity among students.",
    category: "Culture",
    author: "Leila Ziani",
    date: "April 3, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    path: "/articles/culture/art-and-technology"
  },
  {
    id: 7,
    title: "Balancing Academics and Mental Health",
    excerpt: "Strategies for maintaining well-being while navigating the demands of academic life.",
    category: "Lifestyle",
    author: "Dr. Fatima Ouazzani",
    date: "April 1, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop&q=60",
    path: "/articles/lifestyle/academics-mental-health"
  },
];

const ArticlesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category.toLowerCase() === selectedCategory;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles & Insights</h1>
            <p className="text-lg opacity-90">
              Explore thought-provoking articles written by students, faculty, and guest contributors on various topics.
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
                placeholder="Search articles by title, content, author..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select 
                className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {articleCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <select className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500">
                <option value="">Sort By: Latest</option>
                <option value="oldest">Sort By: Oldest</option>
                <option value="popular">Sort By: Most Popular</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Featured Article</h2>
            <div className="h-1 w-20 bg-ensiasRed-700 mt-2"></div>
          </div>

          <Link to={featuredArticle.path} className="group">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video md:aspect-auto relative overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ensiasRed-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {featuredArticle.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-ensiasRed-700 transition-colors">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-gray-500 text-sm mb-6">
                    <span className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {featuredArticle.author}
                    </span>
                    <span className="mx-3">•</span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {featuredArticle.date}
                    </span>
                    <span className="mx-3">•</span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <div>
                    <span className="inline-flex items-center text-ensiasRed-700 font-medium group-hover:underline">
                      Read Article <ChevronDown className="ml-1 h-4 w-4 rotate-[-90deg]" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Latest Articles</h2>
            <div className="h-1 w-20 bg-ensiasRed-700 mt-2"></div>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <Link key={article.id} to={article.path} className="group">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
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
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold mb-3 group-hover:text-ensiasRed-700 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-grow">{article.excerpt}</p>
                      <div className="flex items-center text-gray-500 text-xs mt-auto">
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
              <button 
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="mt-4 text-ensiasRed-700 hover:text-ensiasRed-900 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
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
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Something to Share?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We welcome submissions from students, faculty, and guest contributors. Share your insights, research, or creative work with our community.
          </p>
          <Link
            to="/submit"
            className="inline-block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Submit Your Article
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default ArticlesPage;
