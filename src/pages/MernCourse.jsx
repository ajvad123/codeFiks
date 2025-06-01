import React from 'react';
import CourseDetailTemplate from '../components/CourseDetailTemplate';
import { Code } from 'lucide-react';

const MernCourse = () => {
  const course = {
    icon: Code,
    title: 'MERN Stack Development',
    subtitle: 'Build modern web apps with MongoDB, Express, React, and Node.js',
    rating: 4.8,
    students: '15k+',
    duration: '6 months',
    level: 'Beginner to Advanced',
    color: 'from-green-400 to-blue-500',
    description:
      'This comprehensive MERN Stack course guides you through building powerful and scalable full-stack applications using MongoDB, Express, React, and Node.js. Whether you are just starting out or looking to sharpen your skills, this course offers step-by-step guidance and hands-on projects to make you industry-ready. You’ll learn front-end and back-end development, database integration, authentication, and deployment techniques that are essential for modern web development.',
    features: [
      'Build RESTful APIs using Node.js and Express.js',
      'Work with MongoDB for NoSQL database design and queries',
      'Develop dynamic front-end interfaces using React and Hooks',
      'Style applications using Tailwind CSS',
      'Implement JWT-based authentication and role-based access control',
      'Use Redux Toolkit for efficient state management',
      'Integrate file uploads and third-party APIs',
      'Deploy full-stack applications using platforms like Vercel and Render',
      'Version control with Git and GitHub',
      'Write clean, maintainable, and modular code',
    ],
    instructor: {
      name: 'Mohammad Ajvad',
      experience: ' Full-stack web developer',
      companies: ['ZenoxSoftwares', 'Haris&CO'],
    },
  };

  return <CourseDetailTemplate course={course} />;
};

export default MernCourse;
