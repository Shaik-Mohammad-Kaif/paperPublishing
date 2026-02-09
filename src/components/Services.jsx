import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaFileAlt,
    FaCheckDouble,
    FaBookOpen,
    FaUserGraduate,
    FaEdit,
    FaHandshake
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: <FaFileAlt />,
            title: 'IEEE Conference Paper Publishing',
            description: 'Professional support for publishing your research paper in prestigious IEEE conferences with guaranteed formatting compliance.',
            features: [
                'Conference selection guidance',
                'IEEE standard formatting',
                'Abstract optimization',
                'Reference formatting'
            ],
            price: '₹3,500 - ₹4,000'
        },
        {
            icon: <FaBookOpen />,
            title: 'Journal Paper Publishing',
            description: 'End-to-end assistance for getting your research published in reputed IEEE and Scopus-indexed journals.',
            features: [
                'Journal selection support',
                'Manuscript preparation',
                'Quality enhancement',
                'Submission guidance'
            ],
            price: '₹4,500 - ₹5,000'
        },
        {
            icon: <FaCheckDouble />,
            title: 'Plagiarism Reduction',
            description: 'Expert plagiarism checking and reduction services to ensure your paper meets publication standards.',
            features: [
                'Comprehensive plagiarism check',
                'Content paraphrasing',
                'Originality improvement',
                'Multiple revisions'
            ],
            price: 'Custom Quote'
        },
        {
            icon: <FaEdit />,
            title: 'IEEE Formatting & Editing',
            description: 'Professional formatting services to ensure your paper adheres to IEEE publication standards perfectly.',
            features: [
                'Template application',
                'Citation formatting',
                'Figure & table formatting',
                'Grammar check'
            ],
            price: 'Included'
        },
        {
            icon: <FaUserGraduate />,
            title: 'Paper Review & Corrections',
            description: 'Comprehensive peer review and expert corrections to enhance the quality and impact of your research.',
            features: [
                'Technical review',
                'Content improvement',
                'Structure optimization',
                'Clarity enhancement'
            ],
            price: 'Included'
        },
        {
            icon: <FaHandshake />,
            title: 'Submission Guidance',
            description: 'Complete support throughout the submission process, from preparation to final acceptance.',
            features: [
                'Submission assistance',
                'Query handling',
                'Revision support',
                '24/7 consultation'
            ],
            price: 'Included'
        }
    ];

    return (
        <section className="services-section section bg-gradient-light" id="services">
            <Container>
                <div className="section-header text-center">
                    <div className="badge-custom mb-3">Our Services</div>
                    <h2>Comprehensive Research Publishing Support</h2>
                    <p className="section-description">
                        Professional end-to-end services designed specifically for researchers, students, and academics
                    </p>
                </div>

                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col key={index} lg={4} md={6}>
                            <div className="card-custom card-hover-purple service-card">
                                <div className="icon-container">
                                    {service.icon}
                                </div>
                                <h4>{service.title}</h4>
                                <p className="service-description">{service.description}</p>

                                <ul className="service-features">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <FaCheckDouble className="check-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="service-price">
                                    <span className="price-label">Starting from</span>
                                    <span className="price-value gradient-text">{service.price}</span>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
