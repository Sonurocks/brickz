  // src/lib/constants.ts
  // All site-wide constants: nav links, services data, projects, team, etc.

  export const NAV_LINKS = [
    { label: 'Home',     href: '#home' },
    { label: 'About',    href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Blog',     href: '#blog' },
    { label: 'Contact',  href: '#contact' },
  ];

  export const SERVICES = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Complex data into clear and strategic in that improve performance growth.',
      features: ['Scalable Growth Planning', 'Anit- Competitive Conduct'],
      icon: 'home',
      image: '/assets/service/post1.png',
    },
    {
      id: 2,
      title: 'Commercial Construction',
      description: 'Complex data into clear and strategic in that improve performance growth.',
      features: ['Change Management Support', 'Performance Optimization'],
      icon: 'building',
      image: '/assets/service/post2.png',
    },
    {
      id: 3,
      title: 'Industrial Construction',
      description: 'Complex data into clear and strategic in that improve performance growth.',
      features: ['Tailored Business Strategies', 'Industry-Specific Expertise'],
      icon: 'factory',
      image: '/assets/service/post3.png',
    },
  ];

  export const PROJECTS = [
    {
      id: 1,
      title: 'Sustainable Pathway',
      category: 'Commercial',
      tags: ['Commercial', 'Construction'],
      image: '/assets/about/project1.png',
    },
    {
      id: 2,
      title: 'Metro Tower Complex',
      category: 'Construction',
      tags: ['Construction'],
      image: '/assets/about/project2.png',
    },
    {
      id: 3,
      title: 'Urban Bridge Project',
      category: 'Industrial',
      tags: ['Industrial'],
      image: '/assets/about/project3.png',
    },
    {
      id: 4,
      title: 'Greenfield Stadium',
      category: 'Commercial',
      tags: ['Commercial'],
      image: '/assets/about/project4.png',
    },
    {
      id: 5,
      title: 'Harbor Warehouse',
      category: 'Industrial',
      tags: ['Industrial'],
      image: '/assets/about/project5.png',
    },
    {
      id: 6,
      title: 'Sunset Residences',
      category: 'Residential',
      tags: ['Residential'],
      image: '/assets/about/project6.png',
    },
    {
      id: 7,
      title: 'Skyline Plaza',
      category: 'Commercial',
      tags: ['Commercial', 'Construction'],
      image: '/assets/about/project7.png',
    },
    {
      id: 8,
      title: 'Highland Complex',
      category: 'Residential',
      tags: ['Residential'],
      image: '/assets/about/project8.png',
    },
  ];

  export const PROJECT_FILTERS = [
    { label: 'All Projects', value: 'All Projects' },
    { label: 'Commercial (04)', value: 'Commercial' },
    { label: 'Construction (04)', value: 'Construction' },
    { label: 'Industrial (04)', value: 'Industrial' },
    { label: 'Residential (04)', value: 'Residential' },
  ];

  export const TEAM = [
    {
      id: 1,
      name: 'Carmen William',
      role: 'Construction Worker',
      image: '/assets/team1.png',
    },
    {
      id: 2,
      name: 'Leslie Alexander',
      role: 'Construction Worker',
      image: '/assets/team2.png',
    },
  ];

  export const TESTIMONIALS = [
    {
      id: 1,
      quote: 'Exceptional service from start to finish. They understood our needs, delivered on time, and exceeded expectations. Highly recommend!',
      name: 'Ronald Richards',
      role: 'Office Woner',
      rating: 4.5,
    },
    {
      id: 2,
      quote: 'We believe that every business is uniquids our approach never one size fits all. We tailor our strategies to fit your goals is and industry.',
      name: 'Leslie Alexander',
      role: 'School Woner',
      rating: 4.0,
    },
    {
      id: 3,
      quote: 'We are impressed with their dedication and results. Our business processes are more efficient, and growth has accelerated remarkably.',
      name: 'Savannah Nguyen',
      role: 'Building Woner',
      rating: 5.0,
    },
    {
      id: 4,
      quote: 'Professional, knowledgeable, and responsive. Their solutions transformed our operations, making our workflows seamless.',
      name: 'Marry Holder',
      role: 'Hospital Woner',
      rating: 4.5,
    },
    {
      id: 5,
      quote: 'Outstanding support and expertise! Our startup achieved significant growth thanks to their guidance. Truly professional.',
      name: 'Abdur Rashid',
      role: 'House Woner',
      rating: 5.0,
    },
  ];

  export const BLOG_POSTS = [
    {
      id: 1,
      title: 'Green Construction: Building a Sustainable Future',
      date: 'July 25, 2024',
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&q=80',
      category: 'Sustainability',
    },
    {
      id: 2,
      title: 'Top 5 Trends Shaping Modern Architecture in 2024',
      date: 'July 18, 2024',
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&auto=format&q=80',
      category: 'Architecture',
    },
    {
      id: 3,
      title: 'How to Choose the Right Contractor for Your Project',
      date: 'July 10, 2024',
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&q=80',
      category: 'Tips',
    },
  ];

  export const WORK_PROCESS = [
    {
      step: '01',
      title: 'Planning & Consultation',
      description: 'We begin by understanding your current with state goals and challenges.',
    },
    {
      step: '02',
      title: 'Design & Engineering',
      description: `Our mission is to empower businesses with the insight structure and tools needed`,
    },
    {
      step: '03',
      title: 'Construction & Execution',
      description: 'We provide a antenna base on facts hype to help with improve returns your.',
    },
  ];

  export const STATS = [
    { value: '25+', label: 'Years Experience' },
    { value: '850+', label: 'Projects Completed' },
    { value: '120+', label: 'Expert Team Members' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  export const PARTNER_LOGOS = [
    { name: 'access', src: '/assets/ptnr/ptnr1.png' },
    { name: 'cowrywise', src: '/assets/ptnr/ptnr2.png' },
    { name: 'Puzzle', src: '/assets/ptnr/ptnr3.png' },
  ];
