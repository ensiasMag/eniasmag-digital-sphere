
import { Link } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout";
import { ChevronRight, Award, Users, BookOpen, Target, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About ENIASMAG</h1>
            <p className="text-xl opacity-90">
              A vibrant digital platform created by students, for students.
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
            <span className="text-ensiasRed-700 font-medium">About Us</span>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                ENIASMAG was founded in 2019 by a group of passionate students at the School of Information Sciences who recognized the need for a platform that would showcase student work, provide relevant information, and foster a sense of community.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a simple print newsletter has evolved into a comprehensive digital magazine that covers a wide range of topics, from technology and academic research to campus life and cultural events.
              </p>
              <p className="text-gray-600">
                Today, ENIASMAG is run by a dedicated team of student editors, writers, designers, and contributors who work together to create engaging content that informs, entertains, and inspires our readers.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/8e534848-7ce5-4500-8352-821ba180bcc4.png" 
                alt="ENIASMAG First Edition" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-ensiasRed-700 text-white py-3 px-6 rounded-lg shadow-lg">
                <span className="text-sm font-semibold">Founded in 2019</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-ensiasRed-100 text-ensiasRed-700 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                ENIASMAG aims to empower students by providing a platform where they can share their knowledge, showcase their talents, and engage with the broader academic community. We strive to produce high-quality content that is informative, relevant, and accessible to our diverse readership.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-ensiasRed-100 text-ensiasRed-700 mb-6">
                <BookOpen className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                We envision ENIASMAG as a leading student publication that bridges the gap between academic learning and real-world application. We aspire to foster a community of critical thinkers, innovators, and creators who will shape the future of technology, business, and society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values and Achievements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Values */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-ensiasRed-100 flex items-center justify-center text-ensiasRed-700">
                      <span className="text-xl font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Excellence</h3>
                    <p className="text-gray-600">
                      We are committed to excellence in all aspects of our work, from content creation to design and user experience.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-ensiasRed-100 flex items-center justify-center text-ensiasRed-700">
                      <span className="text-xl font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
                    <p className="text-gray-600">
                      We value diversity of thought, background, and perspective, and strive to create an inclusive platform for all students.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-ensiasRed-100 flex items-center justify-center text-ensiasRed-700">
                      <span className="text-xl font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      We embrace innovative approaches to content creation, distribution, and engagement with our audience.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 rounded-full bg-ensiasRed-100 flex items-center justify-center text-ensiasRed-700">
                      <span className="text-xl font-bold">4</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Integrity</h3>
                    <p className="text-gray-600">
                      We uphold the highest standards of journalistic integrity, ethical conduct, and academic honesty.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Achievements</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-ensiasRed-700">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-ensiasRed-700 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Best Student Publication</h3>
                      <p className="text-gray-600">
                        Awarded by the National Association of Student Media, 2023
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-ensiasRed-700">
                  <div className="flex items-start">
                    <Award className="h-6 w-6 text-ensiasRed-700 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">Excellence in Digital Innovation</h3>
                      <p className="text-gray-600">
                        Recognized for our interactive digital experiences, Moroccan Digital Awards, 2022
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-ensiasRed-700">
                  <div className="flex items-start">
                    <Users className="h-6 w-6 text-ensiasRed-700 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">10,000+ Monthly Readers</h3>
                      <p className="text-gray-600">
                        Our community has grown significantly since our founding, with readers from across the country
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-ensiasRed-700">
                  <div className="flex items-start">
                    <BookOpen className="h-6 w-6 text-ensiasRed-700 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-1">50+ Issues Published</h3>
                      <p className="text-gray-600">
                        A rich archive of content documenting student life, achievements, and perspectives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-ensiasRed-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet the Team Behind ENIASMAG</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Our magazine is powered by a dedicated team of student editors, writers, designers, and contributors who bring diverse skills and perspectives to our publication.
          </p>
          <Link
            to="/team"
            className="inline-flex items-center bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-ensiasRed-700 to-ensiasRed-800 rounded-xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-4">Join ENIASMAG</h2>
                <p className="text-xl opacity-90 mb-6">
                  Become part of our dynamic team and help shape the future of student media at our school.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white text-ensiasRed-700 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                    <span>Gain valuable media experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white text-ensiasRed-700 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                    <span>Develop your writing, design, and leadership skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white text-ensiasRed-700 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                    <span>Connect with like-minded peers and industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-white text-ensiasRed-700 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">✓</div>
                    <span>Build a portfolio for your future career</span>
                  </li>
                </ul>
                <div className="space-x-4">
                  <Link
                    to="/join-team"
                    className="inline-block bg-white text-ensiasRed-700 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Apply to Join
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-block bg-transparent border border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&auto=format&fit=crop&q=60" 
                  alt="Students working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
