import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    FaClipboardList,
    FaCheck,
    FaComments,
    FaPaperPlane
} from 'react-icons/fa';
import './Workflow.css';

const Workflow = () => {
    const steps = [
        {
            number: '01',
            icon: <FaClipboardList />,
            title: 'Submit Your Paper or Idea',
            description: 'Share your research paper, topic, or idea with us through our contact form or WhatsApp. We\'ll review it and provide initial feedback.'
        },
        {
            number: '02',
            icon: <FaCheck />,
            title: 'Formatting & Plagiarism Check',
            description: 'Our experts format your paper according to IEEE standards and perform comprehensive plagiarism checks to ensure originality.'
        },
        {
            number: '03',
            icon: <FaComments />,
            title: 'Review & Corrections',
            description: 'Receive detailed peer review feedback and expert corrections to improve the quality, clarity, and impact of your research.'
        },
        {
            number: '04',
            icon: <FaPaperPlane />,
            title: 'Submission Guidance',
            description: 'Get complete support for conference/journal selection and submission process until your paper is successfully published.'
        }
    ];

    return (
        <section className="workflow-section workflow-purple-bg section" id="workflow">
            <Container>
                <div className="section-header text-center">
                    <div className="badge-custom mb-3">How It Works</div>
                    <h2>Simple & Transparent Process</h2>
                    <p className="section-description">
                        Our proven 4-step process ensures your research paper gets published successfully
                    </p>
                </div>

                <div className="workflow-container">
                    <Row className="g-4">
                        {steps.map((step, index) => (
                            <Col key={index} lg={6}>
                                <div className="workflow-card">
                                    <div className="workflow-number">{step.number}</div>
                                    <div className="workflow-icon-wrapper">
                                        <div className="workflow-icon-bg">
                                            {step.icon}
                                        </div>
                                    </div>
                                    <div className="workflow-content">
                                        <h4>{step.title}</h4>
                                        <p>{step.description}</p>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="workflow-connector"></div>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                <div className="workflow-cta text-center">
                    <div className="cta-card">
                        <h3>Ready to Get Started?</h3>
                        <p>Join hundreds of researchers who have successfully published their papers with our support</p>
                        <a href="#contact" className="btn-custom btn-primary btn-lg">
                            Start Your Publishing Journey
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Workflow;
