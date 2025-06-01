import React from 'react';
import CourseDetailTemplate from '../components/CourseDetailTemplate';
import { Layers } from 'lucide-react';

const MeanCourse = () => {
  const course = {
    icon: Layers,
    title: 'MEAN Stack Development',
    subtitle: 'Master MongoDB, Express, Angular, and Node.js',
    rating: 4.7,
    students: '10k+',
    duration: '5 months',
    level: 'Intermediate',
    color: 'from-red-500 to-orange-400',
    description:
      'This MEAN Stack course is designed to take your JavaScript development skills to the next level by teaching you how to build complete, enterprise-level applications using MongoDB, Express.js, Angular, and Node.js. Learn how to create dynamic front-end experiences with Angular, connect them to RESTful APIs built with Node and Express, and store your data efficiently with MongoDB. This hands-on course is ideal for developers who want to build scalable, secure, and maintainable full-stack applications.',
    features: [
      'Develop dynamic Single Page Applications (SPAs) using Angular 16+',
      'Use Angular modules, services, and routing to structure large applications',
      'Build secure RESTful APIs with Node.js and Express.js',
      'Perform CRUD operations using MongoDB and Mongoose',
      'Integrate RxJS for reactive programming and efficient data handling',
      'Implement Angular Forms and client-side validation',
      'Manage state with RxJS Subjects and BehaviorSubjects',
      'Secure your apps with JWT authentication and role-based access',
      'Deploy MEAN applications to cloud platforms like Firebase, Render, or AWS',
      'Use Git and GitHub for version control and team collaboration',
      'Follow best practices for scalable and modular code architecture',
    ],
    instructor: {
      name: 'John Lee',
      experience: '7+ years in Angular and Node.js',
      companies: ['Google', 'Uber'],
    },
  };

  return <CourseDetailTemplate course={course} />;
};

export default MeanCourse;
