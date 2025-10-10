import { Mail, Send, MessageSquare, MapPin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { useState } from "react";

export function ContactSection({ id }: { id?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <MessageSquare className="text-teal-400" size={36} />
            <h2 className="font-serif text-4xl md:text-5xl text-slate-100">
              Let's Connect
            </h2>
          </div>
          <p className="text-xl text-slate-300 mb-8">
            Have questions about psychology or want to collaborate? I'd love to hear from you.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-slate-200 mb-6">Get in Touch</h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Whether you're interested in discussing psychology, have questions about my book, 
                or want to explore collaboration opportunities, I'm always excited to connect with 
                fellow psychology enthusiasts and readers.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="p-6 bg-slate-800/50 border border-slate-700/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-900/50 rounded-lg border border-purple-500/30">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 mb-1">Email</h4>
                    <p className="text-slate-400">raheelashaikh0610@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/50 border border-slate-700/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-900/50 rounded-lg border border-teal-500/30">
                    <MessageSquare className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 mb-1">Response Time</h4>
                    <p className="text-slate-400">Usually within 24-48 hours</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-800/50 border border-slate-700/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-slate-700 rounded-lg border border-slate-600">
                    <MapPin className="text-slate-300" size={24} />
                  </div>
                  <div>
                    <h4 className="text-slate-200 mb-1">Location</h4>
                    <p className="text-slate-400">Available for virtual consultations</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Instagram Connect Section */}
            <div className="mt-12">
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-slate-100 mb-4">
                  Connect on Instagram
                </h3>
                <p className="text-slate-400">
                  Follow my psychology journey and raw thoughts
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="https://www.instagram.com/that_orphicpsychgrad?igsh=MWZ4bG5oM3gybHpobw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                  >
                    <Instagram className="mr-2" size={20} />
                    @that_orphicpsychgrad
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
                    className="w-full border-2 border-teal-400/50 text-teal-300 hover:bg-teal-950/50 hover:border-teal-300 px-8 py-4 rounded-full transition-all duration-300"
                  >
                    <Instagram className="mr-2" size={20} />
                    @rawthoughts_byrs
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-slate-800/50 border border-slate-700/50 shadow-xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-300">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder:text-slate-500 focus:border-purple-400 rounded-lg"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-300">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder:text-slate-500 focus:border-purple-400 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder:text-slate-500 focus:border-purple-400 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-300">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What would you like to discuss?"
                  className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder:text-slate-500 focus:border-purple-400 rounded-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me more about your thoughts, questions, or collaboration ideas..."
                  rows={5}
                  className="bg-slate-900/50 border-slate-600 text-slate-200 placeholder:text-slate-500 focus:border-purple-400 rounded-lg resize-none"
                />
              </div>

              <Button 
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50"
              >
                <Send className="mr-2" size={20} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
