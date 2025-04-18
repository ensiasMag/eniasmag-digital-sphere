
import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Link } from "react-router-dom";
import { ChevronRight, Mail, Phone, MapPin, Clock, Send, AlertCircle, Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log("Form submitted:", formData);
    
    // Simulate successful submission
    setFormStatus("success");
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90">
              Get in touch with the ENIASMAG team for inquiries, feedback, or collaboration opportunities.
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
            <span className="text-ensiasRed-700 font-medium">Contact</span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ensiasRed-100 text-ensiasRed-700 mr-4 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Visit Us</h3>
                    <p className="text-gray-600">
                      School of Information Sciences Campus<br />
                      Avenue Mohammed Ben Abdallah Regragui<br />
                      Madinat Al Irfane, Rabat, Morocco
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ensiasRed-100 text-ensiasRed-700 mr-4 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:contact@ensiamag.edu" className="text-ensiasRed-700 hover:underline">contact@ensiamag.edu</a><br />
                      Editorial Team: <a href="mailto:editorial@ensiamag.edu" className="text-ensiasRed-700 hover:underline">editorial@ensiamag.edu</a><br />
                      Submissions: <a href="mailto:submissions@ensiamag.edu" className="text-ensiasRed-700 hover:underline">submissions@ensiamag.edu</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ensiasRed-100 text-ensiasRed-700 mr-4 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Call Us</h3>
                    <p className="text-gray-600">
                      Office: <a href="tel:+212537777777" className="text-ensiasRed-700 hover:underline">+212 5 37 77 77 77</a><br />
                      Editorial: <a href="tel:+212537777778" className="text-ensiasRed-700 hover:underline">+212 5 37 77 77 78</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-ensiasRed-100 text-ensiasRed-700 mr-4 flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Office Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-ensiasRed-100 text-ensiasRed-700 hover:bg-ensiasRed-700 hover:text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-ensiasRed-100 text-ensiasRed-700 hover:bg-ensiasRed-700 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-ensiasRed-100 text-ensiasRed-700 hover:bg-ensiasRed-700 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-ensiasRed-100 text-ensiasRed-700 hover:bg-ensiasRed-700 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-ensiasRed-100 text-ensiasRed-700 hover:bg-ensiasRed-700 hover:text-white transition-colors">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Submission Question">Submission Question</option>
                    <option value="Partnership Opportunity">Partnership Opportunity</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                  ></textarea>
                </div>

                {formStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md flex items-start">
                    <div className="flex-shrink-0 mr-2">
                      <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p>Your message has been sent successfully. We'll get back to you soon!</p>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                    <p>There was an error sending your message. Please try again later.</p>
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  >
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Visit Our Campus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The ENIASMAG office is located on the School of Information Sciences campus in Rabat.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] bg-gray-200 flex items-center justify-center">
            {/* In a real implementation, you would include an actual map here */}
            <div className="text-center">
              <MapPin className="h-16 w-16 text-ensiasRed-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold">Map Placeholder</h3>
              <p className="text-gray-600">In a production environment, an interactive map would be displayed here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to commonly asked questions about contacting and working with ENIASMAG.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">What are your response times for inquiries?</h3>
              <p className="text-gray-600">
                We strive to respond to all inquiries within 48 hours during regular business days. For urgent matters, please call our office directly.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">How can I submit content for consideration?</h3>
              <p className="text-gray-600">
                You can submit your content through our <Link to="/submit" className="text-ensiasRed-700 hover:underline">submission portal</Link> or by emailing submissions@ensiamag.edu. Please review our submission guidelines before submitting.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">Can I join the ENIASMAG team?</h3>
              <p className="text-gray-600">
                Yes! We're always looking for talented students to join our team. Visit our <Link to="/join-team" className="text-ensiasRed-700 hover:underline">Join the Team</Link> page to learn about open positions and how to apply.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">Do you offer advertising opportunities?</h3>
              <p className="text-gray-600">
                Yes, we offer various advertising opportunities for businesses and organizations that align with our values. Please contact our advertising team at advertising@ensiamag.edu for more information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
