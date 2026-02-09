import React, { useState, useEffect } from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { FaBook, FaWhatsapp } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <BootstrapNavbar
            expand="lg"
            fixed="top"
            className={`navbar-custom ${scrolled ? 'navbar-scrolled' : ''}`}
        >
            <Container>
                <BootstrapNavbar.Brand href="#home" className="navbar-brand-custom">
                    <FaBook className="brand-icon" />
                    <span className="brand-text">
                        IEEE Paper <span className="gradient-text">Publishing</span>
                    </span>
                </BootstrapNavbar.Brand>

                <BootstrapNavbar.Toggle aria-controls="navbar-nav" />

                <BootstrapNavbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link onClick={() => scrollToSection('services')} className="nav-link-custom">
                            Services
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('workflow')} className="nav-link-custom">
                            How It Works
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('pricing')} className="nav-link-custom">
                            Pricing
                        </Nav.Link>
                        <Nav.Link onClick={() => scrollToSection('contact')} className="nav-link-custom">
                            Contact
                        </Nav.Link>
                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-custom btn-primary btn-whatsapp"
                        >
                            <FaWhatsapp /> WhatsApp
                        </a>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
