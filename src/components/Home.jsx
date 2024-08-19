import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="min-h-[90vh] dark:bg-neutral-800   bg-white bg-[url('./public/images/bgbf.svg')] dark:bg-[url('./public/images/bgbf-noirf.svg')] bg-no-repeat bg-cover lg:max-h-80 mt-24 flex flex-col lg:flex-row py-8 text-gray-800 font-bold lg:h-56 lg:p-8 dark:text-white">     
      <div className="titlImage p-10 text-wrap lg:w-1/2">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-4xl lg:text-6xl font-bold py-6 text-gradient font-body tracking-wide"
        >
          NLR & ASSOCIES
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.3,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="text-2xl lg:text-3xl font-bold dark:text-slate-100 text-gray-700 py-6 font-serif"
        >
          Votre partenaire pour l’éducation à l’étranger et le tourisme médical. Contactez-nous dès maintenant !
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.4,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 1,
          }}
          className="font-sans"
        >
          Prêt à partir ? Nous aussi ! Études, santé, immigration : un accompagnement sur-mesure pour gagner du temps et réussir votre projet.
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.5,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 0.6 },
            ease: "easeIn",
            duration: 0.5,
          }}
          className="text-lg font-medium font-sans p-6"
        >
          --- Votre satisfaction, notre priorité ---
        </motion.p>
        <span className="p-6">
          <motion.button
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.6,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.4 },
              ease: "easeIn",
            }}
            type="button"
            className="relative bg-gradient-to-r px-4 py-2 rounded-lg   font-bold border-2 border-sky-700 from-sky-700 to-lime-500 text-white focus:outline-none focus:ring focus:ring-sky-400"
          >
            Contactez-nous
          </motion.button>
        </span>
      </div>
      
      <div className="text-center w-full lg:w-1/2">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          src="./public/images/hbg.svg"
          className="w-full lg:w-[800px] "
          alt=""
        />
      </div>
    </section>
  );
}

export default Home;
