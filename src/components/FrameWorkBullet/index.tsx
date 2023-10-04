import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const FrameWorkBullet = ({ children }: Props) => {
  return (
    <span className="flex w-full items-center justify-between gap-8">
      {children}
    </span>
  );
};
