export const InputPassword = ({ placeholder, label, id, ...rest}) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input placeholder={placeholder} type="password" id={id} {...rest}/>
    </div>
  );
};
