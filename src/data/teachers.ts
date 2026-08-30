export interface Teacher {
  id: string;
  name: string;
  gender: "male" | "female";
  title: string;
  qualifications: string[];
  specialization: string[];
  yearsExperience: number;
  bio: string;
}

export const TEACHERS: Teacher[] = [
  {
    id: "qari-bilal",
    name: "Qari Muhammad Bilal",
    gender: "male",
    title: "Senior Tajweed & Qira'at Specialist",
    qualifications: [
      "Ijazah in Hafs 'an 'Asim Recitation",
      "Shahadat-ul-Alimiyah (Dars-e-Nizami)",
      "Bachelor's in Arabic & Islamic Studies",
      "8+ Years Online Teaching Experience",
    ],
    specialization: ["Tajweed", "Quran Reading", "Noorani Qaida"],
    yearsExperience: 8,
    bio: "Qari Bilal has trained hundreds of students across the UK, USA, and Canada in accurate Tajweed and beautiful recitation. His patient, structured methodology helps students build confidence from letter articulation to fluent reading.",
  },
  {
    id: "hafiz-abdul-rehman",
    name: "Ustadh Hafiz Abdul Rehman",
    gender: "male",
    title: "Lead Hifz & Memorization Instructor",
    qualifications: [
      "Certified Hafiz-e-Quran (Wafaq-ul-Madaris)",
      "Specialized in Revision (Sabqi & Manzil) Techniques",
      "Trained in Child-Centric Memorization Pedagogy",
      "6+ Years Online Hifz Coaching",
    ],
    specialization: ["Hifz", "Quran Reading", "Islamic Studies"],
    yearsExperience: 6,
    bio: "Hafiz Abdul Rehman is passionate about guiding both young learners and adults through their Quran memorization journey. He implements structured daily Sabaq targets with rigorous revision plans to ensure long-term retention.",
  },
  {
    id: "mufti-tariq",
    name: "Mufti Tariq Mahmood",
    gender: "male",
    title: "Foundation Tutor & Islamic Studies Scholar",
    qualifications: [
      "Takhassus fi al-Ifta (Mufti Certification)",
      "Master's in Islamic Jurisprudence & Usul",
      "Specialist in Beginner Arabic & Noorani Qaida",
      "10+ Years Teaching Experience",
    ],
    specialization: ["Noorani Qaida", "Islamic Studies", "Quran Reading"],
    yearsExperience: 10,
    bio: "With over a decade of teaching experience, Mufti Tariq specializes in foundational phonetics for absolute beginners and comprehensive Islamic studies. His engaging storytelling brings Seerah, Duas, and Fiqh to life for students of all ages.",
  },
  {
    id: "ustadha-maryam",
    name: "Ustadha Maryam Fatima",
    gender: "female",
    title: "Senior Female Quran & Tajweed Tutor",
    qualifications: [
      "Ijazah in Quranic Tajweed & Recitation",
      "Alimah Degree (Dars-e-Nizami for Sisters)",
      "Bachelor's in Education & Arabic Literature",
      "7+ Years Dedicated Sisters & Kids Tutoring",
    ],
    specialization: ["Noorani Qaida", "Tajweed", "Quran Reading", "Islamic Studies"],
    yearsExperience: 7,
    bio: "Ustadha Maryam provides a welcoming, encouraging, and comfortable online learning environment exclusively for sisters and young children. She is renowned for her gentle demeanor and clear, step-by-step breakdown of Tajweed rules.",
  },
];
