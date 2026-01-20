// ==========================================
// NAVIX - AI Career Navigation Platform
// Application Logic & Navigation System
// ==========================================

// ============ SPLASH & LOGIN SYSTEM ============
class AuthSystem {
  constructor() {
    this.init();
  }

  init() {
    // Check if user is already logged in
    const userData = localStorage.getItem('navix_user');
    if (userData) {
      this.showMainApp();
    } else {
      this.showSplashScreen();
    }

    // Handle login form submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => this.handleLogin(e));
    }
  }

  showSplashScreen() {
    // Splash screen will auto-fade after 3 seconds
    setTimeout(() => {
      document.getElementById('splash-screen').style.display = 'none';
      document.getElementById('login-screen').classList.remove('hidden');
    }, 3000);
  }

  handleLogin(e) {
    e.preventDefault();

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const grade = document.getElementById('user-grade').value;

    const userData = {
      name,
      email,
      grade,
      coins: 100, // Starting coins
      loginDate: new Date().toISOString()
    };

    localStorage.setItem('navix_user', JSON.stringify(userData));
    this.showMainApp();
  }

  showMainApp() {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-app').style.display = 'block';

    // Update profile with user data
    this.updateProfile();
  }

  updateProfile() {
    const userData = JSON.parse(localStorage.getItem('navix_user'));
    if (userData) {
      document.getElementById('profile-name').textContent = userData.name;
      document.getElementById('profile-grade').textContent = userData.grade;

      // Update coin displays
      const coinElements = document.querySelectorAll('.coin-count');
      coinElements.forEach(el => el.textContent = userData.coins);
    }
  }

  getCoins() {
    const userData = JSON.parse(localStorage.getItem('navix_user'));
    return userData ? userData.coins : 100;
  }

  addCoins(amount) {
    const userData = JSON.parse(localStorage.getItem('navix_user'));
    if (userData) {
      userData.coins += amount;
      localStorage.setItem('navix_user', JSON.stringify(userData));
      this.updateProfile();
    }
  }

  spendCoins(amount) {
    const userData = JSON.parse(localStorage.getItem('navix_user'));
    if (userData && userData.coins >= amount) {
      userData.coins -= amount;
      localStorage.setItem('navix_user', JSON.stringify(userData));
      this.updateProfile();
      return true;
    }
    return false;
  }
}

// ============ ENHANCED QUIZ SYSTEM ============
class QuizSystem {
  constructor() {
    this.currentCategory = null;
    this.currentSubject = null;
    this.currentTopic = null;
    this.currentDifficulty = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.questions = [];
    this.hintUsed = false;
    this.timer = null;
    this.quizContainer = null;
  }

  init() {
    // Create quiz container if it doesn't exist
    if (!this.quizContainer) {
      this.quizContainer = document.createElement('div');
      this.quizContainer.id = 'quiz-container';
      this.quizContainer.className = 'quiz-container';
      document.body.appendChild(this.quizContainer);
    }
  }

  // Step 1:Select Quiz Category (JEE/NEET/Aptitude)
  selectCategory(category) {
    this.currentCategory = category;
    this.showSubjectSelection();
  }

  // Step 2: Show Subject Selection
  showSubjectSelection() {
    const subjects = QuizHelpers.getSubjectsForCategory(this.currentCategory);

    const html = `
      <div class="quiz-screen active">
        <div class="top-nav">
          <button class="btn btn-icon btn-ghost" onclick="quizSystem.goBack()">⬅️</button>
          <div class="nav-title">${this.currentCategory.toUpperCase()} - Select Subject</div>
          <button class="btn btn-icon btn-ghost" onclick="quizSystem.close()">✖️</button>
        </div>
        
        <div class="quiz-content">
          <div class="section-card">
            <h2>📚 Choose Your Subject</h2>
            <p class="subtitle">Select a subject to practice</p>
          </div>
          
          <div class="quiz-subject-grid">
            ${subjects.map(subject => `
              <div class="quiz-card" onclick="quizSystem.selectSubject('${subject.id}')">
                <div class="card-icon" style="font-size: 3rem;">${subject.icon}</div>
                <h3>${subject.name}</h3>
                <p class="card-meta">${subject.topicCount} Topics Available</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.quizContainer.innerHTML = html;
    this.quizContainer.style.display = 'block';
  }

  //Step 3: Select Subject
  selectSubject(subject) {
    this.currentSubject = subject;
    this.showTopicSelection();
  }

  // Step 4: Show Topic Selection
  showTopicSelection() {
    const topics = QuizHelpers.getTopicsForSubject(this.currentSubject);
    const subjectName = QuizDatabase[this.currentSubject].name;

    const html = `
      <div class="quiz-screen active">
        <div class="top-nav">
          <button class="btn btn-icon btn-ghost" onclick="quizSystem.goBack()">⬅️</button>
          <div class="nav-title">${subjectName} - Select Topic</div>
          <button class="btn btn-icon btn-ghost" onclick="quizSystem.close()">✖️</button>
        </div>
        
        <div class="quiz-content">
          <div class="section-card">
            <h2>🎯 Choose a Topic</h2>
            <p class="subtitle">Select what you'd like to practice</p>
          </div>
          
          <div class="quiz-topic-list">
            ${topics.map(topic => `
              <div class="topic-item" onclick="quizSystem.selectTopic('${topic.id}')">
                <div class="topic-info">
                  <div class="topic-name">${topic.name}</div>
                  <div class="topic-meta">
                    🟢 ${topic.levels.basic} Basic • 
                    🟡 ${topic.levels.moderate} Moderate • 
                    🔴 ${topic.levels.hard} Hard
                  </div>
                </div>
                <div class="topic-arrow">→</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.quizContainer.innerHTML = html;
  }

  // Step 5: Select Topic
  selectTopic(topic) {
    this.currentTopic = topic;
    this.showDifficultySelection();
  }

  // Step 6: Show Difficulty Selection
  showDifficultySelection() {
    const topicName = QuizDatabase[this.currentSubject].topics[this.currentTopic].name;

    const html = `
      <div class="quiz-screen active">
        <div class="top-nav">
          <button class="btn btn-icon btn-ghost" onclick="quizSystem.goBack()">⬅️</button>
          <div class="nav-title">${topicName} - Select Difficulty</div>
          <button class="btn btn-icon btn-ghost" onclick="quizSystem.close()">✖️</button>
        </div>
        
        <div class="quiz-content">
          <div class="section-card">
            <h2>⚡ Choose Difficulty Level</h2>
            <p class="subtitle">Pick your challenge level</p>
          </div>
          
          <div class="difficulty-buttons">
            <button class="difficulty-btn basic" onclick="quizSystem.startWithDifficulty('basic')">
              <div class="diff-icon">🟢</div>
              <div class="diff-name">Basic</div>
              <div class="diff-desc">Foundational concepts</div>
            </button>
            
            <button class="difficulty-btn moderate" onclick="quizSystem.startWithDifficulty('moderate')">
              <div class="diff-icon">🟡</div>
              <div class="diff-name">Moderate</div>
              <div class="diff-desc">Intermediate level</div>
            </button>
            
            <button class="difficulty-btn hard" onclick="quizSystem.startWithDifficulty('hard')">
              <div class="diff-icon">🔴</div>
              <div class="diff-name">Hard</div>
              <div class="diff-desc">Advanced problems</div>
            </button>
          </div>
        </div>
      </div>
    `;

    this.quizContainer.innerHTML = html;
  }

  // Step 7: Start Quiz with Selected Difficulty
  startWithDifficulty(difficulty) {
    this.currentDifficulty = difficulty;
    this.score = 0;
    this.currentQuestionIndex = 0;

    // Get questions from QuizDatabase
    this.questions = QuizHelpers.getQuestionsForTopic(
      this.currentSubject,
      this.currentTopic,
      this.currentDifficulty
    );

    if (this.questions.length === 0) {
      alert('No questions available for this combination. Please try another topic.');
      this.showTopicSelection();
      return;
    }

    this.showQuestion();
  }

  // Step 8: Show Question with Enhanced UI
  showQuestion() {
    if (this.currentQuestionIndex >= this.questions.length) {
      this.showResult();
      return;
    }

    const question = this.questions[this.currentQuestionIndex];
    const progress = ((this.currentQuestionIndex / this.questions.length) * 100).toFixed(0);
    const diffInfo = QuizHelpers.getDifficultyInfo(this.currentDifficulty);

    const html = `
      <div class="quiz-screen active">
        <div class="quiz-header">
          <div class="quiz-progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <div class="quiz-meta">
            <span>${diffInfo.icon} ${diffInfo.name}</span>
            <span>Question ${this.currentQuestionIndex + 1}/${this.questions.length}</span>
            <span class="coin-display">🪙 <span class="coin-count">${authSystem.getCoins()}</span></span>
          </div>
        </div>

        <div class="quiz-question-container">
          <div class="question-card">
            <h2 class="question-text">${question.question}</h2>
          </div>
          
          <div class="quiz-options" id="quiz-options">
            ${question.options.map((option, idx) => `
              <div class="quiz-option" onclick="quizSystem.selectAnswer(${idx})">
                ${option}
              </div>
            `).join('')}
          </div>

          <div class="quiz-actions">
            <button class="btn btn-secondary" id="hint-btn" onclick="quizSystem.useHint()">
              💡 Hint (-20 coins)
            </button>
          </div>
          
          <div class="quiz-explanation" id="explanation-box" style="display: none;">
            <div class="explanation-content"></div>
          </div>
        </div>
      </div>
    `;

    this.quizContainer.innerHTML = html;
    this.hintUsed = false;
  }

  // Select Answer
  selectAnswer(selectedIndex) {
    const question = this.questions[this.currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');
    const isCorrect = selectedIndex === question.correct;

    // Disable all options
    options.forEach((opt, idx) => {
      opt.style.pointerEvents = 'none';
      if (idx === question.correct) {
        opt.classList.add('correct');
      } else if (idx === selectedIndex && !isCorrect) {
        opt.classList.add('incorrect');
      }
    });

    // Update score
    if (isCorrect) {
      this.score++;
      authSystem.addCoins(10);
    }

    // Show explanation
    const explanationBox = document.getElementById('explanation-box');
    const explanationContent = explanationBox.querySelector('.explanation-content');

    if (isCorrect) {
      explanationContent.innerHTML = `<strong>✅ Correct!</strong> ${question.explanation || 'Well done!'}`;
      explanationBox.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))';
    } else {
      explanationContent.innerHTML = `<strong>❌ Incorrect.</strong> The correct answer was: ${question.options[question.correct]}`;
      explanationBox.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))';
    }

    explanationBox.style.display = 'block';

    // Hide hint, show next button
    document.getElementById('hint-btn').style.display = 'none';

    // Add next button after a delay
    setTimeout(() => {
      const actionsDiv = document.querySelector('.quiz-actions');
      actionsDiv.innerHTML = `
        <button class="btn btn-primary" onclick="quizSystem.nextQuestion()">
          Next Question →
        </button>
      `;
    }, 500);
  }

  // Use Hint
  useHint() {
    if (this.hintUsed) return;

    if (!authSystem.spendCoins(20)) {
      alert('❌ Not enough coins! You need 20 coins to use a hint.');
      return;
    }

    this.hintUsed = true;
    const question = this.questions[this.currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');

    let eliminated = 0;
    options.forEach((opt, idx) => {
      if (idx !== question.correct && eliminated < 2) {
        opt.classList.add('eliminated');
        eliminated++;
      }
    });

    alert('💡 Hint used! Two incorrect options have been eliminated.');
  }

  // Next Question
  nextQuestion() {
    this.currentQuestionIndex++;
    this.showQuestion();
  }

  // Show Enhanced Result
  showResult() {
    const total = this.questions.length;
    const percentage = ((this.score / total) * 100).toFixed(0);
    const rating = QuizHelpers.getPerformanceRating(this.score, total);
    const recommendations = QuizHelpers.getRecommendations(
      this.currentSubject,
      this.currentTopic,
      this.currentDifficulty,
      this.score,
      total
    );

    const coinsEarned = this.score * 10 + (this.score === total ? 50 : 0);
    authSystem.addCoins(coinsEarned);

    const html = `
      <div class="quiz-screen active">
        <div class="quiz-result-container">
          <div class="result-header">
            <div class="result-icon">${rating.icon}</div>
            <h1>${rating.rating}</h1>
            <p>${rating.message}</p>
          </div>
          
          <div class="result-stats">
            <div class="stat-card">
              <div class="stat-value">${this.score}/${total}</div>
              <div class="stat-label">Correct Answers</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">${percentage}%</div>
              <div class="stat-label">Accuracy</div>
            </div>
            <div class="stat-card">
              <div class="stat-value">+${coinsEarned}</div>
              <div class="stat-label">Coins Earned</div>
            </div>
          </div>

          <div class="section-card">
            <h3 class="section-title">📌 Recommendations</h3>
            <div class="recommendations-list">
              ${recommendations.map(rec => `
                <div class="recommendation-item">
                  <span class="rec-icon">→</span>
                  <span class="rec-text">${rec.text}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="result-actions">
            <button class="btn btn-secondary" onclick="quizSystem.retryQuiz()">
              🔄 Retry Same Quiz
            </button>
            <button class="btn btn-primary" onclick="quizSystem.showDifficultySelection()">
              📚 Try Different Level
            </button>
            <button class="btn btn-ghost" onclick="quizSystem.close()">
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    `;

    this.quizContainer.innerHTML = html;
  }

  // Retry Quiz
  retryQuiz() {
    this.score = 0;
    this.currentQuestionIndex = 0;
    this.showQuestion();
  }

  // Navigation Methods
  goBack() {
    if (this.currentDifficulty) {
      this.currentDifficulty = null;
      this.showTopicSelection();
    } else if (this.currentTopic) {
      this.currentTopic = null;
      this.showDifficultySelection();
    } else if (this.currentSubject) {
      this.currentSubject = null;
      this.showSubjectSelection();
    } else {
      this.close();
    }
  }

  close() {
    if (this.quizContainer) {
      this.quizContainer.style.display = 'none';
      this.quizContainer.innerHTML = '';
    }
    this.currentCategory = null;
    this.currentSubject = null;
    this.currentTopic = null;
    this.currentDifficulty = null;
  }
}

// ============ RESOURCE TAB SYSTEM ============
function switchResourceTab(tab) {
  // Hide all content
  document.querySelectorAll('.resource-content').forEach(content => {
    content.classList.add('hidden');
  });

  // Remove active class from all tabs
  document.querySelectorAll('.resource-tab').forEach(tabBtn => {
    tabBtn.classList.remove('active');
  });

  // Show selected content
  document.getElementById(`resources-${tab}`).classList.remove('hidden');

  // Add active class to clicked tab
  event.target.classList.add('active');
}

// ============ QUIZ GLOBAL FUNCTIONS ============
let quizSystem;

// Initialize quiz system when user clicks on JEE/NEET/Aptitude
function startQuiz(category) {
  if (!quizSystem) {
    quizSystem = new QuizSystem();
    quizSystem.init();
  }
  quizSystem.selectCategory(category);
}

// Deprecated functions (kept for backwards compatibility)
function useHint() {
  if (quizSystem) quizSystem.useHint();
}

function nextQuestion() {
  if (quizSystem) quizSystem.nextQuestion();
}

function returnToQuizSelection() {
  if (quizSystem) quizSystem.close();
}

// ============ NAVIGATION SYSTEM ============
class NavigationSystem {
  constructor() {
    this.history = ['home-screen'];
    this.currentScreen = 'home-screen';
    this.init();
  }

  init() {
    // Handle card clicks for navigation
    document.querySelectorAll('[data-navigate]').forEach(element => {
      element.addEventListener('click', (e) => {
        const targetScreen = element.getAttribute('data-navigate');
        this.navigateTo(targetScreen);
      });
    });

    // Handle back button
    document.querySelectorAll('[data-action="back"]').forEach(btn => {
      btn.addEventListener('click', () => this.goBack());
    });

    // Handle home button
    document.querySelectorAll('[data-action="home"]').forEach(btn => {
      btn.addEventListener('click', () => this.goHome());
    });

    // Update active nav item
    this.updateBottomNav();
  }

  navigateTo(screenId) {
    // Hide current screen
    document.querySelectorAll('.screen').forEach(screen => {
      screen.classList.remove('active');
    });

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.add('active');
      this.history.push(screenId);
      this.currentScreen = screenId;
      this.updateBottomNav();
      window.scrollTo(0, 0);
    }
  }

  goBack() {
    if (this.history.length > 1) {
      this.history.pop(); // Remove current
      const previousScreen = this.history[this.history.length - 1];

      // Hide all screens
      document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
      });

      // Show previous screen
      document.getElementById(previousScreen).classList.add('active');
      this.currentScreen = previousScreen;
      this.updateBottomNav();
      window.scrollTo(0, 0);
    }
  }

  goHome() {
    this.history = ['home-screen'];
    this.navigateTo('home-screen');
  }

  updateBottomNav() {
    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
      item.classList.remove('active');
    });

    // Highlight current section in bottom nav
    if (this.currentScreen === 'home-screen') {
      document.querySelector('.bottom-nav .nav-item[data-navigate="home-screen"]')?.classList.add('active');
    } else if (this.currentScreen.includes('after10th') || this.currentScreen.includes('science') ||
      this.currentScreen.includes('arts') || this.currentScreen.includes('vocational') ||
      this.currentScreen.includes('after12th')) {
      document.querySelector('.bottom-nav .nav-item[data-navigate="after10th-screen"]')?.classList.add('active');
    }
  }
}

// ============ AI CHATBOT SYSTEM ============
class AIChatbot {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.init();
  }

  init() {
    // Toggle chat
    document.getElementById('ai-fab').addEventListener('click', () => this.toggle());
    document.getElementById('close-chat').addEventListener('click', () => this.toggle());

    // Bottom nav AI button
    document.getElementById('ai-nav').addEventListener('click', () => this.toggle());

    // Send message
    document.getElementById('send-message').addEventListener('click', () => this.sendMessage());
    document.getElementById('chat-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggle() {
    this.isOpen = !this.isOpen;
    const chatContainer = document.getElementById('chat-container');

    if (this.isOpen) {
      chatContainer.classList.add('active');
      document.getElementById('chat-input').focus();
    } else {
      chatContainer.classList.remove('active');
    }
  }

  sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    this.addMessage(message, 'user');
    input.value = '';

    // Simulate AI response
    setTimeout(() => {
      const response = this.generateResponse(message);
      this.addMessage(response, 'ai');
    }, 800);
  }

  addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    bubbleDiv.textContent = text;

    messageDiv.appendChild(bubbleDiv);
    messagesContainer.appendChild(messageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  generateResponse(userMessage) {
    const msg = userMessage.toLowerCase();

    // Timetable generation trigger
    if (msg.includes('timetable') || msg.includes('schedule') || msg.includes('study plan')) {
      return "📅 I can help you create a personalized study timetable! I'll need some information:\n\n1. How many hours can you study daily?\n2. What's your exam/goal date?\n3. Which subjects need more focus?\n\nJust tell me these details and I'll generate a smart schedule for you!";
    }

    // Course recommendations
    if (msg.includes('which course') || msg.includes('what should i') || msg.includes('confused')) {
      return "🎯 No worries! Let's figure this out together. Can you tell me:\n\n• What subjects do you enjoy most?\n• Are you more interested in theory or practical work?\n• Do you prefer science, commerce, or humanities?\n\nThis will help me suggest the perfect path for you!";
    }

    // JEE/NEET related
    if (msg.includes('jee') || msg.includes('neet') || msg.includes('entrance')) {
      return "📚 Great question! For entrance exam preparation:\n\n✅ Start early (ideally from 11th)\n✅ Focus on NCERT first\n✅ Practice daily with mock tests\n✅ Don't ignore board exams\n\nWould you like specific book recommendations or study strategies?";
    }

    // Career/salary questions
    if (msg.includes('salary') || msg.includes('job') || msg.includes('placement')) {
      return "💼 Good thinking! Career prospects vary by field:\n\n• Engineering: ₹6-25 LPA (depending on college)\n• Medical: ₹8-20 LPA starting\n• Commerce: ₹4-12 LPA\n\nRemember: Skills matter more than degree! Which field interests you?";
    }

    // Motivation
    if (msg.includes('stressed') || msg.includes('worried') || msg.includes('difficult')) {
      return "💪 I understand it can be overwhelming! Remember:\n\n🌟 Every successful person faced doubts\n🌟 Take one step at a time\n🌟 Your effort today = Your success tomorrow\n\nYou've got this! What specific challenge can I help you with?";
    }

    // After 10th guidance
    if (msg.includes('after 10') || msg.includes('10th')) {
      return "🏫 Great timing to plan ahead! After 10th, you have three main paths:\n\n1. 🔬 Science (MPC/BiPC) - For engineering/medical\n2. 🎨 Arts (CEC/HEC) - For humanities/commerce\n3. 🛠️ Vocational (IT/MLT/ET/CSE) - For quick job skills\n\nWhat are your interests and strengths?";
    }

    // After 12th guidance
    if (msg.includes('after 12') || msg.includes('+2') || msg.includes('12th')) {
      return "🎓 Time to choose your degree! Popular options:\n\n• B.Tech/BE - Engineering (4 years)\n• MBBS - Medical (5.5 years)\n• B.Com - Commerce (3 years)\n• BA - Arts (3 years)\n\nWhich stream did you take in +2?";
    }

    // Study tips
    if (msg.includes('how to study') || msg.includes('tips') || msg.includes('improve')) {
      return "📖 Here are proven study strategies:\n\n1. ⏰ Study in 25-min focused blocks (Pomodoro)\n2. 📝 Make your own notes\n3. 🔁 Revise within 24 hours\n4. 🧘 Take breaks, sleep well\n5. 📱 Minimize distractions\n\nConsistency > Long hours! Which subject needs help?";
    }

    // Books/resources
    if (msg.includes('book') || msg.includes('resource') || msg.includes('material')) {
      return "📚 I can recommend resources! Which subject/exam are you preparing for?\n\n• JEE: HC Verma, RD Sharma\n• NEET: NCERT, Trueman's Biology\n• Boards: NCERT + Exemplars\n\nLet me know your specific need!";
    }

    // General motivation
    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      return "👋 Hello! Great to see you taking charge of your future! I'm here to help you with:\n\n• Course selection\n• Exam preparation\n• Study planning\n• Career guidance\n• Motivation & tips\n\nWhat would you like to explore today?";
    }

    // Default helpful response
    return "🤔 That's a great question! I'm here to help you with career guidance, course selection, exam prep, and study planning.\n\nCould you tell me more about:\n• Your current education level (10th/12th/college)?\n• What subject/course you're interested in?\n• Any specific doubts or concerns?\n\nThe more you share, the better I can guide you!";
  }
}

// ============ TIMETABLE GENERATOR ============
class TimetableGenerator {
  generateTimetable(studyHours, examDate, weakSubjects, strongSubjects) {
    // Sample timetable generation logic
    const slots = [];
    const subjects = [...weakSubjects, ...strongSubjects];
    const hoursPerSubject = Math.floor(studyHours / subjects.length);

    let startTime = 6; // 6 AM

    subjects.forEach((subject, index) => {
      const isWeak = weakSubjects.includes(subject);
      slots.push({
        time: `${startTime}:00 - ${startTime + hoursPerSubject}:00`,
        subject: subject,
        type: isWeak ? 'Focus' : 'Practice',
        priority: isWeak ? 'High' : 'Medium'
      });
      startTime += hoursPerSubject;
    });

    return {
      daily: slots,
      weekly: this.generateWeeklyPlan(subjects),
      monthly: this.generateMonthlyGoals(subjects, examDate)
    };
  }

  generateWeeklyPlan(subjects) {
    return [
      'Monday-Friday: Focus on weak subjects',
      'Saturday: Practice tests and revision',
      'Sunday: Rest + Light review of strong subjects'
    ];
  }

  generateMonthlyGoals(subjects, examDate) {
    const monthsLeft = Math.ceil((new Date(examDate) - new Date()) / (30 * 24 * 60 * 60 * 1000));
    return [
      `Month 1-${Math.floor(monthsLeft / 2)}: Complete syllabus`,
      `Month ${Math.floor(monthsLeft / 2) + 1}-${monthsLeft - 1}: Intensive revision`,
      `Last Month: Mock tests daily`
    ];
  }
}

// ============ NAVIGATION EVENT HANDLERS (using global instance) ============
// These will be wired up after DOMContentLoaded

// ============ TIMETABLE GENERATOR HANDLER ============
document.getElementById('generate-timetable').addEventListener('click', function () {
  const studyHours = parseInt(document.getElementById('study-hours').value);
  const examDate = document.getElementById('exam-date').value;
  const wakeTime = document.getElementById('wake-time').value;
  const subjectsSelect = document.getElementById('subjects');
  const selectedSubjects = Array.from(subjectsSelect.selectedOptions).map(opt => opt.value);

  if (selectedSubjects.length === 0) {
    alert('⚠️ Please select at least one subject!');
    return;
  }

  if (!examDate) {
    alert('⚠️ Please select your target exam date!');
    return;
  }

  // Generate timetable
  const timetable = generateSmartTimetable(studyHours, wakeTime, selectedSubjects, examDate);

  // Display timetable
  displayTimetable(timetable);

  // Hide form, show results
  document.getElementById('timetable-form').classList.add('hidden');
  document.getElementById('timetable-result').classList.remove('hidden');
});

function generateSmartTimetable(hours, wakeTime, subjects, examDate) {
  const slots = [];
  const [wakeHour, wakeMinute] = wakeTime.split(':').map(Number);

  // Calculate hours per subject
  const hoursPerSubject = Math.floor(hours / subjects.length);
  const extraHours = hours % subjects.length;

  let currentHour = wakeHour;
  let currentMinute = wakeMinute;

  subjects.forEach((subject, index) => {
    let subjectHours = hoursPerSubject;
    // Give extra time to first subjects (usually weaker ones)
    if (index < extraHours) subjectHours++;

    const endHour = currentHour + subjectHours;
    const endMinute = currentMinute;

    slots.push({
      time: `${formatTime(currentHour, currentMinute)} - ${formatTime(endHour, endMinute)}`,
      subject: subject,
      duration: `${subjectHours} hour${subjectHours > 1 ? 's' : ''}`,
      priority: index < Math.ceil(subjects.length / 2) ? 'High' : 'Medium'
    });

    currentHour = endHour;

    // Add break after every 2 hours
    if (subjectHours >= 2 && index < subjects.length - 1) {
      slots.push({
        time: `${formatTime(currentHour, currentMinute)} - ${formatTime(currentHour, currentMinute + 15)}`,
        subject: 'Break',
        duration: '15 minutes',
        priority: 'Break',
        isBreak: true
      });
      currentMinute += 15;
      if (currentMinute >= 60) {
        currentHour += Math.floor(currentMinute / 60);
        currentMinute = currentMinute % 60;
      }
    }
  });

  return slots;
}

function formatTime(hour, minute) {
  const period = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
  return `${displayHour}:${minute.toString().padStart(2, '0')} ${period}`;
}

function displayTimetable(slots) {
  const gridContainer = document.getElementById('timetable-grid');
  gridContainer.innerHTML = '';

  slots.forEach(slot => {
    const slotDiv = document.createElement('div');
    slotDiv.className = 'timetable-slot';

    if (slot.isBreak) {
      slotDiv.style.borderLeftColor = 'var(--color-secondary)';
      slotDiv.style.background = 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05))';
    } else if (slot.priority === 'High') {
      slotDiv.style.borderLeftColor = 'var(--color-error)';
    }

    slotDiv.innerHTML = `
      <div class="slot-time">${slot.time}</div>
      <div class="slot-subject">${slot.isBreak ? '☕ ' : '📚 '}${slot.subject}</div>
      <div style="font-size: 0.85rem; color: var(--color-text-light); margin-top: 0.25rem;">
        ${slot.duration} ${slot.priority !== 'Break' ? '• ' + slot.priority + ' Priority' : ''}
      </div>
    `;

    gridContainer.appendChild(slotDiv);
  });
}

// ============ GLOBAL INSTANCES ============
let navigationInstance;
let chatbotInstance;
let timetableGenInstance;
let authSystem;

// ============ INITIALIZE APPLICATION ============
document.addEventListener('DOMContentLoaded', () => {
  // Initialize auth system (handles splash/login/main app)
  authSystem = new AuthSystem();

  // Initialize navigation system
  navigationInstance = new NavigationSystem();

  // Initialize AI chatbot
  chatbotInstance = new AIChatbot();

  // Initialize timetable generator
  timetableGenInstance = new TimetableGenerator();

  // Wire up bottom nav for new screens
  document.getElementById('profile-nav').addEventListener('click', () => {
    navigationInstance.navigateTo('profile-screen');
  });

  document.getElementById('roadmap-nav').addEventListener('click', () => {
    navigationInstance.navigateTo('roadmap-screen');
  });

  console.log('🚀 NAVIX initialized successfully!');
  console.log('Navigate your future with confidence! 🧭');
});

// ============ UG SYSTEM ============
let currentUGDepartment = null;
let currentUGDepartmentName = '';

// Navigate to UG Dashboard
function navigateToUGDashboard(deptId, deptName) {
  currentUGDepartment = deptId;
  currentUGDepartmentName = deptName;

  // Update dashboard header
  document.getElementById('ug-dashboard-title').textContent = deptName;
  document.getElementById('ug-dashboard-header').innerHTML = `🎓 ${deptName}`;
  document.getElementById('ug-dashboard-subtitle').textContent = 'Access all your study materials and opportunities';

  // Load initial content
  loadUGWorkshops(deptId);



  // Navigate to dashboard
  nav.navigateTo('ug-dashboard');
}

// Switch UG Dashboard Tabs
function switchUGTab(tabName) {
  // Remove active class from all tabs and content
  document.querySelectorAll('.ug-tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.ug-tab-content').forEach(content => content.classList.add('hidden'));

  // Activate selected tab
  event.target.classList.add('active');
  document.getElementById(`ug-tab-${tabName}`).classList.remove('hidden');

  // Load content based on tab
  switch (tabName) {
    case 'workshops':
      loadUGWorkshops(currentUGDepartment);
      break;
    case 'internships':
      loadUGInternships(currentUGDepartment);
      break;
    case 'projects':
      loadUGProjects(currentUGDepartment);
      break;
    case 'papers':
      loadUGSemesters(currentUGDepartment);
      break;
  }
}

// Load Workshops
function loadUGWorkshops(deptId) {
  const workshops = getWorkshopsForDepartment(deptId);
  const container = document.getElementById('workshops-container');

  if (workshops.length === 0) {
    container.innerHTML = '<p class="subtitle">No workshops available for this department yet.</p>';
    return;
  }

  container.innerHTML = workshops.map(ws => `
    <div class="workshop-card">
      <div class="workshop-header">
        <h4 class="workshop-title">${ws.title}</h4>
        <span class="mode-badge mode-${ws.mode}">${ws.mode === 'online' ? '💻 Online' : '🏢 Offline'}</span>
      </div>
      <div class="workshop-skills">
        ${ws.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      <div class="workshop-meta">
        <span>⏱️ ${ws.duration}</span>
        <span>📊 ${ws.level}</span>
      </div>
      <p class="workshop-description">${ws.description}</p>
      <button class="btn btn-primary btn-sm" onclick="viewWorkshopDetails('${ws.id}')">
        View Details
      </button>
    </div>
  `).join('');
}

// Load Internships
function loadUGInternships(deptId) {
  const internships = getInternshipsForDepartment(deptId);
  const container = document.getElementById('internships-container');

  if (internships.length === 0) {
    container.innerHTML = '<p class="subtitle">No internships available for this department yet.</p>';
    return;
  }

  container.innerHTML = internships.map(int => `
    <div class="internship-card">
      <h4 class="internship-role">${int.role}</h4>
      <p class="internship-company">🏢 ${int.company}</p>
      <div class="workshop-skills">
        ${int.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
      <div class="workshop-meta">
        <span>⏱️ ${int.duration}</span>
      </div>
      <p class="workshop-description">${int.description}</p>
      <button class="btn btn-primary btn-sm" onclick="viewInternshipJD('${int.id}')">
        View Sample JD
      </button>
    </div>
  `).join('');
}

// Load Demo Projects
function loadUGProjects(deptId) {
  const projects = getProjectsForDepartment(deptId);
  const container = document.getElementById('projects-container');

  if (projects.length === 0) {
    container.innerHTML = '<p class="subtitle">No demo projects available for this department yet.</p>';
    return;
  }

  container.innerHTML = projects.map(proj => `
    <div class="project-card">
      <div class="project-thumbnail">💻</div>
      <div class="project-content">
        <span class="difficulty-badge diff-${proj.difficulty.toLowerCase()}">${proj.difficulty}</span>
        <h4 class="project-title">${proj.title}</h4>
        <p class="project-description">${proj.description}</p>
        <div class="tech-stack">
          ${proj.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button class="btn btn-secondary btn-sm" onclick="window.open('${proj.videoUrl}', '_blank')">
            📹 Demo Video
          </button>
          <button class="btn btn-ghost btn-sm" onclick="window.open('${proj.githubUrl}', '_blank')">
            💻 View Code
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Load Semesters for Model Papers
function loadUGSemesters(deptId) {
  const deptData = getDepartmentData(deptId);
  const container = document.getElementById('semester-grid');

  if (!deptData) {
    container.innerHTML = '<p class="subtitle">Department data not found.</p>';
    return;
  }

  const semesters = deptData.semesters;
  container.innerHTML = '';

  for (let i = 1; i <= semesters; i++) {
    const semCard = document.createElement('div');
    semCard.className = 'semester-card';
    semCard.innerHTML = `
      <div class="sem-number">Sem ${i}</div>
      <div class="sem-label">Semester ${i}</div>
    `;
    semCard.onclick = () => loadSemesterSubjects(deptId, i);
    container.appendChild(semCard);
  }

  // Hide subjects container initially
  document.getElementById('subjects-container').classList.add('hidden');
}

// Load Subjects for a Semester
function loadSemesterSubjects(deptId, semester) {
  const subjects = getSubjectsForSemester(deptId, semester);
  const container = document.getElementById('subjects-list');
  const title = document.getElementById('semester-title');

  title.textContent = `Semester ${semester} Subjects`;

  if (subjects.length === 0) {
    container.innerHTML = '<p class="subtitle">No subjects found for this semester.</p>';
  } else {
    container.innerHTML = subjects.map(subject => `
      <div class="subject-card">
        <div class="subject-header">
          <h4 class="subject-name">${subject.name}</h4>
          <p class="subject-code">${subject.code}</p>
        </div>
        <div class="subject-badges">
          <span class="paper-badge badge-model">📄 Model Paper (NAVIX)</span>
          <span class="paper-badge badge-reference">📋 Reference Paper (Sample)</span>
        </div>
        <div class="subject-actions">
          <button class="btn btn-primary" onclick="viewModelPaper('${deptId}', ${semester}, '${subject.id}')">
            View Model Paper
          </button>
          <button class="btn btn-secondary" onclick="viewReferencePaper('${deptId}', ${semester}, '${subject.id}')">
            View Reference
          </button>
        </div>
      </div>
    `).join('');
  }

  // Show subjects container
  document.getElementById('subjects-container').classList.remove('hidden');
  document.getElementById('semester-grid').style.display = 'none';
}

// Back to Semesters
function backToSemesters() {
  document.getElementById('subjects-container').classList.add('hidden');
  document.getElementById('semester-grid').style.display = 'grid';
}

// View Model Paper
function viewModelPaper(deptId, semester, subjectId) {
  // Find paper data
  const paperId = `${deptId}-${subjectId}`;
  const paper = UGData.modelPapers[paperId];

  if (!paper) {
    alert('Model paper not available yet. Check back soon!');
    return;
  }

  // Create paper viewer HTML
  const paperHTML = `
    <div class="screen active" id="paper-viewer-screen" style="display: block;">
      <div class="top-nav">
        <button class="btn btn-icon btn-ghost" onclick="closePaperViewer()">⬅️</button>
        <div class="nav-title">Model Paper</div>
        <button class="btn btn-icon btn-ghost" onclick="nav.goHome()">🏠</button>
      </div>

      <div class="disclaimer-banner">
        ⚠️ <strong>Note:</strong> This is a sample model paper generated by NAVIX for practice purposes. It is not an official university paper.
      </div>

      <div class="paper-viewer">
        <div class="paper-header">
          <h2 class="paper-title">${paper.subject}</h2>
          <div class="paper-meta">
            <span>📚 ${paper.code}</span>
            <span>📅 Semester ${semester}</span>
            <span>⏱️ ${paper.duration}</span>
            <span>📊 ${paper.totalMarks} Marks</span>
          </div>
        </div>

        <div class="paper-section">
          <div class="section-header">
            <h3>${paper.sectionA.title}</h3>
            <p style="margin: 0; color: #9ca3af;">${paper.sectionA.marks} Marks</p>
          </div>
          ${paper.sectionA.questions.map((q, idx) => `
            <div class="paper-question">
              <div class="question-number">Q${idx + 1}.</div>
              <div class="question-text">${q.q}</div>
              <div class="question-marks">[${q.marks} marks]</div>
            </div>
          `).join('')}
        </div>

        <div class="paper-section">
          <div class="section-header">
            <h3>${paper.sectionB.title}</h3>
            <p style="margin: 0; color: #9ca3af;">${paper.sectionB.marks} Marks</p>
          </div>
          ${paper.sectionB.questions.map((q, idx) => `
            <div class="paper-question">
              <div class="question-number">Q${idx + 1}.</div>
              <div class="question-text">${q.q}</div>
              <div class="question-marks">[${q.marks} marks]</div>
            </div>
          `).join('')}
        </div>

        <div class="paper-actions">
          <button class="btn btn-primary" onclick="savePaper('${paperId}')">
            💾 Save to My Resources
          </button>
          <button class="btn btn-secondary" onclick="markSolved('${paperId}')">
            ✅ Mark as Solved
          </button>
        </div>
      </div>
    </div>
  `;

  // Hide current screen and show paper viewer
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = paperHTML;
  document.querySelector('.app-container').appendChild(tempDiv.firstElementChild);
}

// Close Paper Viewer
function closePaperViewer() {
  const viewerScreen = document.getElementById('paper-viewer-screen');
  if (viewerScreen) {
    viewerScreen.remove();
  }
  document.getElementById('ug-dashboard').classList.add('active');
}

// View Reference Paper (same as model for now)
function viewReferencePaper(deptId, semester, subjectId) {
  viewModelPaper(deptId, semester, subjectId);
}

// Save Paper
function savePaper(paperId) {
  const userData = JSON.parse(localStorage.getItem('navix_user')) || {};
  if (!userData.savedPapers) userData.savedPapers = [];

  if (!userData.savedPapers.includes(paperId)) {
    userData.savedPapers.push(paperId);
    localStorage.setItem('navix_user', JSON.stringify(userData));
    alert('✅ Paper saved to your resources!');
  } else {
    alert('ℹ️ This paper is already saved.');
  }
}

// Mark Solved
function markSolved(paperId) {
  const userData = JSON.parse(localStorage.getItem('navix_user')) || {};
  if (!userData.solvedPapers) userData.solvedPapers = [];

  if (!userData.solvedPapers.includes(paperId)) {
    userData.solvedPapers.push(paperId);
    authSystem.addCoins(50); // Reward for completing a paper
    localStorage.setItem('navix_user', JSON.stringify(userData));
    alert('🎉 Great job! Paper marked as solved. +50 coins!');
  } else {
    alert('ℹ️ You\'ve already solved this paper.');
  }
}

// View Workshop Details (placeholder)
function viewWorkshopDetails(workshopId) {
  const workshop = UGData.workshops.find(w => w.id === workshopId);
  if (!workshop) return;

  alert(`📚 ${workshop.title}\n\n${workshop.description}\n\nPrerequisites:\n${workshop.prerequisites.join(', ')}\n\nWhat you'll learn:\n${workshop.outcomes.join('\n')}`);
}

// View Internship JD (placeholder)
function viewInternshipJD(internshipId) {
  const internship = UGData.internships.find(i => i.id === internshipId);
  if (!internship) return;

  const jd = internship.jd;
  alert(`💼 ${internship.role}\n${internship.company}\n\nResponsibilities:\n${jd.responsibilities.map(r => '• ' + r).join('\n')}\n\nRequirements:\n${jd.requirements.map(r => '• ' + r).join('\n')}\n\nPreferred:\n${jd.preferred.map(p => '• ' + p).join('\n')}`);
}

// ============ SAMPLE DATA (For future expansion) ============
const courseData = {
  'btech': {
    name: 'B.Tech',
    icon: '🏗️',
    duration: '4 years',
    eligibility: '10+2 with PCM',
    entranceExams: ['JEE Main', 'JEE Advanced', 'BITSAT'],
    averageSalary: '₹6-25 LPA',
    topColleges: ['IIT Delhi', 'IIT Bombay', 'NIT Trichy', 'BITS Pilani']
  },
  'mbbs': {
    name: 'MBBS',
    icon: '🩺',
    duration: '5.5 years',
    eligibility: '10+2 with BiPC',
    entranceExams: ['NEET'],
    averageSalary: '₹8-20 LPA',
    topColleges: ['AIIMS Delhi', 'CMC Vellore', 'JIPMER', 'KGMC']
  }
  // Add more courses as needed
};

// ============ UTILITY FUNCTIONS ============
function smoothScroll(element) {
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function showToast(message) {
  // Simple toast notification (can be enhanced)
  console.log('📢 ' + message);
}
