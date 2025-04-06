import React from 'react';

const experiences = [
  {
    title: 'Next.js/React Developer',
    company: 'Krelbuzz Technologies',
    duration: "Jun '24 — Jul '24",
    location: 'Remote',
    description:
      'Developed a GST-focused web application using React.js, ensuring responsive design and seamless API integration. Used Git for version control, collaborated in a team environment, and debugged and optimized performance issues to enhance user experience.',
    role: 'Frontend Developer',
  },
  {
    title: 'Full Stack Developer',
    company: 'Techplement',
    duration: "May '24 — Jun '24",
    location: 'Remote',
    description:
      'Led a team to develop a full-stack application, working on both frontend (HTML, CSS, JavaScript, React.js) and backend (Node.js, Express.js). Improved application interface and optimized server-side performance to enhance responsiveness.',
    role: 'Frontend Developer & Team Lead',
  },
];

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-10 text-center">Experience</h1>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold text-gray-800">{exp.title}</h2>
              <span className="text-sm text-blue-600 font-medium">{exp.duration}</span>
            </div>
            <p className="text-gray-600 font-medium mb-1">
              {exp.company} • {exp.location}
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">{exp.description}</p>
            <p className="mt-3 text-sm font-semibold text-gray-500">Role: {exp.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
