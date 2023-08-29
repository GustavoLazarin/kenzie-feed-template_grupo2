export const Input = ({ placeholder, label, type, id, ...rest}) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label>: null}
      <input placeholder={placeholder} type={type} id={id} {...rest}/>
    </div>
  );
};
