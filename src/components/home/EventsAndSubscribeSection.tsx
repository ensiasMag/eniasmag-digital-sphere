
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  path: string;
}

interface EventsAndSubscribeSectionProps {
  upcomingEvents: Event[];
}

const EventsAndSubscribeSection = ({ upcomingEvents }: EventsAndSubscribeSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
  );
};

export default EventsAndSubscribeSection;
