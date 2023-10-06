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
      className="mb-2 flex h-screen flex-col justify-center gap-8 bg-gray-200 p-4 md:first-of-type:rounded-t-md md:last-of-type:rounded-b-md"
      id={id}
    >
      {children}
    </section>
  );
};
