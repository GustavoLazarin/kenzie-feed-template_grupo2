import { forwardRef } from "react";

export const Input = forwardRef(({ label, type, id, error, ...rest }, ref) => {
  return (
    <div className="stack-small">
      {label ? (
        <label className="bold" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <input className="input-large" ref={ref} type={type} id={id} {...rest} />
      {error ? (
        <span className="color-red padding-i-s-24">{error.message}</span>
      ) : null}
    </div>
  );
});
