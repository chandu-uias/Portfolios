import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Resume</h1>
        <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 flex items-center">
          <Download size={18} className="mr-2" />
          Download PDF
        </button>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Briefcase className="mr-2 text-blue-600" />
            Work Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Senior Software Engineer</h3>
              <p className="text-gray-600">Google • 2020 - Present</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Led development of key features for Google Cloud Platform</li>
                <li>Managed a team of 5 engineers</li>
                <li>Improved system performance by 40%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">Microsoft • 2018 - 2020</p>
              <ul className="list-disc list-inside mt-2 text-gray-600">
                <li>Developed features for Microsoft Azure</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Implemented CI/CD pipelines</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <GraduationCap className="mr-2 text-blue-600" />
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Master of Computer Science</h3>
              <p className="text-gray-600">Stanford University • 2020 - 2022</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Bachelor of Computer Science</h3>
              <p className="text-gray-600">MIT • 2016 - 2020</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
            <Award className="mr-2 text-blue-600" />
            Certifications
          </h2>
          <div className="space-y-2 text-gray-600">
            <p>• AWS Certified Solutions Architect</p>
            <p>• Google Cloud Professional Developer</p>
            <p>• Microsoft Certified: Azure Developer Associate</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;