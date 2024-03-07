import pod from './Assets/pod.jpeg';
import Card from 'react-bootstrap/Card';


const Podcast1 = () => {
    return(
        <div className='bg-info pt-5 mt-5'>
        <div className="row" style={{ marginRight: '40px', marginLeft: '40px' }}>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-3">
                <h3 className='fw-bold mt-4 text-light'>Rekomendasi Podcast Terbaik Hanya Untukmu</h3>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center mb-2">
                <Card border='light' style={{ width: '10rem' }} className='bayangan kartu'>
                <Card.Img className='p-2' variant="top" src={pod}  width={165} style={{ borderRadius: '15px'}} />
                <Card.Body>
                    <a className='fw-bold text-dark' href="Segera" style={{ textDecoration: 'none' }}>Rintik Waduh</a>
                </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center  mb-2">
                <Card border='light' style={{ width: '10rem' }} className='bayangan kartu'>
                <Card.Img className='p-2' variant="top" src={pod}  width={165} style={{ borderRadius: '15px'}} />
                <Card.Body>
                    <a className='fw-bold text-dark' href="Segera" style={{ textDecoration: 'none' }}>Podcare</a>
                </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center mb-2">
                <Card border='light' style={{ width: '10rem' }} className='bayangan kartu'>
                <Card.Img className='p-2' variant="top" src={pod}  width={165} style={{ borderRadius: '15px'}} />
                <Card.Body>
                    <a className='fw-bold text-dark' href="Segera" style={{ textDecoration: 'none' }}>Podkesmas</a>
                </Card.Body>
                </Card>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 d-flex justify-content-center mb-2">
                <Card border='light' style={{ width: '10rem' }} className='bayangan kartu'>
                <Card.Img className='p-2' variant="top" src={pod}  width={165} style={{ borderRadius: '15px'}} />
                <Card.Body>
                    <a className='fw-bold text-dark' href="Segera" style={{ textDecoration: 'none' }}>Meditalk</a>
                </Card.Body>
                </Card>
            </div>
        </div>
        <br></br>
        </div>
    )
}

export default Podcast1;