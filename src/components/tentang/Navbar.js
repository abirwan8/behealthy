// import './components/home/Home.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import logo from './Assets/logo.png';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='navbar position-fixed w-100' variant="light">
      <Container>
        <Navbar.Brand className='text-info fw-bold' href="/">
          <img
              alt="logo"
              src={logo}
              width="120"
              height="40"
              className="d-inline-block align-top"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto px-4">
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="Dokter">Cari Dokter</Nav.Link>
            <Nav.Link href="Podcast">Podcast</Nav.Link>
            <Nav.Link href="Tentang" className='fw-bold text-info' active>Tentang Kami</Nav.Link>
          </Nav>
          <Nav>
          <ButtonGroup size="sm">
            <Button variant='info' className='text-light'>Masuk</Button>
            <Button variant='outline-info'>Daftar Sekarang</Button>
          </ButtonGroup>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;