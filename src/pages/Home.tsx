import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <img
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200"
        alt="Profile"
        className="w-48 h-48 rounded-full mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">John Doe</h1>
      <h2 className="text-2xl text-gray-600 mb-6">Full Stack Developer</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Passionate developer with expertise in building modern web applications.
        Focused on creating elegant solutions to complex problems.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com" className="text-gray-600 hover:text-blue-600">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600">
          <Linkedin size={24} />
        </a>
        <a href="mailto:contact@example.com" className="text-gray-600 hover:text-blue-600">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;