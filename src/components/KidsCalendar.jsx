import { useState } from 'react';
import kidsQuotes from '../data/kidsQuotes';

function KidsCalendar({ onBack }) {
    // Load flipped cards from localStorage
    const [flippedCards, setFlippedCards] = useState(() => {
        const saved = localStorage.getItem('ramadanKidsCalendar_flipped');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                return [];
            }
        }
        return [];
    });

    const toggleFlip = (index) => {
        setFlippedCards(prev => {
            // Allow flipping and unflipping
            const newFlipped = prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index];
            localStorage.setItem('ramadanKidsCalendar_flipped', JSON.stringify(newFlipped));
            return newFlipped;
        });
    };

    return (
        <div className="kids-calendar-container">
            <div className="kids-calendar-header">
                <button onClick={onBack} className="back-btn">
                    <span className="arrow-icon">◀</span> Zurück zum Dashboard
                </button>
                <div className="header-badge" style={{ margin: '1rem auto' }}>
                    <span className="moon-icon">✨</span>
                    <span>Für die Kleinen</span>
                </div>
                <h2>Ramadan Kalender</h2>
                <p className="subtitle" style={{ color: 'var(--text-secondary)' }}>Jeden Tag eine neue Weisheit entdecken!</p>
            </div>

            <div className="kids-grid">
                {kidsQuotes.map((item, index) => {
                    const isFlipped = flippedCards.includes(index);
                    const dayNumber = index + 1;

                    return (
                        <div
                            key={index}
                            className={`kids-card ${isFlipped ? 'flipped' : ''}`}
                            onClick={() => toggleFlip(index)}
                        >
                            <div className="kids-card-inner">
                                {/* Front of the card (Door) */}
                                <div className="kids-card-front">
                                    <div className="kids-card-day">{dayNumber}</div>
                                    <div className="kids-card-deco">{item.candy}</div>
                                </div>

                                {/* Back of the card (Quote) */}
                                <div className="kids-card-back">
                                    <div className="kids-card-day-small">
                                        Tag {dayNumber} <span style={{ fontSize: '1.2rem', marginLeft: '4px' }}>{item.candy}</span>
                                    </div>
                                    <p className="kids-card-quote">"{item.text}"</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default KidsCalendar;
