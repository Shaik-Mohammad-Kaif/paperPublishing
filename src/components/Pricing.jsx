import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheck, FaRocket, FaStar } from 'react-icons/fa';
import './Pricing.css';

const Pricing = () => {
    const pricingPlans = [
        {
            name: 'IEEE Conference Paper',
            price: '3,500',
            maxPrice: '4,000',
            recommended: false,
            features: [
                'Conference selection guidance',
                'IEEE standard formatting',
                'Plagiarism check & reduction',
                'Abstract optimization',
                'Reference formatting',
                'Unlimited revisions',
                '24/7 email support',
                'Submission assistance'
            ],
            color: 'purple'
        },
        {
            name: 'Journal Paper Publishing',
            price: '4,500',
            maxPrice: '5,000',
            recommended: true,
            features: [
                'Journal selection support',
                'Complete manuscript preparation',
                'Advanced plagiarism reduction',
                'Quality enhancement',
                'Figure & table formatting',
                'Unlimited revisions',
                'Priority support',
                'Complete submission guidance'
            ],
            color: 'gradient'
        }
    ];

    return (
        <section className="pricing-section section bg-gradient-light" id="pricing">
            <Container>
                <div className="section-header text-center">
                    <div className="badge-custom mb-3">Transparent Pricing</div>
                    <h2>Affordable & Professional Rates</h2>
                    <p className="section-description">
                        Clear, competitive pricing with no hidden costs. Pay only for the services you need.
                    </p>
                </div>

                <Row className="justify-content-center g-4">
                    {pricingPlans.map((plan, index) => (
                        <Col key={index} lg={5} md={6}>
                            <div className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
                                {plan.recommended && (
                                    <div className="recommended-badge">
                                        <FaStar /> Most Popular
                                    </div>
                                )}

                                <div className="pricing-header">
                                    <h3>{plan.name}</h3>
                                    <div className="price-display">
                                        <div className="price-tag">
                                            <span className="price-currency">₹</span>
                                            {plan.price}
                                        </div>
                                        <div className="price-range">to ₹{plan.maxPrice}</div>
                                    </div>
                                </div>

                                <ul className="pricing-features">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx}>
                                            <FaCheck className="check-icon" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a href="#contact" className="btn-custom btn-primary w-100">
                                    <FaRocket /> Get Started
                                </a>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="pricing-note">
                    <div className="note-card">
                        <h4>📌 Important Disclaimer</h4>
                        <p>
                            While we provide comprehensive support and ensure your paper meets all
                            publication standards, final acceptance depends on the conference or journal's
                            peer review process. We guarantee professional formatting, plagiarism-free content,
                            and expert guidance, but cannot guarantee publication acceptance as this is
                            determined by the publication's editorial board.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Pricing;
