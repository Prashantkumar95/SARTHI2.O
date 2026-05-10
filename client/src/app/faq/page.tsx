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
      "Absolutely. Sarthi uses encrypted and secure location sharing, ensuring your information is only accessible to authorized travel partners and drivers.",
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer:
      "Yes. Most bookings can be canceled or rescheduled directly from your dashboard, subject to the cancellation policies of the travel provider.",
  },
  {
    question: "Does Sarthi provide real-time ride tracking?",
    answer:
      "Yes. You can track your ride in real time, view estimated arrival times, and share your live trip status with trusted contacts.",
  },
];

type FAQItemProps = {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
};

const FAQItem = ({ faq, isOpen, onClick }: FAQItemProps) => {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        background: "#161b22",
        marginBottom: "1rem",
        overflow: "hidden",
        boxShadow: "0 6px 20px rgba(0,0,0,0.35)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "1.2rem 1.4rem",
          background: "transparent",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#f9fafb",
        }}
      >
        {faq.question}

        <ChevronDown
          size={20}
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
            padding: "0 1.4rem 1.2rem",
            color: "#cbd5e1",
            lineHeight: 1.7,
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
          "radial-gradient(circle at top, #111827 0%, #0b1120 45%, #020617 100%)",
        color: "#fff",
        fontFamily: "Inter, sans-serif",
        padding: "4rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: 800,
              marginBottom: "1rem",
              background:
                "linear-gradient(to right, #ffffff, #93c5fd, #60a5fa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Frequently Asked Questions
          </h1>

          <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: "1rem" }}>
            Everything you need to know about planning trips, booking rides,
            generating itineraries, and traveling securely with Sarthi.
          </p>
        </div>

        {/* FEATURES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.2rem",
            marginBottom: "3rem",
          }}
        >
          {[
            { icon: <Plane size={22} />, title: "Smart Planning" },
            { icon: <MapPinned size={22} />, title: "Live Navigation" },
            { icon: <ShieldCheck size={22} />, title: "Secure Platform" },
            { icon: <Headphones size={22} />, title: "24/7 Support" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "1.2rem",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <div style={{ color: "#60a5fa", marginBottom: "0.5rem" }}>
                {item.icon}
              </div>
              <p style={{ fontSize: "0.95rem", fontWeight: 600 }}>
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