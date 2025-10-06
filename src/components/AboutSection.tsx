import { GraduationCap, Instagram, PenTool } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/b0a466e456f09ccfb9f488add7a08234308c5d78.png";

export function AboutSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-slate-100 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Photo - Placeholder */}
          <div className="flex justify-center animate-slideInLeft">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-700">
                <ImageWithFallback 
                  src={profileImage}
                  alt="Raheela N. Shaikh - Psychology Graduate and Author"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/30 rounded-full animate-floatingThought"></div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal-500/20 rounded-full animate-mindFlow"></div>
            </div>
          </div>
          
          {/* Biography */}
          <div className="space-y-8 animate-slideInRight">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-900/50 rounded-lg border border-purple-500/30 animate-neuralPulse">
                <GraduationCap className="text-purple-400" size={24} />
              </div>
              <div className="p-3 bg-teal-900/50 rounded-lg border border-teal-500/30 animate-neuralPulse delay-300">
                <Instagram className="text-teal-400" size={24} />
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-slate-600 animate-neuralPulse delay-500">
                <PenTool className="text-slate-300" size={24} />
              </div>
            </div>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              Welcome to my world of psychological exploration! As a passionate psychology graduate, 
              I've dedicated my journey to understanding the beautiful complexity of the human mind.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              What started as academic curiosity evolved into a mission to make psychology accessible 
              to everyone. Through my Instagram page, I share insights, tips, and thought-provoking 
              content that helps people understand themselves and others better.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My recent book, "Embers of Ahima: A Heart Reclaimed," represents a deeply personal 
              exploration of healing, resilience, and the journey from brokenness to wholeness. 
              It's a testament to the power of psychological understanding in transforming lives.
            </p>
            
            <div className="pt-6 border-l-4 border-purple-500/50 pl-6">
              <p className="text-purple-300 italic text-lg">
                "Every mind tells a story worth understanding, every heart holds wisdom worth sharing."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}