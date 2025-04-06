import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  GraduationCap,
  Code,
  Briefcase,
  Mail,
  FileText,
  Menu,
  X,
} from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path
      ? 'text-blue-600'
      : 'text-gray-600 hover:text-blue-600';
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const NavLinks = () => (
    <>
      <Link to="/" onClick={handleLinkClick} className={`flex items-center space-x-1 ${isActive('/')}`}>
        <Home size={18} />
        <span>Home</span>
      </Link>
      <Link to="/education" onClick={handleLinkClick} className={`flex items-center space-x-1 ${isActive('/education')}`}>
        <GraduationCap size={18} />
        <span>Education</span>
      </Link>
      <Link to="/skills" onClick={handleLinkClick} className={`flex items-center space-x-1 ${isActive('/skills')}`}>
        <Code size={18} />
        <span>Skills</span>
      </Link>
      <Link to="/projects" onClick={handleLinkClick} className={`flex items-center space-x-1 ${isActive('/projects')}`}>
        <Briefcase size={18} />
        <span>Projects</span>
      </Link>
      <Link to="/experience" onClick={handleLinkClick} className={`flex items-center space-x-1 ${isActive('/experience')}`}>
        <Briefcase size={18} />
        <span>Experience</span>
      </Link>
      <Link to="/contact" onClick={handleLinkClick} className={`flex items-center space-x-1 ${isActive('/contact')}`}>
        <Mail size={18} />
        <span>Contact</span>
      </Link>
      <Link to="/resume" onClick={handleLinkClick} className={`flex items-center space-x-1 ${isActive('/resume')}`}>
        <FileText size={18} />
        <span>Resume</span>
      </Link>
    </>
  );

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">Portfolio</Link>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLinks />
          </div>

          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 space-y-4 flex flex-col">
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
