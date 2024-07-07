import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const data = [
    { id: 1, link: 'https://www.linkedin.com/in/pablosanchezn/', icon: <FaLinkedinIn />, label: 'LinkedIn profile' },
    { id: 2, link: 'https://github.com/PabloSczn', icon: <FaGithub />, label: 'GitHub profile' },
    { id: 3, link: 'mailto:sancheznarro.pablo@gmail.com', icon: <MdEmail />, label: 'Send an email' },
];

export default data;