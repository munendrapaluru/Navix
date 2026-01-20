// ==========================================
// UG DATA - Under Graduation Resources
// Departments, Subjects, Papers, Workshops, Internships, Projects
// ==========================================

const UGData = {
    // Department configurations
    departments: {
        'cse': {
            name: 'Computer Science Engineering',
            icon: '💻',
            semesters: 8,
            subjectsBySemester: {
                1: [
                    { id: 'maths1', name: 'Engineering Mathematics - I', code: 'MA101' },
                    { id: 'physics', name: 'Engineering Physics', code: 'PH101' },
                    { id: 'chem', name: 'Engineering Chemistry', code: 'CH101' },
                    { id: 'programming', name: 'Programming in C', code: 'CS101' },
                    { id: 'english', name: 'Communication Skills', code: 'EN101' }
                ],
                2: [
                    { id: 'maths2', name: 'Engineering Mathematics - II', code: 'MA102' },
                    { id: 'ds', name: 'Data Structures', code: 'CS201' },
                    { id: 'digital', name: 'Digital Logic Design', code: 'CS202' },
                    { id: 'python', name: 'Python Programming', code: 'CS203' },
                    { id: 'environ', name: 'Environmental Science', code: 'EV102' }
                ],
                3: [
                    { id: 'maths3', name: 'Discrete Mathematics', code: 'MA201' },
                    { id: 'ds-advanced', name: 'Advanced Data Structures', code: 'CS301' },
                    { id: 'os', name: 'Operating Systems', code: 'CS302' },
                    { id: 'dbms', name: 'Database Management Systems', code: 'CS303' },
                    { id: 'java', name: 'Java Programming', code: 'CS304' }
                ],
                4: [
                    { id: 'algo', name: 'Algorithm Design & Analysis', code: 'CS401' },
                    { id: 'cn', name: 'Computer Networks', code: 'CS402' },
                    { id: 'se', name: 'Software Engineering', code: 'CS403' },
                    { id: 'web', name: 'Web Technologies', code: 'CS404' },
                    { id: 'automata', name: 'Automata Theory', code: 'CS405' }
                ],
                5: [
                    { id: 'ml', name: 'Machine Learning', code: 'CS501' },
                    { id: 'ai', name: 'Artificial Intelligence', code: 'CS502' },
                    { id: 'compiler', name: 'Compiler Design', code: 'CS503' },
                    { id: 'cg', name: 'Computer Graphics', code: 'CS504' }
                ],
                6: [
                    { id: 'cloudcomputing', name: 'Cloud Computing', code: 'CS601' },
                    { id: 'bigdata', name: 'Big Data Analytics', code: 'CS602' },
                    { id: 'iot', name: 'Internet of Things', code: 'CS603' },
                    { id: 'blockchain', name: 'Blockchain Technology', code: 'CS604' }
                ],
                7: [
                    { id: 'dl', name: 'Deep Learning', code: 'CS701' },
                    { id: 'nlp', name: 'Natural Language Processing', code: 'CS702' },
                    { id: 'cybersec', name: 'Cyber Security', code: 'CS703' }
                ],
                8: [
                    { id: 'project', name: 'Major Project', code: 'CS801' },
                    { id: 'seminar', name: 'Technical Seminar', code: 'CS802' }
                ]
            }
        },
        'ece': {
            name: 'Electronics & Communication Engineering',
            icon: '📡',
            semesters: 8,
            subjectsBySemester: {
                1: [
                    { id: 'maths1', name: 'Engineering Mathematics - I', code: 'MA101' },
                    { id: 'physics', name: 'Engineering Physics', code: 'PH101' },
                    { id: 'chem', name: 'Engineering Chemistry', code: 'CH101' },
                    { id: 'bec', name: 'Basic Electrical Circuits', code: 'EC101' }
                ],
                2: [
                    { id: 'maths2', name: 'Engineering Mathematics - II', code: 'MA102' },
                    { id: 'edc', name: 'Electronic Devices & Circuits', code: 'EC201' },
                    { id: 'signals', name: 'Signals & Systems', code: 'EC202' },
                    { id: 'digital', name: 'Digital Electronics', code: 'EC203' }
                ],
                3: [
                    { id: 'emi', name: 'Electromagnetic Theory', code: 'EC301' },
                    { id: 'analog', name: 'Analog Communication', code: 'EC302' },
                    { id: 'micro', name: 'Microprocessors', code: 'EC303' }
                ]
            }
        }
    },

    // Model Papers Templates
    modelPapers: {
        'cse-ds': {
            subject: 'Data Structures',
            semester: 2,
            code: 'CS201',
            totalMarks: 100,
            duration: '3 hours',
            sectionA: {
                title: 'Section A: Short Answer Questions',
                marks: 40,
                questions: [
                    { q: 'Define Abstract Data Type (ADT). Give examples.', marks: 2 },
                    { q: 'What is time complexity? Explain Big-O notation.', marks: 2 },
                    { q: 'Differentiate between Stack and Queue.', marks: 2 },
                    { q: 'Write the algorithm for insertion in a linked list.', marks: 2 },
                    { q: 'What are the applications of Stack?', marks: 2 },
                    { q: 'Define Binary Search Tree and its properties.', marks: 2 },
                    { q: 'Explain infix, prefix, and postfix notations.', marks: 2 },
                    { q: 'What is a circular linked list?', marks: 2 },
                    { q: 'Define graph traversal techniques.', marks: 2 },
                    { q: 'Explain hash collision and resolution techniques.', marks: 2 }
                ]
            },
            sectionB: {
                title: 'Section B: Long Answer / Problem Solving',
                marks: 60,
                questions: [
                    { q: 'Explain various operations on a Binary Search Tree with examples and write the algorithm for insertion and deletion.', marks: 10 },
                    { q: 'Write and explain the Merge Sort algorithm. Analyze its time complexity with a suitable example.', marks: 10 },
                    { q: 'Implement Queue using two Stacks. Write the code and explain the logic.', marks: 10 },
                    { q: 'Explain Dijkstra\'s shortest path algorithm with an example graph. Write the algorithm.', marks: 10 },
                    { q: 'Describe different types of tree traversals (Inorder, Preorder, Postorder, Level Order) with examples and code.', marks: 10 },
                    { q: 'What is hashing? Explain different hash functions and collision resolution techniques with examples.', marks: 10 }
                ]
            }
        },
        'cse-os': {
            subject: 'Operating Systems',
            semester: 3,
            code: 'CS302',
            totalMarks: 100,
            duration: '3 hours',
            sectionA: {
                title: 'Section A: Short Answer Questions',
                marks: 40,
                questions: [
                    { q: 'Define Operating System and its functions.', marks: 2 },
                    { q: 'What is a process? Differentiate between process and program.', marks: 2 },
                    { q: 'Explain CPU scheduling criteria.', marks: 2 },
                    { q: 'What is deadlock? List its necessary conditions.', marks: 2 },
                    { q: 'Define thrashing in page replacement.', marks: 2 },
                    { q: 'Explain semaphore and its types.', marks: 2 },
                    { q: 'What is virtual memory?', marks: 2 },
                    { q: 'Differentiate between internal and external fragmentation.', marks: 2 },
                    { q: 'Explain file system structure.', marks: 2 },
                    { q: 'What are system calls? Give examples.', marks: 2 }
                ]
            },
            sectionB: {
                title: 'Section B: Long Answer / Problem Solving',
                marks: 60,
                questions: [
                    { q: 'Explain Round Robin CPU Scheduling algorithm with a Gantt chart. Calculate average waiting time and turnaround time for given processes.', marks: 10 },
                    { q: 'Describe the Banker\'s Algorithm for deadlock avoidance with a numerical example.', marks: 10 },
                    { q: 'Explain different page replacement algorithms (FIFO, LRU, Optimal) with examples.', marks: 10 },
                    { q: 'Discuss Producer-Consumer problem and its solution using semaphores.', marks: 10 },
                    { q: 'Explain memory management techniques: Paging and Segmentation. Compare them.', marks: 10 },
                    { q: 'Describe different disk scheduling algorithms (FCFS, SSTF, SCAN, C-SCAN) with examples.', marks: 10 }
                ]
            }
        }
    },

    // Workshops Data
    workshops: [
        {
            id: 'ws-001',
            title: 'Full Stack Web Development',
            skills: ['React', 'Node.js', 'MongoDB', 'REST APIs'],
            mode: 'online',
            duration: '6 weeks',
            level: 'Beginner',
            departments: ['cse', 'it', 'bca-core'],
            description: 'Learn to build modern web applications from scratch using the MERN stack. Includes hands-on projects and deployment.',
            prerequisites: ['Basic JavaScript', 'HTML/CSS'],
            outcomes: ['Build full-stack apps', 'Deploy to cloud', 'RESTful API design']
        },
        {
            id: 'ws-002',
            title: 'Machine Learning Fundamentals',
            skills: ['Python', 'TensorFlow', 'scikit-learn', 'Data Analysis'],
            mode: 'online',
            duration: '4 weeks',
            level: 'Intermediate',
            departments: ['cse', 'bsc-cs', 'bca-data-science'],
            description: 'Introduction to ML algorithms, supervised and unsupervised learning, and practical implementations.',
            prerequisites: ['Python programming', 'Basic statistics'],
            outcomes: ['Build ML models', 'Data preprocessing', 'Model evaluation']
        },
        {
            id: 'ws-003',
            title: 'Cloud Computing with AWS',
            skills: ['AWS', 'EC2', 'S3', 'Lambda', 'Cloud Architecture'],
            mode: 'offline',
            duration: '3 weeks',
            level: 'Intermediate',
            departments: ['cse', 'it'],
            description: 'Hands-on workshop on AWS services, cloud architecture, and deployment strategies.',
            prerequisites: ['Basic networking', 'Linux commands'],
            outcomes: ['Deploy on AWS', 'Cloud architecture', 'AWS certification prep']
        },
        {
            id: 'ws-004',
            title: 'Mobile App Development - Flutter',
            skills: ['Flutter', 'Dart', 'Mobile UI/UX', 'Firebase'],
            mode: 'online',
            duration: '5 weeks',
            level: 'Beginner',
            departments: ['cse', 'it', 'bca-core'],
            description: 'Build cross-platform mobile applications for iOS and Android using Flutter framework.',
            prerequisites: ['Basic programming', 'OOP concepts'],
            outcomes: ['Build mobile apps', 'Firebase integration', 'App deployment']
        },
        {
            id: 'ws-005',
            title: 'Data Analytics with Python',
            skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Viz'],
            mode: 'online',
            duration: '4 weeks',
            level: 'Beginner',
            departments: ['cse', 'bsc-cs', 'bca-data-science'],
            description: 'Learn data manipulation, analysis, and visualization techniques using Python libraries.',
            prerequisites: ['Basic Python'],
            outcomes: ['Data analysis', 'Visualization', 'Statistical insights']
        },
        {
            id: 'ws-006',
            title: 'Cyber Security Essentials',
            skills: ['Network Security', 'Ethical Hacking', 'Cryptography'],
            mode: 'offline',
            duration: '2 weeks',
            level: 'Intermediate',
            departments: ['cse', 'it', 'ece'],
            description: 'Understand security threats, vulnerability assessment, and ethical hacking basics.',
            prerequisites: ['Computer networks', 'OS fundamentals'],
            outcomes: ['Security assessment', 'Penetration testing', 'Security tools']
        }
    ],

    // Internships Data
    internships: [
        {
            id: 'int-001',
            role: 'Software Development Intern',
            company: 'TechCorp Solutions',
            skills: ['Java', 'Spring Boot', 'MySQL', 'Git'],
            duration: '3 months',
            departments: ['cse', 'it'],
            description: 'Work on enterprise web applications using Java and Spring framework.',
            jd: {
                responsibilities: [
                    'Develop and maintain web applications',
                    'Write clean, maintainable code',
                    'Participate in code reviews',
                    'Collaborate with senior developers',
                    'Bug fixing and testing'
                ],
                requirements: [
                    'Strong Java programming skills',
                    'Understanding of OOP concepts',
                    'Familiarity with SQL databases',
                    'Good problem-solving skills'
                ],
                preferred: [
                    'Knowledge of Spring framework',
                    'Experience with Git/GitHub',
                    'Understanding of REST APIs'
                ]
            }
        },
        {
            id: 'int-002',
            role: 'Data Science Intern',
            company: 'Analytics Pro',
            skills: ['Python', 'Machine Learning', 'SQL', 'Data Viz'],
            duration: '6 months',
            departments: ['cse', 'bca-data-science'],
            description: 'Analyze data, build ML models, and create insightful visualizations.',
            jd: {
                responsibilities: [
                    'Data collection and preprocessing',
                    'Build predictive models',
                    'Create dashboards and reports',
                    'Statistical analysis',
                    'Present findings to team'
                ],
                requirements: [
                    'Python programming',
                    'Statistics fundamentals',
                    'SQL knowledge',
                    'Data visualization skills'
                ],
                preferred: [
                    'ML framework experience (scikit-learn, TensorFlow)',
                    'Jupyter notebooks',
                    'Tableau or Power BI'
                ]
            }
        },
        {
            id: 'int-003',
            role: 'Frontend Developer Intern',
            company: 'WebInnovate',
            skills: ['React', 'JavaScript', 'CSS', 'HTML'],
            duration: '3 months',
            departments: ['cse', 'it', 'bca-core'],
            description: 'Build responsive and interactive user interfaces for web applications.',
            jd: {
                responsibilities: [
                    'Develop UI components',
                    'Implement responsive designs',
                    'API integration',
                    'Performance optimization',
                    'Cross-browser testing'
                ],
                requirements: [
                    'HTML, CSS, JavaScript proficiency',
                    'React.js basics',
                    'Responsive design principles',
                    'Git version control'
                ],
                preferred: [
                    'TypeScript knowledge',
                    'State management (Redux)',
                    'Webpack, Babel'
                ]
            }
        }
    ],

    // Demo Projects Data
    demoProjects: [
        {
            id: 'proj-001',
            title: 'E-commerce Web Application',
            description: 'Full-featured online shopping platform with cart, payment, and order tracking.',
            techStack: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            githubUrl: '#',
            departments: ['cse', 'it', 'bca-core'],
            features: [
                'User authentication and authorization',
                'Product catalog with search and filters',
                'Shopping cart and wishlist',
                'Payment gateway integration',
                'Order tracking',
                'Admin dashboard'
            ],
            difficulty: 'Intermediate'
        },
        {
            id: 'proj-002',
            title: 'Real-time Chat Application',
            description: 'WhatsApp-like chat app with real-time messaging, groups, and media sharing.',
            techStack: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            githubUrl: '#',
            departments: ['cse', 'it'],
            features: [
                'Real-time messaging',
                'Group chats',
                'Media file sharing',
                'Online status indicators',
                'Message read receipts',
                'Push notifications'
            ],
            difficulty: 'Advanced'
        },
        {
            id: 'proj-003',
            title: 'Movie Recommendation System',
            description: 'ML-based system that recommends movies based on user preferences and ratings.',
            techStack: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'React'],
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            githubUrl: '#',
            departments: ['cse', 'bca-data-science'],
            features: [
                'Collaborative filtering',
                'Content-based filtering',
                'User rating system',
                'Personalized recommendations',
                'Movie search and browse',
                'Trending movies'
            ],
            difficulty: 'Intermediate'
        },
        {
            id: 'proj-004',
            title: 'Task Management System',
            description: 'Project management tool similar to Trello with drag-and-drop boards.',
            techStack: ['React', 'Redux', 'Firebase', 'Material-UI'],
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            githubUrl: '#',
            departments: ['cse', 'it', 'bca-core'],
            features: [
                'Kanban boards',
                'Drag-and-drop tasks',
                'Team collaboration',
                'Due dates and reminders',
                'File attachments',
                'Activity tracking'
            ],
            difficulty: 'Beginner'
        },
        {
            id: 'proj-005',
            title: 'Weather Forecast Application',
            description: 'Beautiful weather app with 7-day forecast, maps, and weather alerts.',
            techStack: ['React Native', 'OpenWeather API', 'Redux', 'Maps'],
            videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            githubUrl: '#',
            departments: ['cse', 'it'],
            features: [
                'Current weather conditions',
                '7-day forecast',
                'Hourly predictions',
                'Location-based weather',
                'Weather maps',
                'Severe weather alerts'
            ],
            difficulty: 'Beginner'
        }
    ]
};

// Helper function to get department data
function getDepartmentData(deptId) {
    return UGData.departments[deptId] || null;
}

// Helper function to get subjects for a specific semester
function getSubjectsForSemester(deptId, semester) {
    const dept = UGData.departments[deptId];
    if (!dept) return [];
    return dept.subjectsBySemester[semester] || [];
}

// Helper function to get workshops for department
function getWorkshopsForDepartment(deptId) {
    return UGData.workshops.filter(ws => ws.departments.includes(deptId));
}

// Helper function to get internships for department
function getInternshipsForDepartment(deptId) {
    return UGData.internships.filter(int => int.departments.includes(deptId));
}

// Helper function to get projects for department
function getProjectsForDepartment(deptId) {
    return UGData.demoProjects.filter(proj => proj.departments.includes(deptId));
}
