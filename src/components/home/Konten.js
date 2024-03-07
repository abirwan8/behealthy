import Card from 'react-bootstrap/Card';
import janji from './Assets/icon/janji.png';
import dengar from './Assets/icon/dengar.png';
import baca from './Assets/icon/baca.png';

const panel = () => {
    return(
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className="col-12 panel">
                    <div className="row ms-5">
                        <div className="col-lg mb-3">
                            <img src={janji} className='float-start' width={80}></img>
                            <h4 className="my-4 text-light fw-bold">Buat Janji Dokter</h4>
                        </div>
                        <div className="col-lg mb-3">
                            <img src={dengar} className='float-start' width={80}></img>
                            <h4 className="my-4 text-light fw-bold">Dengarkan Podcast</h4>
                        </div>
                        <div className="col-lg">
                            <img src={baca} className='float-start' width={40}></img>
                            <h4 className="my-4 text-light fw-bold">Baca Artikel</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export  default panel;