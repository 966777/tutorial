import React from 'react';
import './home.css';
import Card from '../Cards/Card';
import { cardsData } from '../../App';
import ServicePage from '../services/ServicePage';

function HomePage() {
    return (
        <>
            <section className="hero">
                <div className="hero-content">
                    <h1>Creative journeys start here.</h1>
                    <p>Get your inspiration flowing with our video, design, photo, and UI/UX apps.</p>
                    <div className="buttons">ss
                        <button className="btn secondary">Explore Creative Cloud</button>
                    </div>
                </div>
                <div className="background"></div>
            </section>
            <div className="card-container">
                {cardsData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
            <ServicePage />
        </>
    );
}

export default HomePage;
