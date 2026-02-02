import { useEffect } from "react";

export default function useEventNotification(events) {
  useEffect(() => {
    // Request notification permission
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const today = new Date();
    const todayStr = today.toISOString().split("T")[0];

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split("T")[0];

    events.forEach(event => {
      if (event.gregorian === todayStr) {
        new Notification("🌙 Islamic Event Today", {
          body: `${event.name} is today!`,
          icon: "/moon-icon.png"
        });
      }
      if (event.gregorian === tomorrowStr) {
        new Notification("🌙 Islamic Event Reminder", {
          body: `${event.name} is tomorrow.`,
          icon: "/moon-icon.png"
        });
      }
    });
  }, [events]);
}
