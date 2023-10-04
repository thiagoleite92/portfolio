import profileImg from '../../../assets/images/profile.jpg';

export const About = () => {
  return (
    <section id="about" className="flex h-screen bg-sky-950 p-4 ">
      <div class>
        <img
          src={profileImg}
          alt="Rosto de um homem pardo com barba preta e cabelo raspado"
          className="w-1/2 rounded-full"
        />
      </div>
      <div></div>
    </section>
  );
};
