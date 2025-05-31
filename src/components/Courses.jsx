import React from 'react';
import { Clock, Award, Code, Database, Smartphone, Globe, ArrowRight, Server } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'MERN Stack',
      description: 'Full-stack web development with MongoDB, Express, React & Node.js',
      icon: Globe,
      duration: '6 Months',
      level: 'Beginner to Advanced',
      color: 'from-green-400 to-green-600',
    },
    {
      id: 2,
      title: 'MEAN Stack',
      description: 'Enterprise applications with MongoDB, Express, Angular & Node.js',
      icon: Code,
      duration: '6 Months',
      level: 'Intermediate',
      color: 'from-red-400 to-red-600',
    },
    {
      id: 3,
      title: 'Python Django',
      description: 'Robust web applications with Python and Django framework',
      icon: Database,
      duration: '6 Months',
      level: 'Beginner Friendly',
      color: 'from-blue-400 to-blue-600',
    },
    {
      id: 4,
      title: 'Flutter',
      description: 'Cross-platform mobile apps with Google\'s Flutter framework',
      icon: Smartphone,
      duration: '6 Months',
      level: 'Mobile Development',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 5,
      title: 'Go Lang',
      description: 'High-performance backend development with Google\'s Go language',
      icon: Server,
      duration: '6 Months',
      level: 'Backend Development',
      color: 'from-cyan-400 to-cyan-600',
    },
  ];

  return (
    <section id="courses" className="py-16 bg-secondary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">Our Courses</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            6-month industry-focused programs with hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-border group"
            >
              <div className={`h-20 bg-gradient-to-r ${course.color} p-4 flex items-center`}>
                <course.icon className="h-8 w-8 text-white mr-3" />
                <div>
                  <h3 className="text-lg font-bold text-white">{course.title}</h3>
                </div>
              </div>

              <div className="p-3 md:p-4">
                <p className="text-foreground/70 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-3 md:mb-4 text-xs md:text-sm">
                  <div className="flex items-center text-foreground/60">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-foreground/60">
                    <Award className="h-4 w-4 mr-1" />
                    Certificate
                  </div>
                </div>

                <div className="text-xs text-foreground/60 mb-3 md:mb-4 bg-secondary/30 rounded px-2 py-1">
                  {course.level}
                </div>

                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs md:text-sm font-medium hover:bg-primary/90 transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simplified CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary to-purple-600 rounded-xl p-6 text-center text-white shadow-xl">
          <h3 className="text-xl font-bold mb-2">🚀 Ready to Start Your Journey?</h3>
          <p className="text-white/90 mb-4">
            Live projects • Placement support • 24/7 learning assistance
          </p>
          <button className="bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300">
            Explore All Benefits
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;