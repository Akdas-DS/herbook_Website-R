import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { InstagramSection } from "./components/InstagramSection";
import { BookSection } from "./components/BookSection";
import { BlogSection } from "./components/BlogSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <ErrorBoundary>
      <div className="dark min-h-screen bg-slate-950">
        <HeroSection />
        <AboutSection id="about" />
        <InstagramSection id="instagram" />
        <BookSection id="book" />
        <BlogSection id="blog" />
        <ContactSection id="contact" />
        <Footer />
      </div>
    </ErrorBoundary>
  );
}