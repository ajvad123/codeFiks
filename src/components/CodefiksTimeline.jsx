import React, { useState, useEffect } from 'react';

const CodefiksTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [currentPhase, setCurrentPhase] = useState(0);

  const timelineData = [
    {
      id: 1,
      title: "Foundation",
      description: "Learn the basics of programming step by step. Understand key ideas and various methods to solve problems easily with coding.",
      duration: "(Week 1 - Week 4)",
      position: "left",
      color: "from-purple-400 to-pink-400",
      icon: "🏗️"
    },
    {
      id: 2,
      title: "Onboarding",
      description: "Understand the basics, explore useful tools, and learn the best ways to work in your chosen field.",
      duration: "(Week 5 - Week 8)",
      position: "right",
      color: "from-blue-400 to-cyan-400",
      icon: "🚀"
    },
    {
      id: 3,
      title: "Hands-On Application",
      description: "Create your first project by applying basic concepts to build a functional and practical application or solution.",
      duration: "(Week 9 - Week 12)",
      position: "left",
      color: "from-green-400 to-emerald-400",
      icon: "⚡"
    },
    {
      id: 4,
      title: "Diving Deep",
      description: "Master important data structures, algorithms, and advanced techniques to handle challenging problems effectively.",
      duration: "(Week 13 - Week 16)",
      position: "right",
      color: "from-orange-400 to-red-400",
      icon: "🎯"
    },
    {
      id: 5,
      title: "Creativity & Teamwork",
      description: "Create your second project with your own idea, and work with others on a team project to build solutions together.",
      duration: "(Week 17 - Week 20)",
      position: "left",
      color: "from-indigo-400 to-purple-400",
      icon: "🤝"
    },
    {
      id: 6,
      title: "Takeoff",
      description: "Practice your interview skills, make a strong resume, and learn how to succeed in interviews.",
      duration: "(Week 21 - Week 24)",
      position: "right",
      color: "from-yellow-400 to-orange-400",
      icon: "✨"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.dataset.id);
            setVisibleItems(prev => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = document.querySelectorAll('[data-timeline-item]');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % timelineData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getItemClasses = (item, index) => {
    const baseClasses = "transition-all duration-1000 ease-out transform";
    const isVisible = visibleItems.has(item.id);
    const isCurrent = currentPhase === index;
    
    if (!isVisible) {
      return `${baseClasses} opacity-0 translate-y-8 scale-95`;
    }
    
    return `${baseClasses} opacity-100 translate-y-0 scale-100 ${
      isCurrent ? 'animate-pulse scale-105' : ''
    }`;
  };

  return (

    <section id='codefiks'> 
    <div  className="py-20 bg-background transition-colors duration-300   ">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 transform transition-all duration-1000 ease-out">
          <div className="inline-block animate-bounce mb-4">
            <span className="text-6xl">👨‍💻</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 animate-pulse">
            Life at Codefiks
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
            Codefiks is built on 3 principles: Open Material Education, Self Learning and Peer to peer Learning
          </p>
          
          {/* Progress indicator */}
          <div className="mt-8 flex justify-center space-x-2">
            {timelineData.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentPhase === index 
                    ? 'bg-purple-500 scale-125 shadow-lg' 
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central animated line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-indigo-400 h-full rounded-full overflow-hidden">
            <div className="w-full bg-gradient-to-b from-white to-purple-200 animate-pulse h-8 rounded-full"></div>
          </div>
          
          {/* Mobile Line */}
          <div className="lg:hidden absolute left-6 w-1 bg-gradient-to-b from-purple-400 to-indigo-400 h-full rounded-full"></div>

          {/* Timeline Items */}
          <div className="space-y-8 lg:space-y-16">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                data-timeline-item
                className={getItemClasses(item, index)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className={`flex items-center ${item.position === 'right' ? 'flex-row-reverse' : ''}`}>
                    {/* Content Card */}
                    <div className={`w-5/12 ${item.position === 'right' ? 'text-right' : 'text-left'}`}>
                      <div className={`relative bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 group overflow-hidden`}>
                        {/* Gradient overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}></div>
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="text-3xl animate-spin" style={{animationDuration: '3s'}}>
                              {item.icon}
                            </span>
                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-700 transition-colors duration-300">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {item.description}
                          </p>
                          <span className={`text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.duration}
                          </span>
                        </div>

                        {/* Hover effect particles */}
                        <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                          <div className="absolute bottom-6 left-6 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                          <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Center Circle */}
                    <div className="flex-shrink-0 w-2/12 flex justify-center">
                      <div className={`relative w-16 h-16 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center text-xl font-bold shadow-2xl transform hover:scale-110 transition-all duration-300 group cursor-pointer`}>
                        <span className="relative z-10">{item.id}</span>
                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.color} animate-ping opacity-30`}></div>
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                  <div className="flex items-start">
                    {/* Mobile Circle */}
                    <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} text-white rounded-full flex items-center justify-center text-lg font-bold shadow-xl mr-6 transform hover:scale-110 transition-all duration-300`}>
                      {item.id}
                    </div>

                    {/* Mobile Content */}
                    <div className="flex-1">
                      <div className="relative bg-white/80 backdrop-blur-sm border-2 border-white/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                        
                        <div className="relative z-10">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xl">{item.icon}</span>
                            <h3 className="text-lg font-bold text-gray-800">
                              {item.title}
                            </h3>
                          </div>
                          <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                            {item.description}
                          </p>
                          <span className={`text-xs font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Lines with animation */}
                <div className="hidden lg:block">
                  {item.position === 'left' && (
                    <div className="absolute top-1/2 left-[calc(50%-2rem)] w-8 h-1 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full transform -translate-y-1/2 animate-pulse"></div>
                  )}
                  {item.position === 'right' && (
                    <div className="absolute top-1/2 right-[calc(50%-2rem)] w-8 h-1 bg-gradient-to-l from-purple-400 to-blue-400 rounded-full transform -translate-y-1/2 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 transform hover:scale-105 transition-all duration-300">
          <div className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
            <span className="flex items-center gap-2">
              Start Your Journey
              <span className="group-hover:translate-x-1 transition-transform duration-300">🚀</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CodefiksTimeline;