import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import "./Footer.css";

function Footer() {
  return (
    <>
      <footer className="px-4">
        <div className="foot-left d-flex">
          <p>IrfnCode &copy; 2023</p>
        </div>
        <div className="foot-right d-flex">
          <a
            href="https://github.com/IrfnCode"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="foot-icon" />
            &nbsp;&nbsp;GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-code-bb4808265/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="foot-icon" />
            &nbsp;&nbsp;Linkedin
          </a>
          <a
            href="https://www.instagram.com/irfnadi_/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="foot-icon" />
            &nbsp;&nbsp;Instagram
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
