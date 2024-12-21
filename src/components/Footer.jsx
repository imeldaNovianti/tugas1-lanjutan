import { Facebook, Twitter, Instagram, Github } from 'lucide-react'; // Perbaiki nama ikon

export default function Footer() {
  return (
    <footer className="p-6 text-center">
      {/* Teks Footer */}
      <p className="text-2xl font-bold text-black mb-2">
        &copy; 2024 Flower World. All rights reserved.
      </p>
      <p className="text-lg text-black mb-4">
        Made with ❤️ by Imelda Novianty
      </p>

      {/* Ikon Media Sosial */}
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook size={50} className="text-black hover:text-blue-500" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter size={50} className="text-black hover:text-blue-400" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram size={50} className="text-black hover:text-pink-500" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github size={50} className="text-black hover:text-gray-700" /> {/* Perbaiki nama ikon */}
        </a>
      </div>

      {/* Tautan Footer Lainnya */}
      <div className="flex justify-center gap-6">
        <a href="/privacy-policy" className="text-black hover:underline">Privacy Policy</a>
        <a href="/terms" className="text-black hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
}
