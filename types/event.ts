export type EventSource =
  | "luma"
  | "meetup"
  | "eventbrite";

export type Category =
  | "creative"
  | "food"
  | "music"
  | "networking"
  | "other";

export interface Event {
  id: string;

  title: string;

  description: string;

  source: EventSource;

  category: Category;

  date: string;

  location: string;

  image: string;

  url: string;
}