import { PenTool, Clock, ArrowRight, Lightbulb, Heart, Brain } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function BlogSection({ id }: { id?: string }) {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Emotional Regulation in Daily Life",
      excerpt: "Emotional regulation isn't about suppressing feelings—it's about understanding them. When we learn to recognize our emotional patterns, we gain the power to respond rather than react. This awareness transforms how we navigate relationships, workplace stress, and daily challenges, creating space for growth and authentic connection.",
      category: "Self-Care",
      icon: Heart,
      color: "text-purple-400 bg-purple-900/50 border-purple-500/30"
    },
    {
      id: 2,
      title: "The Science of Habit Formation",
      excerpt: "Our brains are remarkably efficient at creating automatic behaviors. Understanding the neuroscience behind habit loops—cue, routine, reward—empowers us to intentionally design our lives. Small, consistent actions compound over time, shaping not just our behaviors but our identity and sense of self-efficacy.",
      category: "Psychology",
      icon: Brain,
      color: "text-teal-400 bg-teal-900/50 border-teal-500/30"
    },
    {
      id: 3,
      title: "Mindfulness for Mental Clarity",
      excerpt: "Mindfulness isn't just meditation—it's a way of being fully present with our experience. Research shows that cultivating awareness of our thoughts and emotions enhances cognitive flexibility, reduces anxiety, and deepens our capacity for compassion. It's a practice that transforms ordinary moments into opportunities for wisdom.",
      category: "Wellness",
      icon: Lightbulb,
      color: "text-slate-300 bg-slate-800 border-slate-600"
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <PenTool className="text-purple-400 animate-floatingThought" size={36} />
            <h2 className="font-serif text-4xl md:text-5xl text-slate-100">
              Insights & Reflections
            </h2>
          </div>
          <p className="text-xl text-slate-300 mb-8">
            Thoughtful articles on psychology, mental health, and personal growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <Card key={post.id} className="group bg-slate-800/50 border border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 overflow-hidden interactive-card glass-morphism">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-lg border ${post.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300 border-slate-600">
                      {post.category}
                    </Badge>
                  </div>
                  
                  <h3 className="font-serif text-xl text-slate-200 mb-4 group-hover:text-purple-300 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-end text-sm text-slate-500">
                    <ArrowRight 
                      size={16} 
                      className="group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <PenTool className="mr-2" size={20} />
            Read All Articles
          </Button>
          <p className="text-slate-400 mt-4">
            Exploring psychology through thoughtful writing and research
          </p>
        </div>
      </div>
    </section>
  );
}