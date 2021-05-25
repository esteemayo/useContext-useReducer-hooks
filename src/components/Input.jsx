const Input = ({ name, label, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>
        {label} <span style={{ color: "red" }}>*</span>
      </label>
      <input {...rest} id={name} name={name} />
    </div>
  );
};

export default Input;
