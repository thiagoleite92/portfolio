export { About } from './About';
export { Skills } from './Skills';
export { Experience } from './Experience';
export { Certifications } from './Certifications';

type Props = {
  children: React.ReactNode;
  id: string;
};

export const Section = ({ children, id }: Props) => {
  return (
    <section
      className={`flex min-h-screen flex-col justify-center gap-8 bg-gray-200 p-4 pb-0`}
      id={id}
    >
      {children}
    </section>
  );
};
