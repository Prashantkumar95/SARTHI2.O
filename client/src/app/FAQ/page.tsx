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
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "18px",
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
          padding: "1.4rem 1.5rem",
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
            padding: "0 1.5rem 1.5rem",
            color: "#cbd5e1",
            lineHeight: 1.8,
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
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
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

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.8,
              fontSize: "1.05rem",
            }}
          >
            Everything you need to know about planning trips, booking rides,
            generating itineraries, and traveling securely with Sarthi.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          {[
            {
              icon: <Plane size={24} />,
              title: "Smart Planning",
              desc: "AI-powered itinerary generation.",
            },
            {
              icon: <MapPinned size={24} />,
              title: "Live Navigation",
              desc: "Real-time travel tracking.",
            },
            {
              icon: <ShieldCheck size={24} />,
              title: "Secure Platform",
              desc: "Protected payments & location.",
            },
            {
              icon: <Headphones size={24} />,
              title: "24/7 Support",
              desc: "Always available for assistance.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  marginBottom: "1rem",
                  color: "#60a5fa",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  marginBottom: "0.5rem",
                  color: "#fff",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

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