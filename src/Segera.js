import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

function App() {
    return (
    <div className='App'>
      <div  style={{ marginLeft: '560px', marginTop: '260px' }}>
         <Spinner animation="grow" className='me-3' variant="info" />
         <Spinner animation="grow" size="sm" className='me-3'/>
         <Spinner animation="grow" variant="info" />   
      </div>
        <h3 className='mt-2 text-center fw-bold'>Maaf, halaman ini belum tersedia</h3>
        <Button variant="info" size='sm' className='mt-2 text-light' href='Podcast' style={{ marginLeft: '590px' }}>Kembali</Button>
    </div>
    );
  }
  
export default App;