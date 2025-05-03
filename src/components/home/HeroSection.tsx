
import { Link } from "react-router-dom";
import RotatingStatue from "../3d/RotatingStatue";

const HeroSection = () => {
  return (
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
                to="/magazine/insider-insights"
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
          <div className="flex justify-center h-[500px]">
            <RotatingStatue />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
