import { properties } from "@/data/properties";
import type { ActivityEvent } from "@/store/activity";
import type { Message } from "@/store/messages";
import type { ListedProperty } from "@/store/properties";
import type { TourRequest } from "@/store/requests";

export function propertiesSeed(): ListedProperty[] {
  const now = new Date().toISOString();
  return properties.map((p) => ({
    ...p,
    status: "active",
    updatedAt: now,
    photos: [{ id: `${p.id}-1`, src: p.image, alt: p.imageAlt }],
  }));
}

export function requestsSeed(): TourRequest[] {
  return [];
}

export function messagesSeed(): Message[] {
  return [];
}

export function activitySeed(): ActivityEvent[] {
  return [];
}