import MainLayout from "../components/layouts/MainLayout";
import HeroSection from "../components/home/HeroSection";
import MagazineSection from "../components/home/MagazineSection";
import ArticlesSection from "../components/home/ArticlesSection";
import EventsAndSubscribeSection from "../components/home/EventsAndSubscribeSection";
import CallToActionSection from "../components/home/CallToActionSection";

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
      <HeroSection />
      <MagazineSection featuredMagazines={featuredMagazines} />
      <ArticlesSection latestArticles={latestArticles} />
      <EventsAndSubscribeSection upcomingEvents={upcomingEvents} />
      <CallToActionSection />
    </MainLayout>
  );
};

export default HomePage;
