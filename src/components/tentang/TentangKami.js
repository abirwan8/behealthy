import React from "react";
import { Container } from "react-bootstrap";

import gbr1 from './Assets/poto1.webp';


const Tentang = () => {
    return(
        <section>
            <div className="tentang container">
            <div className="row">
            <div className="d-flex mt-4 pt-5">
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <img src={gbr1} alt='img2' className="img-fluid " style={{ borderRadius: '6px' }}></img>
                </div>
                <div className="ps-4 mt-3 col-lg-8 col-md-12 col-sm-12">
                    <h3 className="fw-bold">BeHealthy</h3>
                    <p className='mt-3 text-muted' style={{ textAlign: 'justify' }}>Be healthy adalah platform kesehatan  dengan fitur terlengkap yang selalu hadir memberikan tips dan informasi terbaru mengenai kesehatan. Kami memudahkan anda untuk mewujudkan diri yang sehat. Kami juga mempermudah anda dalam menangani layanan kesehatan, hanya dengan be healthy dimanapun kapanpun bisa sehat. <br/> <br/>Semua konten BeHealthy dibuat berdasarkan masukan dari pakar medis, spesialis, dan pekerja kesehatan profesional sesuai bidangnya masing-masing. Mereka memastikan seluruh konten ditulis secara akurat dari sisi medis dan non-medis. Mereka juga memastikan konten tersebut berasal dari sumber terpercaya, merujuk pada riset terkini dan teruji secara ilmiah.</p>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Tentang;