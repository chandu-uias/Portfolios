import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <img
        src="https://res.cloudinary.com/dkf7alzki/image/upload/v1743915575/1722431861375_dqcchg.jpg"
        className="w-48 h-48 rounded-full mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Chandrashekar Dodali</h1>
      <h2 className="text-2xl text-gray-600 mb-6">Full Stack Developer</h2>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Passionate developer with expertise in building modern web applications.
        Focused on creating elegant solutions to complex problems.
      </p>
      <div className="flex space-x-6">
        <a href="https://github.com/chandu-uias" className="text-gray-600 hover:text-blue-600">
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/chanduuias/" className="text-gray-600 hover:text-blue-600">
          <Linkedin size={24} />
        </a>
        <a href="chandrashekaruias@gmail.com" className="text-gray-600 hover:text-blue-600">
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;