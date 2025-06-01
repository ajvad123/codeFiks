// CourseDetailTemplate.jsx
import React from 'react';
import {
  Clock, BookOpen, CheckCircle, Star, User
} from 'lucide-react';

const CourseDetailTemplate = ({ course }) => {
  const Icon = course.icon;

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
            {/* Instructor */}
            <section className="bg-card rounded-xl p-6 shadow-md border border-border hover-glow transition-all duration-300 animate-fade-in-right">
              <h3 className="text-2xl font-bold text-foreground mb-5 flex items-center gap-2">
                <User className="h-6 w-6 text-primary" />
                Your Instructor
              </h3>
              <div className="text-center">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center text-white font-extrabold text-3xl mb-4 animate-scale-pulse`}
                  title={course.instructor.name}
                >
                  {course.instructor.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <h4 className="text-xl font-semibold text-foreground">{course.instructor.name}</h4>
                <p className="text-muted-foreground mt-1 mb-4">{course.instructor.experience}</p>
                <p className="text-sm text-muted-foreground">
                  <strong>Previously worked at:</strong> {course.instructor.companies.join(', ')}
                </p>
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
    </div>
  );
};

export default CourseDetailTemplate;
