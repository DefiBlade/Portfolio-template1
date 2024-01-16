// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
} from "../assets";

// Navbar Links
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/ApesTalent",
  },
];

// Services
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "OpenAI/ChatGPT Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

// Technologies
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

// Experiences
const experiences = [
  {
    title: "Front-end Developer",
    company_name: "Tc-web-technology",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Sep 2020 - June 2021",
    points: [
      "Used React JS to produce necessary front- end design in various pages: form validation, user authentication, CRUD, card layout, populate information, etc.",
      "Involved in designing and developing the web pages using HTML 5, CSS3, JavaScript, Bootstrap, SASS, LESS, React JS, Redux, Flex, Node JS, Mongo DB",
      "Developed responsive applications using Bootstrap which allowed the same application to be optimized for both mobile and desktop resolutions",
      "Created Single Page Application with loading multiple views using route services and adding more user experience to make it more dynamic by using React JS framework",
      "Achieved React JS Authentication for the application and stored generated token so that token can be sent with each request to secure resources in Web API",
    ],
  },
  {
    title: "Full-stack Developer",
    company_name: "Softtec s.p.a",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2021 - Aug 2022",
    points: [
      "Analyzed business requirement to translate functional requirements into technical requirements and developed web application using MongoDB, Express, Node JS and React JS/Redux (MERN stack).",
      "Designed and implemented the data flow of the React application by wiring up State Store, Components, Containers, Action Creators and Reducers.",
      "Used Axios to call web services/APIs to fetch data from backend and render the data to data store of Redux.",
      "Used tools such as Git, Jira, Slack for version control, bug tracking and communication respectively.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Self Employed",
    icon: meta,
    iconBg: "#383E56",
    date: "Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

// Testimonials
const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Andrei proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Andrei does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Andrei optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

// Projects
const projects = [
  {
    name: "Moments of Space",
    description:
      "Moments of Space combines ancient meditation methods with the latest technology to create a truly innovative approach to mindfulness",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
      {
        name: "NFT",
        color: "pink-text-gradient",
      },
      {
        name: "Web3",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/ApesTalent/Mos-Open-Letter",
    live_site_link: "https://openletter.momentsofspace.com",
  },
  {
    name: "AXL INU",
    description:
      "Axl is a Decentralized exchange with smart routing on ETH Chain (ETH) that will supports Liquidity Providing, Yield Farming, Staking, Launching IDO, NFT and Lending & borrow.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "ICO",
        color: "pink-text-gradient",
      },
      {
        name: "Marketplace",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/ApesTalent/AxlToken",
    live_site_link: "https://www.axltoken.com",
  },
  {
    name: "CasperPad",
    description:
      "CasperPad (Marketcap: $450M) is the first Casper-supported decentralized Launchpad built to launch next level projects on the Casper Network",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ICO",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "LaunchPad",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/ApesTalent/CasperPad-Sale",
    live_site_link: "https://casper-pad.io",
  },
  {
    name: "Amazon Scraping System",
    description:
      "Amazon Products Scraping System, which allows brokers and clients to get necessary product information via the system by using 3K+ proxies",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "blue-text-gradient",
      },
      {
        name: "MUI",
        color: "green-text-gradient",
      },
      {
        name: "Golang",
        color: "pink-text-gradient",
      },
      {
        name: "Amazon",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/ApesTalent/Amazon-Scraping-System",
    live_site_link:
      "https://drive.google.com/file/d/1jvnsGr6KY2_uwURRDrugdi2__H40RYix/view?usp=share_link",
  },
  {
    name: "Funded Trading Plus",
    description:
      "Our unique funded trading programs are your route to a $2500000 trading account. We cover the losses. You keep up to 90% of the profit!",
    tags: [
      {
        name: "Trading",
        color: "blue-text-gradient",
      },
      {
        name: "Blockchain",
        color: "blue-text-gradient",
      },
      {
        name: "Strategy",
        color: "green-text-gradient",
      },
      {
        name: "TripleA",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/ApesTalent/Fund-Trading-Payment-System",
    live_site_link: "https://www.fundedtradingplus.com",
  },
  {
    name: "PHY Wallet",
    description:
      "A web/mobile cryptocurrency wallet where users can purchase Bitcoin, Ethereum, BNB, Ada, Fantom, Cake, Uniswap, Erc20, Bep20 Tokens and NFT as well at the best price.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Cryptocurrency Wallet",
        color: "green-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/ApesTalent/Phy-Dog-Wallet",
    live_site_link:
      "https://drive.google.com/file/d/1YSvDRBj1kaj89BVPyYDOb6tDxhbztd9N/view?usp=share_link",
  },
  {
    name: "ChatGPT Mobile App",
    description:
      "Mobile application that allows users to interact with OpenAI's GPT-3 language model through a simple and user-friendly interface shortly using Kotlin",
    tags: [
      {
        name: "ChatGPT",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "blue-text-gradient",
      },
      {
        name: "Davinci 003",
        color: "green-text-gradient",
      },
      {
        name: "Kotlin",
        color: "pink-text-gradient",
      },
      {
        name: "Mobile development",
        color: "pink-text-gradient",
      },
    ],
    image: project7,
    source_code_link: "https://github.com/ApesTalent/ChatGPT-Davinci-App",
    live_site_link:
      "https://github.com/ApesTalent/ChatGPT-Davinci-App",
  },
  {
    name: "TinkerBots NFT",
    description:
      "Space Ball, a Rocket powered Racket VR Esport. Eve's Genesis drops 2222 of 6666 Tinkerbots, a Community Driven Pets that will join you on the epic journey to the top!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React-Hook",
        color: "blue-text-gradient",
      },
      {
        name: "Scroll Animation",
        color: "green-text-gradient",
      },
      {
        name: "NFT",
        color: "pink-text-gradient",
      },
      {
        name: "Web3",
        color: "pink-text-gradient",
      },
    ],
    image: project8,
    source_code_link: "https://github.com/ApesTalent/TinkberBot-NFT",
    live_site_link: "http://tinkerbots.xyz",
  },
  {
    name: "Front-running Bot",
    description:
      "Front-running bot which can do type of market manipulation where an entity can enter into a transaction in advance of a pending or incoming order that will or may impact the price of the order.  ",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Trading",
        color: "pink-text-gradient",
      },
    ],
    image: project9,
    source_code_link: "https://github.com/ApesTalent/Crypto-front-running-bot",
    live_site_link: "https://drive.google.com/file/d/13vISN2deLh8wRk-V2_uomuj3sbnbhOjs/view?usp=share_link",
  },
];

export { services, technologies, experiences, testimonials, projects };
