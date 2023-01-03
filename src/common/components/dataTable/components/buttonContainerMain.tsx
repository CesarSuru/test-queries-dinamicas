import React from 'react';
import { ButtonContainerMainProps } from '../types';

const ButtonContainerMain = ({ buttonContent, buttonLink }: ButtonContainerMainProps) => {
  return (
    <a
      className="py-2 px-4 rounded-md justify-center items-center text-white font-Monserrat bg-[#50D1E2]"
      href={buttonLink}
      role="button"
      target="_blank"
      download
    >
      {buttonContent}
    </a>
  );
};

export default ButtonContainerMain;