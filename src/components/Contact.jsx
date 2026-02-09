import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        paperType: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic will be integrated with backend
        alert('Thank you for your inquiry! We will contact you shortly.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            paperType: '',
            message: ''
        });
    };

    return (
        <section className="contact-section contact-purple-bg section" id="contact">
            <Container>
                <div className="section-header text-center">
                    <div className="badge-custom mb-3">Get In Touch</div>
                    <h2>Start Your Publishing Journey</h2>
                    <p className="section-description">
                        Have questions or ready to get started? Contact us and we'll respond within 24 hours
                    </p>
                </div>

                <Row className="g-4">
                    <Col lg={5}>
                        <div className="contact-info">
                            <h3>Contact Information</h3>
                            <p className="contact-intro">
                                Reach out to us through any of these channels. We're here to help you succeed.
                            </p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">
                                        <FaEnvelope />
                                    </div>
                                    <div className="method-details">
                                        <h5>Email Us</h5>
                                        <a href="mailto:support@ieeepublishing.com">support@ieeepublishing.com</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon">
                                        <FaPhone />
                                    </div>
                                    <div className="method-details">
                                        <h5>Call Us</h5>
                                        <a href="tel:+919999999999">+91 99999 99999</a>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="method-icon whatsapp">
                                        <FaWhatsapp />
                                    </div>
                                    <div className="method-details">
                                        <h5>WhatsApp</h5>
                                        <a
                                            href="https://wa.me/919999999999"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Chat with us instantly
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="working-hours">
                                <h5>Working Hours</h5>
                                <p>Monday - Saturday: 9:00 AM - 8:00 PM</p>
                                <p>Sunday: 10:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <div className="contact-form-wrapper">
                            <Form onSubmit={handleSubmit} className="contact-form">
                                <Row className="g-3">
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Your Name *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Enter your full name"
                                                required
                                                className="form-control-custom"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Email Address *</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your.email@example.com"
                                                required
                                                className="form-control-custom"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Phone Number *</Form.Label>
                                            <Form.Control
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+91 9999999999"
                                                required
                                                className="form-control-custom"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Label>Paper Type *</Form.Label>
                                            <Form.Select
                                                name="paperType"
                                                value={formData.paperType}
                                                onChange={handleChange}
                                                required
                                                className="form-control-custom"
                                            >
                                                <option value="">Select paper type</option>
                                                <option value="conference">IEEE Conference Paper</option>
                                                <option value="journal">Journal Paper</option>
                                                <option value="both">Both</option>
                                                <option value="consultation">General Consultation</option>
                                            </Form.Select>
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label>Your Message</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell us about your research paper or any questions you have..."
                                                className="form-control-custom"
                                            />
                                        </Form.Group>
                                    </Col>

                                    <Col md={12}>
                                        <button type="submit" className="btn-custom btn-primary btn-lg w-100">
                                            <FaPaperPlane /> Send Message
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;
