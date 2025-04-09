import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1744181778/Screenshot_71_j7he99.png"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">NovaCapture – Online Photography Booking Platform</h2>
            <p className="text-gray-600 mb-4">
            NovaCapture is an all-in-one platform designed to bridge the gap between clients and photographers, 
            making the process of discovering, booking, and managing photography services seamless and efficient.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/chandu-uias/Nova.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="https://nova-j9db.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743916645/Screenshot_55_bjpohg.png"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Doctor Search & Appointment Booking System</h2>
            <p className="text-gray-600 mb-4">
            This project is a MERN Stack application that allows patients to search for doctors and book appointments.
             Doctors can manage their appointments. The system includes authentication, search functionality, booking management, and notifications.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/chandu-uias/DoctorAppointment.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="https://doctor-appointment-z2xh.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743916962/Screenshot_56_kzetbl.png"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">StudyNotion – Build, Learn, and Grow with a Modern Ed-Tech Platform</h2>
            <p className="text-gray-600 mb-4">
            StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.
            The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/chandu-uias/Study-Notion-EdTech.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                 Code
              </a>
              <a href="https://study-notion-full-stack.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743917609/Screenshot_57_wh4ixb.png"
            alt="Project 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Blog Application</h2>
            <p className="text-gray-600 mb-4">This is a full-stack Blog Application that allows users to create, view, and manage blog posts. 
              The application includes user authentication, blog creation, public blog listing with pagination, and blog management features.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/chandu-uias/omnify_task.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="https://omnify-task-pnin.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
               Live Demo
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743927847/Screenshot_58_ntjn8n.png"
            alt="Project 4"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Sass Platform</h2>
            <p className="text-gray-600 mb-4">
            This is a SaaS Plan Management System built enabling users to browse, purchase, and manage SaaS plans using Stripe payment gateway.
             The platform allows Super Admins to manage plans, Organizations (Admins) to create and manage users, and Users to access the services based on their subscribed plan.

            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/chandu-uias/Tensor_sass.git" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                 Code
              </a>
              <a href="https://tensor-sass.vercel.app/" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
               Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
