import SudokuImage from '../../assets/sudoku.png';
import GoodCampsImage from '../../assets/GoodCamps.jpg';
import PortfolioImage from '../../assets/portfolio.jpg';
import CavernsImage from '../../assets/caverns.png';
import XAI from '../../assets/xai-image.jpg';
import TrulyBudgetImage from '../../assets/trulybudget.png';
import { FaC } from "react-icons/fa6"; // Importing C language icon
import { DiAndroid } from "react-icons/di"; // Importing Android icon
import { FaNodeJs } from 'react-icons/fa'; // Importing Node.js icon
import { SiMongodb } from 'react-icons/si'; // Importing MongoDB icon
import { SiExpress } from 'react-icons/si'; // Importing Express.js icon
import { FaReact } from 'react-icons/fa'; // Importing React icon
import { TbFileTypeCss } from "react-icons/tb"; // Importing CSS3 icon
import { FaHtml5 } from 'react-icons/fa'; // Importing HTML5 icon
import { FaPython } from 'react-icons/fa'; // Importing Python icon
import { FaBrain } from "react-icons/fa"; // Importing AI (Brain) icon
import { SiFlutter } from 'react-icons/si'; // Importing Flutter icon

const data = [
    {
        id: 1,
        categories: ['AI'],
        image: XAI,  
        title: "Feature Interaction XAI Project",
        desc: `
          This project focuses on comparing different Explainable AI (XAI) methods to assess how well they capture feature interactions in machine learning models. Built using Python and various machine learning libraries.
        `,
        demo: 'https://github.com/PabloSczn/feature-interaction-xai',  // Link to repo
        github: 'https://github.com/PabloSczn/feature-interaction-xai',
        icon: <><FaPython /><FaBrain /></> // Adding the icons for Python and AI
    },
    {
        id: 6,
        categories: ['mobile'],
        image: TrulyBudgetImage,
        title: "TrulyBudget",
        desc: `
          TrulyBudget is a local-first monthly budgeting app focused on helping users plan income, allocate categories, track spending, and stay in control month by month.
          Built with Flutter for Android, with support for yearly overviews and exporting reports and backups.
        `,
        demo: 'https://play.google.com/store/apps/details?id=com.pablosanchez.trulybudget',
        github: 'https://github.com/PabloSczn/truly-budget',
        icon: <><SiFlutter /><DiAndroid /></> // Adding the icons for Flutter and Android
    },
    {
      id: 3,
      categories: ['backend'],
      image: CavernsImage,
      title: "Caverns Routing Application",
      desc: `
        Implements an advanced A* search algorithm to navigate through a series of underground caverns. Uses Euclidean distance and handles matrix transposition. Built with Python.
      `,
      demo: 'https://github.com/PabloSczn/cavern-path-finding',
      github: 'https://github.com/PabloSczn/cavern-path-finding',
      icon: <FaPython /> // Adding the icon for Python
    },
    {
      id: 4,
      categories: ['backend'],
      image: SudokuImage,
      title: "Sudoku Game",
      desc: "A C-based console application for playing Sudoku. Features include dynamic Sudoku board generation, undo/redo moves, saving/loading games, and a timer.",
      demo: 'https://www.youtube.com/watch?v=3O1fJ-Pqw74', 
      github: 'https://github.com/PabloSczn/sudoku-game',
      icon: <FaC /> // Adding the icon for C language
    },
    {
        id: 5,
        categories: ['web'],
        image: PortfolioImage,
        title: "Personal Portfolio",
        desc: `
          This cool portfolio you are looking at! It includes detailed descriptions, images, and links to my work.
          Built with React.js, CSS, and HTML.
        `,
        demo: 'https://pablosancheznarro.com/',
        github: 'https://github.com/PabloSczn/portfolio-website-react',
        icon: <><FaReact /><TbFileTypeCss /><FaHtml5 /></> // Adding the icons for React, CSS, and HTML
    },
    {
        id: 2,
        categories: ['web', 'fullstack'],
        image: GoodCampsImage,
        title: "GoodCamps",
        desc: `
          GoodCamps is a web application designed to allow users to view, add, edit, and delete campground information.
          Built with Node.js, Express, MongoDB, and EJS.
        `,
        demo: 'https://github.com/PabloSczn/camp-reviews-project',
        github: 'https://github.com/PabloSczn/camp-reviews-project',
        icon: <><FaNodeJs /><SiExpress /><SiMongodb /></> // Adding the icons for Node.js, Express, and MongoDB
    },
];

export default data;
