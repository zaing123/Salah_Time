import { useEffect, useRef } from "react";

const usePrayerNotification = (timings) => {
  const notifiedPrayers = useRef({});

  useEffect(() => {
    if (!timings) return;

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

      const prayers = [
        { name: 'Fajr', time: removeSeconds(timings.Fajr) },
        { name: 'Zuhr', time: removeSeconds(timings.Zuhr) },
        { name: 'Asr', time: removeSeconds(timings.Asr) },
        { name: 'Maghrib', time: removeSeconds(timings.Maghrib) },
        { name: 'Isha', time: removeSeconds(timings.Isha) },
      ];

      prayers.forEach(prayer => {
        if (!notifiedPrayers.current[prayer.name] && currentTime === prayer.time) {
          showNotification(prayer.name);
          notifiedPrayers.current[prayer.name] = true;
        }
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [timings]);
};

const removeSeconds = (timeString) => {
  return timeString.slice(0, 5);
};

const showNotification = (prayerName) => {
  if (Notification.permission === "granted") {
    new Notification(`🕋 Salah Time: ${prayerName}`, {
      body: `It's time for ${prayerName} prayer. Please perform your Salah.`,
      icon: 'https://cdn-icons-png.flaticon.com/512/1997/1997997.png', // ✅ Kaaba Icon
      vibrate: [200, 100, 200],
      requireInteraction: true,
      silent: false
    });
  }
};

export default usePrayerNotification;
