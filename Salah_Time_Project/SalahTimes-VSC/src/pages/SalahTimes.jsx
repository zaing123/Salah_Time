import React, { useEffect, useState } from 'react';
import usePrayerNotification from "../hook/usePrayerNotification";

const SalahTimes = () => {
  const [salahTimes, setSalahTimes] = useState([]);
  const [latestTiming, setLatestTiming] = useState(null);

  useEffect(() => {
    fetch('https://localhost:7162/api/SalahTimesApi')
      .then(res => res.json())
      .then(data => {
        setSalahTimes(data);

        if (data.length > 0) {
          const timing = {
            Fajr: data[0].fajr,
            Zuhr: data[0].dhuhr,
            Asr: data[0].asr,
            Maghrib: data[0].maghrib,
            Isha: data[0].isha
          };
          setLatestTiming(timing); 
        }
      })
      .catch(err => console.error("Fetch Error:", err));
  }, []);

  
  usePrayerNotification(latestTiming);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Today’s Salah Times</h2>

      {salahTimes.length === 0 ? (
        <p className="text-center text-muted">Loading or no data available.</p>
      ) : (
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Date</th>
              <th>Fajr</th>
              <th>Dhuhr</th>
              <th>Asr</th>
              <th>Maghrib</th>
              <th>Isha</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {salahTimes.map((time) => (
              <tr key={time.id}>
                <td>{new Date(time.date).toLocaleDateString()}</td>
                <td>{time.fajr}</td>
                <td>{time.dhuhr}</td>
                <td>{time.asr}</td>
                <td>{time.maghrib}</td>
                <td>{time.isha}</td>
                <td>{time.cityName || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SalahTimes;
