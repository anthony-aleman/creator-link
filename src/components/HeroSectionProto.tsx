import { useEffect, useState } from "react";
import Button from "./Button";

const messages = [
  {
    id: 0,
    title: "Connect with Real Creators. Real Audiences.",
    description:
      "Discover and book YouTubers, TikTokers, streamers, and social media influencers — all in one platform built for modern marketing teams.",
    button: "Find Creators Now",
    target: "brands",
    bgColor: "bg-red-400"
  },
  {
    id: 1,
    title: "Get Paid to Create with Brands You Love",
    description:
      "Join a growing network of influencers, YouTubers, and streamers connecting directly with marketing teams. No agencies, no hassle.",
    button: "Join as a Creator",
    target: "creators",
    bgColor: "bg-pink-500"
  }
];

export default function HeroSectionProto() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const { title, description, button, bgColor } = messages[activeIndex];

  return (
    <section className={`text-center py-20 ${bgColor} transition duration-500 ease-in-out`}>
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">{description}</p>
      <Button label={button} />
    </section>
  );
}
