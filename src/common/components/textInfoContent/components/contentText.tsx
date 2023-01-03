import React from 'react';
import { ContentTextProps } from '../types';

const ContentText = ({ subtittle, content }: ContentTextProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3">
        <h5 className="text-xl mb-3 font-Monserrat font-bold text-amber-500">
          {subtittle}
        </h5>
        <p className="text-lg text-gray-500 mb-6 font-Monserrat lg:mx-0 mx-4">
          {content}
        </p>
      </div>
    </div>
  );
};

export default ContentText;
