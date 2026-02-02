import React from "react";
import backImage from "../img/back.jpeg";

export default function IslamicEventsList() {
  const events = [
    { name: "Start of Ramadan", hijri: "1447/9/1", gregorian: "2026-02-17" },
    { name: "Eid-ul-Fitr", hijri: "1447/10/1", gregorian: "2026-03-18" },
    { name: "Hajj Begins", hijri: "1447/12/8", gregorian: "2026-05-23" },
    { name: "Eid-ul-Adha", hijri: "1447/12/10", gregorian: "2026-05-25" },
    { name: "Islamic New Year", hijri: "1448/1/1", gregorian: "2026-06-26" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "20px",
        backgroundColor: "rgba(0,0,0,0.6)", // slight dark overlay to soften the image
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)", // Pure white card
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        <h3 style={{ color: "#2e7d32", textAlign: "center", marginBottom: "30px", fontSize: "30px" }}>
          🌙 Upcoming Islamic Events
        </h3>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <thead>
            <tr style={{ backgroundColor: "#2e7d32" }}>
              <th
                style={{
                  padding: "15px",
                  border: "1px solid #ddd",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Event
              </th>
              <th
                style={{
                  padding: "15px",
                  border: "1px solid #ddd",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Hijri Date
              </th>
              <th
                style={{
                  padding: "15px",
                  border: "1px solid #ddd",
                  color: "#ffffff",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Gregorian Date
              </th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
                  color: "#333",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.2s",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#c8e6c9";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#f9f9f9" : "#ffffff";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <td style={{ padding: "15px", border: "1px solid #ddd", textAlign: "center" }}>{event.name}</td>
                <td style={{ padding: "15px", border: "1px solid #ddd", textAlign: "center" }}>{event.hijri}</td>
                <td style={{ padding: "15px", border: "1px solid #ddd", textAlign: "center" }}>{event.gregorian}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
