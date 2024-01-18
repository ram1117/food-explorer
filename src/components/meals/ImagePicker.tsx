"use client";

import ImageWrapper from "@/atoms/ImageWrapper";
import { useRef, useState } from "react";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker = ({ label, name }: ImagePickerProps) => {
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>();

  const formRowStyle = "flex flex-col gap-2 my-2 lg:my-4";
  const labelStyle = "text-xs font-bold md:text-sm uppercase";
  const imageInput = useRef<HTMLInputElement>(null);

  const handlePick = () => {
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (!file) {
        setPickedImage(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPickedImage(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className={formRowStyle}>
      <label htmlFor={`input-${name}`} className={labelStyle}>
        {label}
      </label>
      <div>
        <input
          type="file"
          id={`input-${name}`}
          accept="image/png, image/jpeg"
          name={name}
          className="hidden"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button type="button" className="link-style !my-1" onClick={handlePick}>
          Pick an Image
        </button>
        <div className="my-2">
          {!pickedImage && <p>No Image selected</p>}
          {pickedImage && (
            <ImageWrapper
              src={pickedImage}
              alt="User selected image"
              imageSizes="h-20 w-20 lg:w-32 lg:h-32"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePicker;
