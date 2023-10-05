import { Carousel } from 'react-responsive-carousel';
import { Badges } from './components/Badges';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { links, images } from '../../../const/credentials';

export const Certifications = () => {
  return (
    <div className="flex w-full flex-1 flex-col gap-16">
      <h1 className="self-center">CERTIFICADOS</h1>
      <div className="flex items-center justify-center md:p-4 md:pb-0">
        <Carousel>
          <Badges src={images.trybeModule1} link={links.trybeModule1} />
          <Badges src={images.trybeModule2} link={links.trybeModule2} />
          <Badges src={images.trybeModule3} link={links.trybeModule3} />
          <Badges src={images.trybeModule4} link={links.trybeModule4} />
          <Badges src={images.trybeModule5} link={links.trybeModule5} />
          <Badges src={images.englishEf} link={links.englishEf} />
          <Badges src={images.codeshNode} link={links.codeshNode} />
          <Badges src={images.codeshReact} link={links.codeshReact} />
          <Badges src={images.codeshJavascript} link={links.codeshJavascript} />
        </Carousel>
      </div>
    </div>
  );
};
