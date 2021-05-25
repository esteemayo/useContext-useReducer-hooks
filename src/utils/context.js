import {
  useState,
  useEffect,
  useContext,
  useReducer,
  createContext,
} from "react";
import { v4 } from "uuid";

import reducer from "./reducer";

const getLocalStorage = () => {
  const people = localStorage.getItem("people");

  if (people) return JSON.parse(people);

  return [];
};

const initialState = {
  people: getLocalStorage(),
  alert: {
    show: false,
    type: "",
    msg: "",
  },
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(state.people));
  }, [state.people]);

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.age) {
      const newPerson = { id: v4(), ...person };
      dispatch({ type: "ADD_PERSON", payload: newPerson });
      setPerson({ name: "", email: "", age: "" });
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const hideAlert = () => {
    dispatch({ type: "HIDE_ALERT" });
  };

  const handleDeletePerson = (id, name) => {
    dispatch({ type: "DELETE_PERSON", payload: { id, name } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        person,
        hideAlert,
        handleChange,
        handleSubmit,
        handleDeletePerson,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
