import { projects } from '../../../const/projectsInfo';
import { ProjectCard } from './components/ProjectCard';

export const Projects = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-8 overflow-y-auto md:p-8">
      <div className="grid h-fit gap-8 bg-gray-900 p-4 text-gray-900 md:grid-cols-[minmax(200px,_1fr)_minmax(200px,_1fr)] ">
        {projects.map((props) => (
          <ProjectCard {...props} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};
