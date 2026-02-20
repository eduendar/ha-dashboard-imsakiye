import { useState, useMemo } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import TodayCard from './components/TodayCard';
import IftarCountdown from './components/IftarCountdown';
import PrayerTable from './components/PrayerTable';
import prayerTimesData from './data/prayerTimes';
import KidsCalendar from './components/KidsCalendar';

function App() {
  const [showTable, setShowTable] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Get today's date string in YYYY-MM-DD format
  const todayDate = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, []);

  // Find today's prayer data
  const todayData = useMemo(() => {
    return prayerTimesData.find((d) => d.date === todayDate) || null;
  }, [todayDate]);

  // Calculate Ramadan day progress
  const ramadanProgress = useMemo(() => {
    if (!todayData) return 0;
    return Math.round((todayData.day / 30) * 100);
  }, [todayData]);

  return (
    <>
      <AnimatedBackground />

      {currentPage === 'kids' ? (
        <div className="app-container">
          <KidsCalendar onBack={() => setCurrentPage('dashboard')} />
        </div>
      ) : (
        <div className="app-container">
          {/* Header */}
          <header className="header" id="header">
            <div className="header-badge">
              <span className="moon-icon">☪</span>
              <span>Ramadan Mubarak</span>
            </div>
            <h1>İmsakiye 2026</h1>
            <p className="subtitle">Gebetszeiten für den Ramadan</p>
            {todayData && (
              <p className="date-display">
                <span className="hijri-date">{todayData.day}. Ramadan 1447 H</span>
                {' · '}{todayData.day}/30 Tage ({ramadanProgress}%)
              </p>
            )}
          </header>

          {/* Today's Prayer Times */}
          {todayData ? (
            <TodayCard todayData={todayData} />
          ) : (
            <div className="today-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                🕌 Heute ist kein Ramadan-Tag im Kalender.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Die Gebetszeiten gelten für den Ramadan 2026 (19. Feb – 20. März).
              </p>
            </div>
          )}

          {/* Iftar Countdown */}
          <IftarCountdown
            iftarTime={todayData?.maghrib || null}
            today={todayData}
          />

          {/* Kids Calendar Link */}
          <button
            className="kids-calendar-btn"
            onClick={() => setCurrentPage('kids')}
          >
            <span className="moon-icon" style={{ marginRight: '8px' }}>✨</span>
            Ramadan Kalender für Kinder
            <span className="arrow-icon" style={{ marginLeft: '8px' }}>▶</span>
          </button>

          {/* Toggle Table Button */}
          <button
            className={`toggle-table-btn${showTable ? ' open' : ''}`}
            onClick={() => setShowTable(!showTable)}
            id="toggle-table-btn"
          >
            <span>{showTable ? 'Tabelle ausblenden' : 'Alle Ramadan-Tage anzeigen'}</span>
            <span className="arrow-icon">▼</span>
          </button>

          {/* Full Prayer Times Table */}
          <div className={`table-section${showTable ? ' open' : ''}`}>
            {showTable && (
              <PrayerTable data={prayerTimesData} todayDate={todayDate} />
            )}
          </div>

          {/* Footer */}
          <footer className="footer">
            <div className="bismillah">بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ</div>
            <p>Ramadan Kareem • İmsakiye Dashboard 2026</p>
            <p style={{ marginTop: '0.25rem', fontSize: '0.7rem', opacity: 0.6 }}>
              Zeiten sind approximiert für Deutschland (Region Stuttgart)
            </p>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
