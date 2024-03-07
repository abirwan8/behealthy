import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/podcast/Navbar';
import Podcast1 from './components/podcast/Podcast1';
import Podcast2 from './components/podcast/Podcast2';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Podcast1 />
      <div className='container mt-5'>
        <Podcast2 />
      </div>
      <div className='container mt-5'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
