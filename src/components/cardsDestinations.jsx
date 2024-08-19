// eslint-disable-next-line react/prop-types
const CardsDestinations = ({ imageSrc, title, description }) => {
    return (
      <div className="max-w-60 rounded-xl overflow-hidden shadow-lg dark:shadow-xl m-4 card-hover">
        <div className=" grid justify-items-center ">
        <img className=" w-full" src={imageSrc} alt={title} />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl dark:text-slate-200 font-display mb-2">{title}</div>
          <p className="text-gray-700 text-base dark:text-white font-display">{description}</p>
        </div>
      </div>
    );
  }
  
  export default CardsDestinations;