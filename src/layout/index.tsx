import { Navigation } from '../components/Navigation';
import { Section } from '../components/Sections';
import { navIds } from '../const/navigation';

export const Layout = () => {
  return (
    <div className="flex-col rounded-sm bg-slate-900 text-2xl text-black md:px-16">
      <Navigation />

      {navIds.map(({ id, component }) => (
        <Section id={id} key={id}>
          {component}
        </Section>
      ))}
    </div>
  );
};
