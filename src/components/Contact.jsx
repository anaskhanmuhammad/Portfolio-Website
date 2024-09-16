import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";

function Contact(params) {
  return (
    <>
      <div className="Contact-Div">
        <h3>Contact Me!</h3>
        <div className="Contact-Links">
            <FaLinkedinIn></FaLinkedinIn>
            <FaGithub></FaGithub>
            <IoMail></IoMail>
            <FaFacebook></FaFacebook>
            
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
