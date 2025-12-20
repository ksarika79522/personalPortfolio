import { Hero, About, Projects, Skills, Contact, Navigation, Certifications, Experience } from '@/components/Portfolio';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 py-8">
        <div className="container mx-auto px-6 text-center text-zinc-600">
          <p>© {new Date().getFullYear()} Karthik Sarika. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
