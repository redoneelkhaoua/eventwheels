export type EventType = 'wedding' | 'corporate' | 'airport' | 'party' | 'roadtrip';
export type CarCategory = 'sedan' | 'suv' | 'convertible' | 'van' | 'sports' | 'economy';
export type Transmission = 'automatic' | 'manual';
export type FuelType = 'petrol' | 'diesel' | 'hybrid' | 'electric';

export interface Car {
  id: string;
  slug: string;
  name: string;
  brand: string;
  model: string;
  year: number;
  category: CarCategory;
  eventTypes: EventType[];
  pricePerDay: number;
  seats: number;
  luggage: number;
  transmission: Transmission;
  fuelType: FuelType;
  features: string[];
  chauffeurAvailable: boolean;
  images: string[];
  description: string;
  shortDesc: string;
  available: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  eventType: EventType;
  eventLabel: string;
  rating: number;
  text: string;
  location: string;
}

export interface EventUseCase {
  id: EventType;
  label: string;
  icon: string;
  tagline: string;
  description: string;
  recommendedCars: string[];
}
