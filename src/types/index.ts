import { ComponentType } from 'react';

// Animation variants
export interface AnimationVariants {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      type?: string;
      stiffness?: number;
      damping?: number;
    };
  };
}

// Hero and Carousel
export interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  background: string;
  image: string;
}

// Stats
export interface Stat {
  icon: ComponentType<any>;
  label: string;
  value: string;
  color: string;
}

// Logo
export interface Logo {
  name: string;
  src: string;
}

// Institution
export interface Institution {
  name: string;
  logo: string;
  path: string;
  url: string;
  slug?: string;
  location?: string;
  type?: string;
  description?: string;
  students?: string;
  image?: string;
}

// News
export interface NewsArticle {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

// Feature
export interface Feature {
  icon: ComponentType<any>;
  title: string;
  description: string;
  color: string;
}

// Testimonial
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
  institution?: string;
}

// Program
export interface Program {
  title: string;
  description: string;
  image: string;
  duration?: string;
  level?: string;
}

// Event
export interface Event {
  title: string;
  date: string;
  time?: string;
  location: string;
  description?: string;
  category?: string;
}

// Navigation
export interface NavLink {
  name: string;
  path: string;
  children?: NavLink[];
}

// Form Data
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  institution?: string;
}

export interface AdmissionFormData extends ContactFormData {
  studentName: string;
  grade: string;
  previousSchool?: string;
  guardianName: string;
  guardianPhone: string;
}

// API Response
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}
