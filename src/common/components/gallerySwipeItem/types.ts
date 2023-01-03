import { ImageDataLike } from 'gatsby-plugin-image';

export interface GallerySwipeItemProps {
  alt: string;
  caption: string;
  height: number;
  imageUrl: ImageDataLike | string;
  index: number;
  src: string;
  width: number;
  imageType: 'dynamic' | 'static';
}
