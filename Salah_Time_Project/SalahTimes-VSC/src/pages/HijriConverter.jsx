import React, { useState } from "react";
import moment from "moment-hijri";

export default function HijriConverter() {
  const [inputDate, setInputDate] = useState("");
  const [converted, setConverted] = useState("");
  const [convertedMonth, setConvertedMonth] = useState("");

  const handleConvert = () => {
    if (inputDate) {
      const hijri = moment(inputDate, "YYYY-MM-DD").format("iYYYY/iM/iD");
      const hijriMonthName = moment(inputDate, "YYYY-MM-DD").format("iMMMM");
      setConverted(hijri);
      setConvertedMonth(hijriMonthName);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        marginTop: "30px",
        textAlign: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h3 style={{ color: "#2e7d32", marginBottom: "20px" }}>
        🗓️ Hijri Date Converter
      </h3>

      <input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          width: "60%",
          fontSize: "16px",
        }}
      />

      <button
        onClick={handleConvert}
        style={{
          marginLeft: "12px",
          padding: "10px 16px",
          backgroundColor: "#388e3c",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2e7d32")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#388e3c")}
      >
        Convert
      </button>

      {converted && (
        <div style={{ marginTop: "20px", color: "#1b5e20" }}>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>
            Hijri Date: {converted}
          </p>
          <p style={{ fontSize: "16px" }}>
            Hijri Month: {convertedMonth}
          </p>
        </div>
      )}
    </div>
  );
}
