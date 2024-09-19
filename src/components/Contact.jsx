import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

function Contact({id}) {
  return (
    <>
      <div className="Contact-Div" id={id}>
        <h3>Contact Me!</h3>
        <div className="Contact-Links">
            <a href="https://www.linkedin.com/in/muhammad-anas-khan-385146270/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn></FaLinkedinIn></a>
            <a href="https://github.com/anaskhanmuhammad" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
            <a href="" target="_blank" rel="noopener noreferrer"><IoMail></IoMail></a>
            <a href="" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>
            
            
            
            
        </div>
        <div className="Message-Area">
          <div className="message-1">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <div className="message-2">
            <textarea name="" id="" placeholder="Message"></textarea>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
