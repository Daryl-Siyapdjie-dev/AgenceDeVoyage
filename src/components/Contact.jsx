import { motion } from "framer-motion";
import { useState } from "react";
const Contact = () => {

  const [formData, setFormData] = useState({
    nom: "",
    tel: "",
    email: "",
    objet: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);
  
    try {
      const response = await fetch("http://localhost:3001/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
  
      const result = await response.json();
      if (response.ok) {
        setSuccess("Message envoyé avec succès !");
        setFormData({
          nom: "",
          tel: "",
          email: "",
          objet: "",
          message: ""
        });
      } else {
        const errorMessage = result.errors 
          ? result.errors.map(err => err.msg).join(', ')
          : 'Une erreur s\'est produite lors de l\'envoi du message.';
        setError("Erreur lors de l'envoi du message : " + errorMessage);
      }
    } catch (error) {
      setError("Erreur lors de l'envoi du message : " + error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  

  return (
    <section id="contact" className="min-h-[80vh] p-2 dark:bg-[url('./public/images/bgs-noir.svg')] bg-[url('./public/images/bgs.svg')]  text-black font-bold text-center dark:bg-neutral-800 bg-no-repeat bg-cover md:p-8">
         <motion.h1
      initial={{y:50 , opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{
        delay: 0.4,
        y: {type: "spring", stiffness: 60},
        opacity: {duration: 0.2},
        ease: "easeIn",
        duration: 1
      }}
      className=" font-body font-bold text-6xl  text-gradient p-6">Contactez-Nous</motion.h1>
      <div className="contact flex flex-wrap  p-0 lg:p-12 ">
        <div className="w-full    md:w-1/2 p-4">
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
          src="./public/images/contact.jpeg" alt="" className=" rounded-xl md:h-4/5 w-full h-full " />
        </div>
        <motion.div
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
        className="w-full  md:w-1/2 p-4 ">
        <form onSubmit={handleSubmit} className="w-full p-2 dark:bg-stone-700 bg-white rounded-lg shadow-md max-w-xl px-2 md:px-8 mx-auto">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            
            <div className="flex md:flex-row py-4">
              <label htmlFor="nom" className="md:basis-1/5 text-gray-700 dark:text-slate-100 font-display">Nom:</label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Saisissez votre nom" className="w-full p-2 border focus:outline-none focus:ring focus:ring-teal-400 rounded-lg placeholder:italic placeholder:text-slate-300 placeholder:text-sm placeholder:font-serif border-gray-300 md:basis-4/5" required />
            </div>
            <div className="flex flex-row py-4">
              <label htmlFor="tel" className="basis-1/5 text-gray-700 dark:text-slate-100 font-display">Tel:</label>
              <input type="tel" name="tel" value={formData.tel} onChange={handleChange} placeholder="Saisissez votre numéro" className="w-full p-2 border focus:outline-none focus:ring focus:ring-teal-400 rounded-lg border-gray-300 placeholder:italic placeholder:text-slate-300 placeholder:text-sm placeholder:font-serif basis-4/5" required />
            </div>
            <div className="flex flex-row py-4">
              <label htmlFor="email" className="basis-1/5 text-gray-700 dark:text-slate-100 font-display">Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Saisissez votre e-mail" className="w-full p-2 border focus:outline-none focus:ring focus:ring-teal-400 rounded-lg border-gray-300 placeholder:italic placeholder:text-slate-300 placeholder:text-sm placeholder:font-serif basis-4/5" required />
            </div>
            <div className="flex flex-row py-4">
              <label htmlFor="objet" className="basis-1/5 dark:text-slate-100 text-gray-700">Objet:</label>
              <input type="text" name="objet" value={formData.objet} onChange={handleChange} placeholder="Saisissez l'objet du message" className="w-full p-2 border focus:outline-none focus:ring focus:ring-teal-400 rounded-lg border-gray-300 placeholder:italic placeholder:text-slate-300 placeholder:text-sm placeholder:font-serif basis-4/5" required />
            </div>
            <div className="flex flex-row py-4">
              <label htmlFor="message" className="text-gray-700 basis-1/5 dark:text-slate-100 font-display">Message:</label>
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Saisissez votre message ici" className="w-full p-2 border focus:outline-none focus:ring focus:ring-teal-400 rounded-lg border-gray-300 placeholder:italic placeholder:text-slate-300 placeholder:text-sm basis-4/5 placeholder:font-serif"  required />
            </div>
            <div className="flex justify-center py-4">
              <button type="submit" disabled={isSubmitting} className="px-6 py-2  bg-teal-500  hover:bg-teal-600 focus:ring focus:ring-teal-400 w-full p-2 bg-gradient-to-r from-sky-700 to-lime-500  text-white rounded-lg font-display focus:outline-none">
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
