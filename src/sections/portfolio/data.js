import Image1 from '../../assets/project1.jpg'
import Image2 from '../../assets/project2.jpg'
import Image3 from '../../assets/project3.jpg'
import Image4 from '../../assets/project4.jpg'
import Image5 from '../../assets/project5.jpg'
import Image6 from '../../assets/project6.jpg'
import Image7 from '../../assets/project7.jpg'
import Image8 from '../../assets/project8.jpg'
import Image9 from '../../assets/project9.jpg'
import SudokuImage from '../../assets/sudoku.png'; // Ensure this image exists in the assets folder
import { FaC } from "react-icons/fa6"; // Importing C language icon

const data = [
    {
        id: 1,
        category: 'uiux',
        image: Image1,
        title: "Project Title One (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 2,
        category: 'frontend',
        image: Image2,
        title: "Project Title Two (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 3,
        category: 'frontend',
        image: Image3,
        title: "Project Title Three (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 4,
        category: 'uiux',
        image: Image4,
        title: "Project Title Four (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 5,
        category: 'uiux',
        image: Image5,
        title: "Project Title Five (UIUX)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! ",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 6,
        category: 'frontend',
        image: Image6,
        title: "Project Title Six (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 7,
        category: 'frontend',
        image: Image7,
        title: "Project Title Seven (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 8,
        category: 'backend',
        image: Image8,
        title: "Project Title Eight (Backend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 9,
        category: 'frontend',
        image: Image9,
        title: "Project Title Nine (Frontend)",
        desc: "Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut!",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 10,
        category: 'backend', // Adjust category if needed
        image: SudokuImage,
        title: "Sudoku Game Implementation",
        desc: "A C-based console application for playing Sudoku. Features include dynamic Sudoku board generation, undo/redo moves, saving/loading games, and a timer.",
        demo: 'https://www.youtube.com/watch?v=3O1fJ-Pqw74', 
        github: 'https://github.com/PabloSczn/SudokuGame',
        icon: <FaC /> // Adding the icon for C language
      }
]


export default data