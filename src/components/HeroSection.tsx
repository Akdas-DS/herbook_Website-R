import { Brain, BookOpen, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/80 to-teal-950/90" />
      
      {/* Floating psychology icons with custom animations */}
      <div className="absolute top-20 left-20 text-purple-400/60 animate-mindFlow">
        <Brain size={32} />
      </div>
      <div className="absolute top-32 right-32 text-teal-400/60 animate-floatingThought">
        <BookOpen size={28} />
      </div>
      <div className="absolute bottom-32 left-32 text-purple-300/50 animate-neuralPulse">
        <Heart size={24} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-teal-300/30 animate-thoughtRipple">
        <Brain size={20} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-purple-200/40 animate-mindFlow delay-1000">
        <BookOpen size={24} />
      </div>
      <div className="absolute top-1/3 right-1/3 text-teal-200/25 animate-neuralPulse delay-500">
        <Heart size={18} />
      </div>
      
      {/* Main content with entrance animations */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-6xl md:text-7xl mb-6 text-slate-100 leading-tight animate-fadeInUp" style={{ textShadow: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(20, 184, 166, 0.3)' }}>
          Raheela N. Shaikh
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light animate-fadeInUp delay-300 animate-textGlitch">
          Exploring the Mind, One Thought at a Time
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-500">
          Psychology Graduate • Content Creator • Author
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp delay-700">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/50 to-purple-700/50 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-liquidMorph"></div>
            <Button 
              size="lg" 
              className="relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 animate-morphingButton magnetic-hover glass-morphism"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="neon-glow">Discover My Journey</span>
            </Button>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/50 to-teal-700/50 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-liquidMorph" style={{ animationDelay: '2s' }}></div>
            <Button 
              variant="outline" 
              size="lg"
              className="relative border-2 border-teal-400/50 text-teal-300 hover:bg-teal-950/50 hover:border-teal-300 px-10 py-4 rounded-full transition-all duration-300 animate-quantumShift magnetic-hover glass-morphism"
              onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="neon-glow">View My Book</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}