import { Star, ShoppingCart, BookOpen, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import bookCover from 'figma:asset/2deaa4f9b01df38e72b5553e86defefaeeda9133.png';

export function BookSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <BookOpen className="text-teal-400 animate-mindFlow" size={36} />
            <h2 className="font-serif text-4xl md:text-5xl text-slate-100">
              Featured Book
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book Cover */}
          <div className="flex justify-center animate-slideInLeft">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-purple-500/30 to-teal-500/30 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-300 blur-xl animate-synapseGlow"></div>
              <div className="relative">
                <img 
                  src={bookCover} 
                  alt="Embers of Ahima: A Heart Reclaimed"
                  className="w-80 h-auto rounded-2xl shadow-2xl border-4 border-slate-700 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm animate-neuralPulse shadow-lg">
                  New Release!
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-8 animate-slideInRight">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl text-slate-100 mb-3">
                Embers of Ahima
              </h3>
              <p className="text-xl text-slate-300 mb-4">A Heart Reclaimed</p>
              <p className="text-lg text-teal-400 mb-6">The Journey from Brokenness to Wholeness</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-slate-400">(4.9/5 • 127 reviews)</span>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed">
              A deeply personal and transformative exploration of healing, resilience, and 
              the remarkable journey from psychological wounds to emotional wholeness. 
              Through vulnerable storytelling and psychological insights, this book offers 
              hope and practical wisdom for anyone seeking to reclaim their heart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 py-8">
              <Card className="p-6 bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-4">
                  <Award className="text-purple-400" size={24} />
                  <div>
                    <p className="text-slate-200">Psychology Today</p>
                    <p className="text-sm text-purple-400">Featured Review</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-slate-800/50 border border-slate-700/50">
                <div className="flex items-center gap-4">
                  <BookOpen className="text-teal-400" size={24} />
                  <div>
                    <p className="text-slate-200">Available Now</p>
                    <p className="text-sm text-teal-400">Digital & Print</p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <a 
                href="https://amzn.in/d/dOjDth2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 animate-prismaticShift magnetic-hover glass-morphism"
                >
                  <ShoppingCart className="mr-2 animate-zoomPulse" size={20} />
                  <span className="neon-glow">Buy Me on Amazon</span>
                </Button>
              </a>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-teal-400/50 text-teal-300 hover:bg-teal-950/50 hover:border-teal-300 px-10 py-4 rounded-full transition-all duration-300 animate-morphingButton magnetic-hover glass-morphism"
              >
                <span className="neon-glow">Read Preview</span>
              </Button>
            </div>

            <div className="pt-6 border-l-4 border-purple-500/50 pl-6">
              <p className="text-slate-400 italic leading-relaxed">
                "A powerful testament to the resilience of the human spirit and the healing power of understanding our inner world."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}