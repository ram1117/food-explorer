import Image from "next/image";

interface ImageWrapperProps {
  src: any;
  alt: string;
  imageSizes: string;
  sizes?: string;
  className?: string;
}

const ImageWrapper = ({
  src,
  alt,
  imageSizes,
  sizes = "",
  className = "",
}: ImageWrapperProps) => (
  <div className={`relative ${imageSizes}`}>
    <Image src={src} alt={alt} fill sizes={sizes} className={className} />
  </div>
);

export default ImageWrapper;
