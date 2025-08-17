// Bhavya Kothari Portfolio - Interactive Functionality

// Application Data
const portfolioData = {
  personalInfo: {
    name: "Bhavya Kothari",
    tagline: "Designing the Future, One Line of Code at a Time.",
    bio: "Hi, I'm Bhavya Kothari — a technology enthusiast passionate about building impactful digital solutions. I've worked on web development (HTML, CSS, JavaScript), created applications in Flutter, and I'm currently exploring Machine Learning and AI to expand my scope of knowledge. I'm fluent in Python, Java, C, Dart, and JavaScript, and enjoy working on projects that combine creativity with real-world problem-solving."
  },
  techStack: [
    {"name": "HTML", "color": "#e34f26"},
    {"name": "CSS", "color": "#1572b6"},
    {"name": "JavaScript", "color": "#f7df1e"},
    {"name": "Python", "color": "#3776ab"},
    {"name": "Java", "color": "#007396"},
    {"name": "C", "color": "#a8b9cc"},
    {"name": "Dart", "color": "#0175c2"},
    {"name": "Flutter", "color": "#02569b"},
    {"name": "Machine Learning", "color": "#ff6f00"},
    {"name": "AI", "color": "#8b5cf6"}
  ],
  projects: [
    {
      name: "Blackjack Game",
      tech: "Python",
      description: "Built using OOP principles; demonstrates problem-solving and game logic",
      funFact: "Built fully with Python OOP principles",
      link: "https://github.com/amateurcoder015",
      linkType: "github"
    },
    {
      name: "WhatsApp Bot for Nakoda Textiles",
      tech: "Python, Flask, Meta API",
      description: "Implemented using Meta WhatsApp Cloud API + Flask webhook integration",
      funFact: "Integrated with Meta API v22.0",
      link: "https://github.com/amateurcoder015",
      linkType: "github"
    },
    {
      name: "RRE Paper Website",
      tech: "HTML, CSS, JS, Tailwind",
      description: "Paper Trading Business Website designed with modern layouts, hero animations, and mobile-first responsive design",
      funFact: "My first live hosted business site",
      link: "https://rrepaper.in",
      linkType: "live"
    },
    {
      name: "Clothing Business Website",
      tech: "HTML, CSS, JS, Tailwind",
      description: "Built from scratch with modern design, animations, and catalog features",
      funFact: "Features modern CSS animation",
      link: "#",
      linkType: "coming-soon"
    },
    {
      name: "Shopping App",
      tech: "Flutter, Dart",
      description: "Mobile application developed as learning project",
      funFact: "Learning-by-doing in Dart & Flutter",
      link: "https://github.com/amateurcoder015/Shopping-App",
      linkType: "github"
    },
    {
      name: "Weather App",
      tech: "Flutter, Dart",
      description: "Weather application built with Flutter",
      funFact: "Learning-by-doing in Dart & Flutter",
      link: "https://github.com/amateurcoder015/Weather-App",
      linkType: "github"
    }
  ],
  commandPaletteCommands: [
    {"command": "about", "description": "Navigate to About section", "action": "scroll-to-about"},
    {"command": "projects", "description": "View Portfolio projects", "action": "scroll-to-portfolio"},
    {"command": "contact", "description": "Get in touch", "action": "scroll-to-contact"},
    {"command": "resume", "description": "Download resume", "action": "show-coming-soon"},
    {"command": "stack", "description": "View tech stack", "action": "highlight-tech-stack"}
  ]
};

// DOM Elements
const commandPaletteBtn = document.querySelector('.command-palette-btn');
const commandPalette = document.querySelector('.command-palette');
const commandInput = document.getElementById('commandInput');
const commandResults = document.getElementById('commandResults');
const contactForm = document.getElementById('contactForm');
const techChipsContainer = document.getElementById('techChips');
const projectsGrid = document.getElementById('projectsGrid');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initTechStack();
  initProjects();
  initCommandPalette();
  initSmoothScrolling();
  initContactForm();
  initEasterEgg();
  initAnimations();
});


function initScrollProgressBar() {
  const scrollBar = document.getElementById('scrollBar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollBar.style.width = scrollPercent + "%";
  });
}

// Call this function in your DOMContentLoaded block:
document.addEventListener('DOMContentLoaded', function() {
  // existing initializers...
  initScrollProgressBar();
});


// Initialize tech stack chips
function initTechStack() {
  techChipsContainer.innerHTML = '';
  
  portfolioData.techStack.forEach((tech, index) => {
    const chip = document.createElement('div');
    chip.className = 'tech-chip';
    chip.textContent = tech.name;
    chip.style.setProperty('--tech-color', tech.color);
    chip.style.animationDelay = `${index * 0.1}s`;
    
    // Add hover effect with tech color
    chip.addEventListener('mouseenter', () => {
      chip.style.borderColor = tech.color;
      chip.style.boxShadow = `0 10px 30px ${tech.color}40`;
    });
    
    chip.addEventListener('mouseleave', () => {
      chip.style.borderColor = '';
      chip.style.boxShadow = '';
    });
    
    techChipsContainer.appendChild(chip);
  });
}

function setNowPlaying(statusText) {
  const status = document.querySelector('.now-playing-status');
  if (status) status.innerHTML = `<strong>${statusText}</strong>`;
}
// Example: setNowPlaying('Machine Learning (Beginner)');


// Initialize projects grid
function initProjects() {
  projectsGrid.innerHTML = '';
  
  portfolioData.projects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const linkIcon = project.linkType === 'github' ? '⚡' : 
                    project.linkType === 'live' ? '🌐' : 
                    '🔗';
    
    const linkText = project.linkType === 'github' ? 'View Code' : 
                    project.linkType === 'live' ? 'Visit Site' : 
                    'Coming Soon';
    
    card.innerHTML = `
      <div class="project-header">
        <div>
          <h3 class="project-name">${project.name}</h3>
          <p class="project-tech">${project.tech}</p>
        </div>
      </div>
      <p class="project-description">${project.description}</p>
      <p class="project-fun-fact">"${project.funFact}"</p>
      <div class="project-links">
        <a href="${project.link}" class="project-link ${project.linkType === 'coming-soon' ? 'coming-soon' : ''}" 
           ${project.linkType !== 'coming-soon' ? 'target="_blank"' : ''}>
          <span>${linkIcon}</span>
          <span>${linkText}</span>
        </a>
      </div>
    `;
    
    projectsGrid.appendChild(card);
  });
}

// Initialize command palette
function initCommandPalette() {
  // Open command palette
  function openCommandPalette() {
    commandPalette.classList.remove('hidden');
    commandInput.focus();
    renderCommands(portfolioData.commandPaletteCommands);
  }
  
  // Close command palette
  function closeCommandPalette() {
    commandPalette.classList.add('hidden');
    commandInput.value = '';
  }
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openCommandPalette();
    }
    
    if (e.key === 'Escape') {
      closeCommandPalette();
    }
  });
  
  // Button click
  commandPaletteBtn.addEventListener('click', openCommandPalette);
  
  // Backdrop click
  document.querySelector('.command-palette-backdrop').addEventListener('click', closeCommandPalette);
  
  // Search functionality
  commandInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filteredCommands = portfolioData.commandPaletteCommands.filter(cmd => 
      cmd.command.toLowerCase().includes(query) || 
      cmd.description.toLowerCase().includes(query)
    );
    renderCommands(filteredCommands);
  });
  
  // Enter key to execute first command
  commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const firstCommand = commandResults.querySelector('.command-item');
      if (firstCommand) {
        firstCommand.click();
      }
    }
  });
}

// Render command palette results
function renderCommands(commands) {
  commandResults.innerHTML = '';
  
  commands.forEach(cmd => {
    const item = document.createElement('div');
    item.className = 'command-item';
    item.innerHTML = `
      <div class="command-name">${cmd.command}</div>
      <div class="command-desc">${cmd.description}</div>
    `;
    
    item.addEventListener('click', () => {
      executeCommand(cmd.action);
      commandPalette.classList.add('hidden');
      commandInput.value = '';
    });
    
    commandResults.appendChild(item);
  });
}

// Execute command
function executeCommand(action) {
  switch(action) {
    case 'scroll-to-about':
      scrollToSection('about');
      break;
    case 'scroll-to-portfolio':
      scrollToSection('portfolio');
      break;
    case 'scroll-to-contact':
      scrollToSection('contact');
      break;
    case 'show-coming-soon':
      showNotification('Resume download coming soon!');
      break;
    case 'highlight-tech-stack':
      scrollToSection('about');
      highlightTechStack();
      break;
  }
}

// Smooth scrolling
function initSmoothScrolling() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });
}

// Scroll to section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = document.querySelector('.nav').offsetHeight;
    const targetPosition = section.offsetTop - navHeight - 20;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
}

// Highlight tech stack
function highlightTechStack() {
  setTimeout(() => {
    const techChips = document.querySelectorAll('.tech-chip');
    techChips.forEach((chip, index) => {
      setTimeout(() => {
        chip.style.transform = 'scale(1.1)';
        chip.style.borderColor = 'var(--accent-neon-blue)';
        chip.style.boxShadow = '0 0 20px var(--accent-neon-blue)';
        
        setTimeout(() => {
          chip.style.transform = '';
          chip.style.borderColor = '';
          chip.style.boxShadow = '';
        }, 1000);
      }, index * 100);
    });
  }, 500);
}

// Initialize contact form
function initContactForm() {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      submitBtn.innerHTML = 'Message Sent! ✨';
      showNotification('Thank you! I\'ll get back to you soon.');
      
      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
      }, 2000);
    }, 1500);
  });
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--glass-bg);
    border: 1px solid var(--accent-neon-blue);
    color: var(--text-primary);
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(20px);
    box-shadow: 0 10px 30px rgba(0, 246, 255, 0.3);
    z-index: 10001;
    animation: slideIn 0.3s ease-out;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in forwards';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Initialize easter egg
function initEasterEgg() {
  // Console easter egg
  console.log('%c👋 Hey, curious mind!', 'font-size: 20px; color: #00f6ff;');
  console.log('%cType "help" to discover something special!', 'font-size: 14px; color: #8b5cf6;');
  
  // Listen for "help" command in console
  const originalLog = console.log;
  window.consoleHistory = [];
  
  console.log = function(...args) {
    const message = args.join(' ');
    window.consoleHistory.push(message);
    
    if (message.toLowerCase().includes('help')) {
      setTimeout(() => {
        console.clear();
        console.log('%c👋 Hey, curious mind! You found the hidden console.', 'font-size: 18px; color: #00f6ff; font-weight: bold;');
        console.log('%cCheck out my projects → /portfolio', 'font-size: 14px; color: #8b5cf6;');
        console.log('%cConnect with me → /contact', 'font-size: 14px; color: #8b5cf6;');
        console.log('%c', 'font-size: 12px;');
        console.log('%c' + `
  ████████╗███████╗ ██████╗██╗  ██╗    ███████╗████████╗ █████╗  ██████╗██╗  ██╗
  ╚══██╔══╝██╔════╝██╔════╝██║  ██║    ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝
     ██║   █████╗  ██║     ███████║    ███████╗   ██║   ███████║██║     █████╔╝ 
     ██║   ██╔══╝  ██║     ██╔══██║    ╚════██║   ██║   ██╔══██║██║     ██╔═██╗ 
     ██║   ███████╗╚██████╗██║  ██║    ███████║   ██║   ██║  ██║╚██████╗██║  ██╗
     ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝
        `, 'color: #00ff41; font-family: monospace; font-size: 8px;');
        console.log('%cPython | JavaScript | Flutter | Java | C | AI/ML', 'font-size: 12px; color: #ff6f00;');
      }, 100);
    }
    
    originalLog.apply(console, args);
  };
}

function initDevNotesInteractive() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('interactiveOutput');

  const techStackAscii = `
 _   _  _____  _____   ____       ____    ___   ____ 
| | | || ____|| ____| |  _ \\     |  _ \\  / _ \\ |  _ \\
| |_| ||  _|  |  _|   | | | |    | | | || | | || |_) |
|  _  || |___ | |___  | |_| |    | |_| || |_| ||  _ < 
|_| |_||_____||_____| |____/     |____/  \\___/ |_| \\_\\
Languages: Python | JavaScript | Flutter | Java | C | AI/ML
`;

  // Add more fortunes as you like!
  const fortunes = [
    "Keep coding and the bugs will fear you 🔧🐞.",
    "Your 'aha!' moment is just around the corner.",
    "Take a coffee break—your code will thank you ☕.",
    "May your deploys always be green.",
    "Every expert was once a beginner."
  ];

  const validCommands = [
    'help', 'about', 'projects', 'contact',
    'sudo make me a sandwich', 'fortune', 'clear'
  ];

  const commandHistory = [];
  let historyIndex = -1;

  function printOutput(text, append = false) {
    if (append && output.textContent.trim()) {
      output.textContent += "\n" + text;
    } else {
      output.textContent = text;
    }
  }

  function autocomplete(cmdPartial) {
    return validCommands.find(cmd => cmd.startsWith(cmdPartial)) || cmdPartial;
  }

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim().toLowerCase();
      if (!cmd) return;
      commandHistory.push(cmd);
      historyIndex = commandHistory.length;

      // Command handler
      switch (cmd) {
        case 'help':
          printOutput(
            `👋 Hey, curious mind! You found the hidden DevNotes console.\nType 'help' for this message or try 'about', 'projects', 'contact', 'fortune', 'sudo make me a sandwich', 'clear'.\n\n${techStackAscii}`
          );
          break;
        case 'about':
          printOutput("About: Hi, I’m Bhavya Kothari — a technology enthusiast passionate about building impactful digital solutions.");
          break;
        case 'projects':
          printOutput("Projects:\n- Blackjack Game (Python)\n- WhatsApp Bot\n- RRE Paper Website\n- Shopping App\n- Weather App\n- Clothing Business Site");
          break;
        case 'contact':
          printOutput("Contact:\nEmail: bhavyaskothari@gmail.com\nLinkedIn: bhavyaxkothari\nGitHub: amateurcoder015");
          break;
        case 'sudo make me a sandwich':
          printOutput("Okay. 🥪 (You are now root!)");
          break;
        case 'fortune':
          printOutput(fortunes[Math.floor(Math.random() * fortunes.length)], true);
          break;
        case 'clear':
          printOutput("");
          break;
        default:
          printOutput(`Unknown command: '${cmd}'. Try 'help'`);
      }
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length === 0) return;
      historyIndex = (historyIndex > 0) ? historyIndex - 1 : 0;
      input.value = commandHistory[historyIndex];
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (commandHistory.length === 0) return;
      historyIndex = (historyIndex < commandHistory.length - 1) ? historyIndex + 1 : commandHistory.length;
      if (historyIndex === commandHistory.length) {
        input.value = '';
      } else {
        input.value = commandHistory[historyIndex];
      }
      e.preventDefault();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const currentValue = input.value.trim().toLowerCase();
      const completion = autocomplete(currentValue);
      input.value = completion;
    }
  });
}

// Be sure this runs on DOMContentLoaded as before:
document.addEventListener('DOMContentLoaded', () => {
  // ...others...
  initDevNotesInteractive();
});



// Initialize animations
function initAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for scroll animation
  document.querySelectorAll('.tech-chip, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
  
  // Add floating particles animation
  createFloatingParticles();
}

// Create floating particles
function createFloatingParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      background: ${Math.random() > 0.5 ? 'var(--accent-neon-blue)' : 'var(--accent-neon-violet)'};
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      opacity: ${Math.random() * 0.6 + 0.2};
      animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
      animation-delay: ${Math.random() * 2}s;
    `;
    
    particlesContainer.appendChild(particle);
  }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) translateX(0px);
    }
    25% {
      transform: translateY(-20px) translateX(10px);
    }
    50% {
      transform: translateY(-10px) translateX(-10px);
    }
    75% {
      transform: translateY(-30px) translateX(5px);
    }
  }
`;
document.head.appendChild(style);

// Add active nav link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Add CSS for active nav link
const navStyle = document.createElement('style');
navStyle.textContent = `
  .nav-link.active {
    color: var(--accent-neon-blue);
  }
  
  .nav-link.active::after {
    width: 100%;
  }
`;
document.head.appendChild(navStyle);



function showBootScreen() {
  const bootScreen = document.getElementById('bootScreen');
  const bootLines = document.getElementById('bootLines');
  const bootCommand = document.getElementById('bootCommandLine');

  // Sequence of "hacking" style lines to display, one at a time
  const messages = [
    "[+] [OK] Breaching firewall...",
    "[+] [OK] SSH handshakes established",
    "[*] Mapping local network...",
    "[+] [OK] Accessing environment variables",
    "[*] Gathering AI models...",
    "[OK] ML core loaded (beginner mode)",
    "[OK] Linked portfoliosys@bhavya",
    "[*] Spawning UI shells...",
    "[OK] Secure connection established",
    "[OK] Deploying Bhavya portfolio mainframe...",
    "[*] Ready."
  ];
  let idx = 0;
  bootCommand.innerHTML = `Initializing cyber routines<span class='boot-cursor'>█</span>`;

  function nextLine() {
    if (idx < messages.length) {
      bootLines.textContent += '\n' + messages[idx];
      idx++;
      setTimeout(nextLine, 140 + Math.random()*100); // randomizes speed a bit for 'hacking' feel
    } else {
      bootCommand.innerHTML = "[SUCCESS] System boot complete<span class='boot-cursor'>█</span>";
      setTimeout(hideBootScreen, 850);
    }
  }

  function hideBootScreen() {
    bootScreen.style.opacity = 0;
    setTimeout(() => {
      bootScreen.style.display = "none";
      document.body.style.overflow = "";
    }, 800);
  }

  // Start boot-up simulation after a short pause to show logo/art
  setTimeout(nextLine, 650);
  document.body.style.overflow = "hidden";
}

// Call this FIRST in your DOMContentLoaded initializer:
document.addEventListener('DOMContentLoaded', function() {
  showBootScreen();
  // ...your other initializers...
});



function startMatrixRain() {
  const canvas = document.getElementById('matrixCanvas');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const fontSize = 22;
  const columns = Math.floor(width / fontSize);
  const drops = Array(columns).fill(1);

  // Use a mix of Japanese katakana, digits, and English letters for more authentic Matrix feel
  const chars = "アァイィウヴエカガキギクグケゲコゴサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function draw() {
    ctx.fillStyle = "rgba(3,10,16,0.18)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = fontSize + "px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#39ff14";
    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (
        drops[i] * fontSize > height &&
        Math.random() > 0.974 // random reset
      ) {
        drops[i] = 0;
      }
      drops[i]++;
    }
    requestAnimationFrame(draw);
  }

  draw();

  // Ensure resize support
  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  startMatrixRain();
  showBootScreen(); // Call your boot screen animation as before
  // ...other initializers...
});




function initMouseParticles() {
  const canvas = document.getElementById('backgroundParticles');
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  const particleCount = 148;
  const particles = [];
  const maxDist = 120;
  let mouse = {x: width/2, y: height/2};

  // Responsive resize
  window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  });

  document.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Particle class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.8;
      this.vy = (Math.random() - 0.5) * 0.8;
      this.radius = Math.random() * 2.5 + 1.5;
      this.color = 'var(--accent-neon)';
    }
    update() {
      // Mouse repulsion
      let dx = this.x - mouse.x;
      let dy = this.y - mouse.y;
      let dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < maxDist) {
        let angle = Math.atan2(dy, dx);
        this.vx += Math.cos(angle) * 0.22;
        this.vy += Math.sin(angle) * 0.22;
      }
      // Move and bounce
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;
      // Friction for smoother return
      this.vx *= 0.94;
      this.vy *= 0.94;
    }
    draw(ctx) {
      ctx.save();
      ctx.shadowColor = getComputedStyle(document.body).getPropertyValue('--accent-neon').trim() || "#00f6ff";
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
      ctx.fillStyle = ctx.shadowColor;
      ctx.globalAlpha = 0.61;
      ctx.fill();
      ctx.globalAlpha = 1;
      ctx.restore();
    }
  }

  // Initialize particles
  for (let i=0; i<particleCount; i++) particles.push(new Particle());

  function animate() {
    ctx.clearRect(0,0,width,height);
    // Draw lines between close particles
    for(let i=0; i<particleCount; i++) {
      for(let j=i+1; j<particleCount; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 84) {
          ctx.save();
          ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--accent-neon').trim() || "#00f6ff";
          ctx.globalAlpha = 0.12 + (1-dist/84)*0.15;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.restore();
        }
      }
    }
    // Draw and update particles
    for (let particle of particles) {
      particle.update();
      particle.draw(ctx);
    }
    requestAnimationFrame(animate);
  }
  animate();
}

document.addEventListener('DOMContentLoaded', function(){
  initMouseParticles();
});


