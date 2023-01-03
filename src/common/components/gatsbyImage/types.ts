import { CSSProperties } from 'react';
import { ImageDataLike } from 'gatsby-plugin-image';

export interface Props {
  file: ImageDataLike | string;
  alt?: string;
  className?: string;
  objectFit?: CSSProperties['objectFit'];
  imageType?: 'dynamic' | 'static';
}
