import { useEffect, useRef, useState } from "react";

const images = [
  { src: "./public/images/dag.jpg", name: "Angletere" },
  { src: "./public/images/dfr.jpg", name: "France" },
  { src: "./public/images/dc.jpg", name: "Chine" },
  { src: "./public/images/drs.jpg", name: "Russie" },
  { src: "./public/images/di.jpg", name: "Italie" },
  { src: "./public/images/dcn.jpg", name: "Canada" },
  { src: "./public/images/dep.jpg", name: "Espagne" },
  { src: "./public/images/dus.jpg", name: "Etats_Unis" },
  { src: "./public/images/dafs.jpg", name: "Afrique Du Sud" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const visibleImages = 3;
  const totalImages = images.length;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (totalImages + visibleImages));
    }, 3000);
    return () => clearInterval(intervalId);
  }, [totalImages, visibleImages]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transition = "transform 0.5s ease-in-out";
      carouselRef.current.style.transform = `translateX(-${(currentIndex * 100) / visibleImages}%)`;

      if (currentIndex >= totalImages) {
        setTimeout(() => {
          carouselRef.current.style.transition = "none";
          setCurrentIndex(0);
          carouselRef.current.style.transform = `translateX(0)`;
        }, 500);
      }
    }
  }, [currentIndex, totalImages, visibleImages]);

  return (
    <div className="relative overflow-hidden w-full h-40">
      <div
        ref={carouselRef}
        className="flex w-full h-full space-x-20"
      >
        {[...images, ...images.slice(0, visibleImages)].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-56 rounded-lg h-full relative group"
            style={{ backgroundImage: `url(${image.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 w-40 h-10 grid content-center z-30 bg-black bg-opacity-50 justify-self-center self-center text-white text-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
              {image.name}
            </div>
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
