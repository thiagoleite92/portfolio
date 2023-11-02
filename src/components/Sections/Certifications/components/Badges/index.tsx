type Props = {
  link: string;
  src: string;
};

export const Badges = ({ link, src }: Props) => {
  return (
    <a className="m-auto flex w-full py-4 pb-2" href={link} target="_blank">
      <img src={src} alt="" className="m-auto shadow-md" />
    </a>
  );
};
