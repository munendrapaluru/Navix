// ==========================================
// DEPARTMENT HUB - Complete UI Management
// Handles Department Hub with tabs, accordion, and all features
// ==========================================

class DepartmentHub {
    constructor() {
        this.currentDepartment = null;
        this.currentTab = 'overview';
        this.expandedSubjects = new Set();
        this.init();
    }

    init() {
        // Load topic progress from localStorage
        if (typeof loadTopicProgress === 'function') {
            loadTopicProgress();
        }
    }

    // Navigate to Department Hub
    open(deptId, deptName) {
        this.currentDepartment = deptId;
        this.currentTab = 'overview';
        this.expandedSubjects.clear();
        this.renderHub(deptName);
    }

    // Render the entire Department Hub
    renderHub(deptName) {
        const deptData = UGData.departments[this.currentDepartment];
        if (!deptData) {
            console.error('Department not found:', this.currentDepartment);
            return;
        }

        const hubHTML = `
      <div id="dept-hub-screen" class="screen active">
        <div class="top-nav">
          <button class="btn btn-icon btn-ghost" onclick="departmentHub.close()">⬅️</button>
          <div class="nav-title">${deptName}</div>
          <button class="btn btn-icon btn-ghost" data-action="home">🏠</button>
        </div>

        <!-- Tab Navigation -->
        <div class="dept-tabs">
          <div class="dept-tab ${this.currentTab === 'overview' ? 'active' : ''}" onclick="departmentHub.switchTab('overview')">
            <span class="tab-icon">📋</span>
            <span class="tab-label">Overview</span>
          </div>
          <div class="dept-tab ${this.currentTab === 'semesters' ? 'active' : ''}" onclick="departmentHub.switchTab('semesters')">
            <span class="tab-icon">📅</span>
            <span class="tab-label">Semesters</span>
          </div>
          <div class="dept-tab ${this.currentTab === 'subjects' ? 'active' : ''}" onclick="departmentHub.switchTab('subjects')">
            <span class="tab-icon">📚</span>
            <span class="tab-label">Subject & Topics</span>
          </div>
          <div class="dept-tab ${this.currentTab === 'resources' ? 'active' : ''}" onclick="departmentHub.switchTab('resources')">
            <span class="tab-icon">📖</span>
            <span class="tab-label">Resources</span>
          </div>
          <div class="dept-tab ${this.currentTab === 'projects' ? 'active' : ''}" onclick="departmentHub.switchTab('projects')">
            <span class="tab-icon">🚀</span>
            <span class="tab-label">Projects</span>
          </div>
        </div>

        <!-- Tab Content -->
        <div id="dept-content" class="dept-content">
          ${this.renderTabContent(deptData, deptName)}
        </div>
      </div>
    `;

        // Remove any existing hub screen
        const existing = document.getElementById('dept-hub-screen');
        if (existing) existing.remove();

        // Add to main app
        const mainApp = document.getElementById('main-app');
        mainApp.insertAdjacentHTML('beforeend', hubHTML);

        // Hide all other screens
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById('dept-hub-screen').classList.add('active');
    }

    // Switch between tabs
    switchTab(tabName) {
        this.currentTab = tabName;

        // Update tab active state
        document.querySelectorAll('.dept-tab').forEach(tab => tab.classList.remove('active'));
        event.target.closest('.dept-tab').classList.add('active');

        // Update content
        const deptData = UGData.departments[this.currentDepartment];
        const deptName = deptData.name;
        document.getElementById('dept-content').innerHTML = this.renderTabContent(deptData, deptName);
    }

    // Render content based on active tab
    renderTabContent(deptData, deptName) {
        switch (this.currentTab) {
            case 'overview':
                return this.renderOverview(deptData, deptName);
            case 'semesters':
                return this.renderSemesters(deptData);
            case 'subjects':
                return this.renderSubjectsAndTopics(deptData);
            case 'resources':
                return this.renderDeepResources(deptData);
            case 'projects':
                return this.renderProjects(deptData);
            default:
                return '<p>Content not available</p>';
        }
    }

    // OVERVIEW TAB
    renderOverview(deptData, deptName) {
        const roadmap = RoadmapData[this.currentDepartment];
        const currentPhase = roadmap ? roadmap.phases.find(p => p.status === 'current') || roadmap.phases[0] : null;

        return `
      <div class="section-card">
        <h2>${deptData.icon} ${deptName}</h2>
        <p class="subtitle">Comprehensive guide for your ${deptName} journey</p>
      </div>

      <div class="section-card">
        <h3 class="section-title"><span class="icon">🎯</span> About This Department</h3>
        <p>This is a ${deptData.semesters}-semester program covering fundamental to advanced concepts in ${deptName}.</p>
        <p><strong>Key Skills:</strong> Programming, Problem Solving, Technical Knowledge, Project Development</p>
        <p><strong>Career Paths:</strong> Software Engineer, Technical Specialist, Researcher, Consultant</p>
      </div>

      ${currentPhase ? `
        <div class="section-card">
          <h3 class="section-title"><span class="icon">🗺️</span> Current Phase: ${currentPhase.name}</h3>
          <p>${currentPhase.duration}</p>
          <ul>
            ${currentPhase.focus.map(f => `<li>${f}</li>`).join('')}
          </ul>
          <button class="btn btn-primary" onclick="departmentHub.switchTab('semesters')" style="margin-top: 1rem;">
            View Full Roadmap →
          </button>
        </div>
      ` : ''}

      <div class="section-card">
        <h3 class="section-title"><span class="icon">📊</span> Quick Stats</h3>
        <div class="stats-grid">
          <div class="stat-box">
            <div class="stat-number">${deptData.semesters}</div>
            <div class="stat-label">Semesters</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">${Object.keys(deptData.subjectsBySemester).reduce((sum, sem) => sum + deptData.subjectsBySemester[sem].length, 0)}</div>
            <div class="stat-label">Subjects</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">50+</div>
            <div class="stat-label">Topics</div>
          </div>
        </div>
      </div>
    `;
    }

    // SEMESTERS TAB
    renderSemesters(deptData) {
        let html = `
      <div class="section-card">
        <h2>📅 Semester Planner</h2>
        <p class="subtitle">Complete ${deptData.semesters}-semester curriculum overview</p>
      </div>
    `;

        for (let sem = 1; sem <= deptData.semesters; sem++) {
            const subjects = deptData.subjectsBySemester[sem] || [];

            html += `
        <div class="semester-card">
          <div class="semester-header">
            <h3>Semester ${sem}</h3>
            <span class="subject-count">${subjects.length} Subjects</span>
          </div>
          <div class="subject-list-simple">
            ${subjects.map(subj => `
              <div class="subject-item-simple">
                <span class="subject-name">${subj.name}</span>
                <span class="subject-code">${subj.code}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
        }

        return html;
    }

    // SUBJECTS & TOPICS TAB (ACCORDION)
    renderSubjectsAndTopics(deptData) {
        let html = `
      <div class="section-card">
        <h2>📚 Subjects & Topics</h2>
        <p class="subtitle">Tap any subject to view its topics</p>
      </div>
    `;

        // Group by semester
        for (let sem = 1; sem <= deptData.semesters; sem++) {
            const subjects = deptData.subjectsBySemester[sem] || [];
            if (subjects.length === 0) continue;

            html += `<div class="semester-group">
        <h3 class="semester-heading">Semester ${sem}</h3>
      `;

            subjects.forEach(subject => {
                const isExpanded = this.expandedSubjects.has(subject.id);
                const topics = getTopicsForSubject(subject.id);
                const progress = calculateSubjectProgress(subject.id);
                const coins = calculateSubjectCoins(subject.id);

                html += `
          <div class="subject-accordion ${isExpanded ? 'expanded' : ''}">
            <div class="subject-header" onclick="departmentHub.toggleSubject('${subject.id}')">
              <div class="subject-info">
                <div class="subject-name">${subject.name}</div>
                <div class="subject-meta">
                  <span class="sem-tag">Sem ${sem}</span>
                  <span class="progress-info">${progress}% • 🪙 ${coins}</span>
                </div>
              </div>
              <div class="subject-arrow">${isExpanded ? '▼' : '▶'}</div>
            </div>
            
            ${isExpanded ? `
              <div class="topic-list">
                ${topics.length > 0 ? topics.map(topic => `
                  <div class="topic-item">
                    <div class="topic-info">
                      <div class="topic-name">${topic.name}</div>
                      <div class="topic-status status-${topic.status.replace('_', '-')}">${this.formatStatus(topic.status)}</div>
                    </div>
                    <div class="topic-actions">
                      <button class="btn-small btn-quiz" onclick="departmentHub.startTopicQuiz('${subject.id}', '${topic.id}')">
                        Start Quiz
                      </button>
                    </div>
                  </div>
                `).join('') : '<p class="no-topics">Topic details coming soon</p>'}
              </div>
            ` : ''}
          </div>
        `;
            });

            html += `</div>`;
        }

        return html;
    }

    // Toggle subject expansion
    toggleSubject(subjectId) {
        if (this.expandedSubjects.has(subjectId)) {
            this.expandedSubjects.delete(subjectId);
        } else {
            // For multi-expand, just add. For single-expand, clear first:
            // this.expandedSubjects.clear(); // Uncomment for single-expand
            this.expandedSubjects.add(subjectId);
        }

        // Re-render subjects tab
        const deptData = UGData.departments[this.currentDepartment];
        document.getElementById('dept-content').innerHTML = this.renderSubjectsAndTopics(deptData);
    }

    // Format status for display
    formatStatus(status) {
        const statusMap = {
            'not_started': 'Not Started',
            'in_progress': 'In Progress',
            'completed': 'Completed'
        };
        return statusMap[status] || status;
    }

    // Start quiz from topic
    startTopicQuiz(subjectId, topicId) {
        alert(`Starting quiz for topic: ${topicId}\nThis will integrate with the quiz system!`);
        // TODO: Integrate with existing quiz system
    }

    // DEEP RESOURCES TAB
    renderDeepResources(deptData) {
        let html = `
      <div class="section-card">
        <h2>📖 Deep Resources</h2>
        <p class="subtitle">Books, videos, model papers, and lab help</p>
      </div>
    `;

        // Group subjects for resource selection
        html += `<div class="resource-select">
      <p><strong>Select a subject to view resources:</strong></p>
    </div>`;

        for (let sem = 1; sem <= Math.min(deptData.semesters, 4); sem++) {
            const subjects = deptData.subjectsBySemester[sem] || [];

            if (subjects.length > 0) {
                html += `<div class="semester-group">
          <h4>Semester ${sem}</h4>
          <div class="subject-chips">
            ${subjects.map(subj => `
              <button class="chip-btn" onclick="departmentHub.showResourcesFor('${subj.id}', '${subj.name}')">
                ${subj.name}
              </button>
            `).join('')}
          </div>
        </div>`;
            }
        }

        return html;
    }

    // Show resources for a specific subject
    showResourcesFor(subjectId, subjectName) {
        const resources = getDeepResources(subjectId);

        if (!resources) {
            alert(`Resources for ${subjectName} coming soon!`);
            return;
        }

        let html = `
      <div class="section-card">
        <button class="btn btn-ghost btn-sm" onclick="departmentHub.switchTab('resources')">← Back to Subjects</button>
        <h2>📖 ${subjectName} - Resources</h2>
      </div>

      <!-- Books Section -->
      <div class="section-card">
        <h3 class="section-title"><span class="icon">📚</span> Recommended Books</h3>
        <div class="books-list">
          ${resources.books.map(book => `
            <div class="book-card">
              <div class="book-title">${book.title}</div>
              <div class="book-author">by ${book.author}</div>
              <div class="book-difficulty">${book.difficulty}</div>
              <div class="book-why"><strong>Why?</strong> ${book.why}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Videos Section -->
      <div class="section-card">
        <h3 class="section-title"><span class="icon">🎥</span> Video Playlists</h3>
        <div class="videos-list">
          ${resources.videos.map(video => `
            <div class="video-card">
              <div class="video-title">${video.title}</div>
              <div class="video-provider">${video.provider}</div>
              <div class="video-duration">${video.duration}</div>
              <div class="video-why">${video.why}</div>
              <a href="${video.url}" target="_blank" class="btn btn-sm btn-primary" style="margin-top: 0.5rem;">Watch Playlist →</a>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Lab Help Section -->
      ${resources.labHelp ? `
        <div class="section-card">
          <h3 class="section-title"><span class="icon">🧪</span> Lab & Viva Help</h3>
          
          <h4>Experiments:</h4>
          <ul>
            ${resources.labHelp.experiments.map(exp => `<li>${exp}</li>`).join('')}
          </ul>

          <h4 style="margin-top: 1rem;">Common Viva Questions:</h4>
          <ul>
            ${resources.labHelp.vivaQuestions.map(q => `<li>${q}</li>`).join('')}
          </ul>

          <h4 style="margin-top: 1rem;">Tips:</h4>
          <ul>
            ${resources.labHelp.tips.map(tip => `<li>${tip}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Model Papers Section -->
      <div class="section-card">
        <h3 class="section-title"><span class="icon">📄</span> Model & Reference Papers</h3>
        <p class="note">⚠️ These are practice papers, not official university papers.</p>
        <button class="btn btn-secondary" onclick="departmentHub.showModelPaper('${subjectId}')">
          View Model Paper
        </button>
        <button class="btn btn-secondary" onclick="departmentHub.showReferencePaper('${subjectId}')" style="margin-left: 0.5rem;">
          View Reference Paper
        </button>
      </div>
    `;

        document.getElementById('dept-content').innerHTML = html;
    }

    // Show model paper
    showModelPaper(subjectId) {
        const paper = UGData.modelPapers[`${this.currentDepartment}-${subjectId}`];
        if (!paper) {
            alert('Model paper coming soon!');
            return;
        }

        let html = `
      <div class="section-card">
        <button class="btn btn-ghost btn-sm" onclick="departmentHub.switchTab('resources')">← Back</button>
        <h2>📄 Model Paper - ${paper.subject}</h2>
        <div class="paper-meta">
          <span>Code: ${paper.code}</span> | 
          <span>Marks: ${paper.totalMarks}</span> | 
          <span>Duration: ${paper.duration}</span>
        </div>
      </div>

      <div class="section-card">
        <h3>${paper.sectionA.title}</h3>
        <p><strong>Marks: ${paper.sectionA.marks}</strong></p>
        ${paper.sectionA.questions.map((q, i) => `
          <div class="question-item">
            <strong>${i + 1}. ${q.q}</strong> (${q.marks} marks)
          </div>
        `).join('')}
      </div>

      <div class="section-card">
        <h3>${paper.sectionB.title}</h3>
        <p><strong>Marks: ${paper.sectionB.marks}</strong></p>
        ${paper.sectionB.questions.map((q, i) => `
          <div class="question-item">
            <strong>${i + 1}. ${q.q}</strong> (${q.marks} marks)
          </div>
        `).join('')}
      </div>
    `;

        document.getElementById('dept-content').innerHTML = html;
    }

    // Show reference paper (similar to model paper)
    showReferencePaper(subjectId) {
        alert('Reference paper viewer coming soon!');
    }

    // PROJECTS & INTERNSHIPS TAB
    renderProjects() {
        const workshops = getWorkshopsForDepartment(this.currentDepartment);
        const internships = getInternshipsForDepartment(this.currentDepartment);
        const projects = getProjectsForDepartment(this.currentDepartment);

        return `
      <div class="section-card">
        <h2>🚀 Projects & Internships</h2>
        <p class="subtitle">Practical learning opportunities</p>
      </div>

      <!-- Workshops -->
      <div class="section-card">
        <h3 class="section-title"><span class="icon">🎓</span> Workshops</h3>
        <div class="workshops-grid">
          ${workshops.map(ws => `
            <div class="workshop-card">
              <h4>${ws.title}</h4>
              <div class="workshop-skills">
                ${ws.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
              <div class="workshop-meta">
                <span>${ws.mode}</span> • <span>${ws.duration}</span> • <span>${ws.level}</span>
              </div>
              <p>${ws.description}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Internships -->
      <div class="section-card">
        <h3 class="section-title"><span class="icon">💼</span> Internships</h3>
        <div class="internships-grid">
          ${internships.map(int => `
            <div class="internship-card">
              <h4>${int.role}</h4>
              <p class="company">${int.company}</p>
              <div class="int-skills">
                ${int.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
              </div>
              <p>${int.description}</p>
              <button class="btn btn-sm btn-secondary" onclick="departmentHub.showInternshipJD('${int.id}')">
                View JD →
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Demo Projects -->
      <div class="section-card">
        <h3 class="section-title"><span class="icon">🎨</span> Demo Projects</h3>
        <div class="projects-grid">
          ${projects.map(proj => `
            <div class="project-card">
              <h4>${proj.title}</h4>
              <div class="project-tech">
                ${proj.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
              </div>
              <p>${proj.description}</p>
              <div class="project-difficulty">${proj.difficulty}</div>
              <a href="${proj.videoUrl}" target="_blank" class="btn btn-sm btn-primary" style="margin-top: 0.5rem;">
                Watch Demo →
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }

    // Show internship JD
    showInternshipJD(intId) {
        const internship = UGData.internships.find(i => i.id === intId);
        if (!internship || !internship.jd) {
            alert('JD details coming soon!');
            return;
        }

        let html = `
      <div class="section-card">
        <button class="btn btn-ghost btn-sm" onclick="departmentHub.switchTab('projects')">← Back</button>
        <h2>💼 ${internship.role}</h2>
        <p class="company-name">${internship.company}</p>
      </div>

      <div class="section-card">
        <h3>Responsibilities:</h3>
        <ul>
          ${internship.jd.responsibilities.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <div class="section-card">
        <h3>Requirements:</h3>
        <ul>
          ${internship.jd.requirements.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <div class="section-card">
        <h3>Preferred Skills:</h3>
        <ul>
          ${internship.jd.preferred.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    `;

        document.getElementById('dept-content').innerHTML = html;
    }

    // Close Department Hub
    close() {
        const hubScreen = document.getElementById('dept-hub-screen');
        if (hubScreen) hubScreen.remove();

        // Navigate back (implement proper navigation history)
        if (typeof navSystem !== 'undefined') {
            navSystem.goBack();
        }
    }
}

// Global instance
const departmentHub = new DepartmentHub();

// Global function called from onclick events
function navigateToUGDashboard(deptId, deptName) {
    departmentHub.open(deptId, deptName);
}
