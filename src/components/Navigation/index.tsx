import { navIds } from '../../const/navigation';

export const Navigation = () => {
  return (
    <nav className="flex h-screen w-full flex-col items-center justify-center gap-8  font-orbitron text-2xl tracking-widest text-yellow-400 ">
      {navIds.map(({ id }) => (
        <a href={`#${id}`} key={id}>
          {id?.toUpperCase()}
        </a>
      ))}
    </nav>
  );
};
