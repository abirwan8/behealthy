import React, { Component } from "react";
import Slider from "react-slick";

import dr from "./Assets/dokter.jpg";

export default class PauseOnHover extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
      }
      next() {
        this.slider.slickNext();
      }
      previous() {
        this.slider.slickPrev();
      }

    render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
      <div>
        <div className="section mt-4">
			<div className="section-title">
				<span className='fw-bold'>Artikel Lainnya</span>
			</div>
            <div className="col-md-4">
                <div style={{ textAlign: "center" }} className='float-end'>
                <a onClick={this.previous}>
                    <i class="fa-solid fa-circle-arrow-left me-2" style={{ color: '#0dcaf0' }}></i>
                </a>
                <a onClick={this.next}>
                    <i class="fa-solid fa-circle-arrow-right me-4" style={{ color: '#0dcaf0' }}></i>
                </a>
                </div>
            </div>
        </div>

        <Slider ref={c => (this.slider = c)} {...settings}>
            <div className="row mt-3">
                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                    <div className="mb-2 image image-xs">
                        <img className="thumb mb-3" src={dr}></img>
                    </div>
                        <a href="detail.html" className='text-dark'>India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks</a>
                </div>

                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                    <div className="mb-2 image image-xs">
                        <img className="thumb mb-3" src={dr}></img>
                            </div>
                        <a href="detail.html" className='text-dark'>India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks</a>
                </div>

                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                    <div className="mb-2 image image-xs">
                        <img className="thumb mb-3" src={dr}></img>
                            </div>
                        <a href="detail.html" className='text-dark'>India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks</a>
                </div>

                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                    <div className="mb-2 image image-xs">
                        <img className="thumb mb-3" src={dr}></img>
                            </div>
                        <a href="detail.html" className='text-dark'>India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks</a>
                </div>

                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                    <div className="mb-2 image image-xs">
                        <img className="thumb mb-3" src={dr}></img>
                            </div>
                        <a href="detail.html" className='text-dark'>India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks</a>
                </div>

                <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3">
                    <div className="mb-2 image image-xs">
                        <img className="thumb mb-3" src={dr}></img>
                            </div>
                        <a href="detail.html" className='text-dark'>India vs England 4th T20 : Match Prediction, Probabale XI, Fantasy Picks</a>
                </div>
            </div>
        </Slider>
      </div>
    );
  }
}