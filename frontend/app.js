/* ==========================================================================
   UNISCOUT PORTAL - CORE APPLICATION SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. DATA MODELS & SEED DATA
  // ==========================================

  // Sample Upcoming Events
  const eventsCatalog = [
    { id: 1, title: "Tech Fest 2026", date: "April 15-16", monthDay: 15, month: 3, year: 2026, organizer: "Tech Council", type: "Tech", desc: "The ultimate annual engineering festival featuring robotics competitions, guest lectures, hackathons, and innovative project showcases.", attendees: 342, banner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600" },
    { id: 2, title: "Cultural Gala Night", date: "April 20", monthDay: 20, month: 3, year: 2026, organizer: "Student Council", type: "Cultural", desc: "A vibrant evening celebrating music, dance, theater, and fine arts from across multiple national cultures and students streams.", attendees: 512, banner: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600" },
    { id: 3, title: "Annual Spring Career Fair", date: "May 5", monthDay: 5, month: 4, year: 2026, organizer: "Placement Cell", type: "Career", desc: "Connect with over 45+ premier technology companies, financial institutions, and creative agencies offering internships and placements.", attendees: 288, banner: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600" },
    { id: 4, title: "Global Health Hackathon", date: "May 15", monthDay: 15, month: 4, year: 2026, organizer: "BioTech Club", type: "Tech", desc: "Collaborative 24-hour sprint developing hardware and software solutions tackling remote healthcare diagnostic availability.", attendees: 120, banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600" },
    { id: 5, title: "Photography Exhibition", date: "June 2", monthDay: 2, month: 5, year: 2026, organizer: "Shutterbugs Society", type: "Cultural", desc: "An aesthetic showcase of selected landscape, portrait, and documentary photographs captured by students around campus.", attendees: 84, banner: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=600" }
  ];

  // Announcements List
  const announcementsList = [
    { id: 1, title: "Scholarship Applications Open", date: "April 3, 2026", desc: "Applications for the academic year 2026 Merit Scholarships and Need-Based Financial Aids are now open under the ERP Portal. Deadline is April 30, 2026.", type: "Academic" },
    { id: 2, title: "Summer Internship Drive 2026", date: "April 1, 2026", desc: "The placement cell has partnered with key software developers to offer summer internship roles. Register on the career desk before April 10.", type: "Career" },
    { id: 3, title: "Library Wing Air Conditioning Maintenance", date: "March 30, 2026", desc: "The Library Wing B will experience temporary A/C outages on April 1st between 9 AM and 3 PM due to scheduled seasonal overhaul filters upgrades.", type: "Facility" },
    { id: 4, title: "Mid-Semester Examination Schedules", date: "March 28, 2026", desc: "Official datesheets for undergraduate and postgraduate mid-semester exams have been published on department noticeboards.", type: "Academic" }
  ];

  // Scholarships Available
  const scholarshipsCatalog = [
    { id: 'merit-scholarship', title: "Merit Academic Scholarship", description: "Awarded to high-achieving undergraduate students who maintain excellent academic standing and display leadership qualities.", eligibility: "Minimum GPA 3.70", amount: "₹2,50,000", minGpa: 3.7, deadline: "April 30, 2026" },
    { id: 'research-grant', title: "Undergraduate Research Fellowship", description: "Specifically created for senior students pursuing capstone thesis work or volunteering in campus research laboratories.", eligibility: "Minimum GPA 3.50", amount: "₹1,80,000", minGpa: 3.5, deadline: "May 15, 2026" },
    { id: 'financial-aid', title: "Need-Based Financial Assistance", description: "Created to support students facing sudden economic hurdles or requiring auxiliary assistance for educational materials.", eligibility: "Open to all active enrollments", amount: "Varies (₹50,000 - ₹2,00,000)", minGpa: 0.0, deadline: "Ongoing Rollout" }
  ];

  // Mock Students Directory (Fallback if backend API not running)
  const mockStudents = [
    { student_id: "US-2026-981", name: "Bhabana Kalita", email: "b.kalita@university.edu", major: "Computer Science", gpa: "8.00" },
    { student_id: "US-2026-982", name: "John Doe", email: "j.doe@university.edu", major: "Electrical Engineering", gpa: "3.42" },
    { student_id: "US-2026-983", name: "Alex Rivera", email: "a.rivera@university.edu", major: "Mechanical Engineering", gpa: "3.65" },
    { student_id: "US-2026-984", name: "Emily Watson", email: "e.watson@university.edu", major: "Information Technology", gpa: "3.91" },
    { student_id: "US-2026-985", name: "Michael Chang", email: "m.chang@university.edu", major: "Mathematics & Statistics", gpa: "3.72" }
  ];

  // Clubs Directory
  const clubsCatalog = [
    { name: "Robotics Club", alias: "RoboVanguard", desc: "Design, build, and program autonomous vehicles, drone meshes, and robot combatants for national inter-college showdowns.", members: 142, icon: "🤖" },
    { name: "Coding Association", alias: "ByteCoders", desc: "Organizing weekly code sprints, competitive algorithm reviews, research papers discussions, and open-source project accelerators.", members: 236, icon: "💻" },
    { name: "Music & Band Club", alias: "SonicVerse", desc: "Our campus sanctuary for acoustic singers, metal ensembles, and electronic composers. Access fully equipped jam rooms and sound mixers.", members: 98, icon: "🎵" },
    { name: "Shutterbugs Society", alias: "LensCrafters", desc: "Workshops focusing on digital lighting, portrait capture, drone shots, darkroom editing, and curation of annual exhibitions.", members: 84, icon: "📷" },
    { name: "Drama & Theater", alias: "Thespians", desc: "Stage acting, scriptwriting, lights orchestration, and sound design. Putting together two major plays and multiple street acts annually.", members: 72, icon: "🎭" },
    { name: "Literature & Debate", alias: "VerbalMesh", desc: "Where words spark ideas. Debating current global themes, organizing slam poetry events, and publishing the monthly campus chronicle.", members: 110, icon: "🖋️" }
  ];

  // Faculty Directory List
  const facultyCatalog = [
    { name: "Prof. Jennifer Williams", role: "Academic Advisor", dept: "Computer Science", email: "jennifer.w@university.edu", hours: "Mon, Wed 2-4 PM", room: "CS Building 302", avatar: "👩‍🏫" },
    { name: "Dr. Michael Chen", role: "Department Coordinator", dept: "Computer Science", email: "m.chen@university.edu", hours: "Tue, Thu 10-12 PM", room: "CS Building 108", avatar: "👨‍🏫" },
    { name: "Dr. Elizabeth Vance", role: "Quantum Mechanics Chair", dept: "Physics", email: "e.vance@university.edu", hours: "Wednesday 1-3 PM", room: "Science Lab 411", avatar: "👩‍🔬" },
    { name: "Prof. Arthur Pendelton", role: "Differential Equations Head", dept: "Mathematics", email: "a.pendelton@university.edu", hours: "Friday 9-11 AM", room: "Admin Wing B-2", avatar: "👨‍💼" },
    { name: "Dr. Sanjeev Nair", role: "Embedded Networks Advisor", dept: "Electrical Eng", email: "s.nair@university.edu", hours: "Mon, Thu 3-5 PM", room: "Electrical Lab 12", avatar: "👨‍💻" }
  ];

  // Concluded Reports Library
  const reportsCatalog = [
    { title: "Annual Winter Sports Meet Briefing", category: "Sports", date: "February 24, 2026", lead: "Sports Council Chair", file: "report_winter_sports_2026.pdf" },
    { title: "Science & Robotics Exhibition Review", category: "Academic", date: "March 12, 2026", lead: "Dean of Engineering", file: "robotics_exhibition_summary.pdf" },
    { title: "Global Leadership Workshop Summary", category: "Career", date: "January 18, 2026", lead: "Placement Development Lead", file: "leadership_summit_report.pdf" },
    { title: "Monsoon Theater Festival Outcomes", category: "Cultural", date: "December 05, 2025", lead: "President of Dramatic Arts", file: "monsoon_theater_2025.pdf" }
  ];

  // Default Avatar Options
  const avatarPresets = [
    "bhabana.jpg",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
  ];

  // ==========================================
  // 2. STATE MANAGEMENT & STATE SYNC
  // ==========================================
  
  // App State Model
  const state = {
    // Current Active Tab views
    activeView: 'dashboard',
    activeErpTab: 'scholarships',
    
    // Active User Object (Loaded from localStorage or defaults)
    user: {
      name: 'Bhabana Kalita',
      roll: 'US-2026-984',
      email: 'b.kalita@university.edu',
      major: 'B.Tech Computer Science',
      gpa: 8.00,
      avatar: 'bhabana.jpg'
    },
    
    // Dynamic lists (Persisted in localStorage)
    registeredEvents: new Set([1]), // Bhabana default registers for Tech Fest
    joinedClubs: new Set(["Robotics Club"]),
    complaints: [
      { id: 101, title: "Wi-Fi Connectivity Issues in Hostel Room 402", category: "IT", description: "Signal keeps dropping frequently making it impossible to join lectures.", date: "March 28, 2026", status: "In Progress" },
      { id: 102, title: "Library Air Conditioning wing B breakdown", category: "Facility", description: "The A/C unit in the library floor has stopped working, rendering reading rooms extremely stuffy.", date: "March 15, 2026", status: "Resolved" }
    ],
    
    // Dynamic lists (Retrieved from database)
    studentsList: [],
    
    // Noticeboard Active Calendar Month Tracker
    calendarDate: new Date(2026, 4, 1) // Default to May 2026 (Month is 0-indexed, so 4 = May)
  };

  // Sync state data from localStorage (Session Caching)
  function loadPersistedState() {
    const savedUser = localStorage.getItem('uscout_user');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        // Force migration from old Sarah Jenkins profile cache to Bhabana Kalita
        if (parsed.name === 'Sarah Jenkins' || !parsed.name || parsed.name.toLowerCase().includes('sarah')) {
          parsed.name = 'Bhabana Kalita';
          parsed.avatar = 'bhabana.jpg';
          parsed.email = 'b.kalita@university.edu';
          parsed.gpa = 8.00;
          parsed.major = 'B.Tech Computer Science';
          parsed.roll = 'US-2026-984';
          localStorage.setItem('uscout_user', JSON.stringify(parsed));
        }
        state.user = parsed;
      } catch (e) {
        console.error('Error parsing user session cache', e);
      }
    }

    const savedComplaints = localStorage.getItem('uscout_complaints');
    if (savedComplaints) state.complaints = JSON.parse(savedComplaints);

    const savedEvents = localStorage.getItem('uscout_events');
    if (savedEvents) state.registeredEvents = new Set(JSON.parse(savedEvents));

    const savedClubs = localStorage.getItem('uscout_clubs');
    if (savedClubs) state.joinedClubs = new Set(JSON.parse(savedClubs));
  }

  function saveStateToLocal() {
    localStorage.setItem('uscout_user', JSON.stringify(state.user));
    localStorage.setItem('uscout_complaints', JSON.stringify(state.complaints));
    localStorage.setItem('uscout_events', JSON.stringify(Array.from(state.registeredEvents)));
    localStorage.setItem('uscout_clubs', JSON.stringify(Array.from(state.joinedClubs)));
  }

  // ==========================================
  // 3. CORE ROUTING & SIDEBAR ROUTING HANDLER
  // ==========================================
  
  function navigateTo(viewName) {
    state.activeView = viewName;
    
    // Hide all view panels, reveal active panel
    document.querySelectorAll('.view-section').forEach(section => {
      section.classList.remove('active');
    });
    
    const activeSection = document.getElementById(`${viewName}-section`);
    if (activeSection) {
      activeSection.classList.add('active');
    }

    // Mark sidebar active link
    document.querySelectorAll('.sidebar-menu .menu-item').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.view === viewName) {
        link.classList.add('active');
      }
    });

    // Update Header Breadcrumb Title
    const formattedTitle = viewName === 'erp' ? 'ERP Portal' 
                         : viewName === 'about' ? 'About U-Scout'
                         : viewName === 'communities' ? 'Clubs & Societies'
                         : viewName.charAt(0).toUpperCase() + viewName.slice(1);
    document.getElementById('breadcrumb-active').textContent = formattedTitle;

    // Scroll main view container to top
    document.querySelector('.view-panel-container').scrollTop = 0;

    // Trigger page-specific data updates
    if (viewName === 'students') {
      fetchStudents();
    } else if (viewName === 'noticeboard') {
      buildCalendarGrid();
    }

    // Re-instantiate SVG Lucide Icons to make sure dynamic bindings work
    lucide.createIcons();
    
    // Bind 3D tilt handlers
    init3DTilt();
  }

  // Set up view listeners on sidebar items and dashboard links
  document.querySelectorAll('.sidebar-menu .menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const view = item.dataset.view;
      navigateTo(view);
      
      // On mobile, close sidebar automatically on item click
      document.querySelector('.sidebar').classList.remove('mobile-open');
    });
  });

  // Handle Quick link dashboard clicks
  document.querySelectorAll('.quick-link-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = card.dataset.targetView;
      navigateTo(targetView);
    });
  });

  // ERP sub-tab switcher click handlers
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.tab;
      state.activeErpTab = tabName;
      
      // Update active tabs styling
      btn.parentElement.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active content panels
      const parentTabsContainer = btn.closest('#erp-section');
      parentTabsContainer.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
      });
      document.getElementById(`tab-${tabName}`).classList.add('active');
      
      // Sync icon renders
      lucide.createIcons();
    });
  });

  // Mobile sidebar toggle trigger
  const mobileToggle = document.getElementById('mobile-sidebar-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      document.querySelector('.sidebar').classList.toggle('mobile-open');
    });
  }

  // Close sidebar clicking outside on mobile
  document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const mobileBtn = document.getElementById('mobile-sidebar-toggle');
    if (window.innerWidth <= 768 && sidebar.classList.contains('mobile-open')) {
      if (!sidebar.contains(e.target) && !mobileBtn.contains(e.target)) {
        sidebar.classList.remove('mobile-open');
      }
    }
  });

  // ==========================================
  // 4. THEME TOGGLING (DARK / LIGHT SYSTEM)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  function applyTheme(theme) {
    const html = document.documentElement;
    const darkIcon = themeToggleBtn.querySelector('.theme-icon-dark');
    const lightIcon = themeToggleBtn.querySelector('.theme-icon-light');
    const text = document.getElementById('theme-toggle-text');

    if (theme === 'dark') {
      html.classList.add('dark');
      darkIcon.classList.add('hidden');
      lightIcon.classList.remove('hidden');
      text.textContent = 'Light Mode';
      localStorage.setItem('uscout_theme', 'dark');
    } else {
      html.classList.remove('dark');
      darkIcon.classList.remove('hidden');
      lightIcon.classList.add('hidden');
      text.textContent = 'Dark Mode';
      localStorage.setItem('uscout_theme', 'light');
    }
    lucide.createIcons();
  }

  // Initialize theme from local cache (defaulting to dark mode for premium obsidian look)
  const cachedTheme = localStorage.getItem('uscout_theme') || 'dark';
  applyTheme(cachedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
    showToast('Theme Changed', `Successfully toggled to ${isDark ? 'light' : 'dark'} mode display.`, 'success');
  });

  // ==========================================
  // 5. TOAST NOTIFICATIONS DESK
  // ==========================================
  function showToast(title, desc, type = 'primary') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast-alert ${type}`;
    
    let iconName = 'info';
    if (type === 'success') iconName = 'check-circle';
    if (type === 'warning') iconName = 'alert-triangle';
    if (type === 'error') iconName = 'x-circle';

    toast.innerHTML = `
      <div class="toast-icon-wrapper">
        <i data-lucide="${iconName}"></i>
      </div>
      <div class="toast-message-box">
        <h4>${title}</h4>
        <p>${desc}</p>
      </div>
    `;

    container.appendChild(toast);
    lucide.createIcons();

    // Trigger auto slide out
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px) scale(0.95)';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 3800);
  }

  // ==========================================
  // 6. MOCK AUTH / LOGON FLOWS
  // ==========================================
  const loginForm = document.getElementById('login-form');
  const loginContainer = document.getElementById('login-container');
  const appContainer = document.getElementById('app-container');
  const introScreen = document.getElementById('animated-intro');

  // Slide-out intro loader
  setTimeout(() => {
    introScreen.classList.add('fade-out');
    // Check logon state after intro finishes
    setTimeout(checkAuthenticationState, 500);
  }, 1600);

  function checkAuthenticationState() {
    const isLogged = localStorage.getItem('uscout_logged') === 'true';
    if (isLogged) {
      loadPersistedState();
      loginContainer.classList.add('hidden');
      appContainer.classList.remove('hidden');
      populateUIElements();
      navigateTo('dashboard');
      showToast(`Welcome Back, ${state.user.name.split(' ')[0]}!`, 'You are connected to the smart campus portal server.', 'success');
    } else {
      loginContainer.classList.remove('hidden');
      appContainer.classList.add('hidden');
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('login-email').value;
      
      // Update state email
      state.user.email = email;
      // Pre-seed some details if it's the standard student profile
      if (email === 'student@university.edu') {
        state.user.name = 'Bhabana Kalita';
        state.user.roll = 'US-2026-984';
        state.user.major = 'B.Tech Computer Science';
        state.user.gpa = 8.00;
        state.user.avatar = 'bhabana.jpg';
      }

      localStorage.setItem('uscout_logged', 'true');
      saveStateToLocal();

      // Transition animation
      loginContainer.style.opacity = '0';
      loginContainer.style.transform = 'scale(0.98)';
      
      setTimeout(() => {
        loginContainer.classList.add('hidden');
        loginContainer.style.opacity = '';
        loginContainer.style.transform = '';
        appContainer.classList.remove('hidden');
        
        populateUIElements();
        navigateTo('dashboard');
        showToast('Login Successful', `Welcome to UniScout, student ${state.user.name}!`, 'success');
      }, 350);
    });
  }

  // Logout Click handler
  const logoutBtn = document.getElementById('btn-logout');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      localStorage.setItem('uscout_logged', 'false');
      
      appContainer.classList.add('hidden');
      loginContainer.classList.remove('hidden');
      showToast('Signed Out', 'You have successfully closed your active session.', 'warning');
    });
  }

  // ==========================================
  // 7. DYNAMIC UI GENERATOR & POPULATION
  // ==========================================
  
  function populateUIElements() {
    // Populate user profiles indicators globally
    document.getElementById('sidebar-name').textContent = state.user.name;
    document.getElementById('sidebar-major').textContent = state.user.major;
    document.getElementById('sidebar-avatar').src = state.user.avatar;
    document.getElementById('welcome-student-name').textContent = state.user.name.split(' ')[0];
    document.getElementById('header-avatar').src = state.user.avatar;
    document.getElementById('header-name').textContent = state.user.name.split(' ')[0];

    // Build notifications dropdown items
    buildNotificationsDropdown();
    
    // Load dashboard cards data
    buildDashboardEvents();
    buildDashboardAnnouncements();

    // Load ERP portal content
    buildScholarshipsList();
    buildCertificatesList();
    buildComplaintsList();
    buildConcernedFaculty();

    // Load events hubs catalog
    buildEventsCatalog();

    // Load clubs boards list
    buildClubsDirectory();

    // Load reports table logs
    buildReportsLibrary();

    // Load notices & calendar board
    buildNoticeboardNotices();
    buildCalendarGrid();

    // Load campus faculty directory
    buildFacultyDirectory();

    // Bind Profile inputs
    bindProfileEditorData();
  }

  // Header notifications drop builder
  function buildNotificationsDropdown() {
    const list = document.getElementById('notification-list');
    const badge = document.getElementById('notification-badge');
    list.innerHTML = '';
    
    if (announcementsList.length === 0) {
      list.innerHTML = '<p class="text-center p-6 text-muted-foreground">No active notifications</p>';
      badge.classList.add('hidden');
      return;
    }

    badge.classList.remove('hidden');
    
    announcementsList.forEach(item => {
      const dropItem = document.createElement('div');
      dropItem.className = 'dropdown-item';
      
      let iconColorClass = '';
      let iconName = 'bell';
      if (item.type === 'Career') { iconName = 'briefcase'; }
      if (item.type === 'Facility') { iconName = 'alert-triangle'; iconColorClass = 'warning-icon'; }

      dropItem.innerHTML = `
        <div class="dropdown-item-icon ${iconColorClass}">
          <i data-lucide="${iconName}"></i>
        </div>
        <div class="dropdown-item-content">
          <h4>${item.title}</h4>
          <p>${item.date}</p>
        </div>
      `;
      dropItem.addEventListener('click', () => {
        navigateTo('noticeboard');
        document.getElementById('notification-dropdown').classList.add('hidden');
      });
      list.appendChild(dropItem);
    });

    // Notification dropdown show toggle click
    const bellBtn = document.getElementById('notification-bell');
    const dropMenu = document.getElementById('notification-dropdown');
    
    bellBtn.onclick = (e) => {
      e.stopPropagation();
      dropMenu.classList.toggle('hidden');
    };

    document.addEventListener('click', (e) => {
      if (!bellBtn.contains(e.target) && !dropMenu.contains(e.target)) {
        dropMenu.classList.add('hidden');
      }
    });

    // Clear notifications click
    document.getElementById('btn-clear-notifications').onclick = () => {
      announcementsList.length = 0;
      buildNotificationsDropdown();
      showToast('Notifications Cleared', 'All header alerts cleared.', 'primary');
    };
  }

  // Dashboard Upcoming Events column
  function buildDashboardEvents() {
    const container = document.getElementById('dashboard-events-list');
    container.innerHTML = '';

    // Take top 3 upcoming events
    const displayEvents = eventsCatalog.slice(0, 3);
    
    displayEvents.forEach(ev => {
      const dateParts = ev.date.split(' ');
      const dayStr = dateParts[0];
      const restDateStr = dateParts.slice(1).join(' ') || ev.date.split('-')[0];

      const item = document.createElement('div');
      item.className = 'event-row-item animate-fade-in';
      item.innerHTML = `
        <div class="event-date-badge">
          <span>${ev.monthDay}</span>
          <span>${ev.date.slice(0, 3)}</span>
        </div>
        <div class="event-row-details">
          <h3>${ev.title}</h3>
          <p>Organized by ${ev.organizer} • ${ev.type} Unit</p>
        </div>
      `;
      item.addEventListener('click', () => {
        openCalendarEventModal(ev);
      });
      container.appendChild(item);
    });
  }

  // Dashboard announcements timeline
  function buildDashboardAnnouncements() {
    const container = document.getElementById('dashboard-announcements-list');
    container.innerHTML = '';
    
    announcementsList.slice(0, 4).forEach(item => {
      const block = document.createElement('div');
      block.className = 'timeline-item';
      block.innerHTML = `
        <h4>${item.title}</h4>
        <p>${item.date} • ${item.type} Alert</p>
      `;
      block.onclick = () => { navigateTo('noticeboard'); };
      container.appendChild(block);
    });
  }

  // Available Scholarships catalog list
  function buildScholarshipsList() {
    const list = document.getElementById('scholarships-list');
    list.innerHTML = '';

    scholarshipsCatalog.forEach(sch => {
      const isEligible = state.user.gpa >= sch.minGpa;
      
      const card = document.createElement('div');
      card.className = 'scholarship-card-item';
      card.innerHTML = `
        <div class="scholarship-info">
          <h3>${sch.title}</h3>
          <p>${sch.description}</p>
          <p class="text-xs text-muted-foreground mt-2">Requirement: ${sch.eligibility} • Deadline: ${sch.deadline}</p>
        </div>
        <div class="text-right flex flex-col items-end gap-2">
          <span class="scholarship-value">${sch.amount}</span>
          <button class="btn-primary btn-apply-scholarship ${!isEligible ? 'bg-input-readonly' : ''}" 
                  data-id="${sch.id}" ${!isEligible ? 'disabled' : ''}>
            ${!isEligible ? 'Ineligible' : 'Apply Now'}
          </button>
        </div>
      `;
      list.appendChild(card);
    });

    // Apply button triggers modal
    document.querySelectorAll('.btn-apply-scholarship').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        const selectedSch = scholarshipsCatalog.find(s => s.id === id);
        if (selectedSch) {
          openScholarshipModal(selectedSch);
        }
      });
    });
  }

  // Modal handlers for Scholarship forms
  const schModal = document.getElementById('scholarship-modal');
  const closeSchModal = document.getElementById('close-scholarship-modal');
  const cancelSchBtn = document.getElementById('btn-cancel-scholarship');
  const schForm = document.getElementById('scholarship-application-form');

  function openScholarshipModal(sch) {
    document.getElementById('scholarship-modal-title').textContent = `Apply: ${sch.title}`;
    document.getElementById('scholarship-field-type').value = `${sch.title} (${sch.amount})`;
    document.getElementById('scholarship-student-name').value = state.user.name;
    document.getElementById('scholarship-student-gpa').value = `${state.user.gpa} / 10`;
    document.getElementById('scholarship-statement').value = '';
    
    schModal.classList.remove('hidden');
    lucide.createIcons();
  }

  function closeScholarshipModal() {
    schModal.classList.add('hidden');
  }

  closeSchModal.onclick = closeScholarshipModal;
  cancelSchBtn.onclick = closeScholarshipModal;

  // File Upload placeholder trigger toast
  document.querySelector('.file-upload-stub').onclick = () => {
    showToast('Mock Attachment File', 'Mock transcript file uploaded successfully (Placeholder).', 'success');
  };

  schForm.onsubmit = (e) => {
    e.preventDefault();
    closeScholarshipModal();
    showToast('Application Submitted', 'Your scholarship request file is logged. Verification updates sent to your email.', 'success');
  };

  // Certificate Download Generator
  function buildCertificatesList() {
    const container = document.getElementById('certificates-list-container');
    container.innerHTML = '';

    const certificates = [
      { id: '1', title: 'Course Completion: Introduction to Systems & Programming', date: 'March 15, 2026', type: 'Academic' },
      { id: '2', title: 'Smart Campus Hackathon Placement Winner', date: 'February 10, 2026', type: 'Achievement' },
      { id: '3', title: 'Extra-curricular Leadership Development Award', date: 'January 05, 2026', type: 'Extra-curricular' }
    ];

    certificates.forEach(c => {
      const row = document.createElement('div');
      row.className = 'certificate-card-item';
      row.innerHTML = `
        <div class="certificate-details">
          <h3>${c.title}</h3>
          <p>Issued by Academic Senate • Category: ${c.type} • Date: ${c.date}</p>
        </div>
        <button class="btn-outline btn-download-cert" data-id="${c.id}" data-title="${c.title}">
          <i data-lucide="download"></i> Download
        </button>
      `;
      container.appendChild(row);
    });

    // Attach click download
    document.querySelectorAll('.btn-download-cert').forEach(btn => {
      btn.onclick = () => {
        const title = btn.dataset.title;
        generateMockCertificateDownload(title);
      };
    });
  }

  // Custom SVG printable Certificate builder
  function generateMockCertificateDownload(title) {
    showToast('Generating File', 'Assembling official verified credential stamps...', 'primary');
    
    setTimeout(() => {
      const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
          <rect width="780" height="580" x="10" y="10" rx="15" fill="#120e24" stroke="#6e59a5" stroke-width="8"/>
          <rect width="760" height="560" x="20" y="20" rx="10" fill="none" stroke="#33c3f0" stroke-width="2" stroke-dasharray="8 4"/>
          
          <text x="400" y="100" font-family="'Outfit', sans-serif" font-size="34" font-weight="bold" fill="#33c3f0" text-anchor="middle">UNIVERSITY ACADEMIC SENATE</text>
          <text x="400" y="150" font-family="sans-serif" font-size="16" fill="#94a3b8" letter-spacing="2" text-anchor="middle">OFFICIAL CREDENTIAL VERIFICATION</text>
          
          <line x1="150" y1="180" x2="650" y2="180" stroke="#6e59a5" stroke-width="2"/>
          
          <text x="400" y="230" font-family="Georgia, serif" font-size="20" fill="#ffffff" italic="true" text-anchor="middle">This is to officially certify that</text>
          <text x="400" y="290" font-family="'Outfit', sans-serif" font-size="38" font-weight="bold" fill="#9b87f5" text-anchor="middle">${state.user.name}</text>
          
          <text x="400" y="340" font-family="sans-serif" font-size="15" fill="#f8fafc" text-anchor="middle">has been successfully awarded the credential</text>
          <text x="400" y="380" font-family="sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle">${title.toUpperCase()}</text>
          
          <text x="400" y="430" font-family="sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">for exemplary grades standings under roll ID: ${state.user.roll}</text>
          
          <line x1="200" y1="480" x2="600" y2="480" stroke="#6e59a5" stroke-width="1"/>
          
          <text x="250" y="520" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">DR. MICHAEL CHEN</text>
          <text x="250" y="535" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">DEPT. COORDINATOR</text>
          
          <circle cx="400" cy="510" r="30" fill="#33c3f0" opacity="0.15"/>
          <text x="400" y="515" font-family="sans-serif" font-size="12" font-weight="bold" fill="#33c3f0" text-anchor="middle">SEAL</text>
          
          <text x="550" y="520" font-family="sans-serif" font-size="12" fill="#94a3b8" text-anchor="middle">PROF. JENNIFER WILLIAMS</text>
          <text x="550" y="535" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">ACADEMIC SENATE REGISTRAR</text>
        </svg>
      `;

      const blob = new Blob([svgContent], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${title.toLowerCase().replace(/[\s:]+/g, '_')}_cert.svg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      showToast('Download Finished', 'Official SVG credential download complete.', 'success');
    }, 1500);
  }

  // ERP Tab: Complaints form submission & lists
  function buildComplaintsList() {
    const container = document.getElementById('recent-complaints-list');
    container.innerHTML = '';

    if (state.complaints.length === 0) {
      container.innerHTML = '<p class="text-center p-4 text-muted-foreground">No complaints filed yet.</p>';
      return;
    }

    state.complaints.forEach(item => {
      const div = document.createElement('div');
      div.className = 'complaint-row-item animate-fade-in';
      
      const statusClass = item.status === 'Resolved' ? 'resolved' : 'progress';

      div.innerHTML = `
        <div class="complaint-row-header">
          <h4>${item.title}</h4>
          <span class="badge-status ${statusClass}">${item.status}</span>
        </div>
        <p class="text-xs text-muted-foreground mt-1">Category: ${item.category} Unit • Filed: ${item.date}</p>
        <p class="text-sm text-muted-foreground mt-2">${item.description}</p>
      `;
      container.appendChild(div);
    });
  }

  const complaintForm = document.getElementById('complaint-form');
  if (complaintForm) {
    complaintForm.onsubmit = (e) => {
      e.preventDefault();
      
      const title = document.getElementById('complaint-title').value;
      const category = document.getElementById('complaint-category').value;
      const description = document.getElementById('complaint-description').value;

      const dateObj = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = dateObj.toLocaleDateString('en-US', options);

      const newComplaint = {
        id: Date.now(),
        title,
        category,
        description,
        date: formattedDate,
        status: 'New'
      };

      state.complaints.unshift(newComplaint);
      saveStateToLocal();
      buildComplaintsList();
      
      complaintForm.reset();
      showToast('Complaint Logged', 'A ticket was opened successfully. Tracking updates are posted here.', 'success');
    };
  }

  // ERP Concerned Faculty list
  function buildConcernedFaculty() {
    const container = document.getElementById('erp-faculty-list');
    container.innerHTML = '';

    const concerned = facultyCatalog.slice(0, 2);
    
    concerned.forEach(fac => {
      const card = document.createElement('div');
      card.className = 'faculty-card-compact';
      card.innerHTML = `
        <div class="faculty-avatar-container">
          <i data-lucide="user"></i>
        </div>
        <div class="faculty-content-box">
          <h3>${fac.name}</h3>
          <p class="text-muted-foreground text-sm">${fac.role} • ${fac.dept}</p>
          <p class="faculty-email text-sm">${fac.email}</p>
          <p class="office-hours text-xs">Room: ${fac.room} | Hours: ${fac.hours}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // ==========================================
  // 8. CAMPUS EVENTS PORTAL LOGIC
  // ==========================================
  let activeEventFilter = 'all';

  function buildEventsCatalog() {
    const grid = document.getElementById('events-catalog-grid');
    grid.innerHTML = '';

    const searchQuery = document.getElementById('event-search-input').value.toLowerCase();

    const filtered = eventsCatalog.filter(ev => {
      const matchFilter = activeEventFilter === 'all' || ev.type === activeEventFilter;
      const matchSearch = ev.title.toLowerCase().includes(searchQuery) || ev.organizer.toLowerCase().includes(searchQuery);
      return matchFilter && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<p class="col-span-3 text-center p-8 text-muted-foreground">No matching events found.</p>';
      return;
    }

    filtered.forEach(ev => {
      const isRegistered = state.registeredEvents.has(ev.id);
      const categoryColor = ev.type === 'Tech' ? 'tech' : ev.type === 'Cultural' ? 'cultural' : 'career';
      const attendeesCount = ev.attendees + (isRegistered ? 1 : 0);

      const card = document.createElement('div');
      card.className = 'card card-hover event-card animate-fade-in';
      card.innerHTML = `
        <div class="event-banner-stub" style="background-image: url('${ev.banner}')">
          <span class="event-category-badge ${categoryColor}">${ev.type}</span>
        </div>
        <div class="event-card-body">
          <span class="event-organizer-tag">${ev.organizer}</span>
          <h3>${ev.title}</h3>
          <div class="event-details-meta">
            <span><i data-lucide="calendar"></i> ${ev.date}, 2026</span>
            <span><i data-lucide="map-pin"></i> Main Auditorium Wing</span>
          </div>
          <p class="text-sm text-muted-foreground line-clamp-3">${ev.desc}</p>
        </div>
        <div class="event-card-footer">
          <span class="registration-count">${attendeesCount} Registered</span>
          <button class="btn-primary btn-register-event ${isRegistered ? 'registered' : ''}" data-id="${ev.id}">
            ${isRegistered ? 'Registered' : 'Register Now'}
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    // Register button handler
    document.querySelectorAll('.btn-register-event').forEach(btn => {
      btn.onclick = (e) => {
        e.stopPropagation();
        const id = parseInt(btn.dataset.id);
        
        if (state.registeredEvents.has(id)) {
          state.registeredEvents.delete(id);
          showToast('Registration Cancelled', 'You successfully opted out of this event schedule.', 'warning');
        } else {
          state.registeredEvents.add(id);
          showToast('Registration Successful', 'Spot reserved! View scheduled slots on noticeboard calendar.', 'success');
        }
        
        saveStateToLocal();
        buildEventsCatalog();
        buildDashboardEvents(); // Sync with dashboard
      };
    });

    lucide.createIcons();
  }

  // Filter click binding for events chips
  document.querySelectorAll('#events-filter-chips .chip-btn').forEach(chip => {
    chip.onclick = () => {
      chip.parentElement.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
      chip.classList.add('active');
      activeEventFilter = chip.dataset.filter;
      buildEventsCatalog();
    };
  });

  // Event search binding
  document.getElementById('event-search-input').oninput = buildEventsCatalog;

  // ==========================================
  // 9. CLUBS & COMMUNITIES LOGIC
  // ==========================================
  function buildClubsDirectory() {
    const grid = document.getElementById('clubs-directory-grid');
    grid.innerHTML = '';

    clubsCatalog.forEach(club => {
      const isJoined = state.joinedClubs.has(club.name);
      const membersVal = club.members + (isJoined ? 1 : 0);

      const card = document.createElement('div');
      card.className = 'card card-hover club-card animate-fade-in';
      card.innerHTML = `
        <div class="club-avatar">${club.icon}</div>
        <div>
          <h3>${club.name}</h3>
          <span class="badge-neutral mt-2">${club.alias}</span>
          <p class="club-desc mt-4">${club.desc}</p>
        </div>
        <div>
          <p class="club-members-count">${membersVal} Active Members</p>
          <button class="btn-outline btn-join-club ${isJoined ? 'joined' : ''}" data-name="${club.name}">
            ${isJoined ? 'Joined Club' : 'Join Community'}
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    // Joined buttons triggers
    document.querySelectorAll('.btn-join-club').forEach(btn => {
      btn.onclick = () => {
        const name = btn.dataset.name;
        if (state.joinedClubs.has(name)) {
          state.joinedClubs.delete(name);
          showToast('Left Club', `You exited from the ${name} community.`, 'warning');
        } else {
          state.joinedClubs.add(name);
          showToast('Joined Club', `Welcome to the ${name} community board!`, 'success');
        }
        saveStateToLocal();
        buildClubsDirectory();
      };
    });
  }

  // ==========================================
  // 10. CONCLUDED EVENT REPORTS LOGIC
  // ==========================================
  function buildReportsLibrary() {
    const tbody = document.getElementById('reports-table-body');
    tbody.innerHTML = '';

    const searchQuery = document.getElementById('report-search-input').value.toLowerCase();

    const filtered = reportsCatalog.filter(r => {
      return r.title.toLowerCase().includes(searchQuery) || r.category.toLowerCase().includes(searchQuery) || r.lead.toLowerCase().includes(searchQuery);
    });

    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center p-6 text-muted-foreground">No reports found.</td></tr>';
      return;
    }

    filtered.forEach(r => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="font-semibold">${r.title}</td>
        <td><span class="badge-neutral">${r.category}</span></td>
        <td>${r.date}</td>
        <td>${r.lead}</td>
        <td><button class="btn-text btn-view-report" data-file="${r.file}"><i data-lucide="file-text"></i> Open PDF</button></td>
      `;
      tbody.appendChild(tr);
    });

    document.querySelectorAll('.btn-view-report').forEach(btn => {
      btn.onclick = () => {
        const file = btn.dataset.file;
        showToast('Document Rendered', `Mock preview file opened: ${file} (Stub File).`, 'success');
      };
    });

    lucide.createIcons();
  }

  document.getElementById('report-search-input').oninput = buildReportsLibrary;

  // ==========================================
  // 11. NOTICEBOARD & CUSTOM MONTH GRID CALENDAR
  // ==========================================
  
  function buildNoticeboardNotices() {
    const container = document.getElementById('noticeboard-timeline-list');
    container.innerHTML = '';

    const priorityMap = {
      'Scholarship Applications Open': 'high',
      'Summer Internship Drive 2026': 'medium',
      'Mid-Semester Examination Schedules': 'high',
      'Library Wing Air Conditioning Maintenance': 'normal'
    };

    announcementsList.forEach(notice => {
      const prio = priorityMap[notice.title] || 'normal';
      const item = document.createElement('div');
      item.className = `notice-item ${prio} animate-fade-in`;
      item.innerHTML = `
        <div class="notice-item-header">
          <h4>${notice.title}</h4>
          <span>${notice.date}</span>
        </div>
        <p class="mt-2">${notice.desc}</p>
      `;
      container.appendChild(item);
    });
  }

  // Interactive Month Calendar grid generator
  function buildCalendarGrid() {
    const grid = document.getElementById('calendar-grid');
    const headerTitle = document.getElementById('calendar-month-year');
    
    grid.innerHTML = '';
    
    const year = state.calendarDate.getFullYear();
    const month = state.calendarDate.getMonth();
    
    // Set headers May 2026
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    headerTitle.textContent = `${monthNames[month]} ${year}`;

    // Get first day of the month and total number of days
    const firstDayIndex = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    // 1. Render previous month cells (padding)
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const cell = document.createElement('div');
      cell.className = 'calendar-cell prev-month';
      cell.textContent = prevMonthDays - i;
      grid.appendChild(cell);
    }

    // 2. Render actual current month cells
    for (let day = 1; day <= totalDays; day++) {
      const cell = document.createElement('div');
      cell.className = 'calendar-cell';
      cell.textContent = day;

      // Identify scheduled events for highlighting
      // Map active event dates (May 5, May 15) or dynamic registered events
      const matchEvent = eventsCatalog.find(ev => ev.month === month && ev.monthDay === day);
      
      if (matchEvent) {
        cell.classList.add('active-date');
        cell.title = matchEvent.title;
        cell.addEventListener('click', () => {
          openCalendarEventModal(matchEvent);
        });
      }

      grid.appendChild(cell);
    }

    // 3. Render next month padding cells
    const remainingCells = 42 - (firstDayIndex + totalDays);
    for (let day = 1; day <= remainingCells; day++) {
      const cell = document.createElement('div');
      cell.className = 'calendar-cell next-month';
      cell.textContent = day;
      grid.appendChild(cell);
    }
  }

  // Pre/Next month buttons
  document.getElementById('prev-month-btn').onclick = () => {
    state.calendarDate.setMonth(state.calendarDate.getMonth() - 1);
    buildCalendarGrid();
  };

  document.getElementById('next-month-btn').onclick = () => {
    state.calendarDate.setMonth(state.calendarDate.getMonth() + 1);
    buildCalendarGrid();
  };

  // Calendar Event Details Modal Actions
  const calModal = document.getElementById('calendar-event-modal');
  const closeCalModal = document.getElementById('close-calendar-modal');
  const closeCalBtn = document.getElementById('btn-close-calendar-details');
  const viewCatalogBtn = document.getElementById('btn-calendar-view-catalog');

  let selectedCalEvent = null;

  function openCalendarEventModal(ev) {
    selectedCalEvent = ev;
    document.getElementById('calendar-event-title').textContent = ev.title;
    document.getElementById('calendar-event-category').textContent = ev.type;
    
    const catBadge = document.getElementById('calendar-event-category');
    catBadge.className = 'badge-primary';
    if (ev.type === 'Cultural') catBadge.style.backgroundColor = '#d946ef';
    else if (ev.type === 'Career') catBadge.style.backgroundColor = '#0ea5e9';
    else catBadge.style.backgroundColor = '#7c3aed';

    document.getElementById('calendar-event-organizer').textContent = ev.organizer;
    document.getElementById('calendar-event-time').textContent = `${ev.date}, 2026`;
    document.getElementById('calendar-event-desc').textContent = ev.desc;

    calModal.classList.remove('hidden');
    lucide.createIcons();
  }

  function closeCalendarModal() {
    calModal.classList.add('hidden');
  }

  closeCalModal.onclick = closeCalendarModal;
  closeCalBtn.onclick = closeCalendarModal;
  viewCatalogBtn.onclick = () => {
    closeCalendarModal();
    navigateTo('events');
  };

  // ==========================================
  // 12. CAMPUS FACULTY DIRECTORY PANEL
  // ==========================================
  let activeFacultyDept = 'all';

  function buildFacultyDirectory() {
    const grid = document.getElementById('faculty-directory-grid');
    grid.innerHTML = '';

    const searchQuery = document.getElementById('faculty-search-input').value.toLowerCase();

    const filtered = facultyCatalog.filter(fac => {
      const matchDept = activeFacultyDept === 'all' || fac.dept.includes(activeFacultyDept) || (activeFacultyDept === 'CS' && fac.dept === 'Computer Science') || (activeFacultyDept === 'EE' && fac.dept === 'Electrical Eng') || (activeFacultyDept === 'MA' && fac.dept === 'Mathematics');
      const matchSearch = fac.name.toLowerCase().includes(searchQuery) || fac.role.toLowerCase().includes(searchQuery) || fac.dept.toLowerCase().includes(searchQuery);
      return matchDept && matchSearch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = '<p class="col-span-3 text-center p-8 text-muted-foreground">No academic staff match search criteria.</p>';
      return;
    }

    filtered.forEach(fac => {
      const card = document.createElement('div');
      card.className = 'card faculty-card-compact animate-fade-in';
      card.innerHTML = `
        <div class="faculty-avatar-container">
          <span style="font-size: 1.6rem">${fac.avatar}</span>
        </div>
        <div class="faculty-content-box">
          <h3>${fac.name}</h3>
          <p class="text-muted-foreground text-sm">${fac.role} • <strong class="text-primary">${fac.dept}</strong></p>
          <p class="faculty-email text-sm">${fac.email}</p>
          <p class="office-hours text-xs">Room: ${fac.room} | Office Hours: ${fac.hours}</p>
        </div>
      `;
      grid.appendChild(card);
    });

    lucide.createIcons();
  }

  // Filter clicks department chips
  document.querySelectorAll('#faculty-filter-chips .chip-btn').forEach(chip => {
    chip.onclick = () => {
      chip.parentElement.querySelectorAll('.chip-btn').forEach(b => b.classList.remove('active'));
      chip.classList.add('active');
      activeFacultyDept = chip.dataset.dept;
      buildFacultyDirectory();
    };
  });

  document.getElementById('faculty-search-input').oninput = buildFacultyDirectory;

  // ==========================================
  // 13. DYNAMIC DATABASE FETCHING (CONNECTIVITY)
  // ==========================================
  
  function fetchStudents() {
    const tbody = document.getElementById('students-table-body');
    const banner = document.getElementById('db-status-banner');
    const bannerTitle = document.getElementById('db-banner-title');
    const bannerDesc = document.getElementById('db-banner-desc');
    
    tbody.innerHTML = `
      <tr>
        <td colspan="5" class="text-center p-6 text-muted-foreground">
          <div class="loader-spinner spinner-small mx-auto"></div>
          <p class="mt-2">Connecting to student database API...</p>
        </td>
      </tr>
    `;

    // Reset status banner styling
    banner.className = 'db-status-banner mt-6 warning';
    bannerTitle.innerHTML = 'Express API Standby';
    bannerDesc.innerHTML = 'Connecting to http://localhost:5000/api/students...';

    // Make AJAX request directly to local Express node backend
    fetch('http://localhost:5000/api/students')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response API is offline');
        }
        return response.json();
      })
      .then(data => {
        state.studentsList = data;
        
        // Update Banner success
        banner.className = 'db-status-banner mt-6 success';
        bannerTitle.innerHTML = 'Database Connected Successfully!';
        bannerDesc.innerHTML = `Live integration active. Loaded ${data.length} student records dynamically from Express & MySQL db server.`;
        
        // Render students rows
        renderStudentsTable(data);
        showToast('Database Connected', `Direct API sync loaded ${data.length} records successfully.`, 'success');
      })
      .catch(err => {
        console.warn('Backend API Offline. Falling back to high-fidelity mock databases.', err);
        
        // Update Banner fallback warnings
        banner.className = 'db-status-banner mt-6 warning';
        bannerTitle.innerHTML = 'Active Standby: Simulated Offline Fallback';
        bannerDesc.innerHTML = 'Express server is currently offline or database not initialized. Serving mock directory profiles seamlessly.';
        
        // Load default seeds database
        state.studentsList = mockStudents;
        renderStudentsTable(mockStudents);
        
        showToast('Simulated Offline Mode', 'Express endpoint unavailable. Pre-seeding local client catalog.', 'warning');
      });
  }

  function renderStudentsTable(list) {
    const tbody = document.getElementById('students-table-body');
    tbody.innerHTML = '';
    
    if (list.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5" class="text-center p-6 text-muted-foreground">No students logged in registry.</td></tr>';
      return;
    }

    list.forEach(std => {
      const tr = document.createElement('tr');
      // API fields vs Mock fields mappings
      const id = std.student_id || std.id || "US-2026-N/A";
      const name = std.name || "N/A";
      const email = std.email || "N/A";
      const major = std.major || std.department || "N/A";
      const gpa = std.gpa || std.grade || "N/A";

      tr.innerHTML = `
        <td><strong>${id}</strong></td>
        <td>${name}</td>
        <td>${email}</td>
        <td>${major}</td>
        <td><span class="badge-neutral">${gpa}</span></td>
      `;
      tbody.appendChild(tr);
    });
    
    lucide.createIcons();
  }

  // Bind manual refresh trigger
  document.getElementById('btn-refresh-students').onclick = fetchStudents;

  // ==========================================
  // 14. MY PROFILE EDITOR COMPONENT
  // ==========================================
  
  function bindProfileEditorData() {
    // Populate form inputs
    document.getElementById('profile-name').value = state.user.name;
    document.getElementById('profile-roll').value = state.user.roll;
    document.getElementById('profile-email').value = state.user.email;
    document.getElementById('profile-major').value = state.user.major;
    document.getElementById('profile-gpa').value = state.user.gpa;

    // Renders avatar choice previews
    const choices = document.getElementById('avatar-choices-grid');
    choices.innerHTML = '';

    avatarPresets.forEach(preset => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `avatar-option-btn ${state.user.avatar === preset ? 'selected' : ''}`;
      btn.innerHTML = `<img src="${preset}" alt="Preset">`;
      
      btn.onclick = () => {
        choices.querySelectorAll('.avatar-option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        // Update temporary state holder
        tempSelectedAvatar = preset;
      };
      
      choices.appendChild(btn);
    });

    // Populate identification preview cards on right side of profile view
    renderProfileIdentificationCard();
  }

  let tempSelectedAvatar = state.user.avatar;

  function renderProfileIdentificationCard() {
    document.getElementById('preview-name').textContent = state.user.name;
    document.getElementById('preview-avatar').src = state.user.avatar;
    document.getElementById('preview-roll').textContent = state.user.roll;
    document.getElementById('preview-email').textContent = state.user.email;
    document.getElementById('preview-gpa').textContent = `${state.user.gpa} / 10`;
    
    const majorBadge = document.getElementById('preview-major-badge');
    majorBadge.textContent = state.user.major.replace('B.Tech ', '').replace('B.Sc ', '');
  }

  // Profile Edit form submit listener
  const profileForm = document.getElementById('profile-edit-form');
  if (profileForm) {
    profileForm.onsubmit = (e) => {
      e.preventDefault();
      
      const name = document.getElementById('profile-name').value;
      const email = document.getElementById('profile-email').value;
      const major = document.getElementById('profile-major').value;
      const gpa = parseFloat(document.getElementById('profile-gpa').value);

      state.user.name = name;
      state.user.email = email;
      state.user.major = major;
      state.user.gpa = gpa;
      state.user.avatar = tempSelectedAvatar;

      saveStateToLocal();
      
      // Update global UI bindings immediately
      populateUIElements();
      renderProfileIdentificationCard();

      showToast('Profile Updated', 'Your identity credentials were customized and saved successfully.', 'success');
    };
  }

  // ==========================================
  // 15. INTERACTIVE 3D PARALLAX TILT EFFECT
  // ==========================================
  function init3DTilt() {
    const targets = document.querySelectorAll('.card-hover, .quick-link-card, .profile-preview-card, .login-card');
    
    targets.forEach(el => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      
      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
  }

  function handleMouseMove(e) {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * -12; // Inverted Y tilt for natural tracking
    
    el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px) translateY(-8px)`;
    el.style.boxShadow = `12px 12px 0px var(--primary-dark), 0 20px 45px rgba(0, 0, 0, 0.7)`;
    el.style.transition = 'none';

    // Interactive Parallax Z-Layering on elements with depth classes!
    const avatars = el.querySelectorAll('.depth-3d-avatar');
    const titles = el.querySelectorAll('.depth-3d-title');
    const subtitles = el.querySelectorAll('.depth-3d-subtitle');
    const forms = el.querySelectorAll('.depth-3d-form, .depth-3d-info');

    avatars.forEach(av => {
      av.style.transform = 'translateZ(65px) scale(1.08)';
      av.style.transition = 'transform 0.1s ease';
    });
    titles.forEach(t => {
      t.style.transform = 'translateZ(48px)';
      t.style.transition = 'transform 0.1s ease';
    });
    subtitles.forEach(st => {
      st.style.transform = 'translateZ(32px)';
      st.style.transition = 'transform 0.1s ease';
    });
    forms.forEach(f => {
      f.style.transform = 'translateZ(20px)';
      f.style.transition = 'transform 0.1s ease';
    });
  }

  function handleMouseLeave(e) {
    const el = e.currentTarget;
    el.style.transform = '';
    el.style.boxShadow = '';
    el.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.6s ease';

    // Snap back layers smoothly
    const children = el.querySelectorAll('.depth-3d-avatar, .depth-3d-title, .depth-3d-subtitle, .depth-3d-form, .depth-3d-info');
    children.forEach(ch => {
      ch.style.transform = '';
      ch.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
    });
  }

  // ==========================================
  // 16. ARIO-INSPIRED INTERACTIVE CUSTOM CURSOR
  // ==========================================
  let mouse = { x: -100, y: -100 };
  let cursorRing = { x: -100, y: -100 };

  // Update coordinates on mousemove
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
    const dot = document.getElementById('custom-cursor');
    if (dot) {
      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
    }
  });

  // Interpolated loop for fluid ring follow effect
  function updateCursorRing() {
    const ring = document.getElementById('custom-cursor-ring');
    if (ring) {
      const delay = 0.14;
      cursorRing.x += (mouse.x - cursorRing.x) * delay;
      cursorRing.y += (mouse.y - cursorRing.y) * delay;
      
      ring.style.transform = `translate3d(${cursorRing.x - 20}px, ${cursorRing.y - 20}px, 0)`;
    }
    requestAnimationFrame(updateCursorRing);
  }

  // Initialize mouse hovers for cursor resizing
  function initCursorHovers() {
    const interactives = document.querySelectorAll('a, button, .card-hover, .quick-link-card, .tab-btn, .avatar-option-btn, .event-row-item, .calendar-cell.active-date, .close-btn');
    const dot = document.getElementById('custom-cursor');
    const ring = document.getElementById('custom-cursor-ring');

    interactives.forEach(item => {
      item.addEventListener('mouseenter', () => {
        if (dot && ring) {
          dot.classList.add('hovering');
          ring.classList.add('hovering');
          
          if (item.classList.contains('quick-link-card') || item.classList.contains('card-hover') || item.classList.contains('profile-preview-card')) {
            ring.classList.add('c-more');
          }
        }
      });
      
      item.addEventListener('mouseleave', () => {
        if (dot && ring) {
          dot.classList.remove('hovering');
          ring.classList.remove('hovering');
          ring.classList.remove('c-more');
        }
      });
    });
  }

  // ==========================================
  // 17. INTERACTIVE 3D CANVAS BACKGROUND ENGINE
  // ==========================================
  function init3DBackground() {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles = [];
    const particleCount = 80;
    const perspective = 500;

    let targetAngleX = 0;
    let targetAngleY = 0;
    let angleX = 0;
    let angleY = 0;

    // Track mouse to skew rotation target
    window.addEventListener('mousemove', (e) => {
      // Normalize mouse coords between -1 and 1
      const nx = (e.clientX - width / 2) / (width / 2);
      const ny = (e.clientY - height / 2) / (height / 2);

      targetAngleY = nx * 0.4;
      targetAngleX = ny * -0.4;
    });

    // Handle screen resize
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Particle class representing 3D node
    class Particle3D {
      constructor() {
        this.reset();
      }

      reset() {
        // Space distribution
        this.x = (Math.random() - 0.5) * 800;
        this.y = (Math.random() - 0.5) * 800;
        this.z = (Math.random() - 0.5) * 800;
        this.size = Math.random() * 2 + 1;
        
        // Base color
        this.color = '270, 95%, 65%'; // HSL primary violet
        if (Math.random() > 0.6) {
          this.color = '285, 90%, 60%'; // HSL secondary fuchsia
        }
      }

      update() {
        // Constant slow drift in Z direction
        this.z -= 0.35;
        if (this.z < -perspective) {
          this.reset();
          this.z = perspective; // Recycle back to front
        }
      }
    }

    // Initialize particle array
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle3D());
    }

    // Main 3D render loop
    function render3D() {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate rotation angles towards mouse offset targets
      angleX += (targetAngleX - angleX) * 0.05;
      angleY += (targetAngleY - angleY) * 0.05;

      // Slowly increment base continuous rotation
      const baseRotationY = Date.now() * 0.00004;
      const currentAngleY = angleY + baseRotationY;
      const currentAngleX = angleX;

      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);
      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);

      const projected = [];

      // 1. Calculate 3D rotations and 2D projections
      particles.forEach(p => {
        p.update();

        // Yaw Y-Axis Rotation
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Pitch X-Axis Rotation
        const y1 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // 3D to 2D projection formula
        const scale = perspective / (perspective + z2);
        const projX = x1 * scale + width / 2;
        const projY = y1 * scale + height / 2;

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          size: p.size * scale,
          color: p.color
        });
      });

      // 2. Draw glowing constellation web lines
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projected.length; i++) {
        const pA = projected[i];
        
        // Skip drawing lines for nodes that are rotated behind the viewport
        if (pA.z > perspective) continue;

        for (let j = i + 1; j < projected.length; j++) {
          const pB = projected[j];

          // Compute distance in 2D projected space
          const dx = pA.x - pB.x;
          const dy = pA.y - pB.y;
          const dist2D = Math.sqrt(dx * dx + dy * dy);

          if (dist2D < 160) {
            // Map line opacity to distance
            const alpha = (1 - dist2D / 160) * 0.18;
            
            // Render line
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`; // Primary electric purple line
            ctx.stroke();
          }
        }
      }

      // 3. Render 3D node points
      projected.forEach(p => {
        // Skip nodes far behind perspective depth
        if (p.z > perspective) return;

        // Map opacity to Z depth
        const alpha = (1 - p.z / perspective) * 0.7;

        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.2, p.size), 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.color}, ${alpha})`;
        ctx.fill();

        // Extra glowing radial aura for close foreground nodes
        if (p.z < 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${p.color}, ${alpha * 0.12})`;
          ctx.fill();
        }
      });

      requestAnimationFrame(render3D);
    }

    render3D();
  }

  // Initial call
  init3DBackground();
  init3DTilt();
  initCursorHovers();
  updateCursorRing();

});
