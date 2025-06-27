
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">FC</span>
              </div>
              <h3 className="text-white font-bold text-xl">Football Club</h3>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              A premier football club dedicated to excellence, community engagement, and developing the next generation of football talent.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Matches</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">League Table</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <div className="space-y-3 text-white/70">
              <p>Stadium Address<br />City, Country 12345</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Email: info@footballclub.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Football Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
