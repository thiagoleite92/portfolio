const experiences = [
  {
    title: 'Trainee - Full Stack',
    period: 'Jun/2022 - Mar/2023',
    description: `Desenvolvimento de novas features em projetos da Mutant e BrComerce.
    Além de correção de bugs em diversos projetos.`,
    empresa: 'Verzel',
  },
  {
    title: 'Personal Trainer',
    period: 'Jan/2019 - Mar/2020',
    description: `Periodizar programas de treinamento físico para público em geral.`,
    empresa: 'Autônomo',
  },
  {
    title: 'Professor de Musculação',
    period: 'Jul/2018 - Aug/2019',
    description: `Personal Trainer exclusivo em academias privativas.`,
    empresa: 'Goal Gestão Esportiva',
  },
  {
    title: 'Estágio',
    period: 'Jan/2019 - Jun/2019',
    description: `Acompanhamento do treinamento resistido de pessoas com doenças crônicas ou pessoas
    com DST`,
    empresa: 'Hospital das Clínicas - UFPE',
  },
  {
    title: 'Estágio',
    period: 'Jul/2018 - Dez/2018',
    description: `Acompanhamento e periodização de treinamento com para-atletas.`,
    empresa: 'Núcleo de Educação Física - UFPE',
  },
  {
    title: 'Estágio',
    period: 'Jan/2018 - Jun/2018',
    description: `Auxiliar professores de hidroginástica para idosos e treinadores de iniciação esportiva na natação com crianças e adolescentes.`,
    empresa: 'Sport Club do Recife',
  },
  {
    title: 'Estágio',
    period: 'Dez/2017 - Mai/2018',
    description: `Supervisionar e auxiliar alunos no treinamento resistido (musculação)`,
    empresa: 'Gym Fit',
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
