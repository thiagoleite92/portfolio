const academicsCourses = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    college: 'UNIFAVIP - Wyden',
    period: '2023.2 - Momento',
  },
  {
    course: 'Educação Física - Bacharelado',
    college: 'Universidade Federal de Pernambuco - UFPE',
    period: '2015.2 - 2019.1',
  },
];

const freeCourses = [
  {
    name: 'RocketSeat - Backend',
    description: 'Node/Fastify/NestJS - 30h',
    year: '2023',
  },
  {
    name: 'RocketSeat - Frontend',
    description: 'React/React Native/Styled Components - 20h',
    year: '2023',
  },
  {
    name: 'Banco de Dados e SQL',
    description: 'Udemy - Felipe Mafra - 58h',
    year: '2023',
  },
  {
    name: 'Aprenda a testar aplicações JavaScript',
    description: 'Evergreen Treinamentos - Fábio Vedovelli - 20h',
    year: '2023',
  },
  {
    name: 'Devaria - Angular',
    description: 'Angular Framework - 27h',
    year: '2022',
  },
  {
    name: 'Devaria - Python',
    description: 'Python - Backend 14h',
    year: '2022',
  },
  {
    name: 'Devaria - Vue',
    description: 'Vue Framework - 12h',
    year: '2022',
  },
  {
    name: 'Devaria - React',
    description: 'ReactJS - 18h',
    year: '2022',
  },
];

export const Education = () => {
  return (
    <div className="flex w-full  flex-col gap-8 overflow-y-auto md:p-4">
      <ul className="flex  list-none flex-col items-start gap-4">
        {academicsCourses.map(({ course, college, period }) => (
          <li
            className="flex w-full flex-col items-start justify-between"
            key={course}
          >
            <h1 className="flex w-full justify-between">
              {course} <span className="text-right text-base">{period}</span>
            </h1>
            <p className="flex w-full justify-between gap-4 border-b border-black pb-2 text-lg">
              {college}
            </p>
          </li>
        ))}
      </ul>

      <h1 className="self-center">CURSOS LIVRES</h1>
      <div className="flex max-h-[500px] flex-col  items-start gap-4 overflow-y-auto rounded-xl bg-gray-900 p-2 text-gray-200">
        <ul className="w-full list-none space-y-2 divide-y p-2">
          {freeCourses.map(({ description, name, year }) => (
            <li
              className="flex w-full flex-col items-start justify-between"
              key={name}
            >
              <h1 className="flex w-full justify-between">
                {name} <span className="text-right text-base">{year}</span>
              </h1>
              <p className="text-lg">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
