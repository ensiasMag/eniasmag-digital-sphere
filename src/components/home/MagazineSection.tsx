
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface MagazineIssue {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  path: string;
}

interface MagazineSectionProps {
  featuredMagazines: MagazineIssue[];
}

const MagazineSection = ({ featuredMagazines }: MagazineSectionProps) => {
  return (
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
  );
};

export default MagazineSection;
