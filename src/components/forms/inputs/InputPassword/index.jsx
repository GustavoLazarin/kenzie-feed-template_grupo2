import { forwardRef } from "react";

export const InputPassword = forwardRef(({label, id, error, ...rest}, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input ref={ref} type="password" id={id} {...rest}/>
      {error ? <span>{error.message}</span> : null}
    </div>
  );
});
