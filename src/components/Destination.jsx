import CardsDestinations from "./cardsDestinations";

const Portfolio = () => {
    const cardsDestinations = [
      {
        imageSrc: "./public/images/us.jpg",
        title: "Etats Unis",
        description: "this is the description of my project"
      },
    
      {
        imageSrc: "./public/images/russie.jpg",
        title: "Russie",
        description: "this is the description of my project"
      },
      {
        imageSrc: "./public/images/canada.jpeg",
        title: "Canada",
        description: "this is the description of my project"
      },
      {
        imageSrc: "./public/images/espagne.jpg",
        title: "Espagne",
        description: "this is the description of my project"
      },
      {
        imageSrc: "./public/images/chine.jpg",
        title: "Chine",
        description: "this is the description of my project"
      },
      {
        imageSrc: "./public/images/angleterre.jpeg",
        title: "Angleterre",
        description: "this is the description of my project"
      },
      {
        imageSrc: "./public/images/paris.jpg",
        title: "Paris",
        description: "this is the description of my project"
      },
      {
        imageSrc: "./public/images/italie.jpeg",
        title: "Italie",
        description: "this is the description of my project"
      },
     

    ];

  return (
    <section id="portfolio" className="min-h-screen bg-[url('./public/images/bgs.svg')] dark:bg-[url('./public/images/bgs-noir.svg')]   text-black font-bold text-center md:p-8 dark:bg-neutral-800 ">
      <div className=" flex flex-wrap justify-center">
        {cardsDestinations.map((itemCard, index)=>(
          <CardsDestinations
          key={index}
          imageSrc={itemCard.imageSrc}
          title={itemCard.title}
          />
        ))}

      </div>
      
    </section>
  );
}

export default Portfolio;
