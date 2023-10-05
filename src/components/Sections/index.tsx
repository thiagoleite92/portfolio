export { About } from './About';
export { Skills } from './Skills';
export { Experience } from './Experience';
export { Certifications } from './Certifications';
export { Education } from './Education';

type Props = {
  children: React.ReactNode;
  id: string;
};

export const Section = ({ children, id }: Props) => {
  return (
    <section
      className="mb-2 flex min-h-fit flex-col justify-center gap-8 bg-gray-200 p-4"
      id={id}
    >
      {children}
    </section>
  );
};
