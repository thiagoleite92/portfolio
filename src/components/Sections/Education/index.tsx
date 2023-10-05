export const Education = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-8 p-4">
      <h1 className="self-center">FORMAÇÃO ACADÊMICA</h1>
      <div className="flex  h-full flex-col items-start gap-4">
        <div className="flex w-full flex-col items-start justify-between">
          <h1 className="flex w-full justify-between">
            Análise e Desenvolvimento de Sistemas{' '}
            <span className="text-right text-base">2023.2 - Momento</span>
          </h1>

          <p className="flex w-full justify-between gap-4 border-b border-black pb-2 text-lg">
            UNIFAVIP - Wyden
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-between">
          <h1 className="flex w-full justify-between">
            Educação Física - Bacharelado{' '}
            <span className="text-right text-base">Jun/2015 - Ago/2019</span>
          </h1>

          <p className="flex w-full justify-between gap-4 border-b border-black pb-2 text-lg">
            UFPE
          </p>
        </div>
      </div>

      <h1 className="self-center">CURSOS LIVRES</h1>
      <div className="flex  h-full flex-col items-start gap-4 rounded-xl bg-gray-900 p-4 text-gray-200">
        <div className="flex w-full flex-col items-start justify-between">
          <h1 className="flex w-full justify-between">
            RocketSeat - Ignite{' '}
            <span className="text-right text-base">Jul/2023</span>
          </h1>

          <p className="flex w-full justify-between gap-4 border-b border-gray-200 pb-2 text-lg">
            Nest, React e React Native - 60h+
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-between">
          <h1 className="flex w-full justify-between">
            Aprenda a testar aplicações Javascript{' '}
            <span className="text-right text-base">Jul/2023</span>
          </h1>

          <p className="flex w-full justify-between gap-4 border-b border-gray-200 pb-2 text-lg">
            Evergreen Treinamentos - 20h
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-between">
          <h1 className="flex w-full justify-between">
            Banco de Dados e SQL{' '}
            <span className="text-right text-base">Jul/2023</span>
          </h1>

          <p className="flex w-full justify-between gap-4 border-b border-gray-200 pb-2 text-lg">
            Udemy - Felipe Mafra - 58h
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-between">
          <h1 className="flex w-full justify-between">
            FAST: Formação Acelerada em Soluções{' '}
            <span className="text-right text-base">Abr/2022</span>
          </h1>

          <p className="flex w-full justify-between gap-4 border-b border-gray-200 pb-2 text-lg">
            CESAR School - 72h
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-between">
          <h1 className="flex w-full justify-between">
            Produtividade com VSCode{' '}
            <span className="text-right text-base">Feb/2022</span>
          </h1>

          <p className="flex w-full justify-between gap-4 border-b border-gray-200 pb-2 text-lg">
            Cod3r - 4h
          </p>
        </div>
      </div>
    </div>
  );
};
