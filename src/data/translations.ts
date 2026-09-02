export type Language = "en" | "ur";

export interface Translations {
  nav: {
    courses: string;
    about: string;
    teachers: string;
    pricing: string;
    faq: string;
    contact: string;
    register: string;
    bookTrial: string;
  };
  hero: {
    trialBadge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bookTrialBtn: string;
    exploreBtn: string;
    ratingText: string;
    countriesText: string;
    guarantee: string;
  };
  stats: {
    stat1Value: string;
    stat1Label: string;
    stat2Value: string;
    stat2Label: string;
    stat3Value: string;
    stat3Label: string;
    stat4Value: string;
    stat4Label: string;
  };
  whyChooseUs: {
    tag: string;
    title: string;
    subtitle: string;
    benefits: Array<{
      title: string;
      desc: string;
    }>;
  };
  courses: {
    tag: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    bookTrial: string;
    items: Array<{
      title: string;
      description: string;
      badge: string;
    }>;
  };
  learnMeaning: {
    tag: string;
    title: string;
    desc: string;
    cta: string;
  };
  progressReport: {
    tag: string;
    title: string;
    desc: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  certificate: {
    tag: string;
    title: string;
    desc: string;
    feature1: string;
    feature2: string;
    feature3: string;
  };
  founder: {
    tag: string;
    name: string;
    role: string;
    quote: string;
    p1: string;
    p2: string;
    p3: string;
    dua: string;
    readStory: string;
  };
  studentStory: {
    tag: string;
    title: string;
    desc: string;
    videoHint: string;
    certTag: string;
    certCaption: string;
  };
  pricingPreview: {
    tag: string;
    title: string;
    desc: string;
    startingFrom: string;
    viewPricingBtn: string;
  };
  testimonials: {
    tag: string;
    title: string;
    subtitle: string;
    items: Array<{
      quote: string;
      name: string;
      location: string;
      course: string;
    }>;
  };
  faq: {
    tag: string;
    title: string;
    subtitle: string;
    viewAllFaq: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  finalCta: {
    badge: string;
    title: string;
    desc: string;
    button: string;
    whatsapp: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    courses: string;
    resources: string;
    support: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      courses: "Courses",
      about: "About",
      teachers: "Teachers",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      register: "Register",
      bookTrial: "Book Free Trial",
    },
    hero: {
      trialBadge: "🌟 3 Free Trial Classes — No Credit Card Required",
      headline: "Master Quran Recitation with",
      headlineHighlight: "Qualified Live Teachers",
      subheadline:
        "Personalised 1-on-1 online Quran classes tailored for children and adults across USA, UK, Canada, Australia & worldwide. Learn Noorani Qaida, Tajweed, and Hifz from certified scholars.",
      bullet1: "Dedicated Female Tutors for Sisters & Kids",
      bullet2: "1-on-1 Live Interactive Classes",
      bullet3: "Flexible Timing for All Time Zones",
      bookTrialBtn: "Book 3 Free Trials →",
      exploreBtn: "Explore Courses",
      ratingText: "Trusted by Families Worldwide",
      countriesText: "USA, UK, Canada, Australia & Beyond",
      guarantee: "100% Satisfaction Guarantee • Cancel Anytime",
    },
    stats: {
      stat1Value: "3 Classes",
      stat1Label: "Free Trial (No Card)",
      stat2Value: "1-on-1",
      stat2Label: "Dedicated Attention",
      stat3Value: "100%",
      stat3Label: "Vetted Quran Scholars",
      stat4Value: "24/7",
      stat4Label: "Flexible Time Zones",
    },
    whyChooseUs: {
      tag: "Why Choose Us",
      title: "Why Families Choose Al Rauf International Quran Academy",
      subtitle:
        "We blend traditional Islamic pedagogy with modern interactive technology for a supportive, engaging learning experience.",
      benefits: [
        {
          title: "Personalised 1-on-1 Attention",
          desc: "Every session is dedicated solely to your child — no crowded groups, just focused learning at their own natural pace.",
        },
        {
          title: "Certified Pakistani Scholars",
          desc: "Our teachers are qualified Huffaz and Islamic scholars with proven experience in teaching international students in English & Urdu.",
        },
        {
          title: "Dedicated Female Instructors",
          desc: "Certified, patient female Quran teachers available specifically for young children and sisters in a secure environment.",
        },
        {
          title: "Tailored to Your Time Zone",
          desc: "Whether you reside in the US (EST/PST), UK, Canada, or Australia, we arrange class timings around your family routine.",
        },
        {
          title: "Structured Progress Tracking",
          desc: "Parents receive regular milestone updates and post-class progress summaries detailing strengths and practice areas.",
        },
        {
          title: "Honest & Affordable Tuition",
          desc: "High-quality Quran education at accessible rates with zero hidden fees and no long-term binding contracts.",
        },
      ],
    },
    courses: {
      tag: "Structured Programs",
      title: "Our Quran & Islamic Courses",
      subtitle:
        "From beginner alphabet basics to advanced Tajweed and Hifz, we provide tailored learning paths for every age.",
      viewDetails: "View Details",
      bookTrial: "Book Free Trial →",
      items: [
        {
          title: "Noorani Qaida",
          description:
            "The essential foundation for absolute beginners. Master Arabic letters, correct pronunciation (Makharij), and joining rules with gentle guidance.",
          badge: "Beginners",
        },
        {
          title: "Quran Reading (Nazra)",
          description:
            "Learn to recite the Holy Quran smoothly and accurately with fluent word connection and basic Tajweed rules applied in practice.",
          badge: "All Levels",
        },
        {
          title: "Tajweed Mastery",
          description:
            "Perfect your recitation with in-depth rules of Tajweed — Makharij, Sifaat, Ghunnah, and Waqf — under qualified Qaris.",
          badge: "Intermediate",
        },
        {
          title: "Hifz (Memorization)",
          description:
            "A structured, milestone-based memorization program with systematic daily revision (Daur) designed for lifelong Quran retention.",
          badge: "Dedicated",
        },
        {
          title: "Islamic Studies for Kids",
          description:
            "Essential foundations of Aqeedah, practical Salah, Daily Duas, Hadith, and Seerah of the Prophet ﷺ in engaging sessions.",
          badge: "All Ages",
        },
      ],
    },
    learnMeaning: {
      tag: "Comprehension & Reflection",
      title: "Understand What You Recite — Not Just Read",
      desc: "We believe true connection comes when students grasp the meaning of the verses they recite daily.",
      cta: "Explore Word Meanings →",
    },
    progressReport: {
      tag: "Complete Transparency",
      title: "Real Progress You Can See After Every Session",
      desc: "No wondering or guessing. After lessons, parents receive structured feedback on lesson milestones, strengths, and home practice tips.",
      feature1: "Detailed lesson coverage & verses recited",
      feature2: "Highlighting pronunciation strengths & milestones",
      feature3: "Clear homework and revision instructions",
    },
    certificate: {
      tag: "Official Recognition",
      title: "Earn an Accredited Certificate of Completion",
      desc: "Celebrate your child's milestone! Upon completing each course, students receive an official signed Certificate of Completion.",
      feature1: "Issued by Founder & Director Hafiz Abdul Rauf",
      feature2: "Unique verification ID & gold academy seal",
      feature3: "Printable high-resolution PDF download",
    },
    founder: {
      tag: "A Note From Our Founder",
      name: "Hafiz Abdul Rauf",
      role: "Founder & Director",
      quote: "“Every child deserves to learn the Quran with love, patience, and confidence.”",
      p1: "Assalamu Alaikum wa Rahmatullah. As someone who dedicated years to memorising the Holy Quran and studying traditional Islamic sciences in Pakistan, I experienced firsthand how transformative a patient, encouraging teacher can be.",
      p2: "I founded Al Rauf International Quran Academy to bridge the distance between qualified, traditional scholars and Muslim families living abroad in the UK, USA, Canada, Australia, and beyond.",
      p3: "As a parent, I understand the trust you place in us. That is why I personally interview and vet every single teacher on our platform for their recitation standards, character, and gentle teaching manner.",
      dua: "Barakallahu feekum (May Allah bless you and your family)",
      readStory: "Read Our Full Story →",
    },
    studentStory: {
      tag: "Student Spotlight",
      title: "Hear Our Student Recite - A Real Success Story",
      desc: "We're proud of our student, who recently won recognition at an International Quran Recitation Competition. Listen to their beautiful recitation below.",
      videoHint: "▶️ Click play to listen to our student's award-winning recitation",
      certTag: "International Competition Recognition",
      certCaption: "International Quran Competition Certificate",
    },
    pricingPreview: {
      tag: "Affordable Plans",
      title: "Transparent & Flexible Monthly Tuition",
      desc: "Affordable 1-on-1 Quran tutoring with no long-term contracts. Start with 3 free trial lessons before committing.",
      startingFrom: "Starting from just $3 / class",
      viewPricingBtn: "View All Pricing Plans →",
    },
    testimonials: {
      tag: "Parent & Student Feedback",
      title: "What Our Global Families Say",
      subtitle:
        "Families across the UK, USA, Canada, and Australia trust Al Rauf International Quran Academy.",
      items: [
        {
          quote:
            "Finding a qualified, patient Quran teacher for my 7-year-old in London was tough until we found Al Rauf Academy. The teacher is so encouraging and my daughter looks forward to every single class!",
          name: "Sister Fatima K.",
          location: "London, UK",
          course: "Noorani Qaida & Basic Tajweed",
        },
        {
          quote:
            "The 1-on-1 attention is unmatched. My son has memorised 5 Juz with proper Makharij and Tajweed. The progress updates give us complete peace of mind.",
          name: "Brother Tariq M.",
          location: "Houston, Texas, USA",
          course: "Quran Hifz & Tajweed",
        },
        {
          quote:
            "Flexible scheduling that aligns with Toronto school timings made this seamless. Having a dedicated female teacher for my daughters has been a true blessing.",
          name: "Sister Zainab A.",
          location: "Toronto, Canada",
          course: "Quran Reading & Islamic Studies",
        },
      ],
    },
    faq: {
      tag: "Common Inquiries",
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know about our online Quran classes and enrolment process.",
      viewAllFaq: "View All FAQs →",
      items: [
        {
          q: "How do the 3 Free Trial classes work?",
          a: "You simply complete the booking form with your preferred timings. We assign a qualified teacher for 3 full 1-on-1 sessions. No credit card or payment info is required.",
        },
        {
          q: "Are female Quran tutors available for sisters and children?",
          a: "Yes, we have dedicated, highly qualified female teachers available for sisters and young children.",
        },
        {
          q: "What age can children start learning?",
          a: "We welcome children starting from age 4 for Noorani Qaida, as well as youth, adults, and seniors at any stage of their Quran journey.",
        },
        {
          q: "How are the classes conducted?",
          a: "Lessons take place live 1-on-1 via Google Meet or Zoom, allowing the teacher to share digital Quran pages and guide pronunciation in real-time.",
        },
      ],
    },
    finalCta: {
      badge: "No Obligation • 3 Free Classes",
      title: "Give Your Child the Gift of Beautiful Quran Recitation",
      desc: "Start with 3 free trial lessons with qualified, gentle teachers. Experience our 1-on-1 learning environment with zero commitment.",
      button: "Book 3 Free Trial Classes →",
      whatsapp: "Chat on WhatsApp",
    },
    footer: {
      desc: "Al Rauf International Quran Academy provides certified 1-on-1 online Quran and Islamic education to families across the USA, UK, Canada, Australia, and worldwide.",
      quickLinks: "Quick Links",
      courses: "Courses",
      resources: "Resources",
      support: "Support",
      rights: "Al Rauf International Quran Academy. All rights reserved.",
    },
  },

  ur: {
    nav: {
      courses: "کورسز",
      about: "ہمارے متعلق",
      teachers: "اساتذہ کرام",
      pricing: "فیس و پیکجز",
      faq: "عام سوالات",
      contact: "رابطہ کریں",
      register: "رجسٹریشن",
      bookTrial: "مفت ٹرائل کلاس لیں",
    },
    hero: {
      trialBadge: "🌟 ۳ مفت ٹرائل کلاسز — کسی کریڈٹ کارڈ کی ضرورت نہیں",
      headline: "مستند و باصلاحیت اساتذہ کے ساتھ",
      headlineHighlight: "تجوید کے ساتھ قرآن پاک سیکھیں",
      subheadline:
        "امریکہ، برطانیہ، کینیڈا، آسٹریلیا اور دنیا بھر کے بچوں اور بڑوں کے لیے آن لائن ون آن ون قرآن کلاسز۔ نورانی قاعدہ، ناظرہ قرآن، تجوید اور حفظ قرآن مستند پاکستانی علمائے کرام سے سیکھیں۔",
      bullet1: "بچیوں اور بہنوں کے لیے باحجاب و تجربہ کار معلمات",
      bullet2: "انفرادی اور براہِ راست ون آن ون کلاسز",
      bullet3: "آپ کے ملکی وقت کے مطابق لچکدار اوقات",
      bookTrialBtn: "۳ مفت ٹرائل کلاسز حاصل کریں ←",
      exploreBtn: "تمام کورسز دیکھیں",
      ratingText: "دنیا بھر کے خاندانوں کا اعتماد",
      countriesText: "امریکہ، برطانیہ، کینہڈا، آسٹریلیا و دیگر ممالک",
      guarantee: "۱۰۰٪ اطمینان کی ضمانت • کسی بھی وقت منسوخ کریں",
    },
    stats: {
      stat1Value: "۳ کلاسز",
      stat1Label: "مفت ٹرائل (بغیر فیس)",
      stat2Value: "ون آن ون",
      stat2Label: "مکمل انفرادی توجہ",
      stat3Value: "۱۰۰٪",
      stat3Label: "مستند و سند یافتہ اساتذہ",
      stat4Value: "۲۴/۷",
      stat4Label: "ہر ٹائم زون کی سہولت",
    },
    whyChooseUs: {
      tag: "ہماری خصوصیات",
      title: "الرؤف انٹرنیشنل قرآن اکیڈمی کا انتخاب کیوں کریں؟",
      subtitle:
        "ہم روایتی اسلامی طریقہ تدریس کو جدید ٹیکنالوجی کے ساتھ ملا کر ایک محبت بھرا اور پُراثر تعلیمی ماحول فراہم کرتے ہیں۔",
      benefits: [
        {
          title: "مکمل انفرادی توجہ (ون آن ون)",
          desc: "ہر کلاس میں استاد کی تمام تر توجہ صرف آپ کے بچے پر ہوتی ہے، جس سے بچہ اپنی رفتار کے مطابق بہترین انداز میں سیکھتا ہے۔",
        },
        {
          title: "مستند و تجربہ کار پاکستانی علمائے کرام",
          desc: "ہمارے اساتذہ حفظِ قرآن، تجوید اور اسلامی علوم کے مستند اسناد کے حامل ہیں اور بین الاقوامی طلبہ کو پڑھانے کا وسیع تجربہ رکھتے ہیں۔",
        },
        {
          title: "خواتین و بچوں کے لیے ماہر معلمات",
          desc: "بہنوں اور چھوٹے بچوں کے لیے پردے کے مکمل اہتمام کے ساتھ انتہائی مشفق، صابر اور باصلاحیت خواتین اساتذہ میسر ہیں۔",
        },
        {
          title: "آپ کے ملک کے مطابق آسان ٹائمنگ",
          desc: "چاہے آپ امریکہ، برطانیہ، کینیڈا یا آسٹریلیا میں ہوں، ہم آپ کے خاندانی معمولات اور اسکول کے بعد کے مناسب ترین وقت پر کلاس فراہم کرتے ہیں۔",
        },
        {
          title: "ہر کلاس کے بعد پروگریس رپورٹ",
          desc: "ہر سیشن کے بعد والدین کو تحریری رپورٹ بھیجی جاتی ہے جس میں سبق کی پیش رفت، بچے کی خوبیاں اور مشق کے نکات درج ہوتے ہیں۔",
        },
        {
          title: "مناسب و شفاف فیس کا نظام",
          desc: "اعلیٰ معیار کی قرآنی تعلیم انتہائی مناسب ہدیہ میں۔ کوئی پوشیدہ اخراجات نہیں اور نہ ہی کوئی طویل مدتی پابندی۔",
        },
      ],
    },
    courses: {
      tag: "منظم تعلیمی نصاب",
      title: "ہمارے قرآنی و اسلامی کورسز",
      subtitle:
        "بنیادی حروف شناسی سے لے کر اعلیٰ تجوید اور حفظ قرآن تک، ہر عمر کے طلبہ کے لیے جامع کورسز۔",
      viewDetails: "تفصیلات دیکھیں",
      bookTrial: "مفت ٹرائل بُک کریں ←",
      items: [
        {
          title: "نورانی قاعدہ",
          description:
            "بالکل ابتدائی طلبہ کے لیے بہترین بنیاد۔ عربی حروف، درست مخارج اور حروف کو ملا کر پڑھنے کے بنیادی اصول مشفقانہ رہنمائی میں سیکھیں۔",
          badge: "ابتدائی طلبہ",
        },
        {
          title: "ناظرہ قرآن کریم",
          description:
            "درست ادائیگی اور روانی کے ساتھ تلاوتِ کلام پاک۔ بچوں اور بڑوں دونوں کے لیے یکساں مفید اور آسان طریقہ تدریس۔",
          badge: "تمام درجات",
        },
        {
          title: "تجوید و حسنِ قرأت",
          description:
            "مخارج، صفات، غنہ، اخفاء اور وقف کے تمام قواعد و ضوابط کے ساتھ اپنی تلاوت کو خوبصورت اور مسحور کن بنائیں۔",
          badge: "درمیانی درجہ",
        },
        {
          title: "حفظِ قرآن مجید",
          description:
            "روزانہ سبق، سبقی اور منزل (دور) کے باقاعدہ و منظم نظام کے تحت کلام الٰہی کو اپنے سینے میں محفوظ کرنے کا بابرکت سفر۔",
          badge: "خصوصی کورس",
        },
        {
          title: "اسلامک اسٹڈیز برائے اطفال",
          description:
            "بنیادی عقائد، مسنون دعائیں، وضو و نماز کا عملی طریقہ، احادیث مبارکہ اور سیرت النبی ﷺ کے اہم پہلو آسان فہم انداز میں۔",
          badge: "ہر عمر کے لیے",
        },
      ],
    },
    learnMeaning: {
      tag: "فہم و تدبرِ قرآن",
      title: "جو پڑھیں، اسے سمجھیں — صرف زبانی دہرائی نہیں",
      desc: "قرآن پاک سے حقیقی تعلق تب قائم ہوتا ہے جب طالب علم یہ سمجھے کہ اللہ تعالیٰ اس سے کیا فرما رہا ہے۔",
      cta: "قرآنی الفاظ کے معانی دیکھیں ←",
    },
    progressReport: {
      tag: "مکمل شفافیت",
      title: "ہر کلاس کے بعد واضح پروگریس رپورٹ",
      desc: "اب فکر اور اندازوں کی ضرورت نہیں۔ ہر سبق کے بعد والدین کو تحریری رپورٹ موصول ہوتی ہے کہ بچے نے کیا سیکھا اور مزید کیا مشق کرنی ہے۔",
      feature1: "پڑھے گئے اسباق اور آیات کی تفصیل",
      feature2: "تلفظ اور مخارج میں بچے کی بہتری کی نشاندہی",
      feature3: "گھر پر مشق اور ہوم ورک کی واضح ہدایات",
    },
    certificate: {
      tag: "باقاعدہ سند و اعتراف",
      title: "کورس کی تکمیل پر باضابطہ سند حاصل کریں",
      desc: "اپنے بچے کی علمی کامیابی کو سراہیں۔ ہر کورس مکمل کرنے پر طالب علم کو تصدیق شدہ آفیشل سرٹیفکیٹ جاری کیا جاتا ہے۔",
      feature1: "ڈائریکٹر حافظ عبدالرؤف کے دستخط کے ساتھ",
      feature2: "منفرد ویریفکیشن کوڈ اور اکیڈمی کی گولڈن مہر",
      feature3: "پرنٹ اور محفوظ کرنے کے لیے ہائی ریزولوشن پی ڈی ایف",
    },
    founder: {
      tag: "بانی اکیڈمی کا پیغام",
      name: "حافظ عبدالرؤف",
      role: "بانی و ناظم اعلیٰ",
      quote: "”ہر مسلمان بچے کا حق ہے کہ وہ قرآن مجید کو محبت، صبر اور خود اعتمادی کے ساتھ سیکھے۔“",
      p1: "السلام علیکم ورحمۃ اللہ وبرکاتہ۔ حفظِ قرآن اور دینی علوم کی روایتی تعلیم کے دوران میں نے خود دیکھا کہ ایک شفیق اور صابر استاد بچے کی زندگی کو کس طرح بدل سکتا ہے۔",
      p2: "میں نے الرؤف انٹرنیشنل قرآن اکیڈمی کی بنیاد اس لیے رکھی تاکہ بیرونِ ملک (امریکہ، برطانیہ، کینیڈا، آسٹریلیا اور دیگر ممالک) مقیم مسلمان خاندانوں کو مستند پاکستانی اساتذہ سے جوڑا جا سکے۔",
      p3: "ایک باپ ہونے کے ناطے میں والدین کے اعتماد کی اہمیت کو بخوبی سمجھتا ہوں۔ اسی لیے میں اکیڈمی کے ہر استاد کا بذاتِ خود انٹرویو کرتا ہوں تاکہ ان کے اخلاق، لحن اور حسنِ تدریس کا اعلیٰ معیار یقینی بنایا جا سکے۔",
      dua: "بارک اللہ فیکم وفی اہلکم (اللہ آپ کو اور آپ کے اہل خانہ کو برکت عطا فرمائے)",
      readStory: "ہمارا مکمل سفر پڑھیں ←",
    },
    studentStory: {
      tag: "طلبہ کی شاندار کارکردگی",
      title: "ہمارے ہونہار طالب علم کی تلاوت سنیں",
      desc: "ہمیں اپنے طالب علم پر فخر ہے جس نے حال ہی میں انٹرنیشنل حسنِ قرأت کے مقابلے میں شاندار پوزیشن حاصل کی۔ ان کی خوبصورت تلاوت سماعت فرمائیں۔",
      videoHint: "▶️ تلاوت سننے کے لیے پلے بٹن پر کلک کریں",
      certTag: "بین الاقوامی مقابلے کی تعریفی اسناد",
      certCaption: "انٹرنیشنل قرآن کمپیٹیشن سرٹیفکیٹ",
    },
    pricingPreview: {
      tag: "مناسب فیس",
      title: "شفاف اور آسان ماہانہ تعلیمی پیکجز",
      desc: "بغیر کسی پیشگی معاہدے کے انتہائی مناسب ہدیہ۔ مستقل داخلے سے قبل ۳ مفت ٹرائل کلاسز کے ذریعے تعلیمی معیار خود پرکھیں۔",
      startingFrom: "صرف ۳ ڈالر فی کلاس سے شروع",
      viewPricingBtn: "تمام پیکجز کی تفصیل دیکھیں ←",
    },
    testimonials: {
      tag: "والدین کے تاثرات",
      title: "ہمارے مطمئن والدین کیا کہتے ہیں؟",
      subtitle:
        "برطانیہ، امریکہ، کینیڈا اور آسٹریلیا بھر سے مسلم خاندان الرؤف انٹرنیشنل قرآن اکیڈمی پر مکمل اعتماد کرتے ہیں۔",
      items: [
        {
          quote:
            "لندن میں میرے ۷ سالہ بچے کے لیے ایک نرم مزاج اور قابل استاد تلاش کرنا مشکل تھا جب تک ہمیں الرؤف اکیڈمی نہیں ملی۔ استاد صاحب بہت شفقت سے پڑھاتے ہیں اور میرا بچہ کلاس کا بے صبری سے انتظار کرتا ہے۔",
          name: "محترمہ فاطمہ کے۔",
          location: "لندن، برطانیہ",
          course: "نورانی قاعدہ و بنیادی تجوید",
        },
        {
          quote:
            "ون آن ون کلاس کا فائدہ لاجواب ہے۔ میرے بیٹے نے درست مخارج کے ساتھ ۵ پارے حفظ کر لیے ہیں۔ ہر کلاس کے بعد ملنے والی رپورٹ سے ہمیں مکمل اطمینان رہتا ہے۔",
          name: "طارق محمود",
          location: "ہیوسٹن، ٹیکساس، امریکہ",
          course: "حفظِ قرآن مجید و تجوید",
        },
        {
          quote:
            "ٹورنٹو کے اسکول اوقات کے مطابق ٹائمنگ کی ایڈجسٹمنٹ بہت آسان رہی۔ بچیوں کے لیے ماہر خاتون ٹیچر کا ملنا ہمارے لیے ایک بہت بڑی نعمت ہے۔",
          name: "محترمہ زینب اے",
          location: "ٹورنٹو، کینیڈا",
          course: "ناظرہ قرآن و اسلامیات",
        },
      ],
    },
    faq: {
      tag: "عام سوالات و جوابات",
      title: "اکثر پوچھے جانے والے سوالات",
      subtitle: "آن لائن کلاسز اور داخلے کے طریقہ کار سے متعلق تمام ضروری معلومات۔",
      viewAllFaq: "تمام سوالات دیکھیں ←",
      items: [
        {
          q: "۳ مفت ٹرائل کلاسز کا طریقہ کار کیا ہے؟",
          a: "آپ صرف فارم میں اپنا پسندیدہ وقت منتخب کرتے ہیں۔ ہم آپ کے لیے استاد مقرر کرتے ہیں جو ۳ مکمل ون آن ون کلاسز پڑھاتے ہیں۔ اس کے لیے کسی فیس یا کریڈٹ کارڈ کی ضرورت نہیں۔",
        },
        {
          q: "کیا بچیوں اور خواتین کے لیے فی میل ٹیچرز موجود ہیں؟",
          a: "جی ہاں! ہمارے پاس خواتین اور چھوٹے بچوں کے لیے پردے کے اہتمام کے ساتھ انتہائی باصلاحیت اور تجربہ کار معلمات دستیاب ہیں۔",
        },
        {
          q: "بچے کس عمر سے پڑھنا شروع کر سکتے ہیں؟",
          a: "۴ سال کی عمر سے بچے نورانی قاعدہ شروع کر سکتے ہیں۔ اس کے علاوہ نوجوان، خواتین اور بڑی عمر کے افراد بھی کسی بھی مرحلے پر سیکھ سکتے ہیں۔",
        },
        {
          q: "کلاسز کس طرح منعقد ہوتی ہیں؟",
          a: "کلاسز گوگل میٹ یا زوم کے ذریعے براہِ راست لائیو ون آن ون ہوتی ہیں، جہاں استاد اسکرین پر قرآنی اسباق شیئر کر کے درست تلفظ سکھاتے ہیں۔",
        },
      ],
    },
    finalCta: {
      badge: "بغیر کسی فیس کے • ۳ مفت ٹرائل کلاسز",
      title: "آج ہی اپنے بچے کے قرآنی سفر کا آغاز کریں",
      desc: "مشفق اور مستند اساتذہ کے ساتھ ۳ مفت ٹرائل کلاسز لیں۔ خود تعلیمی ماحول کا تجربہ کریں اور مطمئن ہونے پر داخلہ لیں۔",
      button: "۳ مفت ٹرائل کلاسز بک کریں ←",
      whatsapp: "واٹس ایپ پر رابطہ کریں",
    },
    footer: {
      desc: "الرؤف انٹرنیشنل قرآن اکیڈمی امریکہ، برطانیہ، کینیڈا، آسٹریلیا اور دنیا بھر کے مسلمانوں کو اعلیٰ معیار کی انفرادی آن لائن قرآنی تعلیم فراہم کرتی ہے۔",
      quickLinks: "فوری لنکس",
      courses: "کورسز",
      resources: "دیگر ذرائع",
      support: "معاونت و رابطہ",
      rights: "الرؤف انٹرنیشنل قرآن اکیڈمی۔ تمام حقوق محفوظ ہیں۔",
    },
  },
};
