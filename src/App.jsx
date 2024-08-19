import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Destination';
import Contact from './components/Contact';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;
