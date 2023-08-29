import { forwardRef } from "react";

export const Input = forwardRef(({label, type, id, error, ...rest}, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label>: null}
      <input ref={ref} type={type} id={id} {...rest}/>
      {error ? <span>{error.message}</span> : null}
    </div>
  );
});