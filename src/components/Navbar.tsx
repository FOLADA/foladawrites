import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { effectiveTheme } = useTheme();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="font-elegant text-2xl md:text-3xl font-semibold 
                       bg-gradient-to-r from-foreground via-muted-foreground to-primary 
                       bg-clip-text text-transparent 
                       hover:from-primary hover:via-foreground hover:to-muted-foreground 
                       transition-all duration-500 cursor-pointer"
          >
            FoladaWrites
          </Link>

          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <nav className="hidden sm:flex items-center gap-6">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/about') ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                About
              </Link>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
