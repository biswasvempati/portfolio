module.exports = {
  siteTitle: 'Biswas Vempati',
  siteDescription:
    'Biswas Vempati who is an aspiring Data Scientist, based in Atlanta, who loves learning new things.',
  siteKeywords:
    'Biswas Vempati,Biswas, Vempati, Data Scientist, Machine Learning, Deep Learning',
  siteUrl: 'https://github.com/biswasvempati/',
  siteLanguage: 'en_US',
  name: 'Biswas Vempati',
  location: 'Atlanta,Georgia,United States of America',
  email: 'bvempati1@student.gsu.edu',
  github: 'https://github.com/biswasvempati',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/biswasvempati',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/biswas-vempati-4919ab144/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Certifications',
      url: '/#certifications',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
