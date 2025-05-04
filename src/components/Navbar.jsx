import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'CLD', path: '/cld' },
    { name: 'EPS Analysis', path: '/eps-analysis' },
    { name: 'Data Dashboard', path: '/dashboard' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'About Team', path: '/about' },
  ];

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: 'easeOut' } },
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center w-full fixed top-0 z-50 px-4 pt-4">
      <motion.nav 
        className={`rounded-2xl max-w-5xl w-full backdrop-blur-md border border-indigo-100 transition-all duration-300 ${
          scrolled
            ? 'bg-indigo-50/90 shadow-lg py-2'
            : 'bg-blue-50/80 py-3'
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-14">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
                <motion.span
                  className="font-extrabold text-xl tracking-tight text-indigo-600 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  SAHAJMANN
                </motion.span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:space-x-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? 'bg-indigo-200 text-indigo-700 shadow-sm'
                      : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-100 focus:outline-none transition-colors duration-200"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <motion.div
          className="md:hidden bg-indigo-50/90 backdrop-blur-md rounded-b-2xl overflow-hidden"
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={menuVariants}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-indigo-200 text-indigo-700 shadow-sm'
                    : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </div>
  );
};

export default Navbar;