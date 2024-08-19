import  { useState, useEffect } from 'react';

const Nav = () => {
  let Links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Services", link: "#services" },
    { name: "Destination", link: "#portfolio" },
    { name: "Contact", link: "#contact" },
  ];
  
  let [open, setOpen] = useState(false);

  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navlinks = document.querySelectorAll('header nav a');

    const onScroll = () => {
      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navlinks.forEach(link => link.classList.remove('active'));
          document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-50 dark:bg-neutral-800 bg-white">
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center  text-gray-800'>
        <img src={darkMode ? "./public/images/logo.png" : "./public/images/logoblanc.jpg"} className='w-14 h-14' alt="Logo" />
          
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <img src={open ? './public/images/close.svg' : './public/images/menu.svg'} alt="Menu Icon" className='w-8 h-8 ' />
        </div>

        <nav className={`md:flex md:items-center block md:pb-0 pb-12 absolute md:static dark:bg-neutral-800 bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-12  md:pr-0 pr-56 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
          {
            Links.map((link) => (
              <a key={link.name} href={link.link} className='md:ml-8 text-lg md:my-0 my-7 font-medium font-display hover:text-sky-600 duration-500 hover:underline dark:text-slate-100 flex text-gray-700 '>
                {link.name}
              </a>
            ))
          }
           <div onClick={() => setDarkMode(!darkMode)} className="cursor-pointer">
            <img src={darkMode ? './public/images/light.svg' : './public/images/dark.svg'} alt="Dark Mode Toggle" className='w-12 h-6 px-2 transition-all duration-500' />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
