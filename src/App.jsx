import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WorkJourney from './components/WorkJourney';
import Projects from './components/Projects';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CustomCursor, Divider } from './components/Common';

function App() {
  return (
    <div className="relative bg-sand-light min-h-screen text-espresso-dark selection:bg-bronze selection:text-white">
      {/* Background Subtle Warm Grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-70 pointer-events-none z-0" />
      
      {/* Soft Warm Bronze & Amber Glows */}
      <div className="fixed top-1/4 -left-48 w-96 h-96 bg-bronze/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/3 -right-48 w-96 h-96 bg-caramel/10 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Global Stitch Navigation */}
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <WorkJourney />
        <Divider />
        <Projects />
        <Divider />
        <Services />
        <Divider />
        <Testimonials />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
