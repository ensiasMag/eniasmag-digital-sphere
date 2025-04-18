
import { useState } from "react";
import MainLayout from "../components/layouts/MainLayout";
import { Link } from "react-router-dom";
import { ChevronRight, FileText, Image, Upload, Film, AlertCircle, Check, Info } from "lucide-react";

const SubmitPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    studentId: "",
    department: "",
    contentType: "",
    title: "",
    description: "",
    file: null as File | null,
    agreeToTerms: false
  });
  
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFormData(prev => ({
        ...prev,
        file: files[0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this data to a server
    console.log("Form submitted:", formData);
    
    // Simulate successful submission
    setFormStatus("success");
    
    // Reset form after submission (except for personal info)
    setFormData(prev => ({
      ...prev,
      contentType: "",
      title: "",
      description: "",
      file: null,
      agreeToTerms: false
    }));
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  const contentTypes = [
    { id: "article", name: "Article", icon: FileText, description: "Written content on academic, technical, or cultural topics" },
    { id: "photo", name: "Photography", icon: Image, description: "Original photographs related to student life or academic themes" },
    { id: "video", name: "Video", icon: Film, description: "Short films, documentaries, or interviews" },
    { id: "other", name: "Other Creative Work", icon: Upload, description: "Poetry, artwork, or other creative content" }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ensiasRed-800 to-ensiasRed-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Your Content</h1>
            <p className="text-xl opacity-90">
              Share your insights, creativity, and expertise with the ENIASMAG community.
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
            <span className="text-ensiasRed-700 font-medium">Submit Content</span>
          </div>
        </div>
      </div>

      {/* Content Type Selection */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">What Would You Like to Submit?</h2>
            <p className="text-gray-600 max-w-3xl">
              We welcome various types of content submissions from students, faculty, and guest contributors. Select the type of content you'd like to share with our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type) => (
              <label
                key={type.id}
                htmlFor={`contentType-${type.id}`}
                className={`
                  relative block p-6 border rounded-lg cursor-pointer hover:border-ensiasRed-700 transition-colors
                  ${formData.contentType === type.id 
                    ? "border-ensiasRed-700 bg-ensiasRed-50" 
                    : "border-gray-200 bg-white"}
                `}
              >
                <input
                  type="radio"
                  id={`contentType-${type.id}`}
                  name="contentType"
                  value={type.id}
                  checked={formData.contentType === type.id}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div className="text-center">
                  <type.icon className={`h-12 w-12 mx-auto mb-4 ${formData.contentType === type.id ? "text-ensiasRed-700" : "text-gray-400"}`} />
                  <h3 className="text-lg font-bold mb-2">{type.name}</h3>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </div>
                {formData.contentType === type.id && (
                  <div className="absolute top-3 right-3 h-6 w-6 rounded-full bg-ensiasRed-700 flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Submission Guidelines</h2>
            <p className="text-gray-600 max-w-3xl">
              Please review our submission guidelines before submitting your content to ensure it meets our standards and requirements.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md border-l-4 border-ensiasRed-700">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-ensiasRed-700 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-4">General Guidelines</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>All submissions must be original work and not previously published elsewhere.</li>
                  <li>Content should be relevant to our student audience and align with our publication's mission and values.</li>
                  <li>Cite all sources and references properly according to academic standards.</li>
                  <li>We reserve the right to edit submissions for clarity, length, and style.</li>
                  <li>By submitting, you grant ENIASMAG the right to publish your work in our magazine and on our digital platforms.</li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-4">Specific Guidelines by Content Type</h3>
                
                <h4 className="text-lg font-semibold mt-4 mb-2">Articles</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Length: 800-2,000 words</li>
                  <li>Format: Microsoft Word (.docx) or Google Docs</li>
                  <li>Include a brief author bio (50-100 words)</li>
                  <li>Suggest 2-3 relevant images to accompany your article</li>
                </ul>

                <h4 className="text-lg font-semibold mt-4 mb-2">Photography</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Format: High-resolution JPEG or PNG (minimum 1920px on longest side)</li>
                  <li>Include a title and brief caption for each image</li>
                  <li>Maximum submission: 5 photos per submission</li>
                </ul>

                <h4 className="text-lg font-semibold mt-4 mb-2">Video</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Length: 1-5 minutes</li>
                  <li>Format: MP4 or link to YouTube/Vimeo</li>
                  <li>Include a brief description of the video content</li>
                </ul>

                <h4 className="text-lg font-semibold mt-4 mb-2">Other Creative Work</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Poetry: Maximum 3 poems per submission</li>
                  <li>Artwork: High-resolution images of your work</li>
                  <li>Include an artist statement (optional)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Form */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Submit Your Content</h2>
            <p className="text-gray-600 max-w-3xl">
              Fill out the form below to submit your content for consideration. Our editorial team will review your submission and get back to you within 5-7 business days.
            </p>
          </div>

          {formStatus === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg max-w-3xl mx-auto">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Submission Received!</h3>
                  <p className="mb-4">
                    Thank you for your submission. Our editorial team will review your content and get back to you within 5-7 business days.
                  </p>
                  <button
                    onClick={() => setFormStatus(null)}
                    className="text-green-700 font-medium hover:underline"
                  >
                    Submit another piece
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Personal Information Section */}
                <div className="border-b border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-4">Personal Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
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
                      <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 mb-1">
                        Student ID
                      </label>
                      <input
                        type="text"
                        id="studentId"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                        Department/Faculty
                      </label>
                      <input
                        type="text"
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Details Section */}
                <div className="border-b border-gray-200 p-6">
                  <h3 className="text-xl font-bold mb-4">Content Details</h3>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title/Headline *
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        Description/Abstract *
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-ensiasRed-500 focus:border-ensiasRed-500"
                        placeholder="Provide a brief summary or abstract of your content..."
                      ></textarea>
                    </div>
                    <div>
                      <label htmlFor="file" className="block text-sm font-medium text-gray-700 mb-1">
                        Upload File *
                      </label>
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                          <Upload className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="flex text-sm text-gray-600">
                            <label
                              htmlFor="file"
                              className="relative cursor-pointer bg-white rounded-md font-medium text-ensiasRed-700 hover:text-ensiasRed-500 focus-within:outline-none"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file"
                                name="file"
                                type="file"
                                onChange={handleFileChange}
                                className="sr-only"
                                required
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            For articles: DOC, DOCX, PDF up to 10MB
                          </p>
                          <p className="text-xs text-gray-500">
                            For images: JPG, PNG up to 20MB
                          </p>
                          <p className="text-xs text-gray-500">
                            For videos: MP4 up to 100MB or provide a link
                          </p>
                        </div>
                      </div>
                      {formData.file && (
                        <p className="mt-2 text-sm text-gray-600">
                          Selected file: {formData.file.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Terms and Submit Section */}
                <div className="p-6">
                  <div className="mb-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          required
                          className="h-4 w-4 text-ensiasRed-700 border-gray-300 rounded focus:ring-ensiasRed-500"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeToTerms" className="text-gray-700">
                          I confirm that this is my original work and I grant ENIASMAG permission to publish it in print and digital formats. I have read and agree to the <Link to="/terms" className="text-ensiasRed-700 hover:underline">submission guidelines and terms</Link>.
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!formData.contentType || !formData.agreeToTerms}
                    className={`
                      w-full py-3 px-4 rounded-md font-medium text-white
                      ${(!formData.contentType || !formData.agreeToTerms) 
                        ? "bg-gray-400 cursor-not-allowed" 
                        : "bg-ensiasRed-700 hover:bg-ensiasRed-800"}
                    `}
                  >
                    Submit Content
                  </button>

                  {(!formData.contentType || !formData.agreeToTerms) && (
                    <p className="mt-2 text-sm text-gray-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1 text-ensiasRed-700" />
                      {!formData.contentType 
                        ? "Please select a content type above" 
                        : "Please agree to the terms and conditions"}
                    </p>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about submitting content to ENIASMAG.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">How long does the review process take?</h3>
              <p className="text-gray-600">
                Our editorial team typically reviews submissions within 5-7 business days. You will receive an email notification regarding the status of your submission.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">Can I submit multiple pieces of content?</h3>
              <p className="text-gray-600">
                Yes, you can submit multiple pieces of content. However, we recommend submitting one piece at a time and waiting for a response before submitting additional content.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">Will I receive feedback on my submission?</h3>
              <p className="text-gray-600">
                Due to the volume of submissions we receive, we cannot provide detailed feedback on every submission. However, if your content is selected for publication, our editors will work with you to refine and prepare it for publication.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">Is there compensation for published content?</h3>
              <p className="text-gray-600">
                While we do not currently offer monetary compensation for submissions, published content provides exposure and recognition within the academic community. Your work will be professionally edited and published with full attribution.
              </p>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold mb-2">Can I update or withdraw my submission?</h3>
              <p className="text-gray-600">
                Yes, you can update or withdraw your submission at any time before it is published. Please contact our editorial team at editorial@ensiamag.edu with your request.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help With Your Submission?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            If you have any questions or need assistance with your submission, our team is here to help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-3 px-6 rounded-md transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default SubmitPage;
