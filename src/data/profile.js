import { REPO_URL } from '../brand';

// Sample profile data. Replace with API calls when a backend exists.
export const user = {
  name: 'Arturo Escobedo',
  firstName: 'Arturo',
  lastName: 'Escobedo',
  email: 'arturo.escobedo@artesran.com',
  avatar: '/img/arturo-256.jpg',
  designation: 'Developer & Software Engineer @ Artesran Inc',
  // Round icons in the profile card. Replace '#' with your profile URLs; `hidden: true` hides one.
  // `icon` is a Font Awesome 4 class (fa-linkedin, fa-github, fa-facebook, fa-youtube, ...),
  // or 'x' for the X logo, which Font Awesome 4 doesn't have.
  social: [
    { name: 'LinkedIn', icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/arturo-escobedo-522a4a2' },
    { name: 'GitHub', icon: 'fa-github', url: REPO_URL },
    { name: 'X', icon: 'x', url: '#' },
    { name: 'Facebook', icon: 'fa-facebook', url: '#', hidden: true },
  ],
  // Intro block shown in the profile card.
  services: {
    title: 'Services',
    intro:
      "I'm a principal software engineer, 20+ years in, mostly building enterprise CRM systems and the AI layer that makes them smarter. " +
      'My recent work is in the intersection of CRM engineering and agentic AI - tool definitions and backend services that let embedded copilots ' +
      "execute real actions on a user's behalf, with human-in-the-loop confirmations wherever that matters. " +
      "On my own time I shipped a solo indie game and I build small projects to explore ideas the day job doesn't cover. Both of " +
      'the projects on this site started that way.',
  },
  country: 'United States',
  info: [
    { title: 'Founder', value: 'Artesran Inc' },
    { title: 'Education', value: 'BS Computer Science, SDSU' },
    {
      title: 'Skills',
      value:
        '.NET, C#, ASP.NET Core, C/C++, Python, ObjectARX, REST APIs, SQL, CosmosDB, Azure Service Bus, Angular, React, ' +
        'HTML, CSS, JavaScript, XML, GitHub, Copilot, Claude Code, MCP.',
    },
  ],
};

// Work history for the Experience tab, most recent first.
// `end` can be 'Present'; `logo` (an image path under public/) is optional.
export const experience = [
  {
    role: 'Principal Software Engineer',
    company: 'Blackbaud',
    location: 'Charleston, South Carolina (remote)',
    start: '2008',
    end: '2026',
    logo: '/img/blackbaud_logo.jpg',
    summary: "Created and maintained enterprise CRM systems, focusing on scalability and performance.",
    highlights: ['Built micro-frontend architecture in Angular to communicate between SPAs', 
      'Architected API layers in C#/.NET Core powering backend services and frontend applications.',
      'Led migration of legacy JMS/Oracle service bus messaging architecture to Azure Service Bus backed by Azure Cosmos DB - eliminating recurring server and licensing costs and saving the organization thousands of dollars annually.',
      'Applied LLM tool-calling and agentic patterns to accelerate legacy code translation and spec verifications reducing manual review overhead on large-scale API migrations.',
      'Created and maintained RESTful APIs to support frontend applications and third-party integrations.'
    ],
  },
  {
    role: 'Solutions Architect',
    company: 'Goal Financial',
    location: 'San Diego, CA',
    start: '2005',
    end: '2007',
    logo: null,
    summary: 'Created and developed end-to-end loan servicing platform covering marketing, applications, servicing and payment processing.',
    highlights: ['Durable transition handling and audit-grade recordkeeping across ASP.NET, C#, SQL Server, Javascript.',
      "Delivered web services and reporting subsystems for operations and executive stakeholders across marketing, applications, servicing and payment processing."
    ],
  },
    {
    role: 'Senior Software Engineer',
    company: 'Titan',
    location: 'San Diego, CA',
    start: '2004',
    end: '2005',
    logo: null,
    summary: 'Developed enterprise web-based inventory tracking system for military GPS devices (Secret clearance).',
    highlights: ['Deployed across all branches of U.S. Armed forces, built on ASP.NET, C#, SQL Server with cross-branch reporting and audit grade recordkeeping.'
    ],
  },
    {
    role: 'Senior Software Engineer',
    company: 'American Dynamics',
    location: 'San Diego, CA',
    start: '2002',
    end: '2004',
    logo: null,
    summary: 'Developed and validated windows-based physical security software.',
    highlights: ['Validated Windows-based physical security software for compliance and performance.'
    ],
  },
    {
    role: 'Senior Software Engineer',
    company: 'Peregrine Systems',
    location: 'San Diego, CA',
    start: '2000',
    end: '2002',
    logo: null,
    summary: 'Built online enterprise asset management software with CAD system integrations.',
    highlights: ['Integrations for facilities and infrastructure tracking using CAD system integrations for Autocad, VISIO, and Solidworks.',
      "Implemented web-based asset management interface and MFC/ATL-based desktop components using libraries like ObjectARX."
    ],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Motiva Software Corporation',
    location: 'San Diego, CA',
    start: '1998',
    end: '2000',
    logo: null,
    summary: 'Developed native windows desktop document management software.',
    highlights: ['Developed native windows desktop document management software with full support for document versioning, search, retrieval and workflows.',
      'Implemented using MFC/ATL based desktop components, ObjectARX and Microsoft SQL Server and integrating with AutoCAD, Mechanical Desktop and Inventor'
    ],
  },
  {
    role: 'QA Automation/Tools Developer',
    company: 'Doctor Design/Hewlett Packard',
    location: 'San Diego, CA',
    start: '1994',
    end: '1997',
    logo: null,
    summary: 'Software test automation and tools development.',
    highlights: [
      'Developed and maintained software test automation frameworks and tools to improve testing efficiency and coverage.'
    ]
  },
];
