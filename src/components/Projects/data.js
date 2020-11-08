import species from "../../images/star-wars-species-project.png";
import todo from "../../images/react-todo-list-project.png"
// import higher from "../../images/higher-lower-project-compressor.png";
// import footy from "../../images/footy-fixture-project-compressor.png";

export const projectData = [
  {
    image: species,
    imgStart: '',
    title: "Star Wars Species",
    description:
      "A catalogue of the types of alients found in the Star Wars world. Fetched using the Star Wars API, built with React, React Hooks, React Router, and designed with help of Grommet. Check out the Mon Calarami.",
    used: ["React", "React Router", "Hooks", "Grommet"],
    url: "https://star-wars-species.herokuapp.com"
  },
  {
    image: todo,
    imgStart: 'start',
    title: "Todo list",
    description: "A simple todo list SPA built using React and styled with Material UI.",
    used: ["React"],
    url: "https://rf-react-list.herokuapp.com"
  }
  // {
  //   image: higher,
  //   imgStart: '',
  //   title: "Higher or lower",
  //   description:
  //     "A simple higher or lower dice game. The player gets three lives, and must better the computer.",
  //   used: ["React"],
  //   url: "!#"
  // },
  // {
  //   image: footy,
  //   imgStart: 'start',
  //   title: "Football fixtures",
  //   description:
  //     "Live football fixtures for the top leagues and competitions in the world with the api.",
  //   used: ["React", "Redux", "Evergreen UI"],
  //   url: "!#"
  // },
];