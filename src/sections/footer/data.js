import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiFillGithub } from 'react-icons/ai';

export const links = [
    { id: 1, link: '#', title: 'Home' },
    { id: 2, link: '#about', title: 'About' },
    { id: 3, link: '#services', title: 'Services' },
    { id: 4, link: '#portfolio', title: 'Portfolio' },
    { id: 5, link: '#contact', title: 'Contact' }
];

export const socials = [
    { id: 1, link: 'mailto:sancheznarro.pablo@gmail.com', icon: <HiOutlineMail /> },
    { id: 2, link: 'https://www.linkedin.com/in/pablosanchezn/', icon: <FaLinkedinIn /> },
    { id: 3, link: 'https://wa.me/+447874932115', icon: <FaWhatsapp /> },
    { id: 4, link: 'https://github.com/PabloSczn', icon: <AiFillGithub /> }
];

export default socials;