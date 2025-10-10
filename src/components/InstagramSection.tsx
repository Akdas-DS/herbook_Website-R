import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function InstagramSection({ id }: { id?: string }) {
  // Instagram posts with real content
  const instagramPosts = [
    {
      id: 1,
      title: "The Psychology of Resilience",
      caption: "Breaking down the mental strategies that help us bounce back from life's challenges. Resilience isn't just born - it's built through practice and understanding.",
      image: "https://images.unsplash.com/photo-1620147512372-9e00421556bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjByZWxhdGlvbnNoaXBzfGVufDF8fHx8MTc1OTQ5NTcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 892,
      comments: 67,
      link: "https://www.instagram.com/reel/DPb4QBpiiwU/?igsh=M245MmlvaDE3ZGM0"
    },
    {
      id: 2,
      title: "Emotional Intelligence in Relationships", 
      caption: "How understanding your emotions can transform your connections with others. These 5 key signs show healthy emotional awareness in action.",
      image: "https://images.unsplash.com/photo-1705056509092-5d7b1a789eeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW90aW9uYWwlMjBpbnRlbGxpZ2VuY2UlMjByZWxhdGlvbnNoaXBzfGVufDF8fHx8MTc1OTQ5NTcyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 1456,
      comments: 123,
      link: "https://www.instagram.com/p/DPb1NuWglYJ/?igsh=MWkwenRidzQxMGw5Zg=="
    },
    {
      id: 3,
      title: "Self-Care & Mental Wellness",
      caption: "Reminder: Taking care of your mental health isn't selfish—it's essential. Small daily practices that make a big difference in your wellbeing.",
      image: "https://images.unsplash.com/photo-1758599879787-03999f72d994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWxmJTIwY2FyZSUyMG1pbmRmdWxuZXNzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzU5NDk1NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      likes: 2034,
      comments: 89,
      link: "https://www.instagram.com/p/DPavIA1goR7/?igsh=YmVnYTZhNTEzZnlq"
    }
  ];

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Instagram className="text-purple-400" size={36} />
            <h2 className="font-serif text-4xl md:text-5xl text-slate-100">
              Instagram Insights
            </h2>
          </div>
          <p className="text-xl text-slate-300 mb-8">
            Daily doses of psychology wisdom and mental health tips
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-teal-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {instagramPosts.map((post) => (
            <a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group overflow-hidden bg-slate-800/50 border border-slate-700/50 shadow-lg hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <ImageWithFallback 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <Instagram size={24} className="text-white/90" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-slate-200 mb-2">{post.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{post.caption}</p>
                  <div className="flex items-center justify-between text-slate-400 text-sm">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Heart size={16} className="text-purple-400" />
                        <span>{post.likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle size={16} className="text-teal-400" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <ExternalLink size={16} className="group-hover:text-purple-400 transition-colors" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="https://www.instagram.com/that_orphicpsychgrad?igsh=MWZ4bG5oM3gybHpobw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <Instagram className="mr-2" size={20} />
                Follow @that_orphicpsychgrad
              </Button>
            </a>
            
            <a 
              href="https://www.instagram.com/rawthoughts_byrs?igsh=cmd0bDRkMDN5aGF2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-teal-400/50 text-teal-300 hover:bg-teal-950/50 hover:border-teal-300 px-10 py-4 rounded-full transition-all duration-300"
              >
                <Instagram className="mr-2" size={20} />
                Follow @rawthoughts_byrs
              </Button>
            </a>
          </div>
          
          <p className="text-slate-400">
            Join our community exploring psychology together
          </p>
        </div>
      </div>
    </section>
  );
}
