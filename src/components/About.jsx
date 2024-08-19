import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-[url('./public/images/bgfa.svg')] bg-no-repeat bg-cover py-12 text-black font-bold text-center px-4 dark:bg-neutral-800   dark:bg-[url('./public/images/bgfa-noir.svg')]">
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
        viewport={{ once: true, amount: 0.2 }}
        className="text-3xl sm:text-4xl md:text-5xl font-serif text-gradient mb-6">
        QUI SOMMES-NOUS ?
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="flex justify-center w-full md:w-1/2 p-4">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.5 },
              ease: "easeIn",
              duration: 1
            }}
            viewport={{ once: true, amount: 0.2 }}
            src="/images/about1.svg"
            alt=""
            className="w-2/3 sm:w-3/4 md:w-2/3 md:m-12  h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 text-left">
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base dark:text-white   font-medium font-sans">
            <span className="font-display dark:text-slate-200 text-gray-800 font-bold">NLR & ASSOCIES</span> est un cabinet d’orientations et d’études à l’étranger, en partenariat avec les meilleurs écoles et universités à travers le monde <span className="text-lg font-display text-gray-700 dark:text-slate-200 font-semibold">Canada, France, Chine, Inde, Luxembourg, Angleterre, Russie, Turquie, Maroc, Malaisie, Egypte, Afrique Sud, …</span>. Nous sommes également dans le tourisme médical en collaboration avec les meilleurs hôpitaux, la réservation de billets d’avion et nous accompagnons dans le cadre d’immigrations pour ceux qui désirent s’installer au CANADA, France, etc. Vous avez à votre service une équipe compétente et efficace, doté d’une expérience inébranlable, notre équipe saura vous orienter de manière efficace. Ne perdez plus de temps, contactez-nous dès maintenant et préparez votre voyage!
          </motion.p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 p-4">
          <motion.h4
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4,
              y: { type: "spring", stiffness: 60 },
              opacity: { duration: 0.2 },
              ease: "easeIn",
              duration: 1
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold font-body text-gradient text-center">
            Un Accompagnement Professionnel
          </motion.h4>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base sm:text-lg dark:text-white font-medium font-sans text-left">
            {`Nous travaillons avec des Partenaires fiables depuis de nombreuses années. Ensemble, nous ferons de notre mieux pour vous satisfaire et vous rendre heureux. Pour en savoir plus n'hésitez pas, contactez-nous dès aujourd'hui.`}
          </motion.p>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            viewport={{ once: true, amount: 0.2 }}
            src="/images/about2.svg"
            alt=""
            className="w-3/4 md:w-1/2 lg:w-3/4 h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
