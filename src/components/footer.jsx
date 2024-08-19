
const Footer = () => {
  return (
    <footer className="bg-gray-800 bg-[url('./public/images/bgfooter.svg')] bg-no-repeat bg-cover text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Section 1 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="text-lg font-bold mb-4 font-display">À propos</h5>
            <p className="text-gray-400 font-display">NLR & ASSOCIES est un cabinet d’orientations et d’études à l’étranger, en partenariat avec les meilleures écoles et universités à travers le monde.</p>
          </div>
          
          {/* Section 2 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="text-lg font-bold mb-4 font-display">Liens utiles</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:underline font-display">Home</a></li>
              <li><a href="#about" className="hover:underline font-display">About</a></li>
              <li><a href="#services" className="hover:underline font-display">Services</a></li>
              <li><a href="#portfolio" className="hover:underline font-display">Destination</a></li>
              <li><a href="#contact" className="hover:underline font-display">Contact</a></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="text-lg font-bold mb-4 font-display">Contact</h5>
            <ul className="space-y-2 ">
              <li className=" font-display">Email: nrlassocies@gmail.com</li>
              <li className=" font-display">Téléphone: +237 6 21 20 37 21</li>
              <li className=" font-display">Adresse: Yaounde</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h5 className="text-lg font-bold mb-4 font-display">Suivez-nous</h5>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><img src="/path/to/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-400"><img src="/path/to/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-400"><img src="/path/to/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
              <a href="#" className="hover:text-gray-400"><img src="/path/to/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-400">
          <p className=" font-display">&copy; 2024 NLR & ASSOCIES. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
