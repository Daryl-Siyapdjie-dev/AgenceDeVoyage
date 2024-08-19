import CardsData from "./cardservice";
import Carousel from "./caroussel";
import { motion } from "framer-motion";

const Services = () => {
  const cardservice = [
    {
      imageSrc: "./public/images/ecole.svg",
      title: "administrations",
      description: "this is the description of my project"
    },
    {
      imageSrc: "./public/images/tourisme.svg",
      title: "administrations",
      description: "this is the description of my project"
    },
    {
      imageSrc: "./public/images/hopital.svg",
      title: "administrations",
      description: "this is the description of my project"
    },
    {
      imageSrc: "./public/images/visa.svg",
      title: "administrations",
      description: "this is the description of my project"
    }
  ];

  return (
    <section id="services" className="min-h-screen bg-[url('./public/images/bgs.svg')] dark:bg-[url('./public/images/bgs-noir.svg')]  text-black pt-28 dark:bg-neutral-800  font-bold text-center p-8 bg-no-repeat bg-cover">
      <div> <Carousel /></div>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1
        }}
        className="font-body font-bold text-6xl py-14 text-gradient p-6">
        Nos Services
      </motion.h1>
      <div className="service flex flex-wrap justify-center">
        {cardservice.map((itemCard, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.2 * index,  // Ajoute un délai basé sur l'index de la carte
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.5 },
              ease: "easeIn",
              duration: 1
            }}
          >
            <CardsData
              imageSrc={itemCard.imageSrc}
              title={itemCard.title}
              description={itemCard.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;
