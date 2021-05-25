import { FaTrash } from "react-icons/fa";

import { useGlobalContext } from "../utils/context";
import Button from "./Button";

const Person = ({ id, age, name, email }) => {
  const { handleDeletePerson } = useGlobalContext();

  return (
    <div className="item">
      <h4>{name}</h4>
      <p>{email}</p>
      <h4>{age}</h4>
      <Button
        type="button"
        text="Remove"
        icon={<FaTrash style={deleteStyle} />}
        onClick={() => handleDeletePerson(id, name)}
      />
    </div>
  );
};

const deleteStyle = {
  color: "red",
};

export default Person;
