type ProjectCardProps = {
  name: string;
  description: string;
  deploy: string;
  repos: {
    frontend?: string;
    backend?: string;
  }[];
};

export const ProjectCard = ({
  name,
  description,
  deploy,
  repos,
}: ProjectCardProps) => {
  return (
    <div className=" m-auto flex max-h-fit min-h-[200px] w-full flex-col items-center justify-center gap-4 rounded-md bg-gray-200 p-4">
      <h1>{name}</h1>
      <p className="w-full text-justify text-sm">{description}</p>
      <ul className="flex w-full flex-col gap-4">
        {deploy && (
          <li className="flex w-full flex-col items-center  justify-center gap-4">
            <a
              href={deploy}
              className="flex w-full flex-col items-center "
              target="_blank"
            >
              Acessar Projeto
            </a>
          </li>
        )}
        {repos.map((repo) => (
          <li
            className="flex w-full flex-col items-center  justify-center gap-4"
            key={repo?.backend || repo?.frontend}
          >
            {repo.frontend && (
              <a target="_blank" href={repo.frontend}>
                Repositório Frontend
              </a>
            )}
            {repo.backend && (
              <a target="_blank" href={repo.backend}>
                Repositório Backend
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
