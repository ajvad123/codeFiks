import React from 'react';
import { Code, Mail, Phone, MapPin, Heart, Facebook, Linkedin, Instagram } from 'lucide-react';

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

  const socialMedia = [
    { name: 'Facebook', icon: Facebook },
    { name: 'WhatsApp', icon: 'whatsapp' },
    { name: 'LinkedIn', icon: Linkedin },
    { name: 'Instagram', icon: Instagram },
  ];

  return (
    <footer className="bg-card border-t border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 animate-fade-in-up">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-primary mr-2 animate-rotate-slow" />
              <span className="text-2xl font-bold text-foreground">Haxord</span>
            </div>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              Premier online software training institute offering comprehensive
              6-month programs with live project opportunities and placement support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-foreground/70 hover:text-primary transition-colors duration-300 hover-lift">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                info@Haxord.com
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
                {socialMedia.map((social, index) => {
                  return social.name === 'WhatsApp' ? (
                    <a
                      key={social.name}
                      href="https://wa.me/15551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Chat with us on WhatsApp"
                      className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover-lift animate-bounce-gentle stagger-animation"
                      style={{ '--stagger': index }}
                    >
                      <svg
                        className="h-5 w-5 text-primary hover:text-primary-foreground transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                    </a>
                  ) : (
                    <button
                      key={social.name}
                      className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300 hover-lift animate-bounce-gentle stagger-animation"
                      style={{ '--stagger': index }}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      {React.createElement(social.icon, {
                        className:
                          'h-5 w-5 text-primary hover:text-primary-foreground transition-colors duration-300',
                      })}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8 animate-fade-in-up">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="text-foreground/70 mb-4 md:mb-0 text-center">
              © {currentYear} Haxord. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
