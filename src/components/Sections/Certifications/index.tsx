import { Badges } from './components/Badges';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { certificates } from '../../../const/certificatesInfo';

export const Certifications = () => {
  return (
    <div className="flex w-full gap-8 overflow-y-auto md:p-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {certificates.map(({ image, link }) => (
          <Badges src={image} link={link} key={link} />
        ))}
      </div>
    </div>
  );
};
