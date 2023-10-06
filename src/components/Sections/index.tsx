import { GoMoveToTop } from 'react-icons/go';
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
  const handleBackToTop = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <section
      className="relative mb-4 flex h-screen flex-col justify-center gap-4 bg-slate-300 p-4 shadow-md shadow-slate-500 last-of-type:mb-0 md:p-4 md:first-of-type:rounded-t-md md:last-of-type:rounded-b-md"
      id={id}
    >
      <h1 className="flex w-full items-center justify-evenly gap-4 md:justify-end">
        {id?.toUpperCase()}
        <button onClick={handleBackToTop}>
          <GoMoveToTop />
        </button>
      </h1>
      {children}
    </section>
  );
};
