import { FaReact } from "react-icons/fa";

import { useGlobalContext } from "../utils/context";
import PeopleForm from "./PeopleForm";
import Person from "./Person";
import Alert from "./Alert";

const People = () => {
  const { alert, people } = useGlobalContext();

  return (
    <>
      <FaReact style={logoStyle} />
      {alert.show && <Alert {...alert} />}
      <PeopleForm />
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
};

const logoStyle = {
  color: "#61dafb",
  fontSize: "5rem",
  marginBottom: "2rem",
};

export default People;
