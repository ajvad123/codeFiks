import React from 'react';
import CourseDetailTemplate from '../components/CourseDetailTemplate';
import { Terminal } from 'lucide-react';

const GolangCourse = () => {
  const course = {
    icon: Terminal,
    title: 'Go (Golang) Programming',
    subtitle: 'High-performance backend systems with Go',
    rating: 4.7,
    students: '9k+',
    duration: '4 months',
    level: 'Intermediate to Advanced',
    color: 'from-yellow-500 to-amber-400',
    description:
      'This Go (Golang) course is designed for developers aiming to build efficient, scalable, and high-concurrency backend systems. Go is widely used at companies like Google, Uber, and Dropbox due to its simplicity, performance, and built-in support for concurrency. In this course, you’ll master core Go syntax, explore idiomatic programming practices, and build real-world backend applications from scratch. Ideal for those with prior experience in programming or backend development.',
    features: [
      'Understand Go’s syntax, types, and control structures',
      'Master Goroutines, channels, and the concurrency model',
      'Build robust HTTP servers using the `net/http` package',
      'Create RESTful APIs and middleware in Go',
      'Work with Go modules, packages, and dependency management',
      'Handle JSON, request parsing, and error handling cleanly',
      'Design and connect to relational and NoSQL databases (PostgreSQL, MongoDB)',
      'Write effective unit tests and run performance benchmarks',
      'Understand Go interfaces and composition for scalable design',
      'Deploy Go applications with Docker and CI/CD pipelines',
      'Follow idiomatic Go practices and project structure',
    ],
    instructor: {
      name: 'Alex Turner',
      experience: '10+ years in backend systems',
      companies: ['Amazon', 'Cloudflare'],
    },
  };

  return <CourseDetailTemplate course={course} />;
};

export default GolangCourse;
