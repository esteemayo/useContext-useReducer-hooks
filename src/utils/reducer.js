const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    const newPerson = [...state.people, action.payload];
    return {
      ...state,
      people: newPerson,
      alert: {
        show: true,
        type: "success",
        msg: `Congratulations! ${action.payload.name}, you've been added successfully.`,
      },
    };
  }

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      alert: {
        show: true,
        type: "danger",
        msg: "Please fill all required fields!",
      },
    };
  }

  if (action.type === "HIDE_ALERT") {
    return { ...state, alert: { show: false } };
  }

  if (action.type === "DELETE_PERSON") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload.id
    );

    return {
      ...state,
      people: newPeople,
      alert: {
        show: true,
        type: "danger",
        msg: `${action.payload.name} successfully removed.`,
      },
    };
  }

  throw new Error("No matching action type");
};

export default reducer;
