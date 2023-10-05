import { Navigation } from '../components/Navigation';
import {
  About,
  Certifications,
  Education,
  Experience,
  Section,
  Skills,
} from '../components/Sections';

export const Layout = () => {
  return (
    <div className="flex-col  bg-slate-950 px-4 text-2xl text-black">
      <main className="space-y-2 pb-4">
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
        <Section id="education">
          <Education />
        </Section>
      </main>
    </div>
  );
};
