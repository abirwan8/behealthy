import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/home/Navbar';
import Detail from './components/home/DetailArtikel';
import Footer from './components/home/Footer';


function App() {
  return (
    <div className="App">
        <Navbar />
        <Detail />
      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
