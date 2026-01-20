// ==========================================
// PUZZLE & GAMES DATA
// Relaxing educational games with coin rewards
// ==========================================

const PuzzleGamesData = {
    conceptMatch: {
        id: 'concept-match',
        name: 'Match the Concepts',
        icon: '🎯',
        difficulty: 'Easy',
        coins: 15,
        description: 'Match programming concepts with their definitions',
        timeLimit: 60, // seconds
        questions: [
            {
                concepts: ['Stack', 'Queue', 'Tree', 'Graph', 'Array', 'Linked List'],
                definitions: [
                    'LIFO data structure',
                    'FIFO data structure',
                    'Hierarchical data structure',
                    'Network of nodes and edges',
                    'Contiguous memory allocation',
                    'Dynamic memory allocation'
                ],
                correctPairs: [
                    [0, 0], [1, 1], [2, 2], [3, 3], [4, 4], [5, 5]
                ]
            }
        ]
    },

    quickMath: {
        id: 'quick-math',
        name: 'Quick Math Challenge',
        icon: '🔢',
        difficulty: 'Medium',
        coins: 20,
        description: 'Solve math problems as fast as you can',
        timeLimit: 30,
        problemTypes: ['addition', 'subtraction', 'multiplication', 'percentage'],
        problemCount: 10
    },

    logicPuzzle: {
        id: 'logic-puzzle',
        name: 'Logic Grid Puzzle',
        icon: '🧩',
        difficulty: 'Medium',
        coins: 25,
        description: 'Solve logical reasoning puzzles',
        timeLimit: 120,
        puzzles: [
            {
                title: 'Three Students',
                clues: [
                    'Alice, Bob, and Charlie are studying CSE, ECE, and Mechanical',
                    'Alice is not studying ECE',
                    'Bob is studying Mechanical',
                    'Who is studying what?'
                ],
                options: [
                    { name: 'Alice', courses: ['CSE', 'ECE', 'Mechanical'] },
                    { name: 'Bob', courses: ['CSE', 'ECE', 'Mechanical'] },
                    { name: 'Charlie', courses: ['CSE', 'ECE', 'Mechanical'] }
                ],
                solution: {
                    'Alice': 'CSE',
                    'Bob': 'Mechanical',
                    'Charlie': 'ECE'
                }
            }
        ]
    },

    patternRecognition: {
        id: 'pattern-recognition',
        name: 'Pattern Finder',
        icon: '🔍',
        difficulty: 'Hard',
        coins: 30,
        description: 'Find the next element in the sequence',
        timeLimit: 45,
        patterns: [
            { sequence: [2, 4, 8, 16, '?'], answer: 32, rule: 'Powers of 2' },
            { sequence: [1, 1, 2, 3, 5, 8, '?'], answer: 13, rule: 'Fibonacci' },
            { sequence: [5, 10, 20, 40, '?'], answer: 80, rule: 'Multiply by 2' },
            { sequence: [100, 95, 90, 85, '?'], answer: 80, rule: 'Subtract 5' },
            { sequence: [2, 6, 12, 20, '?'], answer: 30, rule: 'n*(n+1)' }
        ]
    },

    memoryGame: {
        id: 'memory-game',
        name: 'Code Memory',
        icon: '🧠',
        difficulty: 'Easy',
        coins: 15,
        description: 'Remember code keywords and their meanings',
        timeLimit: 90,
        cards: [
            { front: 'for', back: 'Looping statement' },
            { front: 'if', back: 'Conditional statement' },
            { front: 'class', back: 'OOP blueprint' },
            { front: 'function', back: 'Reusable code block' },
            { front: 'array', back: 'Collection of elements' },
            { front: 'pointer', back: 'Memory address variable' }
        ]
    },

    codeDebug: {
        id: 'code-debug',
        name: 'Spot the Bug',
        icon: '🐛',
        difficulty: 'Hard',
        coins: 35,
        description: 'Find and fix errors in code snippets',
        timeLimit: 60,
        challenges: [
            {
                language: 'C',
                code: `int main() {
  int arr[5] = {1, 2, 3, 4, 5};
  for(int i=0; i<=5; i++) {
    printf("%d ", arr[i]);
  }
  return 0;
}`,
                bugs: 'Array index out of bounds (i<=5 should be i<5)',
                bugLine: 3
            },
            {
                language: 'C',
                code: `int factorial(int n) {
  if(n == 0)
    return 1;
  else
    return n * factorial(n);
}`,
                bugs: 'Infinite recursion (should be factorial(n-1))',
                bugLine: 5
            }
        ]
    }
};

// Game state management
const GameState = {
    currentGame: null,
    score: 0,
    timeRemaining: 0,
    timer: null,
    coinsEarned: 0
};

// Helper functions for games
function startGame(gameId) {
    const game = PuzzleGamesData[gameId];
    if (!game) return;

    GameState.currentGame = gameId;
    GameState.score = 0;
    GameState.timeRemaining = game.timeLimit;
    GameState.coinsEarned = 0;

    // Render game UI based on game type
    renderGameUI(game);
    startGameTimer();
}

function startGameTimer() {
    if (GameState.timer) clearInterval(GameState.timer);

    GameState.timer = setInterval(() => {
        GameState.timeRemaining--;
        updateTimerDisplay();

        if (GameState.timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    if (GameState.timer) clearInterval(GameState.timer);

    const game = PuzzleGamesData[GameState.currentGame];
    const scorePercent = (GameState.score / getTotalPossibleScore(game)) * 100;

    // Award coins based on performance
    if (scorePercent >= 80) {
        GameState.coinsEarned = game.coins;
    } else if (scorePercent >= 60) {
        GameState.coinsEarned = Math.floor(game.coins * 0.7);
    } else if (scorePercent >= 40) {
        GameState.coinsEarned = Math.floor(game.coins * 0.5);
    } else {
        GameState.coinsEarned = Math.floor(game.coins * 0.3);
    }

    // Add coins to user account
    if (typeof authSystem !== 'undefined') {
        authSystem.addCoins(GameState.coinsEarned);
    }

    // Update game stats
    updateGameStats(GameState.currentGame, GameState.score, GameState.coinsEarned);

    // Show results
    showGameResults();
}

function getTotalPossibleScore(game) {
    // Different games have different scoring
    switch (game.id) {
        case 'quick-math':
            return game.problemCount * 10;
        case 'concept-match':
            return game.questions[0].concepts.length * 10;
        case 'pattern-recognition':
            return game.patterns.length * 10;
        default:
            return 100;
    }
}

function updateGameStats(gameId, score, coinsEarned) {
    let stats = JSON.parse(localStorage.getItem('navix_game_stats') || '{}');

    if (!stats[gameId]) {
        stats[gameId] = {
            timesPlayed: 0,
            totalScore: 0,
            totalCoins: 0,
            bestScore: 0
        };
    }

    stats[gameId].timesPlayed++;
    stats[gameId].totalScore += score;
    stats[gameId].totalCoins += coinsEarned;
    stats[gameId].bestScore = Math.max(stats[gameId].bestScore, score);

    localStorage.setItem('navix_game_stats', JSON.stringify(stats));

    // Update global profile stats
    updateProfileGameCount();
}

function updateProfileGameCount() {
    let profileStats = JSON.parse(localStorage.getItem('navix_profile_stats') || '{}');
    profileStats.gamesPlayed = (profileStats.gamesPlayed || 0) + 1;
    localStorage.setItem('navix_profile_stats', JSON.stringify(profileStats));
}

function renderGameUI(game) {
    // This will be implemented in the UI layer
    console.log('Rendering game:', game.name);
}

function updateTimerDisplay() {
    // This will be implemented in the UI layer
    console.log('Time remaining:', GameState.timeRemaining);
}

function showGameResults() {
    // This will be implemented in the UI layer
    console.log('Game ended. Score:', GameState.score, 'Coins:', GameState.coinsEarned);
}
