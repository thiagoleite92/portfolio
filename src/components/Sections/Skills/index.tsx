import { BiLogoAngular, BiLogoReact } from 'react-icons/bi';
import { SiNestjs, SiPrisma, SiExpress, SiFastify } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';

import javaScriptLogo from '../../../assets/images/javascript_logo.png';
import { FrameWorkBullet } from '../../FrameWorkBullet';

export const Skills = () => {
  return (
    <div className="flex w-full flex-col gap-8 md:flex-row">
      <div className="mt-8 flex flex-col items-center justify-center gap-4">
        <p className="flex h-fit  gap-4 text-justify text-2xl">
          Tenho habilidade com Javascript, e principais frameworks e bibliotecas
          que fazem parte desse ecossistema.
        </p>
        <div className="flex w-full gap-8 overflow-x-auto p-4">
          <FrameWorkBullet>
            <DiNodejs size={46} className="text-green-600" />
          </FrameWorkBullet>
          <FrameWorkBullet>
            <BiLogoReact size={46} className="text-cyan-400" />
          </FrameWorkBullet>
          <FrameWorkBullet>
            <BiLogoAngular size={46} className="text-red-500" />
          </FrameWorkBullet>
          <FrameWorkBullet>
            <SiNestjs size={46} className="text-red-500" />
          </FrameWorkBullet>
          <FrameWorkBullet>
            <SiFastify size={46} className="text-gray-950" />
          </FrameWorkBullet>
          <FrameWorkBullet>
            <SiExpress size={46} className="text-gray-950" />
          </FrameWorkBullet>
          <FrameWorkBullet>
            <SiPrisma size={46} className="text-blue-500" />
          </FrameWorkBullet>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <img
          src={javaScriptLogo}
          alt="Rosto de um homem pardo com barba preta e cabelo raspado"
          className="w-1/2"
        />
        <div className="flex flex-col items-center justify-center gap-4"></div>
      </div>
    </div>
  );
};
