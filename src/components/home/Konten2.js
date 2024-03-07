import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import dr from "./Assets/dokter1.jpg";

const podcast = () => {
    return(
        <>
        <Card className='container bayangan mt-5 bg-info' border='light' style={{ borderRadius: '8px' }}>
            <div className='row'>
                <div className='col-md-6 col-sm-6'>
                    <h1 className='pt-5 px-4 text-light fw-bold'>Dengarkan Podcast Seputar Kesehatan Secara Gratis!</h1>
                    <p className='px-4 pt-1 text-light'>Temukan podcast yang kamu inginkan untuk membantu mengatasi masalah kesehatanmu sekarang juga.</p>
                    <Button variant="light" className='mx-4 text-info mb-3' href='Podcast'>Dengarkan Sekarang</Button>
                </div>
                <div className='col-md-6 col-sm-6 p-0'>
                    <img src={dr} className='img-fluid p-0' style={{ borderRadius: '6px' }}></img>
                </div>
            </div>
        </Card>
      </>
    )
}

export default podcast;