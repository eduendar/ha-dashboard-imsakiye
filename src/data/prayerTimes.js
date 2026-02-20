// Ramadan 2026 Gebetszeiten (Imsakiye)
// Approximate times for Germany (Stuttgart region)
// Ramadan 1447 H ~ 19. Februar - 20. März 2026

const prayerTimesData = [
    { day: 1, date: '2026-02-19', weekday: 'Do', fajr: '06:00', dhuhr: '12:41', asr: '15:34', maghrib: '17:52', isha: '19:16' },
    { day: 2, date: '2026-02-20', weekday: 'Fr', fajr: '05:58', dhuhr: '12:41', asr: '15:36', maghrib: '17:54', isha: '19:18' },
    { day: 3, date: '2026-02-21', weekday: 'Sa', fajr: '05:56', dhuhr: '12:41', asr: '15:37', maghrib: '17:56', isha: '19:20' },
    { day: 4, date: '2026-02-22', weekday: 'So', fajr: '05:54', dhuhr: '12:41', asr: '15:39', maghrib: '17:58', isha: '19:22' },
    { day: 5, date: '2026-02-23', weekday: 'Mo', fajr: '05:52', dhuhr: '12:41', asr: '15:41', maghrib: '18:00', isha: '19:24' },
    { day: 6, date: '2026-02-24', weekday: 'Di', fajr: '05:50', dhuhr: '12:40', asr: '15:43', maghrib: '18:02', isha: '19:26' },
    { day: 7, date: '2026-02-25', weekday: 'Mi', fajr: '05:48', dhuhr: '12:40', asr: '15:44', maghrib: '18:04', isha: '19:28' },
    { day: 8, date: '2026-02-26', weekday: 'Do', fajr: '05:46', dhuhr: '12:40', asr: '15:46', maghrib: '18:06', isha: '19:30' },
    { day: 9, date: '2026-02-27', weekday: 'Fr', fajr: '05:44', dhuhr: '12:39', asr: '15:48', maghrib: '18:08', isha: '19:32' },
    { day: 10, date: '2026-02-28', weekday: 'Sa', fajr: '05:42', dhuhr: '12:39', asr: '15:50', maghrib: '18:10', isha: '19:34' },
    { day: 11, date: '2026-03-01', weekday: 'So', fajr: '05:39', dhuhr: '12:39', asr: '15:51', maghrib: '18:12', isha: '19:36' },
    { day: 12, date: '2026-03-02', weekday: 'Mo', fajr: '05:37', dhuhr: '12:38', asr: '15:53', maghrib: '18:14', isha: '19:38' },
    { day: 13, date: '2026-03-03', weekday: 'Di', fajr: '05:35', dhuhr: '12:38', asr: '15:55', maghrib: '18:16', isha: '19:40' },
    { day: 14, date: '2026-03-04', weekday: 'Mi', fajr: '05:32', dhuhr: '12:37', asr: '15:57', maghrib: '18:18', isha: '19:42' },
    { day: 15, date: '2026-03-05', weekday: 'Do', fajr: '05:30', dhuhr: '12:37', asr: '15:58', maghrib: '18:20', isha: '19:44' },
    { day: 16, date: '2026-03-06', weekday: 'Fr', fajr: '05:27', dhuhr: '12:36', asr: '16:00', maghrib: '18:22', isha: '19:46' },
    { day: 17, date: '2026-03-07', weekday: 'Sa', fajr: '05:25', dhuhr: '12:36', asr: '16:02', maghrib: '18:24', isha: '19:48' },
    { day: 18, date: '2026-03-08', weekday: 'So', fajr: '05:22', dhuhr: '12:35', asr: '16:03', maghrib: '18:26', isha: '19:50' },
    { day: 19, date: '2026-03-09', weekday: 'Mo', fajr: '05:20', dhuhr: '12:35', asr: '16:05', maghrib: '18:28', isha: '19:52' },
    { day: 20, date: '2026-03-10', weekday: 'Di', fajr: '05:17', dhuhr: '12:34', asr: '16:07', maghrib: '18:30', isha: '19:54' },
    { day: 21, date: '2026-03-11', weekday: 'Mi', fajr: '05:14', dhuhr: '12:33', asr: '16:08', maghrib: '18:32', isha: '19:56' },
    { day: 22, date: '2026-03-12', weekday: 'Do', fajr: '05:12', dhuhr: '12:33', asr: '16:10', maghrib: '18:34', isha: '19:58' },
    { day: 23, date: '2026-03-13', weekday: 'Fr', fajr: '05:09', dhuhr: '12:32', asr: '16:12', maghrib: '18:36', isha: '20:00' },
    { day: 24, date: '2026-03-14', weekday: 'Sa', fajr: '05:06', dhuhr: '12:32', asr: '16:13', maghrib: '18:38', isha: '20:02' },
    { day: 25, date: '2026-03-15', weekday: 'So', fajr: '05:03', dhuhr: '12:31', asr: '16:15', maghrib: '18:40', isha: '20:04' },
    { day: 26, date: '2026-03-16', weekday: 'Mo', fajr: '05:00', dhuhr: '12:30', asr: '16:16', maghrib: '18:42', isha: '20:06' },
    { day: 27, date: '2026-03-17', weekday: 'Di', fajr: '04:57', dhuhr: '12:30', asr: '16:18', maghrib: '18:44', isha: '20:08' },
    { day: 28, date: '2026-03-18', weekday: 'Mi', fajr: '04:54', dhuhr: '12:29', asr: '16:20', maghrib: '18:46', isha: '20:10' },
    { day: 29, date: '2026-03-19', weekday: 'Do', fajr: '04:51', dhuhr: '12:28', asr: '16:21', maghrib: '18:48', isha: '20:12' },
    { day: 30, date: '2026-03-20', weekday: 'Fr', fajr: '04:48', dhuhr: '12:28', asr: '16:23', maghrib: '18:50', isha: '20:14' },
];

export default prayerTimesData;
