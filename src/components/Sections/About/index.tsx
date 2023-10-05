import profileImg from '../../../assets/images/profile.jpg';

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-around gap-4 md:flex-row">
      <div className="flex flex-col items-center gap-4">
        <img
          src={profileImg}
          alt="Rosto de um homem pardo com barba preta e cabelo raspado"
          className="w-1/2 rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <strong>Desenvolvedor Full Stack</strong>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="flex h-fit  gap-4 text-justify text-2xl">
          Olá, meu nome é Thiago Leite. Ex-profissional de educação física em
          transição de carreira para área tech.
        </p>
      </div>
    </div>
  );
};
