import React, { useState } from 'react';
import Button from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

function Kategori() {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Semua', value: '1' },
    { name: 'Dokter Gigi', value: '2' },
    { name: 'Dokter Mata', value: '3' },
    { name: 'Dokter Gizi', value: '4' },
    { name: 'Dokter Kandungan', value: '5' },
    { name: 'Dokter Anak', value: '6' },
    { name: 'Spesialis Jantung', value: '7' },
    { name: 'Psikolog', value: '8' },
    { name: 'Forensik', value: '9' },
    { name: 'Spesialis Kanker', value: '10' },
  ];

  return (
    <div className='container mt-4'>
    {radios.map((radio, idx) => (
        <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            className="mx-2"
            type="radio"
            size='sm'
            variant={idx % 2 ? 'outline-info' : 'outline-info'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}>
            {radio.name}
        </ToggleButton>
    ))}
    </div>
  );
}

export default Kategori;

// const Kategori = () => {
//     return(
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-12">

//                 </div>
//             </div>
//         </div>       
//     )
// }