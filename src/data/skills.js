import {
  Terminal,
  Code2,
  Server,
  Database,
  Wrench,
  Workflow,
} from 'lucide-react';

export const skillGroups = [
  {
    title: 'Languages',
    icon: Terminal,
    items: ['JavaScript (ES6+)', 'Python', 'Java', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    items: [
      'React',
      'Vite',
      'Hooks',
      'Context API',
      'Responsive Design',
      'CSS Grid',
      'Flexbox',
      'Fetch API',
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    items: [
      'Node.js',
      'Express',
      'Django',
      'REST APIs',
      'JWT',
      'bcrypt',
      'Session auth',
      'MVC / MVT',
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MongoDB Atlas', 'Mongoose ODM', 'PostgreSQL', 'Relational schema design'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Chrome DevTools',
      'npm',
      'GitHub Pages',
      'Render',
      'Heroku',
      'Netlify',
    ],
  },
  {
    title: 'Methodologies',
    icon: Workflow,
    items: [
      'OOP',
      'MVC architecture',
      'RESTful design',
      'ERDs & wireframes',
      'Git workflow',
      'Agile collaboration',
    ],
  },
];
