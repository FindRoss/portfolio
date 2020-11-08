import footy from "../../images/footy-fixture-project-compressor.png";
import higher from "../../images/higher-lower-project-compressor.png";
import species from "../../images/star-wars-species-project.png";
import todo from "../../images/react-todo-list-project.png"

export const projectData = [
  {
    image: higher,
    imgStart: '',
    title: "Higher or lower",
    description:
      "A simple higher or lower dice game. The player gets three lives, and must better the computer.",
    used: ["React"],
    url: "!#"
  },
  {
    image: footy,
    imgStart: 'start',
    title: "Football fixtures",
    description:
      "Live football fixtures for the top leagues and competitions in the world with the api.",
    used: ["React", "Redux", "Evergreen UI"],
    url: "!#"
  },
  {
    image: species,
    imgStart: '',
    title: "Star Wars Species",
    description:
      "A catalogue of Star Wars species fetched from an API. Mon Calarami are the best.",
    used: ["React", "React Router", "Hooks", "Grommet"],
    url: "https://star-wars-species.herokuapp.com"
  },
  {
    image: todo,
    imgStart: 'start',
    title: "Todo list",
    description: "FOOOOBAR!! Change the APP ICON and APP TITLE",
    used: ["React"],
    url: "https://rf-react-list.herokuapp.com"
  }
];