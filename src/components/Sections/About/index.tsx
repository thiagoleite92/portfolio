import { CgMail } from 'react-icons/cg';
import {
  AiOutlineWhatsApp,
  AiFillLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';

import profileImg from '../../../assets/images/profile.jpg';

export const About = () => {
  return (
    <div className="flex w-full flex-1 flex-col items-center  gap-8 md:flex-row md:p-8">
      <div className="flex flex-col items-center gap-4">
        <img
          src={profileImg}
          alt="Rosto de um homem pardo com barba preta e cabelo raspado"
          className="w-1/2 rounded-full"
        />
        <div className="flex flex-col items-center justify-center gap-4">
          <strong>Desenvolvedor Full Stack</strong>
          <div className="flex w-full justify-around gap-4 ">
            <a
              href="https://www.linkedin.com/in/leite-tjs/"
              target="_blank"
              className="flex items-center justify-start gap-4"
            >
              <AiFillLinkedin size={36} />
            </a>
            <a
              href="https://www.github.com/thiagoleite92"
              target="_blank"
              className="flex items-center justify-start gap-4"
            >
              <AiOutlineGithub size={36} />
            </a>
            <a
              href="mailto:leite.tjs@gmail.com"
              className="flex items-center justify-start gap-4"
            >
              <CgMail size={36} />
            </a>
            <a
              href="tel:+5581983643305"
              className="flex items-center justify-start gap-4"
            >
              <AiOutlineWhatsApp size={36} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="h-fit  gap-4 text-justify text-2xl">
          Olá, meu nome é <strong>Thiago Leite</strong>, ex-profissional de
          Educação Física em transição de carreira para área de tecnologia.
        </p>
      </div>
    </div>
  );
};
