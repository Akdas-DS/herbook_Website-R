import { Brain, BookOpen, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/80 to-teal-950/90" />
      
      {/* Floating icons */}
      <div className="absolute top-20 left-20 text-purple-400/60 animate-bounce">
        <Brain size={32} />
      </div>
      <div className="absolute top-32 right-32 text-teal-400/60 animate-pulse">
        <BookOpen size={28} />
      </div>
      <div className="absolute bottom-32 left-32 text-purple-300/50 animate-bounce delay-1000">
        <Heart size={24} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-teal-300/30 animate-pulse delay-500">
        <Brain size={20} />
      </div>
      <div className="absolute bottom-1/4 right-1/4 text-purple-200/40 animate-bounce delay-700">
        <BookOpen size={24} />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-serif text-6xl md:text-7xl mb-6 text-slate-100 leading-tight">
          Raheela N. Shaikh
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 font-light">
          Exploring the Mind, One Thought at a Time
        </p>
        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Psychology Graduate • Content Creator • Author
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover My Journey
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-teal-400/50 text-teal-300 hover:bg-teal-950/50 hover:border-teal-300 px-10 py-4 rounded-full transition-all duration-300"
            onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Book
          </Button>
        </div>
      </div>
    </section>
  );
}