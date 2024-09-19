import ProjectCard from "./ProjectCard";

function Projects({id}) {
  const ProjectList = [
    {
      name: "Food Order Application",
      desc: "A Python-based food ordering app using Tkinter, where users can browse hard-coded restaurant menus, place orders, and save customer data in a database.",
      githubLink: "",
      image: "/restaurant_image.jpg",
    },
    {
      name: "Travel Management System",
      desc: "A C++-based travel management system built using OOP concepts, allowing users to plan and manage their travel itineraries efficiently.",
      githubLink: "https://github.com/anaskhanmuhammad/TravelManagementSystem.git",
      image: "/Travel_image.jfif",
    },
    {
      name: "Image Manipulator Application",
      desc: "Developed an image manipulation application using HTML, CSS, and JavaScript. Enabled users to perform basic image transformations and adjustments",
      githubLink: "https://github.com/anaskhanmuhammad/Image-Manipulator.git",
      image: "/ImageManipulator_image.jfif",
    },
    {
      name: "To-Do Application",
      desc: "Developed a to-do application using fundamental React concepts, implementing features such as adding items to the list and deleting tasks.",
      githubLink: "https://github.com/anaskhanmuhammad/To-Do-App.git",
      image: "/task_image.png",
    },
  ];

  return (
    <>
      <div className="Card-container" id={id}>
        <h3>Projects</h3>
        <div className="all-cards">
          {ProjectList.map((p) => <ProjectCard key={p} p={p}></ProjectCard>)}
        </div>
      </div>
    </>
  );
}

export default Projects;
