export interface CoursePricing {
  id: string;
  courseName: string;
  pricePerClass: number; // in USD (0 for Free)
  isFree?: boolean;
  freeNote?: string;
  badge?: string;
  description: string;
  features: string[];
  popular?: boolean;
  monthly4x: number; // 4 classes/week * 4 weeks = 16 classes/month
  monthly5x: number; // 5 classes/week * 4 weeks = 20 classes/month
}

export const COURSE_PRICING: CoursePricing[] = [
  {
    id: "noorani-qaida",
    courseName: "Noorani Qaida",
    pricePerClass: 3,
    badge: "Beginner",
    description: "Foundational Arabic letter recognition, Makharij pronunciation, and basic phonetic rules.",
    features: [
      "1-on-1 dedicated tutor",
      "Correct letter pronunciation",
      "Basic Arabic reading foundation",
      "Flexible class scheduling",
    ],
    monthly4x: 3 * 16, // $48 / month
    monthly5x: 3 * 20, // $60 / month
  },
  {
    id: "quran-reading",
    courseName: "Quran Reading",
    pricePerClass: 4,
    badge: "Most Popular",
    popular: true,
    description: "Fluent recitation of the Holy Quran with proper pauses, connecting rules, and tone.",
    features: [
      "Word-by-word recitation practice",
      "Continuous fluency correction",
      "Surah memorization support",
      "Regular progress tracking",
    ],
    monthly4x: 4 * 16, // $64 / month
    monthly5x: 4 * 20, // $80 / month
  },
  {
    id: "tajweed",
    courseName: "Tajweed",
    pricePerClass: 6,
    badge: "Advanced",
    description: "In-depth rules of Tajweed, Makharij articulation points, Sifaat, and Waqf mastery.",
    features: [
      "Certified Ijazah scholars",
      "Detailed theoretical & practical rules",
      "Recitation perfection & error analysis",
      "Personalized feedback every session",
    ],
    monthly4x: 6 * 16, // $96 / month
    monthly5x: 6 * 20, // $120 / month
  },
  {
    id: "hifz",
    courseName: "Hifz (Memorization)",
    pricePerClass: 5,
    badge: "Dedicated",
    description: "Structured Quran memorization with daily new lessons (Sabaq) and revision (Sabqi & Manzil).",
    features: [
      "Systematic daily Sabaq & revision",
      "Long-term retention strategies",
      "Weekly revision checkpoints",
      "Experienced Hafiz/Hafiza tutors",
    ],
    monthly4x: 5 * 16, // $80 / month
    monthly5x: 5 * 20, // $100 / month
  },
  {
    id: "islamic-studies",
    courseName: "Islamic Studies",
    pricePerClass: 0,
    isFree: true,
    badge: "Included Free",
    freeNote: "Included FREE with any course enrollment",
    description: "Essential knowledge of Aqeedah, Fiqh, Seerah, Duas, and Islamic manners for all ages.",
    features: [
      "Daily Duas & basic Fiqh",
      "Stories of the Prophets & Seerah",
      "Islamic morals & daily ethics",
      "Completely FREE with any course",
    ],
    monthly4x: 0,
    monthly5x: 0,
  },
];

export const PRICING_CONSTANTS = {
  classesPerMonth4x: 16,
  classesPerMonth5x: 20,
  freeTrialClasses: 3,
  freeIslamicStudiesNote: "Islamic Studies is included FREE with any course enrollment",
  introductoryRateNote: "These are special introductory rates for new students. Lock in your rate today!",
};
