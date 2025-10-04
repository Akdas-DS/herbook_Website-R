import { Instagram, Mail, BookOpen, Heart, Brain } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white border-t border-slate-800">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl mb-2 text-slate-100">Raheela N. Shaikh</h3>
              <p className="text-purple-300">
                Exploring the Mind, One Thought at a Time
              </p>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Psychology graduate, content creator, and author dedicated to making 
              mental health and psychological insights accessible to everyone.
            </p>
            <div className="flex items-center gap-2 text-sm text-purple-300">
              <Heart size={16} fill="currentColor" />
              <span>Made with love for mental wellness</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl mb-4 text-slate-200">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-slate-400 hover:text-purple-300 transition-colors">
                About Me
              </a>
              <a href="#instagram" className="block text-slate-400 hover:text-purple-300 transition-colors">
                Instagram Content
              </a>
              <a href="#book" className="block text-slate-400 hover:text-purple-300 transition-colors">
                My Book
              </a>
              <a href="#blog" className="block text-slate-400 hover:text-purple-300 transition-colors">
                Blog Articles
              </a>
              <a href="#contact" className="block text-slate-400 hover:text-purple-300 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Connect Section */}
          <div className="space-y-6">
            <h4 className="text-xl mb-4 text-slate-200">Connect With Me</h4>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/that_orphicpsychgrad?igsh=MWZ4bG5oM3gybHpobw=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-900/50 hover:border-purple-400 transition-all duration-300"
                >
                  <Instagram className="mr-2" size={18} />
                  @that_orphicpsychgrad
                </Button>
              </a>
              <a href="mailto:raheelashaikh0610@gmail.com">
                <Button 
                  variant="outline" 
                  className="w-full border-teal-500/50 text-teal-300 hover:bg-teal-900/50 hover:border-teal-400 transition-all duration-300"
                >
                  <Mail className="mr-2" size={18} />
                  raheelashaikh0610@gmail.com
                </Button>
              </a>
              <Button 
                variant="outline" 
                className="w-full border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 transition-all duration-300"
                onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <BookOpen className="mr-2" size={18} />
                Buy My Book
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-12 pt-8 border-t border-slate-800">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-4 bg-slate-950 px-6">
              <Brain className="text-purple-400" size={20} />
              <div className="w-12 h-px bg-gradient-to-r from-purple-400 to-teal-400"></div>
              <Heart className="text-teal-400" size={20} />
              <div className="w-12 h-px bg-gradient-to-r from-teal-400 to-purple-400"></div>
              <BookOpen className="text-purple-400" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 Raheela N. Shaikh. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-purple-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-300 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}