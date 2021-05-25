import { FaArrowRight } from "react-icons/fa";

import { useGlobalContext } from "../utils/context";
import Button from "./Button";
import Input from "./Input";

const PeopleForm = () => {
  const { person, handleChange, handleSubmit } = useGlobalContext();

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        type="text"
        id="name"
        name="name"
        label="Name"
        value={person.name}
        onChange={handleChange}
      />

      <Input
        type="text"
        id="email"
        name="email"
        label="Email"
        value={person.email}
        onChange={handleChange}
      />

      <Input
        type="text"
        id="age"
        name="age"
        label="Age"
        value={person.age}
        onChange={handleChange}
      />

      <Button text="Add" className="add-btn" icon={<FaArrowRight />} />
    </form>
  );
};

export default PeopleForm;
