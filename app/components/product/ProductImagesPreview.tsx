"use client";
import { useState } from "react";
import Image from "next/image";
// types
import { ProductImage } from "@/app/lib/types";
// components
import Button from "../core/Button";

const ProductImagesPreview = ({ images }: { images: ProductImage[] }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div>
      <div className="relative w-full m-auto h-125 lg:h-140 mb-3 md:mb-5">
        <Image
          alt=""
          src={currentImage.image_url}
          className="object-cover object-center rounded-xl"
          fill
          priority
          quality={70}
        />
      </div>

      <div className="flex gap-2 md:gap-4 max-w-full overflow-scroll">
        {images.map((item, index) => {
          const isActive = item.image_url === currentImage.image_url;
          return (
            <Button
              className="block w-40 h-50 cursor-pointer shrink-0"
              key={`img-${item.product_id}-${index}`}
              onClick={() => setCurrentImage(item)}
              aria-label="Show image on larger scale"
            >
              <Image
                src={item.image_url}
                alt=""
                width={200}
                height={300}
                className={`object-cover m-auto block w-full h-full rounded-xl border-2 ${isActive ? "border-blue-900" : "transparent"}`}
              />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default ProductImagesPreview;
