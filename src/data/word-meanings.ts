export interface WordMeaning {
  id: string;
  title: string;
  arabicText: string;
  transliteration: string;
  englishMeaning: string;
  whyItMatters: string;
  category: "Daily Remembrance" | "Praise & Gratitude" | "Core Verses" | "Short Surahs";
}

export const WORD_MEANINGS: WordMeaning[] = [
  {
    id: "bismillah",
    title: "Bismillah",
    arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "Bismillāhir-Raḥmānir-Raḥīm",
    englishMeaning: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
    whyItMatters:
      "Saying this before eating, studying, or starting anything puts Allah's barakah (blessing) and protection into whatever you do.",
    category: "Daily Remembrance",
  },
  {
    id: "alhamdulillah",
    title: "Alhamdulillah",
    arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    transliteration: "Al-ḥamdu lillāhi Rabbil-ʿālamīn",
    englishMeaning: "All praise and gratitude belong to Allah alone, the Lord of all the worlds.",
    whyItMatters:
      "It reminds us that every single good thing in our life — from our families to our food — is a generous gift from Allah.",
    category: "Praise & Gratitude",
  },
  {
    id: "surah-ikhlas-1",
    title: "Tawheed (Surah Al-Ikhlas: 1-2)",
    arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ",
    transliteration: "Qul Huwal-lāhu Aḥad. Allāhuṣ-Ṣamad.",
    englishMeaning: "Say, 'He is Allah, [who is] One. Allah, the Eternal Refuge.'",
    whyItMatters:
      "This teaches us that Allah is completely One, Unique, and doesn't need anyone, while everyone and everything needs Him.",
    category: "Short Surahs",
  },
  {
    id: "ayatul-kursi-opening",
    title: "Ayat-ul-Kursi (Opening)",
    arabicText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
    transliteration: "Allāhu lā ilāha illā Huwal-Ḥayyul-Qayyūm. Lā ta'khudhuhū sinatuw-wa lā nawm.",
    englishMeaning: "Allah — there is no deity except Him, the Ever-Living, the Sustainer of all existence. Neither drowsiness overtakes Him nor sleep.",
    whyItMatters:
      "Reciting this brings supreme peace of heart because it assures us that Allah is always awake, watching over, and protecting us.",
    category: "Core Verses",
  },
  {
    id: "subhanallah",
    title: "Tasbeeh (SubhanAllah)",
    arabicText: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subḥānallāhi wa biḥamdih",
    englishMeaning: "Glory be to Allah, and to Him belongs all praise.",
    whyItMatters:
      "It declares that Allah is completely free from any imperfection, flaw, or mistake.",
    category: "Daily Remembrance",
  },
  {
    id: "surah-fatiha-ihdina",
    title: "The Ultimate Dua (Surah Al-Fatiha: 6)",
    arabicText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Ihdinaṣ-ṣirāṭal-mustaqīm",
    englishMeaning: "Guide us along the Straight Path.",
    whyItMatters:
      "We ask Allah in every prayer to guide us to make kind, honest, and good choices every day that please Him.",
    category: "Core Verses",
  },
  {
    id: "rabbana-atina",
    title: "Comprehensive Dua (Surah Al-Baqarah: 201)",
    arabicText: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbanā ātinā fid-dunyā ḥasanatan wa fil-ākhirati ḥasanatan wa qinā ʿadhāban-nār.",
    englishMeaning: "Our Lord, give us in this world that which is good and in the Hereafter that which is good, and protect us from the punishment of the Fire.",
    whyItMatters:
      "The Prophet Muhammad ﷺ recited this dua the most because it asks Allah for happiness, health, and faith both in this life and Jannah.",
    category: "Core Verses",
  },
  {
    id: "astaghfirullah",
    title: "Istighfar (Seeking Forgiveness)",
    arabicText: "أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullāhal-ʿAẓīma wa atūbu ilayh",
    englishMeaning: "I seek the forgiveness of Allah, the Magnificent, and I repent unto Him.",
    whyItMatters:
      "Whenever we make a mistake, saying this wipes our slate clean and draws us closer to Allah's endless forgiveness.",
    category: "Praise & Gratitude",
  },
  {
    id: "surah-kawthar",
    title: "Abundance (Surah Al-Kawthar: 1-2)",
    arabicText: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ ۝ فَصَلِّ لِرَبِّكَ وَانْحَرْ",
    transliteration: "Innā aʿṭaynākal-kawthar. Faṣalli li-Rabbika wanḥar.",
    englishMeaning: "Indeed, We have granted you [O Muhammad] abundance. So pray to your Lord and sacrifice.",
    whyItMatters:
      "It reminds us that when Allah blesses us with good things, our response should be praying to Him and sharing with others.",
    category: "Short Surahs",
  },
  {
    id: "surah-nas-protection",
    title: "Seeking Protection (Surah An-Nas: 1-3)",
    arabicText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ",
    transliteration: "Qul aʿūdhu bi-Rabbin-nās. Malikin-nās. Ilāhin-nās.",
    englishMeaning: "Say, 'I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind.'",
    whyItMatters:
      "Whenever we feel scared or anxious, this verse reminds us that Allah is the King of all people and our greatest protector.",
    category: "Short Surahs",
  },
];
