import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon, PawPrint, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-orange-50 dark:bg-gray-900 border-b border-orange-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-bold text-xl"
        >
          <PawPrint size={26} />
          <span>adOWptme</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors ${
                isActive(link.to)
                  ? "text-orange-600 dark:text-orange-400 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            className="ml-2 p-2 rounded-full bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-yellow-300 hover:bg-orange-200 dark:hover:bg-gray-600 transition"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <Link
            to="/login"
            className="text-sm bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-orange-100 dark:bg-gray-700 text-orange-600 dark:text-yellow-300 transition"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gray-600 dark:text-gray-300"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-orange-50 dark:bg-gray-900 border-t border-orange-200 dark:border-gray-700 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                isActive(link.to)
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm bg-orange-500 text-white px-4 py-2 rounded-full font-medium text-center"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}