export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#Home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Requesto - Uber for requests',
      desc: 'Requesto is a revolutionary Software-as-a-Service platform that transforms the way people get their problems solved in a vicinity. It is an Uber-like platform for requests.Where anyone who faces any problem can post in on request board and anyone else who can solve it can offer their services and connect through our platform.',
      subdesc:
        'Built as a unique Software-as-a-Service app with React.js , MongoDB, Expressjs, Node.js (MERN)',
      href: 'https://www.requesto.in',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'MONGOdb',
          path: 'assets/mongoDB.png',
        },
        {
          id: 3,
          name: 'nodeJS',
          path: '/assets/nodeJS.png',
        },
        {
          id: 4,
          name: 'expressJS',
          path: '/assets/expressJS.png',
        },
      ],
    },
    // {
    //   title: 'LiveDoc - Real-Time Google Docs Clone',
    //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    //   subdesc:
    //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    //   texture: '/textures/project/project2.mp4',
    //   logo: '/assets/project-logo2.png',
    //   logoStyle: {
    //     backgroundColor: '#13202F',
    //     border: '0.2px solid #17293E',
    //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
    //   },
    //   spotlight: '/assets/spotlight2.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    // {
    //   title: 'CarePulse - Health Management System',
    //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    //   subdesc:
    //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    //   texture: '/textures/project/project3.mp4',
    //   logo: '/assets/project-logo3.png',
    //   logoStyle: {
    //     backgroundColor: '#60f5a1',
    //     background:
    //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
    //     border: '0.2px solid rgba(208, 213, 221, 1)',
    //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    //   },
    //   spotlight: '/assets/spotlight3.png',
    //   tags: [
    //     {
    //       id: 1,
    //       name: 'React.js',
    //       path: '/assets/react.svg',
    //     },
    //     {
    //       id: 2,
    //       name: 'TailwindCSS',
    //       path: 'assets/tailwindcss.png',
    //     },
    //     {
    //       id: 3,
    //       name: 'TypeScript',
    //       path: '/assets/typescript.png',
    //     },
    //     {
    //       id: 4,
    //       name: 'Framer Motion',
    //       path: '/assets/framer.png',
    //     },
    //   ],
    // },
    {
      "title": "MediGyaan AI - Medical Knowledge Chatbot",
      "desc": "MediGyaan AI is an advanced AI-powered medical chatbot designed to provide precise answers to medicine-related queries. It processes medical textbooks, extracts knowledge, and enables users to get reliable insights in real time.",
      "subdesc": "Built with FastAPI, Groq API, Pinecone, and React, MediGyaan AI leverages NLP and vector search for efficient medical information retrieval.",
      "href": "https://medigyaan-ai.vercel.app/",  
      "texture": "/textures/project/MediGyaanAI.mp4",
      "logo": "/assets/medigyaan-logo.png",
      "logoStyle": {
        "backgroundColor": "#16213E",
        "border": "0.2px solid #1A2A52",
        "boxShadow": "0px 0px 60px 0px #2F67B64D"
      },
      "spotlight": "/assets/spotlight1.png",
      "tags": [
        {
          "id": 1,
          "name": "FastAPI",
          "path": "/assets/fastapi.png"
        },
        {
          "id": 2,
          "name": "Groq API",
          "path": "/assets/groq.png"
        },
        {
          "id": 3,
          "name": "Pinecone",
          "path": "/assets/pinecone.png"
        },
        {
          "id": 4,
          "name": "React",
          "path": "/assets/react.svg"
        },
      
        {
          "id": 6,
          "name": "NLP",
          "path": "/assets/nlp.png"
        },
      ],
    },
    {
      title: 'Requesto - Android and IOS App',
      desc: 'Requesto is a revolutionary Software-as-a-Service platform that transforms the way people get their problems solved in a vicinity. It is an Uber-like platform for requests.Where anyone who faces any problem can post in on request board and anyone else who can solve it can offer their services and connect through our platform.',
      subdesc:
        'Built as a unique Software-as-a-Service app with REACT NATIVE , MongoDB, Expressjs, Node.js (MERN)',
      href: 'https://www.requesto.in',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'MONGOdb',
          path: 'assets/mongoDB.png',
        },
        {
          id: 3,
          name: 'nodeJS',
          path: '/assets/nodeJS.png',
        },
        {
          id: 4,
          name: 'expressJS',
          path: '/assets/expressJS.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Excited to work',
      pos: 'In Leadership and Development roles.',
      duration: '2025-future',
      title: "I am deeply passionate about working in development and tech-related roles, regardless of the domain. I am always eager to learn, adapt, and improve. Startups and companies innovating with new ideas and projects truly inspire me, and I would be thrilled to collaborate with highly intelligent and driven individuals. While I may not have all the answers upfront, I am relentless in finding solutions and implementing what is needed to drive success.",
      icon: '/assets/Nlogo.jpg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Requesto',
      pos: 'Co-founder',
      duration: 'June 2024- Dec 2024',
      title: "I founded and ran Requesto as a startup during my 2nd and 3rd semesters, taking on the roles of both founder and developer. I independently handled in-house web and app development, scaling the platform to over 250 users. This journey provided me with invaluable learning experiences across various domains.",
      icon: '/assets/project-logo1.png',
      animation: 'clapping',
    },
    // {
    //   id: 3,
    //   name: 'Notion',
    //   pos: 'Junior Web Developer',
    //   duration: '2019 - 2020',
    //   title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    //   icon: '/assets/notion.svg',
    //   animation: 'salute',
    // },
  ];