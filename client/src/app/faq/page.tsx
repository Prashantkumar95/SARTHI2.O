"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ShieldCheck,
  MapPinned,
  Headphones,
  Plane,
} from "lucide-react";

const faqs = [
  {
    question: "What is Sarthi?",
    answer:
      "Sarthi is your all-in-one travel companion for planning trips, generating smart itineraries, booking rides, and managing travel experiences seamlessly.",
  },
  {
    question: "How do I generate an itinerary?",
    answer:
      "Simply enter your destination, travel dates, interests, and budget preferences. Sarthi instantly creates a personalized itinerary tailored to your trip.",
  },
  {
    question: "How do I book a ride or trip?",
    answer:
      "Choose your preferred destination or itinerary, select available travel options, and confirm your booking securely through the platform.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes. You can edit destinations, travel duration, activities, accommodations, and transportation preferences anytime before confirming your trip.",
  },
  {
    question: "Does Sarthi support group travel?",
    answer:
      "Absolutely. Sarthi allows you to plan and manage trips for groups, making it easy to coordinate schedules, bookings, and shared itineraries.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach our support team anytime through the in-app help center or via email at support@sarthi.com.",
  },
  {
    question: "Is it safe to share my location?",
    answer:
      "Yes. Sarthi uses encrypted and secure location sharing so your data stays protected and private.",
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer:
      "Yes. Most bookings can be managed directly from your dashboard based on provider policies.",
  },
  {
    question: "Does Sarthi provide real-time ride tracking?",
    answer:
      "Yes. You can track rides live, see ETA updates, and share trip status with others.",
  },
];

const FAQItem = ({
  faq,
  isOpen,
  onClick,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        marginBottom: "12px",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "16px 18px",
          background: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "15px",
          fontWeight: 600,
          color: "#ffffff",
        }}
      >
        {faq.question}

        <ChevronDown
          size={18}
          style={{
            transition: "0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            color: "#9ca3af",
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            padding: "0 18px 16px",
            color: "#cbd5e1",
            fontSize: "14px",
            lineHeight: 1.7,
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, #0b0f14 0%, #05070a 50%, #000000 100%)",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1
            style={{
              fontSize: "42px",
              fontWeight: 800,
              background:
                "linear-gradient(to right, #ffffff, #93c5fd, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </h1>

          <p style={{ color: "#94a3b8", marginTop: "12px" }}>
            Everything about booking, planning, and traveling with Sarthi.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "14px",
            marginBottom: "35px",
          }}
        >
          {[
            { icon: <Plane size={20} />, title: "Smart Planning" },
            { icon: <MapPinned size={20} />, title: "Live Navigation" },
            { icon: <ShieldCheck size={20} />, title: "Secure System" },
            { icon: <Headphones size={20} />, title: "24/7 Support" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#60a5fa", marginBottom: "6px" }}>
                {item.icon}
              </div>
              <p style={{ fontSize: "13px", fontWeight: 600 }}>
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ LIST */}
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.question}
            faq={faq}
            isOpen={openIndex === index}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </main>
  );
}