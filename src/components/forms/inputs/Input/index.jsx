import { forwardRef } from "react";

export const Input = forwardRef(({ label, type, id, error, ...rest }, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input className="input-large" ref={ref} type={type} id={id} {...rest} />
      {error ? <span className="padding-i-24">{error.message}</span> : null}
    </div>
  );
});