import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/dokter/Navbar';
import Heros from './components/dokter/Heros';
import Daftar from './components/dokter/Daftar';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="App">
      <div className='mt-5'>
        <Navbar />
        <Heros />
        <Daftar />
      </div>
      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
