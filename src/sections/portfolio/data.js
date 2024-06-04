import SudokuImage from '../../assets/sudoku.png';
import GreyStoriesImage from '../../assets/GreyStories.jpeg';
import GoodCampsImage from '../../assets/GoodCamps.jpg';
import PortfolioImage from '../../assets/portfolio.jpg';
import CavernsImage from '../../assets/caverns.png'; 
import { FaC } from "react-icons/fa6"; // Importing C language icon
import { DiAndroid } from "react-icons/di"; // Importing Android icon
import { FaJava } from 'react-icons/fa'; // Importing Java icon
import { FaNodeJs } from 'react-icons/fa'; // Importing Node.js icon
import { SiMongodb } from 'react-icons/si'; // Importing MongoDB icon
import { SiExpress } from 'react-icons/si'; // Importing Express.js icon
import { FaReact } from 'react-icons/fa'; // Importing React icon
import { TbFileTypeCss } from "react-icons/tb"; // Importing CSS3 icon
import { FaHtml5 } from 'react-icons/fa'; // Importing HTML5 icon
import { FaPython } from 'react-icons/fa'; // Importing Python icon

const data = [
    {
        id: 1,
        categories: ['backend'], // Adjust categories
        image: SudokuImage,
        title: "Sudoku Game",
        desc: "A C-based console application for playing Sudoku. Features include dynamic Sudoku board generation, undo/redo moves, saving/loading games, and a timer.",
        demo: 'https://www.youtube.com/watch?v=3O1fJ-Pqw74', 
        github: 'https://github.com/PabloSczn/sudoku-game',
        icon: <FaC /> // Adding the icon for C language
    },
    {
        id: 2,
        categories: ['mobile'],
        image: GreyStoriesImage,
        title: "GreyStories Android App",
        desc: `
          Grey Stories is a mobile adaptation of the riddle card game, Dark Stories. It allows users to read, archive, and like their favorite stories.
          Developed in Android Studio with Java. Features community story submissions.
        `,
        demo: 'https://youtube.com/shorts/jl3suBvp4SQ', // Replace with the actual link if available
        github: 'https://github.com/PabloSczn/GreyStories-app',
        icon: <><DiAndroid /><FaJava /></> // Adding the icons for Android and Java
    },
    {
        id: 3,
        categories: ['web', 'fullstack'],
        image: GoodCampsImage,
        title: "GoodCamps",
        desc: `
          GoodCamps is a web application designed to allow users to view, add, edit, and delete campground information.
          Built with Node.js, Express, MongoDB, and EJS.
        `,
        demo: 'https://github.com/PabloSczn/camp-reviews-project', // Replace with the actual link if available
        github: 'https://github.com/PabloSczn/camp-reviews-project',
        icon: <><FaNodeJs /><SiExpress /><SiMongodb /></> // Adding the icons for Node.js, Express, and MongoDB
    },
    {
        id: 4,
        categories: ['web'],
        image: PortfolioImage,
        title: "Personal Portfolio",
        desc: `
          This project showcases my skills and projects using React.js. It includes detailed descriptions, images, and links to my work.
          Built with React.js, CSS, and HTML.
        `,
        demo: 'https://github.com/PabloSczn/portfolio-website-react', // Replace with the actual link if available
        github: 'https://github.com/PabloSczn/portfolio-website-react',
        icon: <><FaReact /><TbFileTypeCss /><FaHtml5 /></> // Adding the icons for React, CSS, and HTML
    },
    {
        id: 5,
        categories: ['backend'],
        image: CavernsImage,
        title: "Caverns Routing Application",
        desc: `
          Implements an advanced A* search algorithm to navigate through a series of underground caverns. Uses Euclidean distance and handles matrix transposition. Built with Python.
        `,
        demo: 'https://github.com/PabloSczn/cavern-path-finding', // Replace with the actual link if available
        github: 'https://github.com/PabloSczn/cavern-path-finding',
        icon: <FaPython /> // Adding the icon for Python
    }
];

export default data;