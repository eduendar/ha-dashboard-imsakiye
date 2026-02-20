import { useState, useEffect, useCallback, useRef } from 'react';

export default function IftarCountdown({ iftarTime, today }) {
    const [timeLeft, setTimeLeft] = useState(null);
    const [hasPassed, setHasPassed] = useState(false);
    const [hasPlayedEzan, setHasPlayedEzan] = useState(false);
    const audioRef = useRef(null);

    const playEzan = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(error => {
                console.warn('Audio konnte durch den Browser nicht automatisch abgespielt werden:', error);
            });
            setHasPlayedEzan(true);
        }
    };

    const calculateTimeLeft = useCallback(() => {
        if (!iftarTime || !today) return;

        const [hours, minutes] = iftarTime.split(':').map(Number);
        const now = new Date();
        const iftarDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);

        const diff = iftarDate - now;

        if (diff <= 0) {
            setHasPassed(true);
            setTimeLeft(null);

            // Play Ezan exactly when it hits 0 and if it hasn't played yet
            // diff > -60000 ensures it only plays if Iftar was less than 1 minute ago 
            // (prevents playing on page load if Iftar was hours ago)
            if (!hasPlayedEzan && diff > -60000) {
                playEzan();
            }

            return;
        }

        setHasPassed(false);
        setHasPlayedEzan(false);
        const totalSeconds = Math.floor(diff / 1000);
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        setTimeLeft({ hours: h, minutes: m, seconds: s });
    }, [iftarTime, today]);

    useEffect(() => {
        calculateTimeLeft();
        const interval = setInterval(calculateTimeLeft, 1000);
        return () => clearInterval(interval);
    }, [calculateTimeLeft]);

    const pad = (num) => String(num).padStart(2, '0');

    return (
        <section className="countdown-section" id="iftar-countdown" style={{ position: 'relative' }}>
            {/* Hidden Button to test Ezan or unlock browser audio capabilities */}
            <button
                onClick={playEzan}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    width: '30px',
                    height: '30px',
                    opacity: 0,
                    cursor: 'pointer',
                    border: 'none',
                    background: 'transparent',
                    zIndex: 10
                }}
                title="Ezan testen"
                aria-label="Test Ezan Sound"
            ></button>

            {/* Audio Element with a famous Adhan */}
            <audio
                ref={audioRef}
                src="/ezan.mp3"
                preload="auto"
            ></audio>
            <div className="countdown-label">Countdown bis zum</div>
            <div className="countdown-title">🌙 Iftar 🌙</div>

            {hasPassed ? (
                <div className="countdown-passed">
                    ✨ Mahlzeit! Möge Allah euer Fasten annehmen ✨
                </div>
            ) : timeLeft ? (
                <>
                    <div className="countdown-timer">
                        <div className="countdown-unit">
                            <div className="countdown-value">{pad(timeLeft.hours)}</div>
                            <div className="countdown-unit-label">Stunden</div>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="countdown-unit">
                            <div className="countdown-value">{pad(timeLeft.minutes)}</div>
                            <div className="countdown-unit-label">Minuten</div>
                        </div>
                        <div className="countdown-separator">:</div>
                        <div className="countdown-unit">
                            <div className="countdown-value">{pad(timeLeft.seconds)}</div>
                            <div className="countdown-unit-label">Sekunden</div>
                        </div>
                    </div>
                    <div className="countdown-iftar-time">
                        Iftar heute um <span>{iftarTime} Uhr</span>
                    </div>
                </>
            ) : (
                <div className="countdown-passed" style={{ color: 'var(--text-muted)' }}>
                    Lade Countdown...
                </div>
            )}
        </section>
    );
}
