import React, { useState } from 'react';
import { 
  Clock, Users, BookOpen, Code, Database, Smartphone, Globe, Server,
  CheckCircle, Star, ArrowLeft, User
} from 'lucide-react';

const CourseDetailPage = () => {
  const [selectedCourse, setSelectedCourse] = useState('mern');

  const courses = {
    mern: {
      id: 'mern',
      title: 'MERN Stack Development',
      subtitle: 'Master Full-Stack Web Development',
      icon: Globe,
      color: 'from-green-400 to-green-600',
      rating: 4.8,
      students: 1200,
      duration: '6 Months',
      level: 'Beginner to Advanced',
      description: 'Master the complete MERN stack and build modern, scalable web applications from scratch. This comprehensive course covers MongoDB, Express.js, React, and Node.js with real-world projects. You\'ll learn to create dynamic, interactive web applications using industry-standard tools and best practices.',
      features: [
        'MongoDB Database Design & Management',
        'Express.js Backend Development',
        'React Frontend with Hooks & Context',
        'Node.js Server-side Programming',
        'RESTful API Development',
        'Authentication & Authorization',
        'State Management with Redux',
        'Real-time Applications with Socket.io'
      ],
      instructor: {
        name: 'John Smith',
        experience: '8+ Years',
        companies: ['Google', 'Meta', 'Netflix']
      }
    },
    mean: {
      id: 'mean',
      title: 'MEAN Stack Development',
      subtitle: 'Enterprise-Level Application Development',
      icon: Code,
      color: 'from-red-400 to-red-600',
      rating: 4.7,
      students: 890,
      duration: '6 Months',
      level: 'Intermediate',
      description: 'Build enterprise-grade applications using MongoDB, Express.js, Angular, and Node.js. Learn TypeScript, advanced architectural patterns, and scalable development practices. This course focuses on building robust, maintainable applications that can handle enterprise-level requirements and complex business logic.',
      features: [
        'Angular Framework & TypeScript',
        'Component-based Architecture',
        'Enterprise Design Patterns',
        'Advanced MongoDB Operations',
        'Microservices Architecture',
        'Testing & Quality Assurance',
        'DevOps & Deployment',
        'Performance Optimization'
      ],
      instructor: {
        name: 'Sarah Johnson',
        experience: '10+ Years',
        companies: ['Microsoft', 'Amazon', 'IBM']
      }
    },
    django: {
      id: 'django',
      title: 'Python Django Development',
      subtitle: 'Robust Web Applications with Python',
      icon: Database,
      color: 'from-blue-400 to-blue-600',
      rating: 4.9,
      students: 1500,
      duration: '6 Months',
      level: 'Beginner Friendly',
      description: 'Learn to build powerful, scalable web applications using Python and Django. Master the art of rapid development with clean, pragmatic design principles. Django\'s "batteries-included" philosophy means you\'ll learn to build feature-rich applications quickly while maintaining code quality and security best practices.',
      features: [
        'Python Programming Fundamentals',
        'Django Framework Mastery',
        'Model-View-Template Architecture',
        'Django REST Framework',
        'Database Design & ORM',
        'User Authentication & Authorization',
        'Testing & Debugging',
        'Deployment & Scaling'
      ],
      instructor: {
        name: 'Michael Chen',
        experience: '12+ Years',
        companies: ['Instagram', 'Dropbox', 'Pinterest']
      }
    },
    flutter: {
      id: 'flutter',
      title: 'Flutter Mobile Development',
      subtitle: 'Cross-Platform Mobile Apps',
      icon: Smartphone,
      color: 'from-purple-400 to-purple-600',
      rating: 4.8,
      students: 950,
      duration: '6 Months',
      level: 'Mobile Development',
      description: 'Create beautiful, natively compiled applications for mobile from a single codebase using Google\'s Flutter framework and Dart programming language. Learn to build high-performance mobile apps that look and feel native on both iOS and Android platforms, with smooth animations and responsive user interfaces.',
      features: [
        'Dart Programming Language',
        'Flutter Widget System',
        'State Management Solutions',
        'Native Device Features',
        'App Store Publishing',
        'Firebase Integration',
        'Performance Optimization',
        'Cross-Platform Development'
      ],
      instructor: {
        name: 'Emily Rodriguez',
        experience: '7+ Years',
        companies: ['Google', 'Uber', 'Spotify']
      }
    },
    golang: {
      id: 'golang',
      title: 'Go Language Development',
      subtitle: 'High-Performance Backend Systems',
      icon: Server,
      color: 'from-cyan-400 to-cyan-600',
      rating: 4.9,
      students: 720,
      duration: '6 Months',
      level: 'Backend Development',
      description: 'Master Go programming language for building efficient, concurrent, and scalable backend systems. Learn modern practices for microservices and cloud-native development. Go\'s simplicity and powerful concurrency features make it perfect for building high-performance systems that can handle thousands of concurrent operations.',
      features: [
        'Go Programming Fundamentals',
        'Concurrent Programming with Goroutines',
        'Microservices Architecture',
        'RESTful API Development',
        'Database Integration',
        'Testing & Benchmarking',
        'Docker & Kubernetes',
        'Cloud Deployment'
      ],
      instructor: {
        name: 'David Park',
        experience: '9+ Years',
        companies: ['Google', 'Docker', 'Kubernetes']
      }
    }
  };

  const currentCourse = courses[selectedCourse];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <button className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Courses
            </button>
            <div className="flex space-x-2">
              {Object.keys(courses).map((courseKey) => (
                <button
                  key={courseKey}
                  onClick={() => setSelectedCourse(courseKey)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCourse === courseKey
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {courses[courseKey].title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${currentCourse.color} text-white py-16`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <currentCourse.icon className="h-16 w-16 mr-4" />
              <div>
                <h1 className="text-4xl font-bold mb-2">{currentCourse.title}</h1>
                <p className="text-xl text-white/90">{currentCourse.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{currentCourse.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-1" />
                <span>{currentCourse.students} students</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-1" />
                <span>{currentCourse.duration}</span>
              </div>
              <div className="bg-white/20 px-3 py-1 rounded-full">
                <span className="text-sm font-medium">{currentCourse.level}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Course Description */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Description */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Course</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{currentCourse.description}</p>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="h-6 w-6 mr-3 text-blue-600" />
                What You'll Learn
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {currentCourse.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Instructor Info */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-blue-600" />
                Your Instructor
              </h3>
              <div className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${currentCourse.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}>
                  {currentCourse.instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 className="font-semibold text-gray-900 text-lg">{currentCourse.instructor.name}</h4>
                <p className="text-gray-600 mb-3">{currentCourse.instructor.experience}</p>
                <div className="text-sm text-gray-500">
                  <strong>Previously worked at:</strong><br />
                  {currentCourse.instructor.companies.join(', ')}
                </div>
              </div>
            </div>

            {/* Course Stats */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Course Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold text-gray-900">{currentCourse.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-semibold text-gray-900">{currentCourse.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-semibold text-gray-900">{currentCourse.students}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-semibold text-gray-900">{currentCourse.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;