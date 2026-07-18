// Featured project data — ordered as on the CV.
// Add real screenshots to /public/project-images/ using the filenames below.
// Each image should be roughly 1600x1000 px for a crisp 16:10 card.
export const projects = [
  {
    slug: 'giglog',
    title: 'GigLog',
    label: 'Full-Stack MEN Project',
    description:
      'A MEN-stack app for tracking live music gigs. Users sign up, log in and create, view, edit and delete records of gigs they have attended (artist, venue, city, date, notes). Session-based auth with hashed passwords, MVC architecture with the seven RESTful routes, and a 1-to-many User → Gig relationship in MongoDB.',
    technologies: [
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Mongoose',
      'EJS',
      'CSS',
    ],
    image: '/project-images/giglog.png',
    imageAlt:
      'GigLog dashboard showing a chronological list of past live music gigs with venue, city and date.',
    links: {
      repo: 'https://github.com/tomrhysjones/giglog',
      live: 'https://giiglog-9baf058f53ab.herokuapp.com/gigs',
    },
    accent: 'from-accent-400/10 to-accent-400/[0.02]',
  },
  {
    slug: 'setlistlab',
    title: 'SetlistLab',
    label: 'Featured MERN Project',
    description:
      'A full-stack MERN application that helps live performers manage songs and build setlists for specific gigs. Split into a React (Vite) frontend and an Express REST API. JWT + bcrypt auth, many-to-many songs↔setlists via Mongoose ObjectId references, and Context API for global auth state.',
    technologies: [
      'React (Vite)',
      'Node.js',
      'Express',
      'MongoDB Atlas',
      'Mongoose',
      'JWT',
      'bcrypt',
      'Context API',
    ],
    image: '/project-images/setlistlab.png',
    imageAlt:
      'SetlistLab interface showing songs and reusable setlists organised for live performance.',
    links: {
      frontend: 'https://github.com/tomrhysjones/setlistlab-frontend',
      backend: 'https://github.com/tomrhysjones/setlistlab-backend',
      live: 'https://setlistlab-frontend-8e968661be01.herokuapp.com/',
    },
    accent: 'from-accent-500/15 to-accent-500/[0.03]',
  },
  {
    slug: 'record-shelf',
    title: 'Record Shelf',
    label: 'Django Full-Stack Project',
    description:
      'A full-stack Django CRUD web application for cataloguing a personal vinyl record collection, deployed on Heroku with PostgreSQL. MVT pattern with a User → Record one-to-many relationship, Django auth with hashed passwords and login-protected views, and full record CRUD with form validation.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Heroku', 'HTML5', 'CSS3'],
    image: '/project-images/record-shelf.png',
    imageAlt:
      'Record Shelf application displaying a personal vinyl record collection with ratings and reviews.',
    links: {
      repo: 'https://github.com/tomrhysjones/record-shelf',
      live: 'https://record-shelf-f64637b175bf.herokuapp.com/',
    },
    accent: 'from-parchment-100/10 to-parchment-100/[0.02]',
  },
  {
    slug: 'ocean-match',
    title: 'Ocean Match',
    label: 'JavaScript Game',
    description:
      'A responsive browser-based marine-life memory-matching game deployed on GitHub Pages. All game logic written from scratch in vanilla JavaScript — grid generation, tile shuffling, match detection and state handling — with three difficulty levels, a countdown timer and a mismatch limit.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'CSS Grid', 'Flexbox'],
    image: '/project-images/ocean-match.png',
    imageAlt:
      'Ocean Match memory game interface with a grid of ocean creature cards.',
    links: {
      repo: 'https://github.com/tomrhysjones/ocean-match',
      live: 'https://tomrhysjones.github.io/ocean-match/',
    },
    accent: 'from-accent-300/10 to-accent-300/[0.02]',
  },
];
