import { Brain, Heart, BookOpen, Lightbulb, Zap } from "lucide-react";

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating psychology elements with enhanced animations */}
      <div className="absolute top-1/4 left-1/12 text-purple-400/15 animate-floatingThought">
        <Brain size={24} />
      </div>
      <div className="absolute top-1/3 right-1/6 text-teal-400/15 animate-quantumShift">
        <Heart size={20} />
      </div>
      <div className="absolute bottom-1/4 left-1/6 text-purple-300/15 animate-liquidMorph">
        <BookOpen size={22} />
      </div>
      <div className="absolute top-2/3 right-1/12 text-teal-300/15 animate-prismaticShift">
        <Lightbulb size={18} />
      </div>
      <div className="absolute bottom-1/3 right-1/4 text-purple-200/15 animate-zoomPulse">
        <Zap size={16} />
      </div>
      <div className="absolute top-1/2 left-1/8 text-teal-200/15 animate-morphingButton">
        <Brain size={14} />
      </div>
      
      {/* Enhanced floating orbs with liquid morphing */}
      <div className="absolute top-1/5 right-1/3 w-3 h-3 bg-purple-400/30 animate-liquidMorph"></div>
      <div className="absolute bottom-1/5 left-1/4 w-4 h-4 bg-teal-400/25 animate-quantumShift"></div>
      <div className="absolute top-3/4 right-1/5 w-2 h-2 bg-purple-300/35 animate-particleFloat"></div>
      <div className="absolute bottom-2/3 left-1/3 w-3 h-3 bg-teal-300/30 animate-zoomPulse"></div>
      
      {/* Quantum dots */}
      <div className="absolute top-1/6 left-1/2 w-1 h-1 bg-purple-500/40 rounded-full animate-particleFloat"></div>
      <div className="absolute bottom-1/6 right-1/2 w-1 h-1 bg-teal-500/40 rounded-full animate-particleFloat delay-1000"></div>
      <div className="absolute top-1/2 right-1/6 w-2 h-2 bg-purple-400/35 rounded-full animate-neuralPulse"></div>
      <div className="absolute bottom-1/2 left-1/5 w-1 h-1 bg-teal-400/35 rounded-full animate-thoughtRipple"></div>
      
      {/* Prismatic lines */}
      <div className="absolute top-1/3 left-1/4 w-20 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-prismaticShift"></div>
      <div className="absolute bottom-1/3 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-teal-400/20 to-transparent animate-prismaticShift delay-2000"></div>
      
      {/* Morphing shapes */}
      <div className="absolute top-1/8 right-1/8 w-6 h-6 bg-gradient-to-br from-purple-500/10 to-teal-500/10 animate-liquidMorph delay-1500"></div>
      <div className="absolute bottom-1/8 left-1/7 w-5 h-5 bg-gradient-to-tr from-teal-500/10 to-purple-500/10 animate-liquidMorph delay-3000"></div>
    </div>
  );
}