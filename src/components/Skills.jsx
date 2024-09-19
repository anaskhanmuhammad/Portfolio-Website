import Skill from "./Skill";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";

function Skills({id}) {
  return (
    <>
      <div className="Skill-Container" id={id}>
        <h3>My Skills</h3>
        <div className="skills">
          <div className="Skill">
            <FaHtml5></FaHtml5>
          </div>
          <div className="Skill">
            <IoLogoCss3></IoLogoCss3>
          </div>
          <div className="Skill">
            <FaReact></FaReact>
          </div>
          <div className="Skill">
            <FaPython></FaPython>
          </div>
          <div className="Skill">
            <TbBrandCpp></TbBrandCpp>
          </div>
          <div className="Skill">
            <BsFiletypeSql></BsFiletypeSql>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
