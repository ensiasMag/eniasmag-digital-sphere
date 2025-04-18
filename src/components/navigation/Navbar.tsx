
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { 
      label: "Magazine", 
      path: "/magazine",
      dropdown: [
        { label: "Current Edition", path: "/magazine/current" },
        { label: "Archives", path: "/magazine/archives" },
      ]
    },
    { 
      label: "Articles", 
      path: "/articles",
      dropdown: [
        { label: "Technology", path: "/articles/technology" },
        { label: "Culture", path: "/articles/culture" },
        { label: "Academic", path: "/articles/academic" },
      ]
    },
    { label: "Blog", path: "/blog" },
    { label: "Events & News", path: "/events" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/2dc2c65c-ae60-4fb3-8b50-e27f89eb0057.png" 
              alt="ENIASMAG Logo" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.dropdown ? (
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      className="flex items-center space-x-1 text-foreground hover:text-ensiasRed-700 font-medium"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className={`absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ${activeDropdown === item.label ? 'block' : 'hidden'}`}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-ensiasRed-50 hover:text-ensiasRed-700"
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-foreground hover:text-ensiasRed-700 font-medium"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Submit Content Button */}
          <Link
            to="/submit"
            className="hidden md:block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Submit Content
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-ensiasRed-700"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto px-4 py-2 space-y-2">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full py-2 text-foreground hover:text-ensiasRed-700 font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <div className={`pl-4 space-y-1 ${activeDropdown === item.label ? 'block' : 'hidden'}`}>
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.label}
                        to={dropdownItem.path}
                        className="block py-2 text-sm text-foreground hover:text-ensiasRed-700"
                        onClick={toggleMenu}
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className="block py-2 text-foreground hover:text-ensiasRed-700 font-medium"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to="/submit"
            className="block bg-ensiasRed-700 hover:bg-ensiasRed-800 text-white font-medium py-2 px-4 rounded-md transition-colors text-center"
            onClick={toggleMenu}
          >
            Submit Content
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

