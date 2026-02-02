import React from "react";
import moment from "moment-hijri";
import HijriConverter from "../pages/HijriConverter";
import { useNavigate } from "react-router-dom";
import useEventsNotification from "../hook/useEventsNotification";

import HijriImage from "../img/hijri.jpeg";

export default function HijriDate() {
  const hijri = moment().format("iYYYY/iM/iD");
  const hijriMonthName = moment().format("iMMMM");
  const gregorian = moment().format("YYYY-MM-DD");

  const navigate = useNavigate();

  const islamicEvents = [
    { name: "Start of Ramadan", gregorian: "2025-03-02" },
    { name: "Eid-ul-Fitr", gregorian: "2025-04-01" },
    { name: "Eid-ul-Adha", gregorian: "2025-06-07" },
    { name: "Islamic New Year", gregorian: "2025-07-26" }
  ];

  // ✅ Event notifications hook
  useEventsNotification(islamicEvents);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        overflow: "hidden",
      }}
    >
      {/* Blurred Background Image */}
      <img
        src={HijriImage}
        alt="Hijri Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "blur(8px)",
          zIndex: -1,
        }}
      />

      {/* Compact Card */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          maxWidth: "600px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#2e7d32" }}>📅 Hijri Calendar</h2>
        <p style={{ fontSize: "20px", color: "#1b5e20", marginTop: "15px" }}>
          <strong>Hijri Date:</strong> {hijri}
        </p>
        <p style={{ fontSize: "20px", color: "#1b5e20" }}>
          <strong>Hijri Month:</strong> {hijriMonthName}
        </p>
        <p style={{ fontSize: "20px", color: "#1b5e20" }}>
          <strong>Gregorian Date:</strong> {gregorian}
        </p>
        <p
          style={{
            fontSize: "15px",
            color: "#555",
            lineHeight: "1.6",
            marginTop: "20px",
          }}
        >
          The Islamic calendar is based on the lunar cycle.
        </p>

        {/* 👉 Button to go to Islamic Events page */}
        <button
          onClick={() => navigate("/events")}
          style={{
            marginTop: "30px",
            padding: "12px 24px",
            backgroundColor: "#388e3c",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            transition: "background-color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2e7d32")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#388e3c")}
        >
          View Islamic Events
        </button>
      </div>

      {/* Hijri Converter stays below the card */}
      <div style={{ marginTop: "40px", width: "100%" }}>
        <HijriConverter />
      </div>
    </div>
  );
}
