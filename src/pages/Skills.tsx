import React from 'react';
import { Code, Database, Globe, Palette } from 'lucide-react';

const Skills = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Skills</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Code className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Frontend Development</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>React.js / Next.js</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>HTML5 / CSS3</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Database className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Backend Development</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Node.js</li>
            <li>Python</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Globe className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Tools & Technologies</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Palette className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Design</h2>
          </div>
          <ul className="space-y-2 text-gray-600">
            <li>UI/UX Design</li>
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Responsive Design</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;