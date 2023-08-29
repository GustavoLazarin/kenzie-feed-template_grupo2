export const InputPassword = ({label, id, ...rest}) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input type="password" id={id} {...rest}/>
    </div>
  );
};
