
import { useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { ChevronRight, Image, Film, X } from "lucide-react";

// Gallery data
const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Campus Life",
    description: "Students enjoying a sunny day on campus",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
    category: "Campus",
    date: "April 2025"
  },
  {
    id: 2,
    type: "image",
    title: "Tech Workshop",
    description: "Students participating in a hands-on coding workshop",
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
    category: "Events",
    date: "March 2025"
  },
  {
    id: 3,
    type: "video",
    title: "Student Interviews",
    description: "Hear from students about their experiences",
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60",
    category: "Interviews",
    date: "March 2025"
  },
  {
    id: 4,
    type: "image",
    title: "Magazine Launch",
    description: "Celebration of our latest issue",
    src: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?w=800&auto=format&fit=crop&q=60",
    category: "Events",
    date: "February 2025"
  },
  {
    id: 5,
    type: "image",
    title: "Research Exhibition",
    description: "Showcasing student research projects",
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
    category: "Academic",
    date: "February 2025"
  },
  {
    id: 6,
    type: "video",
    title: "Campus Tour",
    description: "Virtual tour of our beautiful campus",
    src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&auto=format&fit=crop&q=60",
    category: "Campus",
    date: "January 2025"
  },
  {
    id: 7,
    type: "image",
    title: "Cultural Festival",
    description: "Celebrating diversity through cultural performances",
    src: "https://images.unsplash.com/photo-1527891751199-7225231a68dd?w=800&auto=format&fit=crop&q=60",
    category: "Events",
    date: "January 2025"
  },
  {
    id: 8,
    type: "image",
    title: "Guest Speaker Series",
    description: "Industry leaders sharing insights with students",
    src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=60",
    category: "Events",
    date: "December 2024"
  },
  {
    id: 9,
    type: "image",
    title: "Student Projects",
    description: "Creative works by talented students",
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60",
    category: "Academic",
    date: "December 2024"
  },
  {
    id: 10,
    type: "video",
    title: "Alumni Interviews",
    description: "Success stories from our graduates",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=60",
    category: "Interviews",
    date: "November 2024"
  },
  {
    id: 11,
    type: "image",
    title: "Graduation Ceremony",
    description: "Celebrating our graduating class",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60",
    category: "Events",
    date: "November 2024"
  },
  {
    id: 12,
    type: "image",
    title: "Editorial Team Meeting",
    description: "Behind the scenes with our team",
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&auto=format&fit=crop&q=60",
    category: "Team",
    date: "October 2024"
  }
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalItem, setModalItem] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => 
        activeFilter === "images" 
          ? item.type === "image" 
          : activeFilter === "videos" 
            ? item.type === "video" 
            : item.category.toLowerCase() === activeFilter.toLowerCase()
      );

  const openModal = (item: typeof galleryItems[0]) => {
    setModalItem(item);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalItem(null);
    document.body.style.overflow = "auto";
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Gallery</h1>
            <p className="text-xl opacity-90">
              Explore photos and videos from campus events, student activities, and more.
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
            <span className="text-ensiasRed-700 font-medium">Media Gallery</span>
          </div>
        </div>
      </div>

      {/* Gallery Filters */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "all" 
                  ? "bg-ensiasRed-700 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              All Media
            </button>
            <button
              onClick={() => setActiveFilter("images")}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeFilter === "images" 
                  ? "bg-ensiasRed-700 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <Image className="h-4 w-4 mr-2" /> Photos
            </button>
            <button
              onClick={() => setActiveFilter("videos")}
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                activeFilter === "videos" 
                  ? "bg-ensiasRed-700 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              <Film className="h-4 w-4 mr-2" /> Videos
            </button>
            <button
              onClick={() => setActiveFilter("Events")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "Events" 
                  ? "bg-ensiasRed-700 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActiveFilter("Campus")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "Campus" 
                  ? "bg-ensiasRed-700 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Campus
            </button>
            <button
              onClick={() => setActiveFilter("Academic")}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeFilter === "Academic" 
                  ? "bg-ensiasRed-700 text-white" 
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              Academic
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    {item.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-black/50 flex items-center justify-center">
                          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <h3 className="text-white font-bold">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.category} • {item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No media found matching your filter.</p>
              <button 
                onClick={() => setActiveFilter("all")}
                className="mt-4 text-ensiasRed-700 hover:text-ensiasRed-900 font-medium"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full">
            <button 
              onClick={closeModal}
              className="absolute top-0 right-0 -mt-12 -mr-12 h-10 w-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={modalItem.src}
                  alt={modalItem.title}
                  className="w-full h-full object-cover"
                />
                {modalItem.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-black/50 flex items-center justify-center">
                      <div className="w-0 h-0 border-y-10 border-y-transparent border-l-16 border-l-white ml-2"></div>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{modalItem.title}</h3>
                <p className="text-gray-600 mb-4">{modalItem.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-4">{modalItem.category}</span>
                  <span>{modalItem.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Submit Media */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Media</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Have photos or videos from campus events, student activities, or creative projects? Share them with the ENIASMAG community.
          </p>
          <Link
            to="/submit"
            className="inline-block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            Submit Media
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default GalleryPage;
