import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRocket, FaCheckCircle } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-section bg-pattern" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="hero-content">
                        <div className="badge-custom mb-3 animate-fade-in">
                            IEEE Certified Publishing Support
                        </div>

                        <h1 className="hero-title animate-fade-in-up">
                            Get Your Research Paper Published in{' '}
                            <span className="gradient-text">IEEE Conferences & Journals</span>
                        </h1>

                        <p className="hero-description animate-fade-in-up">
                            Professional end-to-end support for B.Tech, M.Tech, PhD students, research scholars,
                            faculty members, and working professionals. Expert IEEE formatting, plagiarism reduction,
                            peer review, and submission guidance.
                        </p>

                        <div className="hero-features mb-4 animate-fade-in-up">
                            <div className="feature-item">
                                <FaCheckCircle className="feature-icon" />
                                <span>100% IEEE Standard Formatting</span>
                            </div>
                            <div className="feature-item">
                                <FaCheckCircle className="feature-icon" />
                                <span>Expert Plagiarism Reduction</span>
                            </div>
                            <div className="feature-item">
                                <FaCheckCircle className="feature-icon" />
                                <span>Complete Submission Support</span>
                            </div>
                        </div>

                        <div className="hero-cta animate-fade-in-up">
                            <button onClick={scrollToContact} className="btn-custom btn-primary btn-lg">
                                <FaRocket /> Get Your Paper Published
                            </button>
                            <button onClick={scrollToContact} className="btn-custom btn-secondary btn-lg">
                                Free Consultation
                            </button>
                        </div>

                        <div className="hero-stats animate-fade-in">
                            <div className="stat-item">
                                <div className="stat-number gradient-text">500+</div>
                                <div className="stat-label">Papers Published</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number gradient-text">98%</div>
                                <div className="stat-label">Success Rate</div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-number gradient-text">24hrs</div>
                                <div className="stat-label">Quick Turnaround</div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} className="hero-image-col">
                        <div className="hero-image-container animate-float">
                            <div className="hero-visual">
                                <div className="visual-card card-1">
                                    <div className="card-icon">📄</div>
                                    <div className="card-text">IEEE Conference</div>
                                </div>
                                <div className="visual-card card-2">
                                    <div className="card-icon">📚</div>
                                    <div className="card-text">Journal Publishing</div>
                                </div>
                                <div className="visual-card card-3">
                                    <div className="card-icon">✅</div>
                                    <div className="card-text">100% Compliant</div>
                                </div>
                                <div className="central-graphic">
                                    <div className="graphic-circle"></div>
                                    <div className="graphic-text">IEEE</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
