import React from 'react';
import ContentText from './contentText';
import { ContainerContentTextProps } from '../types';

const ContainerContentText = ({
  subtittle,
  content,
  isActive,
}: ContainerContentTextProps) => {
  return (
    <div className={`${isActive} carousel-item ContainerContentMain`}>
      <div className="ContainerTextMain">
        <ContentText subtittle={subtittle} content={content} />
      </div>
    </div>
  );
};

export default ContainerContentText;
