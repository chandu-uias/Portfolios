import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Education</h1>
      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <GraduationCap className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Master of Computer Science</h2>
          </div>
          <h3 className="text-lg text-gray-700 mb-2">Stanford University</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <Calendar size={18} className="mr-2" />
            <span>2020 - 2022</span>
          </div>
          <p className="text-gray-600">
            Specialized in Artificial Intelligence and Machine Learning.
            Completed thesis on Neural Network Architectures.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <GraduationCap className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Bachelor of Computer Science</h2>
          </div>
          <h3 className="text-lg text-gray-700 mb-2">MIT</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <Calendar size={18} className="mr-2" />
            <span>2016 - 2020</span>
          </div>
          <p className="text-gray-600">
            Major in Computer Science with minor in Mathematics.
            Dean's List all semesters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;