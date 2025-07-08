import React from 'react';
import { Helmet } from 'react-helmet-async';

const courses = [
  { title: 'React for Beginners', desc: 'Learn React from scratch and build real-world apps.', img: 'https://dummyimage.com/200x120/6366f1/fff&text=React', duration: '4 weeks', outcome: 'Build and deploy your first React app', who: 'Anyone new to frontend' },
  { title: 'Node.js Mastery', desc: 'Master backend development with Node.js and Express.', img: 'https://dummyimage.com/200x120/818cf8/fff&text=Node', duration: '6 weeks', outcome: 'Create robust REST APIs', who: 'Developers with JS basics' },
  { title: 'Cloud Fundamentals', desc: 'Understand cloud computing and deploy scalable apps.', img: 'https://dummyimage.com/200x120/4f46e5/fff&text=Cloud', duration: '3 weeks', outcome: 'Deploy apps to AWS/Azure', who: 'Anyone interested in cloud' },
];

export default function Courses() {
  return (
    <>
      <Helmet>
        <title>Courses | Netcurion Technology</title>
        <meta name="description" content="Explore our professional courses and enroll today." />
      </Helmet>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-indigo-700 mb-4">Courses</h1>
          <p className="text-lg text-gray-700 mb-8">
            Upskill with our professional courses designed for the modern workforce. Learn from industry experts and get hands-on experience.
          </p>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Why Learn With Us?</h2>
            <ul className="list-disc pl-8 text-gray-700 text-left space-y-1 inline-block">
              <li>Expert instructors with real-world experience</li>
              <li>Project-based, practical learning</li>
              <li>Flexible schedules and online access</li>
              <li>Certification upon completion</li>
              <li>Career support and job referrals</li>
            </ul>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-indigo-50 rounded-lg shadow p-4 flex flex-col items-center text-center">
                <img src={course.img} alt={course.title} className="h-24 w-full object-cover rounded mb-2" />
                <h3 className="text-lg font-semibold text-indigo-800">{course.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{course.desc}</p>
                <p className="text-gray-500 text-xs mt-1">Duration: {course.duration}</p>
                <p className="text-gray-500 text-xs">Outcome: {course.outcome}</p>
                <p className="text-gray-500 text-xs">Who: {course.who}</p>
                <a href="#" className="mt-2 text-indigo-600 hover:underline text-sm">Enroll</a>
              </div>
            ))}
          </div>
          <div className="bg-indigo-100 rounded-lg shadow p-8 mt-8 max-w-xl mx-auto">
            <h2 className="text-xl font-bold text-indigo-700 mb-2">Student Testimonial</h2>
            <p className="text-gray-700 italic mb-2">“The React course was hands-on and practical. I landed my first frontend job within a month of finishing!”</p>
            <span className="font-semibold text-indigo-800">Emily Chen, Frontend Developer</span>
          </div>
        </div>
      </section>
    </>
  );
} 