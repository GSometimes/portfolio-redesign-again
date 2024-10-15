type Project = {
  title: string;
  tech: string;
  description: string;
  link?: string;
};

export const RecentWorkData: Project[] = [
  {
    title: 'Code of the Undead: Firewall of Resilience',
    tech: 'React, TypeScript, Tailwind CSS',
    description:
      'Created a lesson on state management with useState and useContext by constructing a dynamic navigation bar with React, TypeScript, Tailwind CSS, and Framer Motion for animations.',
    link: 'https://github.com/GSometimes/code-of-the-undead-react-context',
  },
  {
    title: 'Code of the Undead: A Byte of Survival',
    tech: 'HTML, CSS, JavaScript',
    description:
      'Created a practical coding exercise for building out carousel functionality from scratch, reinforcing JavaScript fundamentals and DOM manipulation skills.',
    link: 'https://github.com/GSometimes/code-of-the-undead-carousel-challenge',
  },
  {
    title: 'Food, Friends, Memories',
    tech: 'HTML, CSS, JavaScript',
    description:
      'Created a comprehensive design challenge that guides students through the process of building a responsive landing page for a blog, focusing on layout and design fundamentals.',
    link: 'https://github.com/GSometimes/food-friends-memories-design-challenge',
  },
];

export const FutureWorkData: Project[] = [
  {
    title: 'Seeker AI: Know the Who, Let Seeker Find the What',
    tech: 'OpenAI, React, TypeScript, Tailwind CSS',
    description:
      'Developing an AI shopping assistant blending OpenAI with the MERN Stack to effortlessly connect you with products and services tailored just for you.',
  },
  {
    title: 'Side Chick: Indulge in the Other Side of Sunday',
    tech: 'React, TypeScript, Tailwind CSS',
    description:
      'Designing a concept site for a popup restaurant named "Side Chick", which adds a tantalizing twist to traditional dining as it only opens on Sundays.',
  },
  {
    title: 'NoBSipes: Recipes without the Ramble',
    tech: 'Cheerio, React, TypeScript, Tailwind CSS, Express',
    description:
      'Developing a web scraper using Cheerio and MERN to neatly extract and display the ingredients, directions, and image from recipe websites, eliminating the extra fluff.',
  },
];
