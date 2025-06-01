import React from 'react';
import CourseDetailTemplate from '../components/CourseDetailTemplate';
import { Server } from 'lucide-react';

const DjangoCourse = () => {
  const course = {
    icon: Server,
    title: 'Django Web Development',
    subtitle: 'Backend development with Python and Django framework',
    rating: 4.6,
    students: '12k+',
    duration: '6 months',
    level: 'Beginner to Intermediate',
    color: 'from-purple-600 to-indigo-500',
    description:
      'This Django Web Development course takes you through everything you need to build secure, scalable, and maintainable backend applications using Python and the Django framework. From setting up a virtual environment to deploying your applications on a live server, this course emphasizes real-world projects and best practices. Ideal for beginners with basic Python knowledge or developers transitioning to backend development.',
    features: [
      'Set up Django projects with virtual environments and best practices',
      'Build full-stack web applications using Django and PostgreSQL',
      'Master Django ORM to interact with databases efficiently',
      'Create RESTful APIs using Django REST Framework (DRF)',
      'Implement user authentication, registration, and permission control',
      'Work with Django admin for content management and model configuration',
      'Use class-based and function-based views appropriately',
      'Integrate frontend templates with Django’s templating engine',
      'Handle media files, file uploads, and custom forms',
      'Deploy Django apps to platforms like Heroku, Vercel, or DigitalOcean',
      'Write unit tests and follow clean architecture principles',
    ],
    instructor: {
      name: 'Emily Carter',
      experience: '6+ years in Python backend development',
      companies: ['Spotify', 'Reddit'],
    },
  };

  return <CourseDetailTemplate course={course} />;
};

export default DjangoCourse;
