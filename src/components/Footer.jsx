// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} FSTE Hackathon 2025 Team
              </p>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;