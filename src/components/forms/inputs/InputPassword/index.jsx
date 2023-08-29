export const InputPassword = ({label, id, ...rest}) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input ref={ref} type="password" id={id} {...rest}/>
    </div>
  );
};
