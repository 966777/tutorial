

import React from 'react';
import './servicepage.css';

function ServicePage() {
    const services = [
        {
            title: 'Web Development',
            description: 'We create responsive and dynamic websites tailored to your needs.',
            icon: '🌐', // You can replace this with an actual icon/image if preferred
        },
        {
            title: 'App Development',
            description: 'We develop user-friendly and high-performance mobile apps.',
            icon: '📱',
        },
        {
            title: 'Digital Marketing',
            description: 'Boost your online presence with our digital marketing expertise.',
            icon: '📈',
        },
    ];

    return (
        <div className="what-we-provide">
            <h2 className="section-title">What We Provide</h2>
            <div className="services-container">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ServicePage;
