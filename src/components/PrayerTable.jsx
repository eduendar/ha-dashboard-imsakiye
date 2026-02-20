import { useEffect, useRef } from 'react';

export default function PrayerTable({ data, todayDate }) {
    const todayRowRef = useRef(null);

    useEffect(() => {
        if (todayRowRef.current) {
            setTimeout(() => {
                todayRowRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    }, []);

    const formatDateShort = (dateStr) => {
        const d = new Date(dateStr);
        return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit' });
    };

    const isToday = (dateStr) => dateStr === todayDate;
    const isPast = (dateStr) => dateStr < todayDate;

    return (
        <div className="table-container" id="prayer-table">
            <div className="table-header-bar">
                <h3>📅 Ramadan Gebetszeiten</h3>
                <span className="ramadan-year">Ramadan 1447 H / 2026</span>
            </div>

            <div className="prayer-table-wrapper">
                <table className="prayer-table">
                    <thead>
                        <tr>
                            <th>Tag</th>
                            <th>Datum</th>
                            <th>Fajr</th>
                            <th>Dhuhr</th>
                            <th>Asr</th>
                            <th>Maghrib</th>
                            <th>Isha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row) => {
                            const today = isToday(row.date);
                            const past = isPast(row.date);

                            return (
                                <tr
                                    key={row.day}
                                    className={`${today ? 'today-row' : ''} ${past ? 'past-row' : ''}`}
                                    ref={today ? todayRowRef : null}
                                >
                                    <td className="day-cell">
                                        {today && <span className="today-indicator" />}
                                        <span>{row.day}. {row.weekday}</span>
                                    </td>
                                    <td>{formatDateShort(row.date)}</td>
                                    <td>{row.fajr}</td>
                                    <td>{row.dhuhr}</td>
                                    <td>{row.asr}</td>
                                    <td className="maghrib-col">{row.maghrib}</td>
                                    <td>{row.isha}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
