// CourseDetailTemplate.jsx
import React, { useState } from 'react';
import {
  Clock, BookOpen, CheckCircle, Star, User, Calendar, Users, X, Mail, MapPin, GraduationCap, CalendarDays, MessageSquare, Code
} from 'lucide-react';

const CourseDetailTemplate = ({ course }) => {
  const Icon = course.icon;
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    qualification: '',
    yearOfGraduation: '',
    techStack: '',
    reason: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! We will contact you soon.');
    setShowForm(false);
    setFormData({
      name: '',
      place: '',
      qualification: '',
      yearOfGraduation: '',
      techStack: '',
      reason: '',
      email: ''
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header Section */}
      <header
        className={`bg-gradient-to-r ${course.color} text-white py-16 shadow-lg animate-slide-in-down`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 md:gap-8 animate-fade-in-up">
            <Icon className="h-20 w-20 md:h-24 md:w-24 text-white hover-glow transition-transform duration-500" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-md">{course.title}</h1>
              <p className="mt-2 text-xl sm:text-2xl text-white/90 max-w-xl mx-auto md:mx-0">{course.subtitle}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-8 text-lg font-medium select-none">
            <div className="flex items-center space-x-2 hover-lift cursor-default">
              <Star className="h-6 w-6 text-yellow-400" />
              <span>{course.practicalExperience || 'Hands-on Projects'}</span>
            </div>
            <div className="flex items-center space-x-2 hover-lift cursor-default">
              <User className="h-6 w-6" />
              <span>{course.liveSessions || 'Weekly Q&A with experts'}</span>
            </div>
            <div className="flex items-center space-x-2 hover-lift cursor-default">
              <Clock className="h-6 w-6" />
              <span>{course.duration}</span>
            </div>
            <div className="px-4 py-1 rounded-full bg-white/20 text-sm font-semibold select-text">
              {course.level}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left and center content */}
          <section className="lg:col-span-2 space-y-10">
            {/* About */}
            <article className="bg-card rounded-xl p-8 shadow-md border border-border hover-glow transition-all duration-300 animate-fade-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-6">About This Course</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{course.description}</p>
            </article>

            {/* What You'll Learn */}
            <article className="bg-card rounded-xl p-8 shadow-md border border-border hover-glow transition-all duration-300 animate-fade-in-left">
              <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                <BookOpen className="h-7 w-7 text-primary" />
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>

          {/* Right Sidebar */}
          <aside className="space-y-10">
            {/* Fumigation Test Entry */}
            <section className="bg-card rounded-xl p-6 shadow-md border border-border hover-glow transition-all duration-300 animate-fade-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Take Fumigation Test
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">
                    ₹10,000
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">Fumigation Test Fee</p>
                </div>
                
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200 font-medium mb-2">
                    💡 Important Notice
                  </p>
                  <p className="text-xs text-blue-700 dark:text-blue-300">
                    Test fee is <strong>fully refundable</strong> if you fail or quit the fumigation test. Only successful candidates proceed to the main course.
                  </p>
                </div>
                
                <button 
                  onClick={() => setShowForm(true)}
                  className={`w-full bg-gradient-to-r ${course.color} text-white py-3 px-6 rounded-lg font-semibold text-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  Register for Test
                </button>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>Next Test: {course.testDate || 'This Saturday'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Duration: {course.testDuration || '2 hours'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{course.testSpotsLeft || '8'} test slots remaining</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>100% refundable if unsuccessful</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Course Details */}
            <section className="bg-card rounded-xl p-6 shadow-md border border-border hover-glow transition-all duration-300 animate-fade-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-6">Course Details</h3>
              <div className="space-y-5 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span className="font-semibold text-foreground">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Level:</span>
                  <span className="font-semibold text-foreground">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span>Live Sessions:</span>
                  <span className="font-semibold text-foreground">{course.liveSessions || 'Weekly Q&A with experts'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Practical Experience:</span>
                  <span className="font-semibold text-foreground">{course.practicalExperience || 'Hands-on Projects'}</span>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </main>

      {/* Registration Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-xl p-8 shadow-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Fumigation Test Registration</h2>
              <button 
                onClick={() => setShowForm(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Place */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Place *
                </label>
                <input
                  type="text"
                  name="place"
                  value={formData.place}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Enter your city/location"
                />
              </div>

              {/* Educational Qualification */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Educational Qualification *
                </label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select your qualification</option>
                  <option value="10th">10th Standard</option>
                  <option value="12th">12th Standard</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Year of Graduation */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  Year of Graduation/Pass Out *
                </label>
                <input
                  type="number"
                  name="yearOfGraduation"
                  value={formData.yearOfGraduation}
                  onChange={handleInputChange}
                  required
                  min="1970"
                  max="2025"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="e.g., 2023"
                />
              </div>

              {/* Tech Stack */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  Which stack are you going to use? *
                </label>
                <select
                  name="techStack"
                  value={formData.techStack}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                >
                  <option value="">Select your preferred tech stack</option>
                  <option value="mern">MERN (MongoDB, Express, React, Node.js)</option>
                  <option value="mean">MEAN (MongoDB, Express, Angular, Node.js)</option>
                  <option value="python-django">Python Django</option>
                  <option value="go">Go (Golang)</option>
                  <option value="flutter">Flutter</option>
                </select>
              </div>

              {/* Reason to Join */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Why do you want to join the Haxford Academy? *
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-vertical"
                  placeholder="Tell us about your motivation and goals..."
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 px-6 py-3 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`flex-1 bg-gradient-to-r ${course.color} text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg`}
                >
                  Submit Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailTemplate;