import { StyledContainer } from 'components/ContactForm/ContactForm.styled';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { NavListLink } from './Layout.styled';
import LogoBook from '../../img/LogoBook.png';
import { Nav, Offcanvas } from 'react-bootstrap';
import Footer from 'components/Footer/Footer';

export const Layout = () => {
  const expand = 'sm';
  return (
    <>
      <Navbar key={expand} expand={expand} className="mb-3">
        <StyledContainer>
          <Navbar.Brand href="./goit-react-hw-07-phonebook">
            <img src={LogoBook} alt="Logo" width={120} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Navbar.Brand href="./goit-react-hw-06-phonebook">
                <img src={LogoBook} alt="Logo" width={120} />
              </Navbar.Brand>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 gap-15">
                <NavListLink to="/" end>
                  Home
                </NavListLink>
                <NavListLink to="contacts">My Contacts</NavListLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </StyledContainer>
      </Navbar>
      <Outlet />
      <Footer />
    </>
  );
};
