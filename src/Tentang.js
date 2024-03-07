import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/tentang/Navbar';
import Footer from './components/home/Footer';
import Tentang from './components/tentang/TentangKami';

function App() {
  return (
    <div className="App">
      <div className='mt-5'>
        <Navbar />
        <Tentang />
        </div>
      <div className='container mt-5 float-bottom'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
