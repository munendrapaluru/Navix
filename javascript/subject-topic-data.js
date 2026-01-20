// ==========================================
// SUBJECT-TOPIC DATA - Comprehensive Topic Breakdown
// For all subjects across all departments
// ==========================================

const SubjectTopicData = {
    // ============ CSE SUBJECTS ============
    'programming': {
        name: 'Programming in C',
        code: 'CS101',
        semester: 1,
        topics: [
            { id: 'prog-intro', name: 'Introduction to Programming', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-variables', name: 'Variables & Data Types', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-operators', name: 'Operators & Expressions', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-control', name: 'Control Structures', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-functions', name: 'Functions', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-arrays', name: 'Arrays', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-pointers', name: 'Pointers', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-structures', name: 'Structures & Unions', progress: 0, coins: 0, status: 'not_started' },
            { id: 'prog-files', name: 'File Handling', progress: 0, coins: 0, status: 'not_started' }
        ]
    },

    'ds': {
        name: 'Data Structures',
        code: 'CS201',
        semester: 2,
        topics: [
            { id: 'ds-intro', name: 'Introduction to DSA', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-arrays', name: 'Arrays & Strings', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-linked-list', name: 'Linked Lists', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-stack', name: 'Stack', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-queue', name: 'Queue', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-trees', name: 'Trees & BST', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-graphs', name: 'Graphs', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-hashing', name: 'Hashing', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-sorting', name: 'Sorting Algorithms', progress: 0, coins: 0, status: 'not_started' },
            { id: 'ds-searching', name: 'Searching Algorithms', progress: 0, coins: 0, status: 'not_started' }
        ]
    },

    'os': {
        name: 'Operating Systems',
        code: 'CS302',
        semester: 3,
        topics: [
            { id: 'os-intro', name: 'Introduction to OS', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-process', name: 'Process Management', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-threads', name: 'Threads', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-scheduling', name: 'CPU Scheduling', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-sync', name: 'Process Synchronization', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-deadlock', name: 'Deadlock', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-memory', name: 'Memory Management', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-virtual', name: 'Virtual Memory', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-fs', name: 'File Systems', progress: 0, coins: 0, status: 'not_started' },
            { id: 'os-io', name: 'I/O Systems', progress: 0, coins: 0, status: 'not_started' }
        ]
    },

    'dbms': {
        name: 'Database Management Systems',
        code: 'CS303',
        semester: 3,
        topics: [
            { id: 'dbms-intro', name: 'Introduction to DBMS', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-er', name: 'ER Model', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-relational', name: 'Relational Model', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-sql', name: 'SQL Basics', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-advanced-sql', name: 'Advanced SQL', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-normalization', name: 'Normalization', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-transactions', name: 'Transactions', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-concurrency', name: 'Concurrency Control', progress: 0, coins: 0, status: 'not_started' },
            { id: 'dbms-recovery', name: 'Recovery System', progress: 0, coins: 0, status: 'not_started' }
        ]
    },

    'cn': {
        name: 'Computer Networks',
        code: 'CS402',
        semester: 4,
        topics: [
            { id: 'cn-intro', name: 'Introduction to Networks', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-osi', name: 'OSI Model', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-tcp', name: 'TCP/IP Model', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-physical', name: 'Physical Layer', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-datalink', name: 'Data Link Layer', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-network', name: 'Network Layer', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-transport', name: 'Transport Layer', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-application', name: 'Application Layer', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-routing', name: 'Routing Algorithms', progress: 0, coins: 0, status: 'not_started' },
            { id: 'cn-security', name: 'Network Security', progress: 0, coins: 0, status: 'not_started' }
        ]
    },

    'algo': {
        name: 'Algorithm Design & Analysis',
        code: 'CS401',
        semester: 4,
        topics: [
            { id: 'algo-intro', name: 'Algorithm Basics', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-complexity', name: 'Time Complexity Analysis', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-divide', name: 'Divide & Conquer', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-greedy', name: 'Greedy Algorithms', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-dp', name: 'Dynamic Programming', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-backtrack', name: 'Backtracking', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-graph', name: 'Graph Algorithms', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-string', name: 'String Algorithms', progress: 0, coins: 0, status: 'not_started' },
            { id: 'algo-np', name: 'NP-Completeness', progress: 0, coins: 0, status: 'not_started' }
        ]
    },

    // ============ ECE SUBJECTS ============
    'edc': {
        name: 'Electronic Devices & Circuits',
        code: 'EC201',
        semester: 2,
        topics: [
            { id: 'edc-semiconductors', name: 'Semiconductor Physics', progress: 0, coins: 0, status: 'not_started' },
            { id: 'edc-diodes', name: 'Diodes', progress: 0, coins: 0, status: 'not_started' },
            { id: 'edc-bjt', name: 'Bipolar Junction Transistors', progress: 0, coins: 0, status: 'not_started' },
            { id: 'edc-fet', name: 'Field Effect Transistors', progress: 0, coins: 0, status: 'not_started' },
            { id: 'edc-amplifiers', name: 'Amplifiers', progress: 0, coins: 0, status: 'not_started' },
            { id: 'edc-oscillators', name: 'Oscillators', progress: 0, coins: 0, status: 'not_started' },
            { id: 'edc-power', name: 'Power Supplies', progress: 0, coins: 0, status: 'not_started' }
        ]
    },

    'signals': {
        name: 'Signals & Systems',
        code: 'EC202',
        semester: 2,
        topics: [
            { id: 'sig-intro', name: 'Introduction to Signals', progress: 0, coins: 0, status: 'not_started' },
            { id: 'sig-classification', name: 'Signal Classification', progress: 0, coins: 0, status: 'not_started' },
            { id: 'sig-operations', name: 'Signal Operations', progress: 0, coins: 0, status: 'not_started' },
            { id: 'sig-systems', name: 'Linear Time-Invariant Systems', progress: 0, coins: 0, status: 'not_started' },
            { id: 'sig-fourier', name: 'Fourier Series', progress: 0, coins: 0, status: 'not_started' },
            { id: 'sig-transform', name: 'Fourier Transform', progress: 0, coins: 0, status: 'not_started' },
            { id: 'sig-laplace', name: 'Laplace Transform', progress: 0, coins: 0, status: 'not_started' },
            { id: 'sig-z-transform', name: 'Z-Transform', progress: 0, coins: 0, status: 'not_started' }
        ]
    }
};

// Helper function to get topic data for a subject
function getTopicsForSubject(subjectId) {
    const subject = SubjectTopicData[subjectId];
    if (!subject) return [];
    return subject.topics || [];
}

// Helper function to calculate subject progress
function calculateSubjectProgress(subjectId) {
    const topics = getTopicsForSubject(subjectId);
    if (topics.length === 0) return 0;

    const completedCount = topics.filter(t => t.status === 'completed').length;
    return Math.round((completedCount / topics.length) * 100);
}

// Helper function to calculate total coins for a subject
function calculateSubjectCoins(subjectId) {
    const topics = getTopicsForSubject(subjectId);
    return topics.reduce((total, topic) => total + topic.coins, 0);
}

// Update topic progress
function updateTopicProgress(subjectId, topicId, progress, coinsEarned, status) {
    const subject = SubjectTopicData[subjectId];
    if (!subject) return false;

    const topic = subject.topics.find(t => t.id === topicId);
    if (!topic) return false;

    topic.progress = progress;
    topic.coins += coinsEarned;
    topic.status = status;

    // Save to localStorage
    saveTopicProgress();
    return true;
}

// Save all topic progress to localStorage
function saveTopicProgress() {
    const progressData = {};

    Object.keys(SubjectTopicData).forEach(subjectId => {
        progressData[subjectId] = SubjectTopicData[subjectId].topics;
    });

    localStorage.setItem('navix_topic_progress', JSON.stringify(progressData));
}

// Load topic progress from localStorage
function loadTopicProgress() {
    const saved = localStorage.getItem('navix_topic_progress');
    if (!saved) return;

    try {
        const progressData = JSON.parse(saved);

        Object.keys(progressData).forEach(subjectId => {
            if (SubjectTopicData[subjectId]) {
                SubjectTopicData[subjectId].topics = progressData[subjectId];
            }
        });
    } catch (e) {
        console.error('Error loading topic progress:', e);
    }
}

// Initialize on load
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', loadTopicProgress);
}
