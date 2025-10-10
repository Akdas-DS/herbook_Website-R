import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-purple-950/80 to-teal-950/90" />
      
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
