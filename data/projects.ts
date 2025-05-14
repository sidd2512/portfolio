export interface Project {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  techStack: string[]
  githubUrl: string
  liveUrl: string | null
  images: string[]
  challenges: string
  category: "main" | "other"
}

export interface OtherProject {
  id: number
  title: string
  shortDescription: string
  fullDescription: string
  techStack: string[]
  githubUrl: string
  liveUrl: string | null
  images: string[]
  challenges: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Trackcoders",
    shortDescription: "Competitive coding progress tracker with multi-platform integration",
    fullDescription: `
A full-stack platform that helps coders track their problem-solving progress across LeetCode, CodeChef, and GeeksforGeeks.

Key Features:
• Multi-platform Sync: Automated daily scraping of solved problems using Playwright, handling platform-specific authentication and anti-bot measures
• Social Features: Compare your progress with friends through shared dashboards and customizable metrics
• Data Visualization: Interactive charts showing problem breakdown by difficulty (Easy/Medium/Hard) and category (Arrays, DP, Trees)

Technical Highlights:
- Developed a modular scraping service with automatic retry logic for unreliable platforms
- Implemented real-time leaderboard updates using MongoDB change streams
- Designed a caching layer to reduce platform API calls by 75%`,
    techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Playwright"],
    githubUrl: "https://github.com/sidd2512/TrackCoder-Frontend",
    liveUrl: "https://trackcoder-lilac.vercel.app/",
    images: [
      "https://github.com/sidd2512/TrackCoder-Frontend/raw/main/UI%20Screenshot/Screenshot%201.png",
      "https://github.com/sidd2512/TrackCoder-Frontend/raw/main/UI%20Screenshot/Screenshot%203.png",
      "https://github.com/sidd2512/TrackCoder-Frontend/raw/main/UI%20Screenshot/Screenshot%204.png"
    ],
    challenges: `
1. Platform Diversity: Each coding site required unique scraping logic and session management
   - Solution: Created adapter pattern with base scraper class and platform-specific implementations

2. Data Consistency: Maintaining accurate problem counts during platform UI changes
   - Solution: Implemented checksum verification for scraped data with manual override capability`,
    category: "main"
  },
  {
    id: 2,
    title: "init-backend",
    shortDescription: "CLI tool for scaffolding production-ready backend projects",
    fullDescription: `
A zero-configuration backend generator that creates optimized starter projects with:

Tech Stack Choices: 
• Language: JavaScript or TypeScript
• Framework: Express.js or native HTTP server
• Database: MongoDB (Mongoose) or PostgreSQL (TypeORM)
• Auth: JWT with optional OAuth2 templates

Production-Ready Features:
• Pre-configured logging with Winston and Morgan
• Health check endpoints with Docker-ready probes
• Environment validation using envalid
• CI/CD templates for GitHub Actions

Developer Experience:
• Interactive CLI with Inquirer.js for project customization
• Automatic dependency installation with progress indicators
• Git initialization with conventional commit hooks

Benchmarks:
• Generates full project structure in <5s
• Reduces initial setup time from hours to minutes`,
    techStack: ["Node.js", "TypeScript", "Commander.js", "Inquirer.js", "Express"],
    githubUrl: "https://github.com/sidd2512/init-backend",
    liveUrl: "https://www.npmjs.com/package/init-backend",
    images: ["https://github.com/sidd2512/init-backend/blob/main/demo.png?raw=true"],
    challenges: `
1. Dynamic Template Generation: Supporting multiple tech combinations without code duplication
   - Solution: Developed a template engine with conditional file inclusion

2. Dependency Management: Handling conflicting package versions
   - Solution: Created version compatibility matrix with fallback resolutions`,
    category: "main"
  },
  {
    id: 3,
    title: "C++ Web Server",
    shortDescription: "High-performance web server with load balancing and caching",
    fullDescription: `
A high-performance web server built from scratch in modern C++ featuring:

Core Architecture:
• Event-driven model with epoll for I/O multiplexing
• Fixed-size thread pool (configurable worker threads)
• Lock-free task queue for request distribution

Performance Features:
• LRU cache with:
  - TTL-based eviction
  - Memory usage limits (max 512MB)
  - Cache stampede protection
• Load balancing:
  - Weighted round-robin algorithm
  - Backend health checks
  - Circuit breaker pattern for failed nodes

Benchmarks (4-core VM):
• Throughput: 26,422 req/sec (static files)
• Latency: 3.5ms p99 (cached responses)
• Memory: <50MB footprint under load

Deployment:
• Single-binary deployment (<2MB stripped)
• Docker support with multi-stage builds
• Systemd service templates included`,
    techStack: ["C++17", "POSIX Sockets", "Multithreading", "LRU Cache", "Docker"],
    githubUrl: "https://github.com/sidd2512/web-server",
    liveUrl: null,
    images: ["https://raw.githubusercontent.com/sidd2512/web-server/refs/heads/main/diagram.png"],
    challenges: `
1. Thread Safety: Preventing cache corruption under high concurrency
   - Solution: Implemented read-write locks with lock downgrading

2. Resource Management: Handling socket descriptor leaks
   - Solution: Created RAII wrapper classes with reference counting`,
    category: "main"
  },
  {
    id: 4,
    title: "Other Projects",
    shortDescription: "Collection of algorithmic and systems programming projects",
    fullDescription: `
A collection of diverse projects showcasing various programming paradigms and technologies:

1. Hotel Management System (C++/Qt):
• Room allocation algorithms with conflict resolution
• Multi-threaded reservation processing
• SQLite backend with ACID transactions

2. Network Packet Analyzer (Python):
• Raw socket implementation for packet capture
• Protocol decoding (HTTP/DNS/TCP)
• Bandwidth usage visualization

3. Compiler Frontend (Java/ANTLR):
• Lexical analyzer for custom language
• Recursive descent parser
• Abstract syntax tree generation

4. Distributed Key-Value Store (Go):
• Raft consensus implementation
• Consistent hashing for data partitioning
• Jepsen-style fault injection testing

Common Technical Themes:
• Focus on algorithmic efficiency
• Rigorous testing methodologies
• Clean interface design`,
    techStack: ["C++", "Python", "Java", "Go", "Qt", "ANTLR"],
    githubUrl: "https://github.com",
    liveUrl: null,
    images: ["/path/to/image7.png"],
    challenges: `
1. Cross-project knowledge transfer
   - Solution: Maintained consistent documentation and coding standards

2. Performance optimization across different domains
   - Solution: Implemented benchmarking suites for each project

3. Maintaining consistent coding standards
   - Solution: Created custom linting rules and automated checks`,
    category: "other"
  }
]

export const otherProjects: OtherProject[] = [
  {
    id: 101,
    title: "Tic-Tac-Toe Game",
    shortDescription: "A simple Tic-Tac-Toe game using HTML, CSS, and JavaScript.",
    fullDescription: `
A classic Tic-Tac-Toe game implementation with modern features:

Game Features:
• Interactive game board with smooth animations
• Win detection for all possible combinations
• Score tracking for multiple games
• Responsive design for all screen sizes

Technical Implementation:
• Pure JavaScript for game logic
• CSS Grid for board layout
• Local storage for score persistence
• Mobile-first responsive design`,
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/sidd2512/Tic-Tac-Toe-game",
    liveUrl: "https://tic-tac-toe-game-sidd.vercel.app/",
    images: ["https://github.com/sidd2512/Tic-Tac-Toe-game/blob/main/ui.jpeg?raw=true"],
    challenges: `
1. Game Logic Implementation
   - Solution: Created efficient win condition checking algorithm

2. State Management
   - Solution: Implemented clean state management with pure functions`
  },
  {
    id: 102,
    title: "Weather App",
    shortDescription: "Weather forecast application using JavaScript, HTML, and CSS.",
    fullDescription: `
A modern weather application with real-time data:

Features:
• Current weather conditions
• 5-day forecast
• Location-based weather
• Temperature unit conversion
• Weather icons and animations

Technical Details:
• OpenWeatherMap API integration
• Geolocation support
• Responsive design
• Error handling for API failures`,
    techStack: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/sidd2512/weather-app",
    liveUrl: "https://weather-app-siddharth.netlify.app/",
    images: ["https://github.com/sidd2512/weather-app/blob/main/ui.jpeg?raw=true"],
    challenges: `
1. API Integration
   - Solution: Implemented robust error handling and fallback mechanisms

2. Location Services
   - Solution: Added graceful degradation for browsers without geolocation support`
  },
  {
    id: 103,
    title: "Hotel Management System",
    shortDescription: "Hotel management system using C++.",
    fullDescription: `
A comprehensive hotel management system with the following features:

Core Features:
• Room booking and management
• Customer information system
• Billing and payment processing
• Staff management
• Report generation

Technical Implementation:
• Object-oriented design
• File-based data persistence
• Console-based user interface
• Input validation and error handling`,
    techStack: ["C++"],
    githubUrl: "https://github.com",
    liveUrl: null,
    images: ["/placeholder.svg?height=600&width=800"],
    challenges: `
1. Data Structure Design
   - Solution: Implemented efficient data structures for quick room lookup

2. File I/O Operations
   - Solution: Created robust file handling with error recovery`
  },
  {
    id: 104,
    title: "TODO List",
    shortDescription: "Task management app using React.js and Tailwind CSS.",
    fullDescription: `
A modern task management application with the following features:

Core Features:
• Add, edit, and delete tasks
• Task categorization
• Priority levels
• Due date tracking
• Task completion status

Technical Implementation:
• React hooks for state management
• Local storage persistence
• Responsive design
• Dark mode support`,
    techStack: ["React.js", "Tailwind CSS"],
    githubUrl: "https://github.com/sidd2512",
    liveUrl: null,
    images: ["/placeholder.svg?height=600&width=800"],
    challenges: `
1. State Management
   - Solution: Implemented efficient state updates with React hooks

2. Data Persistence
   - Solution: Created robust local storage handling with error recovery`
  }
]
