import SudokuImage from '../../assets/sudoku.png'; // Ensure this image exists in the assets folder
import GreyStoriesImage from '../../assets/GreyStories.jpeg'; // Ensure this image exists in the assets folder
import GoodCampsImage from '../../assets/GoodCamps.jpg'; // Ensure this image exists in the assets folder
import { FaC } from "react-icons/fa6"; // Importing C language icon
import { DiAndroid } from "react-icons/di"; // Importing Android icon
import { FaJava } from 'react-icons/fa'; // Importing Java icon
import { FaNodeJs } from 'react-icons/fa'; // Importing Node.js icon
import { SiMongodb } from 'react-icons/si'; // Importing MongoDB icon
import { SiExpress } from 'react-icons/si'; // Importing Express.js icon

const data = [
    {
        id: 10,
        category: 'backend', // Adjust category if needed
        image: SudokuImage,
        title: "Sudoku Game",
        desc: "A C-based console application for playing Sudoku. Features include dynamic Sudoku board generation, undo/redo moves, saving/loading games, and a timer.",
        demo: 'https://www.youtube.com/watch?v=3O1fJ-Pqw74', 
        github: 'https://github.com/PabloSczn/SudokuGame',
        icon: <FaC /> // Adding the icon for C language
    },
    {
        id: 11,
        category: 'mobile',
        image: GreyStoriesImage,
        title: "GreyStories Android App",
        desc: `
          Grey Stories is a mobile adaptation of the riddle card game, Dark Stories. It allows users to read, archive, and like their favorite stories.
          Developed in Android Studio with Java. Features community story submissions.
        `,
        demo: 'https://youtube.com/shorts/jl3suBvp4SQ', // Replace with the actual link if available
        github: 'https://github.com/PabloSczn/GreyStories',
        icon: <><DiAndroid /><FaJava /></> // Adding the icons for Android and Java
    },
    {
        id: 12,
        category: 'web',
        image: GoodCampsImage,
        title: "GoodCamps",
        desc: `
          GoodCamps is a web application designed to allow users to view, add, edit, and delete campground information.
          Built with Node.js, Express, MongoDB, and EJS.
        `,
        demo: 'https://github.com/PabloSczn/Camp-Reviews-Project', // Replace with the actual link if available
        github: 'https://github.com/PabloSczn/Camp-Reviews-Project',
        icon: <><FaNodeJs /><SiExpress /><SiMongodb /></> // Adding the icons for Node.js, Express, and MongoDB
    }
];

export default data;