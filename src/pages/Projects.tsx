import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800"
            alt="Project 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">E-Commerce Platform</h2>
            <p className="text-gray-600 mb-4">
              A full-stack e-commerce platform built with React, Node.js, and PostgreSQL.
              Features include user authentication, product management, and payment integration.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                <ExternalLink size={18} className="mr-1" />
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800"
            alt="Project 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Task Management App</h2>
            <p className="text-gray-600 mb-4">
              A collaborative task management application with real-time updates.
              Built using React, Socket.io, and MongoDB.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
                <Github size={18} className="mr-1" />
                Code
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 flex items-center">
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