import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, GraduationCap, Code, Briefcase, Mail, FileText } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">Portfolio</Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`flex items-center space-x-1 ${isActive('/')}`}>
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/education" className={`flex items-center space-x-1 ${isActive('/education')}`}>
              <GraduationCap size={18} />
              <span>Education</span>
            </Link>
            <Link to="/skills" className={`flex items-center space-x-1 ${isActive('/skills')}`}>
              <Code size={18} />
              <span>Skills</span>
            </Link>
            <Link to="/projects" className={`flex items-center space-x-1 ${isActive('/projects')}`}>
              <Briefcase size={18} />
              <span>Projects</span>
            </Link>
            <Link to="/contact" className={`flex items-center space-x-1 ${isActive('/contact')}`}>
              <Mail size={18} />
              <span>Contact</span>
            </Link>
            <Link to="/resume" className={`flex items-center space-x-1 ${isActive('/resume')}`}>
              <FileText size={18} />
              <span>Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;