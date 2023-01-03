import React from 'react';
import { ButtonContainerMainProps } from './types';

const ButtonMainContainer = ({ buttonContent }: ButtonContainerMainProps) => {
  return (
    <a
      className="py-2 px-4 rounded-md justify-center items-center text-white font-Monserrat bg-[#50D1E2]"
      href="#"
      role="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light">
      {buttonContent}
    </a>
  );
};

export default ButtonMainContainer;
