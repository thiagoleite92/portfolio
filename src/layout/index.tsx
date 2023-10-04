import { Navigation } from '../components/Navigation';
import { Section } from '../components/Sections';

export const Layout = () => {
  return (
    <div className="h-screen flex-col bg-gray-950 text-yellow-400">
      <main className="divide-y-2 divide-yellow-400">
        <Navigation />

        <Section.About />

        <section id="skills" className="h-screen">
          oi
        </section>
        <section id="about" className="h-1/2">
          oi
        </section>
        <section id="about" className="h-1/2">
          oi
        </section>
      </main>
    </div>
  );
};
