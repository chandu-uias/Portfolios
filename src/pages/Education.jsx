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
            <h2 className="text-xl font-semibold text-gray-800">Bachelor of Technology in  Computer Science and Engineering </h2>
          </div>
          <h3 className="text-lg text-gray-700 mb-2">Rajiv Gandhi University of Knowledge Technologies ,Basar</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <Calendar size={18} className="mr-2" />
            <span>2021 - 2025</span>
            
          </div>
          <div className="flex items-center text-gray-600 mb-4">
             <GraduationCap size={18} className="mr-2" />
               <span>CGPA: 8.4</span>
          </div>
          <p className="text-gray-600">

   Major Courses: Data Structures, Algorithms, Operating Systems, DBMS, SQL, Computer Networks, Web Development
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <GraduationCap className="text-blue-600 mr-2" size={24} />
            <h2 className="text-xl font-semibold text-gray-800">Pre University Course </h2>
          </div>
          <h3 className="text-lg text-gray-700 mb-2">Rajiv Gandhi University of Knowledge Technologies , Basar</h3>
          <div className="flex items-center text-gray-600 mb-4">
            <Calendar size={18} className="mr-2" />
            <span>2019 - 2021</span>
          </div>
          <div className="flex items-center text-gray-600 mb-4">
             <GraduationCap size={18} className="mr-2" />
               <span>CGPA: 9.0</span>
          </div>
          <p className="text-gray-600">
            Major in  Mathematics , Physics and Chemistry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;