import React from 'react';
import CourseDetailTemplate from '../components/CourseDetailTemplate';
import { Smartphone } from 'lucide-react';

const FlutterCourse = () => {
  const course = {
    icon: Smartphone,
    title: 'Flutter Mobile App Development',
    subtitle: 'Create cross-platform apps using Flutter and Dart',
    rating: 4.9,
    students: '18k+',
    duration: '5 months',
    level: 'All Levels',
    color: 'from-cyan-500 to-teal-400',
    description:
      'This comprehensive Flutter course empowers you to build beautiful, high-performance mobile apps for both Android and iOS using a single codebase. Flutter, backed by Google, is one of the fastest-growing UI frameworks in the world. You’ll learn Dart programming, Flutter’s widget system, and state management techniques while building real-world applications. From prototyping to publishing your app on app stores, this course guides you through every step.',
    features: [
      'Learn Dart fundamentals and asynchronous programming with `async/await`',
      'Design responsive UIs using Flutter’s widget-based architecture',
      'Implement state management with Provider, Riverpod, and setState',
      'Navigate between screens with Flutter’s routing system',
      'Use animations and custom widgets for engaging user experiences',
      'Access device features like camera, location, and storage',
      'Work with RESTful APIs and JSON data in real-time apps',
      'Integrate Firebase for authentication, Firestore, and push notifications',
      'Build and test Flutter apps using unit, widget, and integration tests',
      'Optimize performance and handle platform-specific code',
      'Publish apps to Google Play Store and Apple App Store',
    ],
    instructor: {
      name: 'Daniel Kim',
      experience: '5+ years in mobile app development',
      companies: ['ByteDance', 'DeliveryHero'],
    },
  };

  return <CourseDetailTemplate course={course} />;
};

export default FlutterCourse;
