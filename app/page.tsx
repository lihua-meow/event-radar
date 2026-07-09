"use client";
import { useState } from "react";
import EventCard from "@/components/EventCard";
import FilterBar from "@/components/FilterBar";
import { mockEvents } from "@/data/mockEvents";
import { Category } from "@/types/event";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    "all",
  );

  const filteredEvents =
    selectedCategory === "all"
      ? mockEvents
      : mockEvents.filter((event) => event.category === selectedCategory);
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold mb-8">Event Radar</h1>
      <p className="text-gray-600 mb-8">
        Discover food, creative, music and networking events in one place.
      </p>

      <FilterBar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </main>
  );
}
