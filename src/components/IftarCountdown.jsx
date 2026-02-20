import { useState, useEffect, useCallback } from 'react';

export default function IftarCountdown({ iftarTime, today }) {
    const [timeLeft, setTimeLeft] = useState(null);
    const [hasPassed, setHasPassed] = useState(false);

    const calculateTimeLeft = useCallback(() => {
        if (!iftarTime || !today) return;

        const [hours, minutes] = iftarTime.split(':').map(Number);
        const now = new Date();
        const iftarDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0);

        const diff = iftarDate - now;

        if (diff <= 0) {
            setHasPassed(true);
            setTimeLeft(null);
            return;
        }

        setHasPassed(false);
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
        <section className="countdown-section" id="iftar-countdown">
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
