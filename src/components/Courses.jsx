import React from 'react';
import { Clock, Headphones, Award, Code, Database, Smartphone, Globe } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'MERN Stack',
      description: 'Master MongoDB, Express.js, React, and Node.js to build full-stack web applications.',
      icon: Globe,
      duration: '6 Months',
      support: '24/7',
      level: 'Beginner to Advanced',
      features: ['MongoDB & Express.js', 'React & Redux', 'Node.js & APIs', 'Real-time Applications'],
      color: 'from-green-400 to-green-600',
    },
    {
      id: 2,
      title: 'MEAN Stack',
      description: 'Learn MongoDB, Express.js, Angular, and Node.js for enterprise-level applications.',
      icon: Code,
      duration: '6 Months',
      support: '24/7',
      level: 'Intermediate',
      features: ['Angular Framework', 'TypeScript', 'RESTful APIs', 'Enterprise Architecture'],
      color: 'from-red-400 to-red-600',
    },
    {
      id: 3,
      title: 'Python Django',
      description: 'Build robust web applications with Python and Django framework.',
      icon: Database,
      duration: '6 Months',
      support: '24/7',
      level: 'Beginner Friendly',
      features: ['Python Fundamentals', 'Django Framework', 'Database Design', 'API Development'],
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 4,
      title: 'Flutter',
      description: 'Create beautiful cross-platform mobile apps with Google\'s Flutter framework.',
      icon: Smartphone,
      duration: '6 Months',
      support: '24/7',
      level: 'Mobile Development',
      features: ['Dart Programming', 'Widget Development', 'State Management', 'App Publishing'],
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section id="courses" className="py-20 bg-secondary/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Courses</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Choose from our carefully crafted 6-month programs designed to make you industry-ready 
            with hands-on experience and live project opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="bg-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up hover-lift border border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-32 bg-gradient-to-r ${course.color} p-6 flex items-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
                <course.icon className="h-12 w-12 text-white mr-4 relative z-10 animate-bounce-gentle" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                  <p className="text-white/90">{course.level}</p>
                </div>
              </div>

              <div className="p-6 bg-card">
                <p className="text-foreground/70 mb-6 leading-relaxed">{course.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 rounded-lg bg-secondary/50 hover-glow transition-all duration-300">
                    <Clock className="h-6 w-6 text-primary mx-auto mb-1 animate-pulse" />
                    <p className="text-sm font-semibold text-foreground">{course.duration}</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50 hover-glow transition-all duration-300">
                    <Headphones className="h-6 w-6 text-primary mx-auto mb-1 animate-pulse" />
                    <p className="text-sm font-semibold text-foreground">{course.support}</p>
                    <p className="text-xs text-foreground/60">Learning Support</p>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-secondary/50 hover-glow transition-all duration-300">
                    <Award className="h-6 w-6 text-primary mx-auto mb-1 animate-pulse" />
                    <p className="text-sm font-semibold text-foreground">Certificate</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                    What You'll Learn:
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-foreground/80 hover:text-foreground transition-colors duration-200">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" style={{ animationDelay: `${idx * 0.1}s` }}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover-lift group animate-pulse-glow">
                  <span className="flex items-center justify-center">
                    Enroll Now
                    <Award className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Feature */}
        <div className="mt-16 bg-gradient-to-r from-primary/90 to-purple-600/90 rounded-2xl p-8 text-center text-white shadow-2xl animate-fade-in-up hover-glow border border-primary/20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4 animate-bounce-gentle">🚀 Exclusive Opportunity</h3>
              <p className="text-xl mb-6 text-white/90 leading-relaxed">
                Top-performing students get the chance to work on live projects with our company 
                and receive dedicated placement support to land their dream jobs!
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300">
                  <div className="text-3xl font-bold animate-pulse">Live Projects</div>
                  <div className="text-lg opacity-90">Real Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300">
                  <div className="text-3xl font-bold animate-pulse">100%</div>
                  <div className="text-lg opacity-90">Placement Assistance</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm hover-lift transition-all duration-300">
                  <div className="text-3xl font-bold animate-pulse">24/7</div>
                  <div className="text-lg opacity-90">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;