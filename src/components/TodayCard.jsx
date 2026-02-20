export default function TodayCard({ todayData }) {
    if (!todayData) return null;

    const prayers = [
        { label: 'Fajr', time: todayData.fajr, icon: '🌅' },
        { label: 'Dhuhr', time: todayData.dhuhr, icon: '🕐' },
        { label: 'Asr', time: todayData.asr, icon: '🌤️' },
        { label: 'Maghrib', time: todayData.maghrib, icon: '🌙' },
        { label: 'Isha', time: todayData.isha, icon: '🌌' },
    ];

    // Determine active prayer
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const getMinutes = (timeStr) => {
        const [h, m] = timeStr.split(':').map(Number);
        return h * 60 + m;
    };

    let activePrayerIndex = -1;
    for (let i = prayers.length - 1; i >= 0; i--) {
        if (currentMinutes >= getMinutes(prayers[i].time)) {
            activePrayerIndex = i;
            break;
        }
    }

    const formatDate = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('de-DE', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <div className="today-card" id="today-card">
            <div className="today-card-header">
                <h2>📿 Gebetszeiten Heute</h2>
                <span className="day-badge">{todayData.day}. Ramadan</span>
            </div>

            <div className="prayer-times-row five-cols">
                {prayers.map((prayer, i) => (
                    <div
                        key={prayer.label}
                        className={`prayer-time-item${i === activePrayerIndex ? ' active-prayer' : ''}`}
                    >
                        <div className="prayer-icon">{prayer.icon}</div>
                        <div className="prayer-label">{prayer.label}</div>
                        <div className="prayer-time">{prayer.time}</div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                {formatDate(todayData.date)}
            </div>
        </div>
    );
}
