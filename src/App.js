import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import Konten from './components/home/Konten';
import Konten1 from './components/home/Konten1';
import Konten2 from './components/home/Konten2';
import Konten3 from './components/home/Konten3';
import Slick from './components/home/Slick';
import Footer from './components/home/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mt-5 mb-4 container'>
        <Hero />
        <Konten />
        <Konten1 />
        <Konten2 />
        <Konten3 />
      </div>
      
      {/* <center>
        <div>
          <Slick />
        </div>
      </center> */}

      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
