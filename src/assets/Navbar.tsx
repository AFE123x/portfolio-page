import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'experience', 'project', 'contact'];
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Navbar
            className="fixed-top navbar-dark"
            bg="dark"
            variant="dark"
            expand="lg"
        >
          <Container>
            <Navbar.Brand href="#home" onClick={(e) => handleNavClick(e as any, 'home')}>
              <span className="brand-text">Arun Felix</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link 
                  href="#home" 
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={(e) => handleNavClick(e as any, 'home')}
                >
                  Home
                </Nav.Link>
                <Nav.Link 
                  href="#experience"
                  className={activeSection === 'experience' ? 'active' : ''}
                  onClick={(e) => handleNavClick(e as any, 'experience')}
                >
                  Experience
                </Nav.Link>
                <Nav.Link 
                  href="#project"
                  className={activeSection === 'project' ? 'active' : ''}
                  onClick={(e) => handleNavClick(e as any, 'project')}
                >
                  Projects
                </Nav.Link>
                <Nav.Link 
                  href="#contact"
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={(e) => handleNavClick(e as any, 'contact')}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default AppNavbar;