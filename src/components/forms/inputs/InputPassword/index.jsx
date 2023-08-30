import { forwardRef } from "react";

export const InputPassword = forwardRef(({label, id, error, ...rest}, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input className="input-large" ref={ref} type="password" id={id} {...rest}/>
      {error ? <span className="padding-i-24">{error.message}</span> : null}
    </div>
  );
});
