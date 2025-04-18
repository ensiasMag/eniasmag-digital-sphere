
import { Link } from "react-router-dom";

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
