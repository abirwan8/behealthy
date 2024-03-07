import React, { useState } from 'react';

import art from "./Assets/poto1.webp";
import art1 from "./Assets/foto1.jpg";
import art2 from "./Assets/foto2.jpg";
import art3 from "./Assets/foto3.jpg";
import art4 from "./Assets/foto4.jpg";

const Artikel = () => {
  return (
    <>
    <h3 className='mt-4 fw-bold'>Baca Artikel Terkini Seputar Kesehatan</h3>
	<p>Artikel pilihan hanya untuk kamu</p>
			<div className="main-news section">
				<div className="row">
					<div className="image col-sm-12 col-md-6 col-xs-12 col-lg-6 mb-3">
						<img className="thumb mb-3" src={art}></img>
						<h3>
							<a className="fs-4 text-dark fw-bold" href="Detail">
								Ayo Selamatkan Gigimu
							</a>
						</h3>
					</div>
					<div className="col-sm-12 col-md-6 col-xs-12 col-lg-6">
						<div className="row">
							<div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 mmb-3">
								<div className="image image-sm mb-1">
                  					<img className="thumb mb-3" src={art1}></img>
								</div>
								<h3 className="mb-4">
									<a href="Detail" className='text-dark'>
									Pentingnya Mental Ibu Pasca Melahirkan
									</a>
								</h3>

								<div className="image image-sm mb-1">
                					<img className="thumb mb-3" src={art2}></img>
								</div>
								<h3 className="mb-4">
									<a href="Detail" className='text-dark'>
									Cegah Penularan HIV AIDS Dengan Konsep ABCDE
									</a>
								</h3>
							</div>

							<div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 mb-3">
								<div className="image image-sm mb-1">
                  					<img className="thumb mb-3" src={art}></img>
								</div>
								<h3 className="mb-4">
									<a href="Detail" className='text-dark'>
										Apakah Penting Kesehatan Mental Bagi Remaja?
									</a>
								</h3>

								<div className="image image-sm mb-1">
                  					<img className="thumb mb-3" src={art4}></img>
								</div>
								<h3 className="mb-4">
									<a href="Detail" className='text-dark'>
										Tanda - Tanda Anak Terserang DBD
									</a>
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		<hr/>
			<div class="section mt-4">
				<div class="section-title">
					<p className='fs-5 fw-bold'>Artikel Lainnya</p>
				</div>

				<div class="row mt-2">
					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={art4} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						Tanda-Tanda Anak Terserang DBD
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={art1} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						5 Tanda Melahirkan Sudah Dekat
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">			
							<img src={art2} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						Kurang Gizi Buat Remaja Kurang Energi
						</a>
					</div>

					<div class="col-sm-12 col-xs-12 col-md-3 col-lg-3 mb-3">
						<div class="mb-2 image image-xs">
							<img src={art3} className='thumb' style={{ borderRadius: '6px' }}></img>
						</div>
						<a href="Detail" className='text-dark'>
						Cegah Penularan HIV AIDS Dengan Konsep ABCDE
						</a>
					</div>

				</div>
			</div>
    	</>
  	);
}

export default Artikel;