import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Timeline from './components/Timeline';
import Experience from './components/Experience';
import GitHubGraph from './components/GitHubGraph';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { AppProvider } from './hooks/usePortfolioContext';

function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-[#030712] text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Stats />
          <Projects />
          <Education />
          <Certifications />
          <Achievements />
          <Timeline />
          <Experience />
          <GitHubGraph />
          <Testimonials />
          <Blogs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </AppProvider>
  );
}

export default App;
