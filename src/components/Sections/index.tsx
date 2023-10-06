export { About } from './About';
export { Skills } from './Skills';
export { Experience } from './Experience';
export { Certifications } from './Certifications';
export { Education } from './Education';
export { Projects } from './Projects';

type Props = {
  children: React.ReactNode;
  id: string;
};

export const Section = ({ children, id }: Props) => {
  return (
    <section
      className="mb-4 flex h-screen flex-col justify-center gap-8 bg-slate-300 p-4 shadow-md shadow-slate-500 last-of-type:mb-0 md:p-20 md:first-of-type:rounded-t-md md:last-of-type:rounded-b-md"
      id={id}
    >
      {children}
    </section>
  );
};
