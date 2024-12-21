import { Link } from 'react-router-dom';
import { Home, Info, Mail, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="p-4">
      <nav className="flex justify-between items-center px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="public/Pink_Y2k_Flower_Cute_Streetwear_Logo-removebg-preview.png" alt="Flower World Logo" className="w-8 h-8" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="flex items-center gap-2 hover:underline" aria-label="Home">
              <Home size={50} /> Home
            </Link>
          </li>
          <li>
            <Link to="/flowers" className="flex items-center gap-2 hover:underline" aria-label="Flowers">
              <Info size={50} /> Flowers
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 hover:underline" aria-label="About">
              <Info size={50} /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-2 hover:underline" aria-label="Contact">
              <Mail size={50} /> Contact
            </Link>
          </li>
        </ul>

        {/* User Icon */}
      </nav>
    </header>
  );
}
