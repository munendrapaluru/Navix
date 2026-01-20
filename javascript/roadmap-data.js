// ==========================================
// ROADMAP DATA - 4-Phase Department Roadmaps
// Comprehensive roadmaps for each department
// ==========================================

const RoadmapData = {
    // ============ CSE ROADMAP ============
    'cse': {
        name: 'Computer Science Engineering',
        icon: '💻',
        phases: [
            {
                phase: 1,
                name: 'Fundamentals',
                duration: 'Year 1 (Sem 1-2)',
                icon: '📚',
                status: 'current',
                color: '#3B82F6',
                focus: [
                    'Basic programming concepts (C, Python)',
                    'Mathematics fundamentals',
                    'Physics and Chemistry basics',
                    'Problem-solving skills'
                ],
                actions: [
                    'Complete all Sem 1-2 subjects',
                    'Build 2-3 mini projects (calculator, simple games)',
                    'Attempt basic programming quizzes',
                    'Learn Git & GitHub basics',
                    'Start competitive programming (easy problems)'
                ],
                milestones: [
                    { text: 'Master C programming', done: false },
                    { text: 'Understand basic data structures', done: false },
                    { text: 'Build first project', done: false },
                    { text: 'Score 75%+ in Sem 1-2', done: false }
                ],
                resources: ['NCERT Maths', 'Let Us C by Yashavant Kanetkar', 'Python.org tutorials']
            },
            {
                phase: 2,
                name: 'Core Subjects',
                duration: 'Year 2 (Sem 3-4)',
                icon: '⚙️',
                status: 'upcoming',
                color: '#10B981',
                focus: [
                    'Data Structures & Algorithms',
                    'Operating Systems fundamentals',
                    'DBMS concepts',
                    'Computer Networks basics',
                    'OOP with Java'
                ],
                actions: [
                    'Deep dive into DSA (arrays, trees, graphs)',
                    'Build medium complexity projects (CRUD apps, etc.)',
                    'Start participating in hackathons',
                    'Contribute to open source projects',
                    'Practice 100+ coding problems'
                ],
                milestones: [
                    { text: 'Solve 200+ DSA problems', done: false },
                    { text: 'Build 3 full-stack projects', done: false },
                    { text: 'Attend 2+ hackathons', done: false },
                    { text: 'Learn web development (HTML/CSS/JS)', done: false }
                ],
                resources: ['CLRS Algorithms', 'GeeksforGeeks', 'LeetCode', 'FreeCodeCamp']
            },
            {
                phase: 3,
                name: 'Specialization & Projects',
                duration: 'Year 3 (Sem 5-6)',
                icon: '🚀',
                status: 'future',
                color: '#8B5CF6',
                focus: [
                    'Choose specialization (AI/ML, Web, Cloud, etc.)',
                    'Advanced electives',
                    'Serious project work',
                    'Internship preparation'
                ],
                actions: [
                    'Complete internship (summer/winter)',
                    'Build portfolio with 5+ advanced projects',
                    'Learn trending technologies (AI, Cloud, DevOps)',
                    'Work on major project',
                    'Improve LinkedIn & GitHub profile'
                ],
                milestones: [
                    { text: 'Complete 3-month internship', done: false },
                    { text: 'Master one specialization', done: false },
                    { text: 'Build impressive portfolio', done: false },
                    { text: 'Get AWS/Azure certification (optional)', done: false }
                ],
                resources: ['Coursera', 'Udemy', 'YouTube channels', 'Project ideas on GitHub']
            },
            {
                phase: 4,
                name: 'Placement & Career',
                duration: 'Year 4 (Sem 7-8)',
                icon: '🎯',
                status: 'future',
                color: '#F59E0B',
                focus: [
                    'Placement preparation',
                    'Interview skills',
                    'Resume building',
                    'Higher studies (GATE/GRE) if applicable',
                    'Final year project'
                ],
                actions: [
                    'Solve 300+ DSA problems (company-specific)',
                    'Practice mock interviews',
                    'Build professional resume',
                    'Apply to 50+ companies',
                    'Prepare for aptitude & HR rounds',
                    'Complete major project with documentation'
                ],
                milestones: [
                    { text: 'Get PPO from internship (ideal)', done: false },
                    { text: 'Clear 10+ placement drives', done: false },
                    { text: 'Secure job offer', done: false },
                    { text: 'Complete major project successfully', done: false }
                ],
                resources: ['InterviewBit', 'Cracking the Coding Interview', 'Naukri/LinkedIn']
            }
        ]
    },

    // ============ ECE ROADMAP ============
    'ece': {
        name: 'Electronics & Communication Engineering',
        icon: '📡',
        phases: [
            {
                phase: 1,
                name: 'Fundamentals',
                duration: 'Year 1 (Sem 1-2)',
                icon: '📚',
                status: 'current',
                color: '#EF4444',
                focus: [
                    'Basic electrical concepts',
                    'Mathematics & Physics',
                    'Circuit analysis',
                    'Semiconductor basics'
                ],
                actions: [
                    'Master basic circuit laws (Ohm, KVL, KCL)',
                    'Understand semiconductor physics',
                    'Complete lab experiments carefully',
                    'Build simple circuits (LED, resistors)',
                    'Learn circuit simulation tools (LTSpice)'
                ],
                milestones: [
                    { text: 'Understand circuit fundamentals', done: false },
                    { text: 'Complete all lab experiments', done: false },
                    { text: 'Build 3 basic circuits', done: false },
                    { text: 'Score 70%+ in Sem 1-2', done: false }
                ],
                resources: ['Network Theory by Bakshi', 'Electronic Devices by Boylestad']
            },
            {
                phase: 2,
                name: 'Core Subjects',
                duration: 'Year 2 (Sem 3-4)',
                icon: '⚡',
                status: 'upcoming',
                color: '#10B981',
                focus: [
                    'Analog & Digital Electronics',
                    'Signals & Systems',
                    'Microprocessors',
                    'Communication Systems'
                ],
                actions: [
                    'Master analog circuits (amplifiers, oscillators)',
                    'Learn digital logic design',
                    'Practice microprocessor programming (8086)',
                    'Understand signal processing basics',
                    'Build mini projects (FM transmitter, etc.)'
                ],
                milestones: [
                    { text: 'Design & simulate 10+ circuits', done: false },
                    { text: 'Program microprocessor successfully', done: false },
                    { text: 'Build 2 electronics projects', done: false },
                    { text: 'Learn PCB design basics', done: false }
                ],
                resources: ['Sedra & Smith', 'Millman Halkias', 'YouTube: Neso Academy']
            },
            {
                phase: 3,
                name: 'Specialization',
                duration: 'Year 3 (Sem 5-6)',
                icon: '🔧',
                status: 'future',
                color: '#8B5CF6',
                focus: [
                    'Choose domain (VLSI, Embedded, IoT, Communication)',
                    'Advanced electronics',
                    'Internship',
                    'Major project planning'
                ],
                actions: [
                    'Complete internship in core company',
                    'Learn VLSI design or Embedded systems',
                    'Work on IoT projects',
                    'Get certified (Arduino, VHDL, etc.)',
                    'Attend workshops and seminars'
                ],
                milestones: [
                    { text: 'Complete internship', done: false },
                    { text: 'Master one specialization', done: false },
                    { text: 'Build 3 advanced projects', done: false },
                    { text: 'Publish a paper (optional)', done: false }
                ],
                resources: ['VLSI courses', 'Embedded C programming', 'IoT platforms']
            },
            {
                phase: 4,
                name: 'Placement & Career',
                duration: 'Year 4 (Sem 7-8)',
                icon: '🎯',
                status: 'future',
                color: '#F59E0B',
                focus: [
                    'Core company placements',
                    'GATE preparation (if M.Tech)',
                    'Final year project',
                    'Technical interviews'
                ],
                actions: [
                    'Prepare for core interviews (analog, digital, communication)',
                    'Practice aptitude & reasoning',
                    'Build professional resume',
                    'Apply to electronics companies',
                    'Prepare GATE if pursuing M.Tech',
                    'Complete major project'
                ],
                milestones: [
                    { text: 'Clear GATE exam (if applicable)', done: false },
                    { text: 'Get placed in core company', done: false },
                    { text: 'Complete major project', done: false },
                    { text: 'Build strong portfolio', done: false }
                ],
                resources: ['GATE preparation material', 'IndiaBix for aptitude', 'Company-specific prep']
            }
        ]
    },

    // ============ MECHANICAL ROADMAP ============
    'mechanical': {
        name: 'Mechanical Engineering',
        icon: '⚙️',
        phases: [
            {
                phase: 1,
                name: 'Fundamentals',
                duration: 'Year 1 (Sem 1-2)',
                icon: '📚',
                status: 'current',
                color: '#6B7280',
                focus: ['Engineering mechanics', 'Technical drawing', 'Workshop practice', 'Basic mathematics'],
                actions: ['Master engineering drawing', 'Complete workshop training', 'Understand mechanics basics', 'Learn CAD software (AutoCAD)'],
                milestones: [
                    { text: 'Complete drawing practicals', done: false },
                    { text: 'Finish workshop certification', done: false },
                    { text: 'Learn basic CAD', done: false }
                ],
                resources: ['Engineering Mechanics by Timoshenko', 'AutoCAD tutorials']
            },
            {
                phase: 2,
                name: 'Core Subjects',
                duration: 'Year 2 (Sem 3-4)',
                icon: '🔩',
                status: 'upcoming',
                color: '#10B981',
                focus: ['Thermodynamics', 'Fluid mechanics', 'Manufacturing processes', 'Material science'],
                actions: ['Master core subjects', 'Learn CATIA/SolidWorks', 'Complete lab work', 'Build mini projects'],
                milestones: [
                    { text: 'Learn 3D CAD modeling', done: false },
                    { text: 'Complete 2 design projects', done: false }
                ],
                resources: ['YouTube CAD tutorials', 'Mechanical engineering handbooks']
            },
            {
                phase: 3,
                name: 'Specialization',
                duration: 'Year 3 (Sem 5-6)',
                icon: '🏭',
                status: 'future',
                color: '#8B5CF6',
                focus: ['Design/Thermal/Manufacturing', 'Internship', 'Advanced CAD/CAM'],
                actions: ['Complete internship', 'Master CAE tools', 'Work on automation projects'],
                milestones: [
                    { text: 'Finish internship', done: false },
                    { text: 'Learn ANSYS/MATLAB', done: false }
                ],
                resources: ['ANSYS tutorials', 'Manufacturing books']
            },
            {
                phase: 4,
                name: 'Placement',
                duration: 'Year 4 (Sem 7-8)',
                icon: '🎯',
                status: 'future',
                color: '#F59E0B',
                focus: ['Placement prep', 'GATE/CAT', 'Final project'],
                actions: ['Apply to core companies', 'Prepare technical interviews', 'Complete major project'],
                milestones: [
                    { text: 'Get job offer', done: false },
                    { text: 'Complete project', done: false }
                ],
                resources: ['GATE material', 'Aptitude books']
            }
        ]
    }
};

// Helper functions
function getDepartmentRoadmap(deptId) {
    return RoadmapData[deptId] || null;
}

function getCurrentPhase(deptId) {
    const roadmap = getDepartmentRoadmap(deptId);
    if (!roadmap) return null;
    return roadmap.phases.find(p => p.status === 'current') || roadmap.phases[0];
}

function updateMilestone(deptId, phaseNum, milestoneIndex, done) {
    const roadmap = RoadmapData[deptId];
    if (!roadmap) return false;

    const phase = roadmap.phases.find(p => p.phase === phaseNum);
    if (!phase || !phase.milestones[milestoneIndex]) return false;

    phase.milestones[milestoneIndex].done = done;
    saveRoadmapProgress();
    return true;
}

function saveRoadmapProgress() {
    const progressData = {};
    Object.keys(RoadmapData).forEach(deptId => {
        progressData[deptId] = RoadmapData[deptId].phases.map(p => ({
            phase: p.phase,
            milestones: p.milestones
        }));
    });
    localStorage.setItem('navix_roadmap_progress', JSON.stringify(progressData));
}

function loadRoadmapProgress() {
    const saved = localStorage.getItem('navix_roadmap_progress');
    if (!saved) return;

    try {
        const progressData = JSON.parse(saved);
        Object.keys(progressData).forEach(deptId => {
            if (RoadmapData[deptId]) {
                progressData[deptId].forEach(savedPhase => {
                    const phase = RoadmapData[deptId].phases.find(p => p.phase === savedPhase.phase);
                    if (phase) {
                        phase.milestones = savedPhase.milestones;
                    }
                });
            }
        });
    } catch (e) {
        console.error('Error loading roadmap progress:', e);
    }
}

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', loadRoadmapProgress);
}
