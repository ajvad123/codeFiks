
import React from 'react';
import { Code, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const courses = [
    'MERN Stack Development',
    'MEAN Stack Development',
    'Python Django',
    'Flutter Mobile Development',
  ];

  const quickLinks = [
    'About Us',
    'Courses',
    'Live Projects',
    'Placement Support',
    'Student Portal',
    'Contact Us',
  ];

  const companyInfo = [
    'Privacy Policy',
    'Terms of Service',
    'Refund Policy',
    'Career Opportunities',
  ];

  return (
    <footer className="bg-card border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-primary mr-2 animate-rotate-slow" />
              <span className="text-2xl font-bold text-foreground">Codefiks</span>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Premier online software training institute offering comprehensive 
              6-month programs with live project opportunities and placement support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-300 hover-lift">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                info@codefiks.com
              </div>
              <div className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-300 hover-lift">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-300 hover-lift">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                Online Training Institute
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="animate-fade-in-up stagger-animation" style={{ '--stagger': 1 }}>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Our Courses</h3>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <a
                    href="#courses"
                    className="text-foreground/70 hover:text-primary transition-all duration-300 hover-lift block"
                  >
                    {course}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up stagger-animation" style={{ '--stagger': 2 }}>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-primary transition-all duration-300 hover-lift block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-fade-in-up stagger-animation" style={{ '--stagger': 3 }}>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-3">
              {companyInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-foreground/70 hover:text-primary transition-all duration-300 hover-lift block"
                  >
                    {info}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-foreground">Follow Us</h4>
              <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
                  <button
                    key={social}
                    className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover-lift animate-bounce-gentle stagger-animation"
                    style={{ '--stagger': index }}
                  >
                    <Code className="h-5 w-5 text-primary hover:text-primary-foreground transition-colors duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-foreground/70 mb-4 md:mb-0">
              © {currentYear} Codefiks. All rights reserved.
            </div>
            <div className="flex items-center text-foreground/70">
              Made with <Heart className="h-4 w-4 text-red-500 mx-2 animate-scale-pulse" /> for aspiring developers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
