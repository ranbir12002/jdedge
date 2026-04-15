export const COURSES = [
    // 1. SHORT-TERM CAPSULES (1 Week)
    {
        slug: "interview-prep",
        title: "Interview Preparation Programme",
        desc: "Ace your interviews with confidence, body language tips, and mock sessions.",
        category: "capsule",
        tags: ["1 Week", "Interviews", "Confidence", "Tailored Course"],
        img: "/assets/courses/interview-prep.jpeg",
        level: "All levels",
        mode: "Offline / Online",
        details: {
            overview: "A specialized 1-week intensive capsule designed to transform your interview performance. We focus on non-verbal communication, voice modulation, and answering strategies.",
            whoFor: ["Job Seekers", "Campus Placement Students", "Professionals switching roles"],
            examFormat: [
                { title: "Mock Interviews", desc: "Real-time practice with feedback." },
                { title: "Body Language", desc: "Posture, eye contact, and gestures." },
                { title: "Voice Modulation", desc: "Sounding confident and authoritative." }
            ],
            benefits: ["Overcome anxiety", "Sell your skills effectively", "Get hired faster"]
        }
    },
    {
        slug: "formal-english",
        title: "Formal English Brush-Up (B1 and Above)",
        desc: "Polish your grammar and writing for professional accuracy.",
        category: "capsule",
        tags: ["1 Week", "Grammar", "Writing", "Tailored Course"],
        img: "/assets/courses/formal-english.png",
        level: "B1 and Above",
        mode: "Offline / Online",
        details: {
            overview: "Bridging the gap between casual speaking and professional eloquence. Fix recurring grammar errors and master formal tone.",
            whoFor: ["Corporate professionals", "Researchers", "Higher Ed Students"],
            examFormat: [
                { title: "Grammar Audit", desc: "Fixing specific recurring errors." },
                { title: "Formal Writing", desc: "Emails, reports, and essays." },
                { title: "Vocabulary", desc: "Precise, formal alternatives." }
            ],
            benefits: ["Error-free emails", "Grammatical precision", "Professional credibility"]
        }
    },
    {
        slug: "placement-refresher",
        title: "Placement Test Refresher Programme",
        desc: "Crack automated tests like Versant, AMCAT, and Superset.",
        category: "capsule",
        tags: ["1 Week", "Placement", "Tests", "Tailored Course"],
        img: "/assets/courses/placement-refresher.png",
        level: "All levels",
        mode: "Offline / Online",
        details: {
            overview: "Targeted specifically at recruitment tests used by MNCs. Decode the algorithms and score higher.",
            whoFor: ["Final year students", "MNC Job Applicants"],
            examFormat: [
                { title: "Automated Speech", desc: "Versant-style voice tests." },
                { title: "Aptitude", desc: "Rapid-fire grammar and vocab." },
                { title: "Reading Speed", desc: "Strategies for timed tests." }
            ],
            benefits: ["Understand AI scoring", "Improve reaction time", "Boost percentiles"]
        }
    },

    // 2. FOUNDATION (1 Month)
    {
        slug: "essential-english",
        title: "Essential English Programme (A2 and Above)",
        desc: "Build a strong foundation in grammar, vocabulary, and speaking.",
        category: "monthly",
        tags: ["1 Month", "Speaking", "Basics"],
        img: "/assets/courses/essential-english.png",
        level: "A2 and Above",
        mode: "Offline / Online",
        details: {
            overview: "Comprehensive 30-day foundation course covering Listening, Speaking, Reading, and Writing (LSRW).",
            whoFor: ["Beginners", "Homemakers", "Hesitant speakers"],
            examFormat: [
                { title: "Speaking Practice", desc: "Daily discussions." },
                { title: "Grammar", desc: "Tenses & Structures." },
                { title: "Listening", desc: "Understanding accents." }
            ],
            benefits: ["Remove fear of speaking", "Stronger grammar", "Better vocabulary"]
        }
    },
    {
        slug: "essential-business",
        title: "Essential Business English Programme (A2 and Above)",
        desc: "Master workplace communication: emails, meetings, and presentations.",
        category: "monthly",
        tags: ["1 Month", "Business", "Workplace"],
        img: "/assets/courses/essential-business.png",
        level: "A2 and Above",
        mode: "Offline / Online",
        details: {
            overview: "Empower your career with valid business English. Run meetings, negotiate, and write persuasive documents.",
            whoFor: ["Working Professionals", "MBA Students", "Entrepreneurs"],
            examFormat: [
                { title: "Email Writing", desc: "Conventions and tone." },
                { title: "Meetings", desc: "Fluency and delivery." },
                { title: "Presentation Skills", desc: "Signposting and Impact." }
            ],
            benefits: ["Effective stakeholder comms", "Confident leadership", "Professional writing"]
        }
    },

    // 3. CAMBRIDGE (Year-Long / Exams)
    {
        slug: "cambridge-yle",
        title: "Cambridge Young Learners English",
        desc: "Includes Starters, Movers, Flyers, & Key (A2). International standards for ages 5-15.",
        category: "year",
        tags: ["Kids 5-15", "Cambridge", "Foundation"],
        img: "/assets/courses/cambridge-yle.png",
        level: "Pre-A1 to A2",
        mode: "Offline / Online",
        details: {
            overview: "The gold standard in English for children. A fun, activity-based path that prepares students for international certificates at every milestone.",
            whoFor: ["Children aged 5-15", "Parents seeking global standards"],
            examFormat: [
                { title: "Pre-A1 Starters", desc: "Beginner level. Listening, Reading, Speaking." },
                { title: "A1 Movers", desc: "Elementary level. Builds confidence." },
                { title: "A2 Flyers", desc: "Intermediate level. Equivalent to KET for Schools." },
                { title: "A2 Key", desc: "Proof of basic communication skills." }
            ],
            benefits: ["Global certification", "No pass/fail anxiety", "Strong foundation for Future Studies"]
        }
    },
    {
        slug: "cambridge-linguaskill",
        title: "Cambridge Linguaskill",
        desc: "AI-powered testing for fast, accurate assessment of real-world English skills.",
        category: "year",
        tags: ["College", "AI Test", "Certification"],
        img: "/assets/courses/cambridge-linguaskill.jpg",
        level: "A2 to C1+",
        mode: "Offline / Online",
        details: {
            overview: "A convenient, quick online test to check English levels, powered by Cambridge AI. Ideal for institutions and recruitment.",
            whoFor: ["Universities", "Recruiters", "Graduates"],
            examFormat: [
                { title: "General", desc: "Everyday English." },
                { title: "Business", desc: "Language for the Corporate setting." },
                { title: "Modular", desc: "Test flexible combinations of skills." }
            ],
            benefits: ["Results in 48 hours", "Accurate AI scoring", "CEFR aligned"]
        }
    },
    {
        slug: "cambridge-bec",
        title: "Cambridge Business English Certificate (BEC)",
        desc: "Preliminary (B1), Vantage (B2), Higher (C1). Global recognition.",
        category: "year",
        tags: ["Professionals", "Global", "Career"],
        img: "/assets/courses/cambridge-bec.jpeg",
        level: "B1 to C1",
        mode: "Offline / Online",
        details: {
            overview: "The most respected Business English qualification globally. Proves to employers that you can work effectively in an international environment.",
            whoFor: ["Professionals", "Business Graduates"],
            examFormat: [
                { title: "B1 Business Preliminary", desc: "Practical everyday business skills." },
                { title: "B2 Business Vantage", desc: "Success in international business." },
                { title: "C1 Business Higher", desc: "Senior-level professional fluency." }
            ],
            benefits: ["Lifetime validity", "Global acceptance", "Career acceleration"]
        }
    },

    // 4. IELTS (Exam Prep)
    {
        slug: "ielts-refresher",
        title: "IELTS Refresher Programme (1 Week)",
        desc: "Strategy and review for students ready to take the test.",
        category: "exam",
        tags: ["1 Week", "IELTS", "Review"],
        img: "/assets/courses/ielts-refresher.webp",
        level: "Advanced",
        mode: "Offline / Online",
        details: {
            overview: "High-intensity revision focusing purely on exam technique and maximizing your existing knowledge.",
            whoFor: ["Retakers", "Students with upcoming dates"],
            examFormat: [
                { title: "Mock Tests", desc: "Full timed practice." },
                { title: "Error Analysis", desc: "Personal feedback." },
                { title: "Speaking Drills", desc: "Fluency boosting." }
            ],
            benefits: ["Score maximization", "Confidence", "Fix errors"]
        }
    },
    {
        slug: "ielts-fastrack",
        title: "IELTS Fastrack (2 Weeks)",
        desc: "Intensive training for quick results and score improvement.",
        category: "exam",
        tags: ["2 Weeks", "IELTS", "Intensive"],
        img: "/assets/courses/ielts-fastrack.png",
        level: "Intermediate",
        mode: "Offline / Online",
        details: {
            overview: "Balanced intensive course covering Listening, Reading, Writing, and Speaking. Fast-paced but thorough.",
            whoFor: ["Intermediate learners", "Tight deadlines"],
            examFormat: [
                { title: "Modules", desc: "Coverage of all 4 tests." },
                { title: "Writing", desc: "Templates for Task 1 & 2." },
                { title: "Speaking", desc: "1-on-1 practice." }
            ],
            benefits: ["Quick coverage", "Strategy focus", "Assured Band Jump"]
        }
    },
    {
        slug: "ielts-focus",
        title: "IELTS Focus (4 Weeks)",
        desc: "Comprehensive preparation with deep dives into vocabulary and grammar.",
        category: "exam",
        tags: ["4 Weeks", "IELTS", "Standard"],
        img: "/assets/courses/ielts-focus.webp",
        level: "Intermediate+",
        mode: "Offline / Online",
        details: {
            overview: "The gold standard prep course. Builds underlying language skills alongside exam strategies.",
            whoFor: ["First-time takers", "Aiming for Band 7+"],
            examFormat: [
                { title: "Lexical Resource", desc: "Advanced vocabulary." },
                { title: "Complex Grammar", desc: "Structures for high scores." },
                { title: "Weekly Mocks", desc: "Track progress." }
            ],
            benefits: ["Thorough prep", "Holistic improvement", "Feedback loop"]
        }
    },
    {
        slug: "ielts-foundation",
        title: "IELTS Foundation (6 Weeks)",
        desc: "Start from basics and work your way up to exam readiness.",
        category: "exam",
        tags: ["6 Weeks", "IELTS", "Beginner"],
        img: "/assets/courses/ielts-foundation.jpg",
        level: "Beginner",
        mode: "Offline / Online",
        details: {
            overview: "For students needing to build English basics before tackling the exam difficulty.",
            whoFor: ["Beginners", "Need high score jump (4.5 -> 6.5)"],
            examFormat: [
                { title: "General English", desc: "Sentence construction basics." },
                { title: "Exam Intro", desc: "Slow exposure to formats." },
                { title: "Skill Building", desc: "Detailed practice." }
            ],
            benefits: ["Strong base", "Reduced anxiety", "Realistic path"]
        }
    },

    // 5. WORKSHOPS & TRAINING
    {
        slug: "teachers-training",
        title: "Teachers’ Training",
        desc: "Pedagogy, classroom management, and active learning for modern educators.",
        category: "workshops",
        tags: ["Educators", "Tailored Course", "Schools"],
        img: "/assets/courses/teachers-training.jpg",
        level: "Professional",
        mode: "Offline / Live",
        details: {
            overview: "Upskilling educators with international teaching standards, psychology, and digital tools.",
            whoFor: ["Teachers", "Aspiring Educators"],
            examFormat: [
                { title: "Classroom Mgmt", desc: "Engagement & behavior." },
                { title: "Active Learning", desc: "Beyond rote memorization." },
                { title: "Assessment", desc: "Designing effective tests." }
            ],
            benefits: ["Modern educator", "Better student outcomes", "Career growth"]
        }
    },
    {
        slug: "campus-corporate",
        title: "Campus to Corporate Training",
        desc: "Finishing school for students. Etiquette, grooming, and professional mindset.",
        category: "workshops",
        tags: ["College", "Career", "Etiquette", "Tailored Course"],
        img: "/assets/courses/campus-corporate.jpg",
        level: "Students",
        mode: "Offline / Live",
        details: {
            overview: "Transition from student life to professional life. Covers professional etiquettes and corporate communication.",
            whoFor: ["Final year students", "Fresh graduates"],
            examFormat: [
                { title: "Interview Preparation", desc: "Dining & Dressing." },
                { title: "Team Dynamics", desc: "Working in teams." },
                { title: "Office Comms", desc: "Hierarchy & reporting." }
            ],
            benefits: ["Placement success", "Smooth transition", "Confidence"]
        }
    },
    {
        slug: "soft-skills",
        title: "Soft Skills & Communication Workshops",
        desc: "Leadership, Verbal Ability, and Storytelling for corporate impact.",
        category: "workshops",
        tags: ["Corporate", "Leadership", "Skills", "Tailored Course"],
        img: "/assets/courses/soft-skills.jpg",
        level: "Corporate",
        mode: "Offline / Live",
        details: {
            overview: "Bespoke corporate training. Leadership, emotional intelligence, and persuasive storytelling.",
            whoFor: ["Managers", "Corporate Teams", "HR"],
            examFormat: [
                { title: "Leadership", desc: "Decision making." },
                { title: "Storytelling", desc: "Narrative for business." },
                { title: "Verbal Ability", desc: "Communication precision." }
            ],
            benefits: ["Team cohesion", "Leadership pipeline", "Brand communication"]
        }
    },
    {
        slug: "special-programmes",
        title: "Special Programmes & Events",
        desc: "Summer Camps, School Events, and the Open Library Initiative.",
        category: "workshops",
        tags: ["Events", "Kids", "Community", "Tailored Course"],
        img: "/assets/courses/special-programmes.jpg",
        level: "All Ages",
        mode: "Offline Events",
        details: {
            overview: "Engaging community learning experiences. Engaging summer camps and reading initiatives.",
            whoFor: ["School Children", "Community", "Schools"],
            examFormat: [
                { title: "Summer Camps", desc: "Themed learning weeks." },
                { title: "Open Library", desc: "Curated literature access." },
                { title: "Competitions", desc: "Debates & Spell Bees." }
            ],
            benefits: ["Holistic growth", "Love for reading", "Community"]
        }
    }
];
