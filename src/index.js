import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import App from './App';
import Dokter from './Dokter';
import Podcast from './Podcast';
import Tentang from './Tentang';
import Detail from './DetailArtikel';
import Segera from './Segera';

const rootElement = document.getElementById('root');

render(
  <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="Dokter" element={<Dokter />}/>
          <Route path="Podcast" element={<Podcast />}/>
          <Route path="Tentang" element={<Tentang />}/>
          <Route path="Detail" element={<Detail />}/>
          <Route path="Segera" element={<Segera />}/>
      </Routes>
  </BrowserRouter>,
  rootElement
);
