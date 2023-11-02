const experiences = [
  {
    title: 'Trainee - Full Stack',
    period: 'Jun/2022 - Mar/2023',
    description: `Desenvolvimento de novas features em projetos da Mutant e BrComerce.
    Além de correção de bugs em diversos projetos.`,
    empresa: 'Verzel',
  },
];

export const Experience = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-8 overflow-y-auto">
      <div className="flex  h-full flex-col items-start gap-4 px-4">
        {experiences.map(({ title, period, description, empresa }) => {
          return (
            <>
              <h1 className="flex w-full justify-between">
                {title} <span className="text-right text-base">{period}</span>
              </h1>
              <p className="flex w-full justify-between gap-4  text-lg">
                {empresa}
              </p>
              <div className="w-full">
                <span className="text-justify">{description}</span>
                <hr className="border-b border-black" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
