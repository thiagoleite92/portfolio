import { Navigation } from '../components/Navigation';
import {
  About,
  Certifications,
  Experience,
  Section,
  Skills,
} from '../components/Sections';

export const Layout = () => {
  return (
    <div className="flex-col bg-gray-950 text-black">
      <main className="divide-y-2 divide-black">
        <Navigation />
        <Section id="about">
          <About />
        </Section>
        <Section id="skills">
          <Skills />
        </Section>
        <Section id="experience">
          <Experience />
        </Section>
        <Section id="certifications">
          <Certifications />
        </Section>
      </main>
    </div>
  );
};
