// ==========================================
// NAVIX ENHANCEMENTS - Advanced Features
//==========================================

// ============ ENHANCED QUIZ SYSTEM WITH SUBJECT → TOPIC → LEVEL ============

const QuizDatabase = {
    mathematics: {
        name: 'Mathematics',
        icon: '➗',
        topics: {
            algebra: {
                name: 'Algebra',
                basic: [
                    { question: "What is 2x + 3 = 11? Solve for x.", options: ["2", "4", "6", "8"], correct: 1 },
                    { question: "Simplify: 3(x + 2) = ?", options: ["3x + 6", "3x + 2", "3x + 5", "x + 6"], correct: 0 },
                    { question: "What is the value of x² when x = 3?", options: ["6", "9", "27", "12"], correct: 1 }
                ],
                moderate: [
                    { question: "Solve: x² - 5x + 6 = 0", options: ["x = 1, 6", "x = 2, 3", "x = -2, -3", "x = 1, -6"], correct: 1 },
                    { question: "What is the sum of roots of x² + 3x - 4 = 0?", options: ["-3", "3", "4", "-4"], correct: 0 }
                ],
                hard: [
                    { question: "Find roots of 2x² + 5x - 3 = 0", options: ["x = 1/2, -3", "x = -1/2, 3", "x = 1, -3/2", "x = -1, 3/2"], correct: 0 }
                ]
            },
            calculus: {
                name: 'Calculus',
                basic: [
                    { question: "What is the derivative of x²?", options: ["x", "2x", "x³", "2"], correct: 1 },
                    { question: "What is ∫x dx?", options: ["x", "x²", "x²/2", "2x"], correct: 2 }
                ],
                moderate: [
                    { question: "Find dy/dx if y = x³ + 3x²", options: ["3x² + 6x", "x² + 6x", "3x² + 3x", "3x³ + 6x"], correct: 0 }
                ],
                hard: [
                    { question: "Evaluate ∫(sin x)(cos x) dx", options: ["sin²x/2", "-cos²x/2", "sin²x", "Both A and B"], correct: 3 }
                ]
            }
        }
    },
    physics: {
        name: 'Physics',
        icon: '⚛️',
        topics: {
            mechanics: {
                name: 'Mechanics',
                basic: [
                    { question: "What is the unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 1 },
                    { question: "What is Newton's first law called?", options: ["Law of Motion", "Law of Inertia", "Law of Action", "Law of Gravity"], correct: 1 }
                ],
                moderate: [
                    { question: "A car accelerates from 0 to 60 km/h in 10s. What is its acceleration?", options: ["1.67 m/s²", "6 m/s²", "60 m/s²", "10 m/s²"], correct: 0 }
                ],
                hard: [
                    { question: "Calculate work done by a force of 10N over 5m at 60° angle", options: ["25 J", "50 J", "43.3 J", "10 J"], correct: 0 }
                ]
            },
            thermodynamics: {
                name: 'Thermodynamics',
                basic: [
                    { question: "What is the SI unit of temperature?", options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"], correct: 2 }
                ],
                moderate: [
                    { question: "First law of thermodynamics is based on conservation of?", options: ["Mass", "Energy", "Momentum", "Temperature"], correct: 1 }
                ],
                hard: [
                    { question: "Efficiency of Carnot engine operating between 500K and 300K?", options: ["40%", "60%", "50%", "70%"], correct: 0 }
                ]
            }
        }
    },
    chemistry: {
        name: 'Chemistry',
        icon: '🧪',
        topics: {
            organic: {
                name: 'Organic Chemistry',
                basic: [
                    { question: "What is the molecular formula of methane?", options: ["CH₂", "CH₃", "CH₄", "C₂H₆"], correct: 2 },
                    { question: "Which element is present in all organic compounds?", options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"], correct: 2 }
                ],
                moderate: [
                    { question: "What is the IUPAC name of acetone?", options: ["Propanone", "Butanone", "Ethanone", "Pentanone"], correct: 0 }
                ],
                hard: [
                    { question: "Which reaction converts alkene to alkane?", options: ["Hydrogenation", "Halogenation", "Hydration", "Oxidation"], correct: 0 }
                ]
            },
            inorganic: {
                name: 'Inorganic Chemistry',
                basic: [
                    { question: "What is the atomic number of carbon?", options: ["4", "6", "8", "12"], correct: 1 }
                ],
                moderate: [
                    { question: "Which is the most electropostive element?", options: ["Sodium", "Francium", "Cesium", "Potassium"], correct: 1 }
                ],
                hard: [
                    { question: "What is the hybridization of SF₆?", options: ["sp³", "sp³d", "sp³d²", "sp³d³"], correct: 2 }
                ]
            }
        }
    },
    biology: {
        name: 'Biology',
        icon: '🧬',
        topics: {
            cellbiology: {
                name: 'Cell Biology',
                basic: [
                    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Body"], correct: 2 },
                    { question: "Which organelle is responsible for protein synthesis?", options: ["Ribosome", "Lysosome", "Vacuole", "Nucleus"], correct: 0 }
                ],
                moderate: [
                    { question: "What is the function of the Golgi apparatus?", options: ["Energy production", "Protein packaging", "DNA storage", "Photosynthesis"], correct: 1 }
                ],
                hard: [
                    { question: "Which phase of the cell cycle is the longest?", options: ["G1 phase", "S phase", "G2 phase", "M phase"], correct: 0 }
                ]
            },
            genetics: {
                name: 'Genetics',
                basic: [
                    { question: "How many chromosomes do humans have?", options: ["23", "46", "48", "92"], correct: 1 }
                ],
                moderate: [
                    { question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dioxy Nucleic Acid", "Dual Nuclear Acid", "None"], correct: 0 }
                ],
                hard: [
                    { question: "In which stage of meiosis does crossing over occur?", options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"], correct: 0 }
                ]
            }
        }
    },
    aptitude: {
        name: 'General Aptitude',
        icon: '🎯',
        topics: {
            logical: {
                name: 'Logical Reasoning',
                basic: [
                    { question: "If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops Lazzies?", options: ["Yes", "No", "Cannot determine", "Sometimes"], correct: 0 },
                    { question: "What comes next: 2, 4, 8, 16, __?", options: ["20", "24", "32", "64"], correct: 2 }
                ],
                moderate: [
                    { question: "If A is taller than B, and B is taller than C, who is shortest?", options: ["A", "B", "C", "Cannot determine"], correct: 2 }
                ],
                hard: [
                    { question: "5 men can complete a work in 12 days. How many men are needed to complete it in 6 days?", options: ["7", "8", "10", "12"], correct: 2 }
                ]
            },
            quantitative: {
                name: 'Quantitative Aptitude',
                basic: [
                    { question: "What is 15% of 200?", options: ["15", "20", "30", "40"], correct: 2 }
                ],
                moderate: [
                    { question: "A train travels 120 km in 2 hours. What is its speed?", options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], correct: 1 }
                ],
                hard: [
                    { question: "Simple interest on ₹5000 at 10% per annum for 3 years?", options: ["₹1000", "₹1500", "₹2000", "₹2500"], correct: 1 }
                ]
            }
        }
    }
};

//============ QUIZ HELPER FUNCTIONS ============

const QuizHelpers = {
    // Get subjects based on quiz category (JEE/NEET/Aptitude)
    getSubjectsForCategory(category) {
        const categoryMap = {
            'jee': ['mathematics', 'physics', 'chemistry'],
            'neet': ['biology', 'chemistry', 'physics'],
            'aptitude': ['aptitude']
        };

        const subjectKeys = categoryMap[category.toLowerCase()] || [];
        return subjectKeys.map(key => ({
            id: key,
            name: QuizDatabase[key].name,
            icon: QuizDatabase[key].icon,
            topicCount: Object.keys(QuizDatabase[key].topics).length
        }));
    },

    // Get topics for a specific subject
    getTopicsForSubject(subject) {
        const subjectData = QuizDatabase[subject.toLowerCase()];
        if (!subjectData) return [];

        return Object.keys(subjectData.topics).map(topicKey => ({
            id: topicKey,
            name: subjectData.topics[topicKey].name,
            levels: {
                basic: subjectData.topics[topicKey].basic?.length || 0,
                moderate: subjectData.topics[topicKey].moderate?.length || 0,
                hard: subjectData.topics[topicKey].hard?.length || 0
            }
        }));
    },

    // Get questions for specific subject, topic, and difficulty
    getQuestionsForTopic(subject, topic, difficulty) {
        const subjectData = QuizDatabase[subject.toLowerCase()];
        if (!subjectData) return [];

        const topicData = subjectData.topics[topic.toLowerCase()];
        if (!topicData) return [];

        const questions = topicData[difficulty.toLowerCase()] || [];
        return questions.map((q, index) => ({
            ...q,
            id: index,
            explanation: this.getExplanation(subject, topic, q)
        }));
    },

    // Generate simple explanation (can be enhanced later)
    getExplanation(subject, topic, question) {
        return `This question tests your understanding of ${topic} in ${subject}.`;
    },

    // Get difficulty info
    getDifficultyInfo(level) {
        const info = {
            basic: {
                name: 'Basic',
                icon: '🟢',
                description: 'Foundational concepts',
                color: '#10b981'
            },
            moderate: {
                name: 'Moderate',
                icon: '🟡',
                description: 'Intermediate level',
                color: '#f59e0b'
            },
            hard: {
                name: 'Hard',
                icon: '🔴',
                description: 'Advanced problems',
                color: '#ef4444'
            }
        };
        return info[level.toLowerCase()] || info.basic;
    },

    // Get performance rating based on score
    getPerformanceRating(score, total) {
        const percentage = (score / total) * 100;
        if (percentage >= 80) return { rating: 'Excellent', icon: '🌟', message: 'Outstanding performance!' };
        if (percentage >= 60) return { rating: 'Good', icon: '👍', message: 'Well done! Keep it up!' };
        if (percentage >= 40) return { rating: 'Fair', icon: '📚', message: 'Keep practicing!' };
        return { rating: 'Needs Practice', icon: '💪', message: 'Don\'t give up! Practice more!' };
    },

    // Get recommendations based on performance
    getRecommendations(subject, topic, difficulty, score, total) {
        const percentage = (score / total) * 100;
        const recommendations = [];

        if (percentage < 60) {
            recommendations.push({
                text: `Review ${topic} basics`,
                action: 'retry-basic'
            });
        } else if (percentage >= 80 && difficulty !== 'hard') {
            const nextLevel = difficulty === 'basic' ? 'moderate' : 'hard';
            recommendations.push({
                text: `Try ${topic} at ${nextLevel} level`,
                action: `next-level-${nextLevel}`
            });
        } else {
            recommendations.push({
                text: `Explore other topics in ${QuizDatabase[subject].name}`,
                action: 'new-topic'
            });
        }

        return recommendations;
    }
};

// ============ MODEL PAPERS DATABASE ============

const ModelPapersDatabase = {
    jee: {
        name: 'JEE Main',
        papers: [
            { year: 2024, session: 'January', title: 'JEE Main 2024 - January Session', subjects: 'Physics, Chemistry, Maths', url: '#' },
            { year: 2024, session: 'April', title: 'JEE Main 2024 - April Session', subjects: 'Physics, Chemistry, Maths', url: '#' },
            { year: 2023, session: 'January', title: 'JEE Main 2023 - January Session', subjects: 'All Subjects', url: '#' },
            { year: 2023, session: 'April', title: 'JEE Main 2023 - April Session', subjects: 'All Subjects', url: '#' },
            { year: 2022, session: 'Both', title: 'JEE Main 2022 - Complete Set', subjects: 'With Solutions', url: '#' },
            { year: 2021, session: 'Both', title: 'JEE Main 2021 - Full Papers', subjects: 'All Shifts', url: '#' }
        ]
    },
    neet: {
        name: 'NEET',
        papers: [
            { year: 2024, session: 'Single', title: 'NEET 2024', subjects: 'Biology, Physics, Chemistry', url: '#' },
            { year: 2023, session: 'Single', title: 'NEET 2023', subjects: 'Complete Paper with Solutions', url: '#' },
            { year: 2022, session: 'Single', title: 'NEET 2022', subjects: 'All Subjects', url: '#' },
            { year: 2021, session: 'Single', title: 'NEET 2021', subjects: 'Full Paper', url: '#' }
        ]
    },
    eamcet: {
        name: 'EAMCET',
        papers: [
            { year: 2024, session: 'Both', title: 'EAMCET 2024', subjects: 'Engineering + Medical', url: '#' },
            { year: 2023, session: 'Both', title: 'EAMCET 2023', subjects: 'Complete Papers', url: '#' },
            { year: 2022, session: 'Both', title: 'EAMCET 2022', subjects: 'All Streams', url: '#' }
        ]
    }
};

// ============ PDF MANAGEMENT SYSTEM ============

class PDFManager {
    constructor() {
        this.uploadedPDFs = this.loadPDFs();
    }

    loadPDFs() {
        const stored = localStorage.getItem('navix_pdfs');
        return stored ? JSON.parse(stored) : [];
    }

    savePDFs() {
        localStorage.setItem('navix_pdfs', JSON.stringify(this.uploadedPDFs));
    }

    // Simple hash function for duplicate detection
    async hashFile(file) {
        const text = await file.text();
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            const char = text.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return hash.toString();
    }

    async uploadPDF(file) {
        const hash = await this.hashFile(file);

        // Check for duplicates
        const duplicate = this.uploadedPDFs.find(pdf => pdf.hash === hash);
        if (duplicate) {
            return { success: false, message: '⚠️ This file already exists in NAVIX!', duplicate: true };
        }

        // Add new PDF
        const pdfData = {
            name: file.name,
            size: file.size,
            hash: hash,
            uploadDate: new Date().toISOString(),
            type: file.type
        };

        this.uploadedPDFs.push(pdfData);
        this.savePDFs();

        // Reward user with 10,000 coins
        if (window.authSystem) {
            window.authSystem.addCoins(10000);
        }

        return { success: true, message: '✅ PDF uploaded successfully! +10,000 coins earned!', coins: 10000 };
    }

    getPDFs() {
        return this.uploadedPDFs;
    }
}

// ============ PRO TIER SYSTEM ============

class ProTierSystem {
    constructor() {
        this.proStatus = this.loadProStatus();
    }

    loadProStatus() {
        const userData = JSON.parse(localStorage.getItem('navix_user'));
        return userData ? (userData.isPro || false) : false;
    }

    saveProStatus(status) {
        const userData = JSON.parse(localStorage.getItem('navix_user'));
        if (userData) {
            userData.isPro = status;
            localStorage.setItem('navix_user', JSON.stringify(userData));
            this.proStatus = status;
        }
    }

    isPro() {
        return this.proStatus;
    }

    upgradeToPro() {
        if (window.authSystem && window.authSystem.getCoins() >= 1000000) {
            if (window.authSystem.spendCoins(1000000)) {
                this.saveProStatus(true);
                return { success: true, message: '🎉 Congratulations! You are now a NAVIX PRO member!' };
            }
        }
        return { success: false, message: '❌ Insufficient coins. You need 1,000,000 coins to upgrade to PRO.' };
    }

    getProContent() {
        return {
            courses: [
                { title: 'Advanced JEE Mathematics', type: 'Deep Analysis', icon: '📐' },
                { title: 'NEET Biology Mastery', type: 'Exclusive Content', icon: '🧬' },
                { title: 'Problem Solving Techniques', type: 'Pro Guide', icon: '💡' }
            ],
            materials: [
                { title: 'Advanced Study Strategies', description: 'Proven methods from top scorers' },
                { title: 'Time Management Masterclass', description: 'Optimize your study schedule' },
                { title: 'Exam Psychology', description: 'Mental preparation techniques' }
            ]
        };
    }
}

// Initialize global instances
let pdfManager;
let proTierSystem;

document.addEventListener('DOMContentLoaded', () => {
    pdfManager = new PDFManager();
    proTierSystem = new ProTierSystem();

    console.log('📦 Advanced features initialized!');
    console.log('🎯 Quiz Database loaded with', Object.keys(QuizDatabase).length, 'subjects');
    console.log('📄 Model Papers Database ready');
    console.log('💾 PDF Manager ready');
    console.log('⭐ Pro Tier system initialized');
});
