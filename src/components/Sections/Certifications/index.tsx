import { Badges } from './components/Badges';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { certificates } from '../../../const/certificatesInfo';

export const Certifications = () => {
  return (
    <>
      <h1 className="self-center">CERTIFICADOS</h1>
      <div className="mx-auto w-full flex-1 gap-16 overflow-y-auto md:w-1/2">
        {certificates.map(({ image, link }) => (
          <Badges src={image} link={link} />
        ))}
      </div>
    </>
  );
};
