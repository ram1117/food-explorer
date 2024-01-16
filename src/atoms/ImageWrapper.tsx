import Image, { StaticImageData } from 'next/image';

interface ImageWrapperProps {
  src: string | StaticImageData;
  alt: string;
  imageSizes: string;
  sizes?: string;
}

const ImageWrapper = ({
  src,
  alt,
  imageSizes,
  sizes = '',
}: ImageWrapperProps) => (
  <div className={`relative ${imageSizes}`}>
    <Image src={src} alt={alt} fill sizes={sizes} />
  </div>
);

export default ImageWrapper;
