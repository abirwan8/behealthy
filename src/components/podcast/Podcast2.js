import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

import Hiv from './Assets/Audio/Podcast-HIV.mp3';
import pod from './Assets/pod.jpeg';


const Podcast2 = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <Modal
        show={show}
        onHide={handleClose}
        backpodop="static"
        keyboard={false}>
            <Modal.Header closeButton>
            <Modal.Title className='fw-bold'>Rintik Waduh</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h5 className='fw-bold'>PODCAST VERSUS | Tips Diet</h5>
            <small>Diet yang sehat adalah mengkonsumsi makanan yang seimbang tidak kelebihan karbohidrat dan tidak kelebihan protein. Dengarkan podcast kami untuk mengetahui bagaimana cara diet sehat yang benar.</small>
            <audio controls class="audiplay" className='mt-4' style={{ width: '464px' }} no-download>
                <source
                src={Hiv}
                type="audio/mp3"/>
            </audio>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="info" className='text-light' size='sm' onClick={handleClose}>
                Tutup
            </Button>
            </Modal.Footer>
        </Modal>


        <h3 className='mt-4 fw-bold'>Dengarkan Podcast Terkini Seputar Kesehatan</h3>
        <Card className='container bayangan mt-4' border='light' style={{ borderRadius: '6px', height: 'auto' }}>

            <div className='row lis'>
                <div className='col-lg-2 col-md-2 col-sm-12 p-0'>
                    <img src={pod} className= 'p-3' style={{ borderRadius: '25px', width: '220px' }}></img>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-10'>
                    <h5 className='pt-5 ps-5 fw-bold'>PODCAST VERSUS | Mental Health</h5>
                    <small className='ps-5 text-muted'><i class="fa-solid fa-circle-user me-2"></i>RINTIK WADUH</small><br/>
                    <small className='ps-5 text-muted'>Mengatasi Mental Health Pada Remaja.</small><br/>  
                    <small className='ps-5 text-muted'>12:05 • 12 Desember 2022</small>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-2'>
                    <h1 className='mt-5 text-info pt-4 text-center h-1'><i class="fa-solid fa-circle-play"  onClick={handleShow}></i></h1>
                </div>
            </div>

            
            <div className='row lis'>
                <div className='col-lg-2 col-md-2 col-sm-12 p-0'>
                    <img src={pod} className= 'p-3' style={{ borderRadius: '25px', width: '220px' }}></img>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-10'>
                    <h5 className='pt-5 ps-5 fw-bold'>PODCAST VERSUS | Tips Diet</h5>
                    <small className='ps-5 text-muted'><i class="fa-solid fa-circle-user me-2"></i>RINTIK WADUH</small><br/>
                    <small className='ps-5 text-muted'>Diet Sehat Tanpa Menyiksa.</small><br/>  
                    <small className='ps-5 text-muted'>12:05 • 12 Desember 2022</small>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-2'>
                    <h1 className='mt-5 text-info pt-4 text-center h-1'><i class="fa-solid fa-circle-play"  onClick={handleShow}></i></h1>
                </div>
            </div>


            <div className='row lis'>
                <div className='col-lg-2 col-md-2 col-sm-12 p-0'>
                    <img src={pod} className= 'p-3' style={{ borderRadius: '25px', width: '220px' }}></img>
                </div>
                <div className='col-lg-8 col-md-6 col-sm-10'>
                    <h5 className='pt-5 ps-5 fw-bold'>PODCAST VERSUS | Tips Cantik</h5>
                    <small className='ps-5 text-muted'><i class="fa-solid fa-circle-user me-2"></i>RINTIK WADUH</small><br/>
                    <small className='ps-5 text-muted'>Mengatasi Jerawat Akibat Hormon</small><br/>  
                    <small className='ps-5 text-muted'>12:05 • 12 Desember 2022</small>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-2'>
                    <h1 className='mt-5 text-info pt-4 text-center h-1'><i class="fa-solid fa-circle-play"  onClick={handleShow}></i></h1>
                </div>
            </div>

           
        </Card>
        </>
    )
}

export default Podcast2;    