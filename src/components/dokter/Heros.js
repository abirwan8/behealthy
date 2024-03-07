import React from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Heros = () => {
    return(
        <section className="home">
            <div class="container pt-5 "> 
            <h2 class="fw-bold pt-4 text-light">Cari Dokter yang Kamu Inginkan</h2>
            <p class="text-light">Temukan dokter dan buat janji dengan mudah</p>
            <div class="row">
                <div class="col-sm-7">
                    <InputGroup className="pt-2">
                        <Form.Control
                        type="search"
                        placeholder="Search"
                        />
                        <InputGroup.Text id="inputGroup-sizing-default" className="bg-info text-light">
                        Cari Dokter
                        </InputGroup.Text>
                    </InputGroup>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Heros;