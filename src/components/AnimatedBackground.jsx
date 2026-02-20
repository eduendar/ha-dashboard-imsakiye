import { useMemo } from 'react';

export default function AnimatedBackground() {
    const stars = useMemo(() => {
        return Array.from({ length: 80 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: `${Math.random() * 2.5 + 0.5}px`,
            duration: `${Math.random() * 4 + 2}s`,
            delay: `${Math.random() * 5}s`,
            maxOpacity: Math.random() * 0.6 + 0.2,
        }));
    }, []);

    const lanterns = useMemo(() => {
        return [
            { left: '5%', top: '15%', size: '28px', duration: '14s', rotateStart: '-3deg', rotateMid: '2deg', rotateEnd: '-1deg' },
            { left: '85%', top: '20%', size: '22px', duration: '11s', rotateStart: '2deg', rotateMid: '-3deg', rotateEnd: '1deg' },
            { left: '15%', top: '60%', size: '18px', duration: '16s', rotateStart: '-2deg', rotateMid: '1deg', rotateEnd: '-3deg' },
            { left: '75%', top: '55%', size: '25px', duration: '13s', rotateStart: '1deg', rotateMid: '-2deg', rotateEnd: '2deg' },
            { left: '45%', top: '80%', size: '20px', duration: '15s', rotateStart: '-1deg', rotateMid: '3deg', rotateEnd: '-2deg' },
            { left: '92%', top: '70%', size: '16px', duration: '12s', rotateStart: '3deg', rotateMid: '-1deg', rotateEnd: '2deg' },
        ];
    }, []);

    return (
        <div className="bg-animation">
            {/* Stars */}
            <div className="stars">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            '--duration': star.duration,
                            '--max-opacity': star.maxOpacity,
                            animationDelay: star.delay,
                        }}
                    />
                ))}
            </div>

            {/* Crescent Moon */}
            <div className="moon-container">
                <div className="moon-glow" />
                <div className="moon" />
            </div>

            {/* Lanterns */}
            {lanterns.map((lantern, i) => (
                <div
                    key={i}
                    className="lantern"
                    style={{
                        left: lantern.left,
                        top: lantern.top,
                        '--size': lantern.size,
                        '--duration': lantern.duration,
                        '--rotate-start': lantern.rotateStart,
                        '--rotate-mid': lantern.rotateMid,
                        '--rotate-end': lantern.rotateEnd,
                    }}
                >
                    <div className="lantern-body" />
                    <div className="lantern-light" />
                </div>
            ))}

            {/* Bottom geometric pattern */}
            <div className="geometric-pattern" />
        </div>
    );
}
