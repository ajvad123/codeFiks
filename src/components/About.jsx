import React from 'react';
import { Target, Eye, Users, Briefcase, GraduationCap, Zap } from 'lucide-react';


const About = () => {
  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience.',
    },
    {
      icon: Briefcase,
      title: 'Live Projects',
      description: 'Work on actual company projects and build a portfolio that stands out.',
    },
    {
      icon: Users,
      title: 'Placement Support',
      description: 'Dedicated career guidance and job placement assistance.',
    },
    {
      icon: Zap,
      title: 'Industry-Ready Curriculum',
      description: 'Stay updated with the latest technologies and industry trends.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div className="animate-fade-in-left">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              About <span className="text-primary bg-gradient-to-r from-primary to-purple-600 bg-clip-text">Codefiks</span>
            </h2>

            <div className="mb-8">
              <div className="flex items-center mb-4 group">
                <Target className="h-8 w-8 text-primary mr-3 animate-bounce-gentle group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold text-foreground">Our Mission</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                To bridge the gap between theoretical knowledge and practical industry skills
                by providing comprehensive software training that prepares students for real-world challenges.
              </p>
            </div>

            <div className="mb-8">
              <div className="flex items-center mb-4 group">
                <Eye className="h-8 w-8 text-primary mr-3 animate-bounce-gentle group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-semibold text-foreground">Our Vision</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed">
                To become the leading online software training institute that not only teaches
                technology but also provides opportunities for students to work on live projects
                and secure their dream careers.
              </p>
            </div>

            <div className="bg-secondary/50 p-6 rounded-lg border border-border hover-glow transition-all duration-300 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                Why Choose Codefiks?
              </h4>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-center hover:text-foreground transition-colors duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></div>
                  6-month comprehensive training programs
                </li>
                <li className="flex items-center hover:text-foreground transition-colors duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                  Opportunity to work on live company projects
                </li>
                <li className="flex items-center hover:text-foreground transition-colors duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  100% Placement Assistance
                </li>
                <li className="flex items-center hover:text-foreground transition-colors duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                  Industry-experienced mentors
                </li>
              </ul>
            </div>
          </div>

          {/* Features Grid */}
          <div className="animate-fade-in-right">
            <div className="relative mb-8 animate-float">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl hover-lift transition-all duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold animate-bounce-gentle">
                Expert Team
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover-lift transition-all duration-300 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300 animate-bounce-gentle" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300 hidden sm:block">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 bg-gradient-to-r from-primary/90 to-purple-600/90 rounded-2xl p-12 shadow-2xl animate-fade-in-up hover-glow border border-primary/20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative z-10 grid md:grid-cols-4 gap-8 text-center text-white">
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300">
                <div className="text-4xl font-bold mb-2 animate-pulse">2000+</div>
                <div className="text-lg opacity-90">Students Trained</div>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300">
                <div className="text-4xl font-bold mb-2 animate-pulse" style={{ animationDelay: '0.1s' }}>150+</div>
                <div className="text-lg opacity-90">Live Projects</div>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300">
                <div className="text-4xl font-bold mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}>95%</div>
                <div className="text-lg opacity-90">Placement Rate</div>
              </div>
              <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300">
                <div className="text-4xl font-bold mb-2 animate-pulse" style={{ animationDelay: '0.3s' }}>50+</div>
                <div className="text-lg opacity-90">Partner Companies</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default About;