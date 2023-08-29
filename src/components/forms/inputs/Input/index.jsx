export const Input = ({label, type, id, ...rest}) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label>: null}
      <input type={type} id={id} {...rest}/>
    </div>
  );
};
