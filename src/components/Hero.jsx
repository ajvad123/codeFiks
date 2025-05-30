import React from 'react';
import { ArrowRight, Star, Users, Trophy, Sparkles } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, label: 'Expert Mentors', value: '25+' },
    { icon: Trophy, label: 'Tech Stacks', value: '10+' },
    { icon: Star, label: 'Placement Assistance', value: '100%' },
  ];

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-background via-secondary/20 to-primary/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-left">
            <div className="flex items-center mb-4 animate-bounce-gentle">
              <Sparkles className="h-6 w-6 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">
                Fueling Ambitions Through Code
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Master
              <span className="text-primary  bg-gradient-to-r from-primary to-purple-600 bg-clip-text  "> Modern </span>
              Technologies
            </h1>
            <p className="text-xl text-foreground/70 mt-6 leading-relaxed">
              Join Codefiks, the premier online software training institute.
              Learn MERN, MEAN, Python Django, Flutter and more. Get hands-on experience
              with real-world projects and secure your dream job with our placement support.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#courses" className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center animate-pulse-glow hover-lift group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="#codefiks" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all duration-300 hover-lift">
                Life at Codefiks          
                    </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fade-in-up stagger-animation hover-glow p-4 rounded-lg" style={{ '--stagger': index }}>
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-8 w-8 text-primary animate-bounce-gentle" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Animation */}
          <div className="relative animate-fade-in-right">
            <div className="animate-float">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Coding workspace"
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse animate-bounce-gentle">
              6 Month Program
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse animate-bounce-gentle">
              Real Projects
            </div>
            <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-full text-sm font-semibold animate-pulse">
              100% Placement Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;