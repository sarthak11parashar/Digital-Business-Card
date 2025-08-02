import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <a href="https://x.com/SarthakPar97307" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={24} />
      </a>
      <a href="https://www.instagram.com/sarthak__parashar__/" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={24} />
      </a>
      <a href="https://github.com/sarthak11parashar" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
    </footer>
  );
}
