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
  {
    question: "Are my payment details secure?",
    answer:
      "Yes. All payments are processed through secure and encrypted payment gateways to ensure your financial information remains protected.",
  },
  {
    question: "Can I access my itinerary offline?",
    answer:
      "Yes. Sarthi allows you to download your itinerary and important trip details for offline access during your journey.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Sarthi supports multiple payment methods including credit/debit cards, UPI, digital wallets, and net banking.",
  },
  {
    question: "Does Sarthi recommend hotels and attractions?",
    answer:
      "Yes. Sarthi provides personalized recommendations for hotels, restaurants, tourist attractions, and local experiences based on your preferences.",
  },
  {
    question: "Can I share my trip with friends or family?",
    answer:
      "Yes. You can share your itinerary, live location, and trip updates with selected friends and family members for better coordination and safety.",
  },
  {
    question: "Is Sarthi available internationally?",
    answer:
      "Sarthi is expanding globally and currently supports multiple cities and destinations across different countries.",
  },
  {
    question: "Do I need an account to use Sarthi?",
    answer:
      "Creating an account is recommended to access personalized itineraries, bookings, saved trips, and real-time travel updates.",
  },
  {
    question: "How does Sarthi suggest travel plans?",
    answer:
      "Sarthi uses intelligent recommendation systems based on your destination, interests, budget, and travel duration to create optimized itineraries.",
  },
  {
    question: "Can I manage multiple trips at once?",
    answer:
      "Yes. You can organize, track, and manage multiple upcoming or ongoing trips from your Sarthi dashboard.",
  },
  {
    question: "Does Sarthi offer emergency assistance?",
    answer:
      "Yes. Emergency assistance and safety support features are available during active trips to help travelers in urgent situations.",
  },
  {
    question: "Will I receive travel notifications and updates?",
    answer:
      "Yes. Sarthi sends real-time notifications for ride updates, booking confirmations, itinerary reminders, and travel alerts.",
  },
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onClick }) => {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "18px",
        background: "#161b22",
        marginBottom: "1rem",
        overflow: "hidden",
        backdropFilter: "blur(12px)",
        transition: "all 0.3s ease",
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
            transition: "transform 0.3s ease",
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
            fontSize: "0.96rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {faq.answer}
        </div>
      )}
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "20px",
        padding: "1.7rem",
        flex: 1,
        minWidth: "220px",
        backdropFilter: "blur(10px)",
        transition: "0.3s ease",
        boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
      }}
    >
      <div
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "14px",
          background:
            "linear-gradient(135deg, rgba(59,130,246,0.2), rgba(37,99,235,0.4))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.2rem",
          color: "#60a5fa",
        }}
      >
        {icon}
      </div>

      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 700,
          marginBottom: "0.8rem",
          color: "#ffffff",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#94a3b8",
          lineHeight: 1.7,
          fontSize: "0.95rem",
        }}
      >
        {description}
      </p>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        fontFamily: "Inter, sans-serif",
        background:
          "radial-gradient(circle at top, #111827 0%, #0b1120 45%, #020617 100%)",
        color: "#ffffff",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 1.5rem 4rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.5rem 1rem",
            borderRadius: "999px",
            background: "rgba(59,130,246,0.12)",
            border: "1px solid rgba(96,165,250,0.2)",
            color: "#60a5fa",
            fontWeight: 600,
            fontSize: "0.9rem",
            marginBottom: "1.5rem",
          }}
        >
          Sarthi Help Center
        </div>

        <h1
          style={{
            fontSize: "clamp(2.7rem, 5vw, 4.5rem)",
            fontWeight: 800,
            marginBottom: "1.2rem",
            lineHeight: 1.1,
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
            maxWidth: "760px",
            margin: "0 auto",
            color: "#94a3b8",
            fontSize: "1.08rem",
            lineHeight: 1.8,
          }}
        >
          Everything you need to know about planning trips, booking rides,
          generating itineraries, and traveling securely with Sarthi.
        </p>
      </section>

      {/* Features */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem 4rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <FeatureCard
            icon={<Plane size={24} />}
            title="Smart Trip Planning"
            description="Generate personalized itineraries and travel schedules instantly."
          />

          <FeatureCard
            icon={<MapPinned size={24} />}
            title="Live Navigation"
            description="Real-time route guidance and travel tracking for smooth journeys."
          />

          <FeatureCard
            icon={<ShieldCheck size={24} />}
            title="Secure Platform"
            description="Your data and travel information are protected with modern security."
          />

          <FeatureCard
            icon={<Headphones size={24} />}
            title="24/7 Support"
            description="Dedicated customer support whenever you need travel assistance."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 1.5rem 5rem",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "0.8rem",
              color: "#ffffff",
            }}
          >
            Need Help?
          </h2>

          <p
            style={{
              color: "#94a3b8",
              lineHeight: 1.7,
            }}
          >
            Browse the most common questions from Sarthi travelers.
          </p>
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
      </section>
    </main>
  );
};

export default FAQPage;