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
    <div className="flex-col rounded-sm bg-gray-900 text-2xl text-black md:px-16">
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
    </div>
  );
};
