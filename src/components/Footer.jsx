import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="g-4">
                    <Col lg={4} md={6}>
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <FaBook />
                                <span>IEEE Paper Publishing</span>
                            </div>
                            <p className="footer-description">
                                Professional research paper publishing support for students, scholars,
                                and working professionals. Expert IEEE formatting, plagiarism reduction,
                                and complete submission guidance.
                            </p>
                        </div>
                    </Col>

                    <Col lg={3} md={6}>
                        <h5 className="footer-heading">Our Services</h5>
                        <ul className="footer-links">
                            <li><a href="#services">IEEE Conference Papers</a></li>
                            <li><a href="#services">Journal Publishing</a></li>
                            <li><a href="#services">Plagiarism Reduction</a></li>
                            <li><a href="#services">IEEE Formatting</a></li>
                            <li><a href="#services">Paper Review</a></li>
                            <li><a href="#services">Submission Guidance</a></li>
                        </ul>
                    </Col>

                    <Col lg={2} md={6}>
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#workflow">How It Works</a></li>
                            <li><a href="#pricing">Pricing</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </Col>

                    <Col lg={3} md={6}>
                        <h5 className="footer-heading">Contact Us</h5>
                        <ul className="footer-contact">
                            <li>
                                <FaEnvelope />
                                <a href="mailto:support@ieeepublishing.com">support@ieeepublishing.com</a>
                            </li>
                            <li>
                                <FaPhone />
                                <a href="tel:+919999999999">+91 99999 99999</a>
                            </li>
                            <li>
                                <FaWhatsapp />
                                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                                    WhatsApp Support
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>

                <div className="footer-bottom">
                    <p className="copyright">
                        © {currentYear} IEEE Paper Publishing Support. All rights reserved.
                    </p>
                    <p className="footer-note">
                        Designed for researchers, by research professionals.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
