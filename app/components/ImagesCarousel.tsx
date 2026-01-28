import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "../lib/types";
import Link from "next/link";

const ImagesCarousel = ({ images }: { images: Array<ProductImage> }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const goToNext = () => {
    if (!hasNext) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (!hasPrev) return;
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <div className="relative">
      <CarouselButton
        showIf={hasPrev}
        onClick={goToPrev}
        className="top-2 left-1"
        label="Previous"
      >
        &lt;
      </CarouselButton>

      <Link href="/" aria-label="Go to products details">
        <Image
          src={images[currentIndex].image_url}
          quality={50}
          className="object-cover max-h-75 min-h-75 w-full 5xl:min-h-100"
          width={300}
          height={300}
          alt=""
        />
      </Link>

      <CarouselButton
        showIf={hasNext}
        onClick={goToNext}
        className="bottom-2 right-1"
        label="Next"
      >
        &gt;
      </CarouselButton>
    </div>
  );
};

type CarouselButtonProps = {
  showIf: boolean;
  onClick: () => void;
  className: string;
  children: React.ReactNode;
  label: string;
};

const CarouselButton = ({
  showIf,
  onClick,
  className,
  children,
  label,
}: CarouselButtonProps) => {
  if (!showIf) return null;

  return (
    <button
      onClick={onClick}
      className={`absolute cursor-pointer w-11 h-11 ${className}`}
      title={label}
      aria-label={label}
    >
      <span className="text-white text-shadow-gray-900 text-lg font-medium">
        {children}
      </span>
    </button>
  );
};

export default ImagesCarousel;
