import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'info@codefiks.com',
      subInfo: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+1 (555) 123-4567',
      subInfo: 'Mon-Fri 9AM-6PM',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Online Training Institute',
      subInfo: 'Learn from anywhere',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      info: '24/7 Available',
      subInfo: 'Round the clock support',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Ready to start your coding journey? Contact us today and take the first step 
            towards your dream career in software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 animate-fade-in-left">
            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-2xl p-8 text-white shadow-2xl hover-glow border border-primary/20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6 animate-bounce-gentle">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300 group">
                        <div className="flex-shrink-0">
                          <item.icon className="h-6 w-6 text-white/80 mt-1 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold group-hover:text-yellow-200 transition-colors duration-300">{item.title}</h4>
                          <p className="text-white/90 group-hover:text-white transition-colors duration-300">{item.info}</p>
                          <p className="text-white/70 text-sm">{item.subInfo}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-white/20">
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                        <button
                          key={social}
                          className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover-lift animate-bounce-gentle"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <MessageCircle className="h-5 w-5" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-fade-in-right">
            <div className="bg-card rounded-2xl shadow-2xl p-8 border border-border hover-glow transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Send className="h-6 w-6 text-primary mr-2 animate-bounce-gentle" />
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                      Interested Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50"
                    >
                      <option value="">Select a course</option>
                      <option value="mern">MERN Stack</option>
                      <option value="mean">MEAN Stack</option>
                      <option value="python">Python Django</option>
                      <option value="flutter">Flutter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:border-primary/50 resize-none"
                    placeholder="Tell us more about your goals and questions..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center group hover-lift animate-pulse-glow"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-foreground/70 mb-6">
              Our team is here to help you make the right choice for your career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover-lift group">
                <Phone className="inline h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Schedule a Call
              </button>
              <button className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover-lift group">
                <Mail className="inline h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                Send Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;