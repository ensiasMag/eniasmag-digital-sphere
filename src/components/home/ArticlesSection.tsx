
import { Link } from "react-router-dom";
import { ArrowRight, User, Calendar, Clock } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  path: string;
}

interface ArticlesSectionProps {
  latestArticles: Article[];
}

const ArticlesSection = ({ latestArticles }: ArticlesSectionProps) => {
  return (
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
  );
};

export default ArticlesSection;
