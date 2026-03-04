// Ramadan 2026 Gebetszeiten (Imsakiye)
// Approximate times for Germany (Stuttgart region)
// Ramadan 1447 H ~ 19. Februar - 20. März 2026

const prayerTimesData = [
    { day: 1, date: '2026-02-19', weekday: 'Do', fajr: '05:33', dhuhr: '12:35', asr: '15:18', maghrib: '17:50', isha: '19:16' },
    { day: 2, date: '2026-02-20', weekday: 'Fr', fajr: '05:31', dhuhr: '12:35', asr: '15:19', maghrib: '17:52', isha: '19:17' },
    { day: 3, date: '2026-02-21', weekday: 'Sa', fajr: '05:29', dhuhr: '12:35', asr: '15:20', maghrib: '17:54', isha: '19:19' },
    { day: 4, date: '2026-02-22', weekday: 'So', fajr: '05:28', dhuhr: '12:35', asr: '15:21', maghrib: '17:55', isha: '19:20' },
    { day: 5, date: '2026-02-23', weekday: 'Mo', fajr: '05:26', dhuhr: '12:35', asr: '15:22', maghrib: '17:57', isha: '19:22' },
    { day: 6, date: '2026-02-24', weekday: 'Di', fajr: '05:24', dhuhr: '12:35', asr: '15:24', maghrib: '17:58', isha: '19:23' },
    { day: 7, date: '2026-02-25', weekday: 'Mi', fajr: '05:22', dhuhr: '12:35', asr: '15:25', maghrib: '18:00', isha: '19:25' },
    { day: 8, date: '2026-02-26', weekday: 'Do', fajr: '05:20', dhuhr: '12:34', asr: '15:26', maghrib: '18:01', isha: '19:26' },
    { day: 9, date: '2026-02-27', weekday: 'Fr', fajr: '05:19', dhuhr: '12:34', asr: '15:27', maghrib: '18:03', isha: '19:28' },
    { day: 10, date: '2026-02-28', weekday: 'Sa', fajr: '05:17', dhuhr: '12:34', asr: '15:28', maghrib: '18:05', isha: '19:29' },
    { day: 11, date: '2026-03-01', weekday: 'So', fajr: '05:15', dhuhr: '12:34', asr: '15:29', maghrib: '18:06', isha: '19:31' },
    { day: 12, date: '2026-03-02', weekday: 'Mo', fajr: '05:13', dhuhr: '12:34', asr: '15:30', maghrib: '18:08', isha: '19:32' },
    { day: 13, date: '2026-03-03', weekday: 'Di', fajr: '05:11', dhuhr: '12:34', asr: '15:31', maghrib: '18:09', isha: '19:34' },
    { day: 14, date: '2026-03-04', weekday: 'Mi', fajr: '05:09', dhuhr: '12:33', asr: '15:32', maghrib: '18:11', isha: '19:36' },
    { day: 15, date: '2026-03-05', weekday: 'Do', fajr: '05:07', dhuhr: '12:33', asr: '15:33', maghrib: '18:12', isha: '19:37' },
    { day: 16, date: '2026-03-06', weekday: 'Fr', fajr: '05:05', dhuhr: '12:33', asr: '15:35', maghrib: '18:14', isha: '19:39' },
    { day: 17, date: '2026-03-07', weekday: 'Sa', fajr: '05:03', dhuhr: '12:33', asr: '15:36', maghrib: '18:15', isha: '19:40' },
    { day: 18, date: '2026-03-08', weekday: 'So', fajr: '05:01', dhuhr: '12:32', asr: '15:37', maghrib: '18:17', isha: '19:42' },
    { day: 19, date: '2026-03-09', weekday: 'Mo', fajr: '04:59', dhuhr: '12:32', asr: '15:38', maghrib: '18:19', isha: '19:43' },
    { day: 20, date: '2026-03-10', weekday: 'Di', fajr: '04:57', dhuhr: '12:32', asr: '15:39', maghrib: '18:20', isha: '19:45' },
    { day: 21, date: '2026-03-11', weekday: 'Mi', fajr: '04:54', dhuhr: '12:32', asr: '15:40', maghrib: '18:22', isha: '19:46' },
    { day: 22, date: '2026-03-12', weekday: 'Do', fajr: '04:52', dhuhr: '12:31', asr: '15:41', maghrib: '18:23', isha: '19:48' },
    { day: 23, date: '2026-03-13', weekday: 'Fr', fajr: '04:50', dhuhr: '12:31', asr: '15:42', maghrib: '18:25', isha: '19:50' },
    { day: 24, date: '2026-03-14', weekday: 'Sa', fajr: '04:48', dhuhr: '12:31', asr: '15:42', maghrib: '18:26', isha: '19:51' },
    { day: 25, date: '2026-03-15', weekday: 'So', fajr: '04:46', dhuhr: '12:31', asr: '15:43', maghrib: '18:28', isha: '19:53' },
    { day: 26, date: '2026-03-16', weekday: 'Mo', fajr: '04:43', dhuhr: '12:30', asr: '15:44', maghrib: '18:29', isha: '19:54' },
    { day: 27, date: '2026-03-17', weekday: 'Di', fajr: '04:41', dhuhr: '12:30', asr: '15:45', maghrib: '18:31', isha: '19:56' },
    { day: 28, date: '2026-03-18', weekday: 'Mi', fajr: '04:39', dhuhr: '12:30', asr: '15:46', maghrib: '18:32', isha: '19:58' },
    { day: 29, date: '2026-03-19', weekday: 'Do', fajr: '04:37', dhuhr: '12:29', asr: '15:47', maghrib: '18:34', isha: '19:59' },
];

export default prayerTimesData;
