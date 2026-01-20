// ==========================================
// DEEP RESOURCES DATA
// Books, Videos, Lab Help for each subject
// ==========================================

const DeepResourcesData = {
    // ============ CSE SUBJECTS ============
    'ds': {
        subject: 'Data Structures',
        books: [
            {
                title: 'Introduction to Algorithms (CLRS)',
                author: 'Cormen, Leiserson, Rivest, Stein',
                why: 'Comprehensive coverage of all DSA concepts with mathematical proofs. Industry standard reference.',
                difficulty: 'Advanced',
                topics: ['All DSA topics']
            },
            {
                title: 'Data Structures Using C',
                author: 'Reema Thareja',
                why: 'Easy to understand for beginners. Good code examples and problem-solving.',
                difficulty: 'Beginner',
                topics: ['Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Trees']
            },
            {
                title: 'Data Structures and Algorithms Made Easy',
                author: 'Narasimha Karumanchi',
                why: 'Interview-focused. Contains 700+ problems with solutions.',
                difficulty: 'Intermediate',
                topics: ['Interview prep', 'Problem patterns']
            }
        ],
        videos: [
            {
                title: 'DSA Complete Course',
                provider: 'Abdul Bari (YouTube)',
                url: 'https://www.youtube.com/@abdul_bari',
                duration: '100+ hours',
                why: 'Excellent visual explanations. Great for understanding algorithms.'
            },
            {
                title: 'Data Structures Full Course',
                provider: 'FreeCodeCamp',
                url: 'https://www.youtube.com/freecodecamp',
                duration: '8 hours',
                why: 'Concise overview of all major topics. Good for revision.'
            },
            {
                title: 'mycodeschool Data Structures',
                provider: 'mycodeschool (YouTube)',
                url: 'https://www.youtube.com/@mycodeschool',
                duration: '50+ hours',
                why: 'Detailed C/C++ implementations. Excellent for coding practice.'
            }
        ],
        labHelp: {
            experiments: [
                'Array operations (insertion, deletion, searching)',
                'Linked list implementation (singly, doubly, circular)',
                'Stack implementation using arrays and linked lists',
                'Queue implementation (linear and circular)',
                'Binary Search Tree operations',
                'Graph traversals (BFS, DFS)',
                'Sorting algorithms implementation',
                'Hashing techniques'
            ],
            vivaQuestions: [
                'What is the difference between Stack and Queue?',
                'Explain time complexity of different sorting algorithms.',
                'What is a Binary Search Tree? What are its properties?',
                'Difference between BFS and DFS?',
                'Explain hashing and collision resolution techniques.',
                'What is the advantage of linked list over array?',
                'Explain recursion with an example.',
                'What are the applications of Queue?',
                'Difference between linear and non-linear data structures?',
                'Explain tree traversal methods (Inorder, Preorder, Postorder).'
            ],
            tips: [
                'Always trace algorithms with examples before coding',
                'Understand time and space complexity for each data structure',
                'Practice on paper first, then code',
                'Review pointers thoroughly before linked list lab'
            ]
        }
    },

    'os': {
        subject: 'Operating Systems',
        books: [
            {
                title: 'Operating System Concepts (Dinosaur Book)',
                author: 'Silberschatz, Galvin, Gagne',
                why: 'Most comprehensive OS textbook. Clear explanations with diagrams.',
                difficulty: 'Intermediate',
                topics: ['All OS topics']
            },
            {
                title: 'Modern Operating Systems',
                author: 'Andrew S. Tanenbaum',
                why: 'Excellent for understanding OS design principles. Real-world examples.',
                difficulty: 'Advanced',
                topics: ['OS Design', 'Case Studies']
            },
            {
                title: 'Operating Systems by Galvin',
                author: 'William Stallings',
                why: 'Good for exam preparation. Concise and to the point.',
                difficulty: 'Beginner',
                topics: ['Exam-focused']
            }
        ],
        videos: [
            {
                title: 'Operating Systems Full Course',
                provider: 'Neso Academy',
                url: 'https://www.youtube.com/@nesoacademy',
                duration: '100+ hours',
                why: 'Best for concepts. Animated explanations.'
            },
            {
                title: 'OS by Gate Smashers',
                provider: 'Gate Smashers (YouTube)',
                url: 'https://www.youtube.com/@GateSmashers',
                duration: '40 hours',
                why: 'GATE exam focused. Covers all important topics.'
            }
        ],
        labHelp: {
            experiments: [
                'CPU Scheduling Algorithms (FCFS, SJF, Round Robin, Priority)',
                'Banker\'s Algorithm for deadlock avoidance',
                'Page Replacement Algorithms (FIFO, LRU, Optimal)',
                'Producer-Consumer problem using semaphores',
                'Reader-Writer problem',
                'Dining Philosophers problem',
                'Disk Scheduling Algorithms (FCFS, SSTF, SCAN, C-SCAN)',
                'Memory allocation techniques (First Fit, Best Fit, Worst Fit)'
            ],
            vivaQuestions: [
                'What is an Operating System? What are its functions?',
                'Difference between process and thread?',
                'Explain virtual memory and its advantages.',
                'What is deadlock? What are its necessary conditions?',
                'Difference between paging and segmentation?',
                'Explain semaphore and its types.',
                'What is thrashing?',
                'Difference between internal and external fragmentation?',
                'Explain critical section problem.',
                'What are system calls? Give examples.'
            ],
            tips: [
                'Draw Gantt charts for scheduling algorithms',
                'Understand the difference between preemptive and non-preemptive scheduling',
                'Practice numerical problems for page replacement',
                'Memorize deadlock conditions (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait)'
            ]
        }
    },

    'dbms': {
        subject: 'Database Management Systems',
        books: [
            {
                title: 'Database System Concepts',
                author: 'Korth, Silberschatz, Sudarshan',
                why: 'Comprehensive and authoritative. Best for understanding theory.',
                difficulty: 'Intermediate',
                topics: ['All DBMS topics']
            },
            {
                title: 'Fundamentals of Database Systems',
                author: 'Elmasri and Navathe',
                why: 'Excellent for ER diagrams and relational model.',
                difficulty: 'Beginner',
                topics: ['ER Model', 'Normalization']
            }
        ],
        videos: [
            {
                title: 'DBMS Complete Course',
                provider: 'Knowledge Gate',
                url: 'https://www.youtube.com/@KnowledgeGATE',
                duration: '60 hours',
                why: 'GATE-focused. Very detailed.'
            },
            {
                title: 'SQL Tutorial for Beginners',
                provider: 'Programming with Mosh',
                url: 'https://www.youtube.com/@programmingwithmosh',
                duration: '3 hours',
                why: 'Perfect for learning SQL quickly.'
            }
        ],
        labHelp: {
            experiments: [
                'Creating databases and tables',
                'SQL queries (SELECT, INSERT, UPDATE, DELETE)',
                'Joins (INNER, OUTER, CROSS)',
                'Aggregate functions (COUNT, SUM, AVG, MAX, MIN)',
                'Subqueries and nested queries',
                'Views and indexes',
                'Triggers and stored procedures',
                'Normalization exercises'
            ],
            vivaQuestions: [
                'What is DBMS? Advantages over file system?',
                'Explain ER model with example.',
                'What is normalization? Explain 1NF, 2NF, 3NF, BCNF.',
                'Difference between DELETE, TRUNCATE, and DROP?',
                'What are ACID properties?',
                'Explain SQL joins with examples.',
                'What is a primary key? Difference from foreign key?',
                'Explain transaction and its states.',
                'What is concurrency control?',
                'Difference between procedural and non-procedural DML?'
            ],
            tips: [
                'Practice SQL queries on live databases',
                'Draw ER diagrams for real-world scenarios',
                'Understand functional dependencies for normalization',
                'Use online SQL playgrounds for practice'
            ]
        }
    },

    'cn': {
        subject: 'Computer Networks',
        books: [
            {
                title: 'Computer Networks',
                author: 'Andrew S. Tanenbaum',
                why: 'Best book for networking. Clear explanations of protocols.',
                difficulty: 'Intermediate',
                topics: ['All network topics']
            },
            {
                title: 'Data Communications and Networking',
                author: 'Behrouz A. Forouzan',
                why: 'Good for understanding OSI and TCP/IP models.',
                difficulty: 'Beginner',
                topics: ['Network layers', 'Protocols']
            }
        ],
        videos: [
            {
                title: 'Computer Networks Full Course',
                provider: 'Neso Academy',
                url: 'https://www.youtube.com/@nesoacademy',
                duration: '100+ hours',
                why: 'Comprehensive coverage of all topics.'
            },
            {
                title: 'Networking Basics',
                provider: 'NetworkChuck',
                url: 'https://www.youtube.com/@NetworkChuck',
                duration: 'Various',
                why: 'Practical networking tutorials.'
            }
        ],
        labHelp: {
            experiments: [
                'Network cable crimping and testing',
                'IP address configuration and subnetting',
                'Wireshark packet analysis',
                'Setting up FTP server',
                'DNS configuration',
                'HTTP server setup',
                'Routing table configuration',
                'Network simulation using Cisco Packet Tracer'
            ],
            vivaQuestions: [
                'Explain OSI model layers and their functions.',
                'Difference between TCP and UDP?',
                'What is IP address? Difference between IPv4 and IPv6?',
                'Explain three-way handshake in TCP.',
                'What is DNS? How does it work?',
                'Difference between hub, switch, and router?',
                'Explain HTTP and HTTPS.',
                'What is subnetting? Why is it used?',
                'Explain error detection and correction techniques.',
                'What are routing algorithms?'
            ],
            tips: [
                'Use Wireshark to analyze real network traffic',
                'Practice subnetting calculations',
                'Understand the layered approach of networking',
                'Use Cisco Packet Tracer for simulations'
            ]
        }
    },

    // ============ ECE SUBJECTS ============
    'edc': {
        subject: 'Electronic Devices & Circuits',
        books: [
            {
                title: 'Electronic Devices and Circuit Theory',
                author: 'Robert L. Boylestad',
                why: 'Industry standard. Excellent for understanding device physics.',
                difficulty: 'Beginner',
                topics: ['Diodes', 'BJT', 'FET', 'Amplifiers']
            },
            {
                title: 'Integrated Electronics',
                author: 'Millman and Halkias',
                why: 'Comprehensive coverage. Great for analog circuits.',
                difficulty: 'Intermediate',
                topics: ['Analog circuits', 'Amplifier design']
            }
        ],
        videos: [
            {
                title: 'Electronic Devices & Circuits',
                provider: 'Neso Academy',
                url: 'https://www.youtube.com/@nesoacademy',
                duration: '80 hours',
                why: 'Best online resource. Clear explanations.'
            }
        ],
        labHelp: {
            experiments: [
                'PN junction diode characteristics',
                'Zener diode as voltage regulator',
                'BJT characteristics (CE, CB, CC configurations)',
                'FET characteristics',
                'RC coupled amplifier',
                'Voltage amplifiers',
                'Oscillator circuits (Colpitts, Hartley)',
                'Power supply circuits'
            ],
            vivaQuestions: [
                'Explain working of PN junction diode.',
                'What is Zener diode? Applications?',
                'Difference between BJT and FET?',
                'Explain transistor configurations.',
                'What is an amplifier? Types of amplifiers?',
                'Explain feedback in amplifiers.',
                'What is oscillator? Barkhausen criterion?',
                'Difference between analog and digital circuits?'
            ],
            tips: [
                'Understand the V-I characteristics thoroughly',
                'Practice circuit analysis problems',
                'Use simulation software (LTSpice, Multisim)',
                'Learn to read datasheets'
            ]
        }
    }
};

// Helper functions
function getDeepResources(subjectId) {
    return DeepResourcesData[subjectId] || null;
}

function getResourcesByType(subjectId, type) {
    const resources = DeepResourcesData[subjectId];
    if (!resources) return [];
    return resources[type] || [];
}
