import { forwardRef } from "react";

export const TextArea = forwardRef(({label, id, error, ...rest}, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <textarea ref={ref} id={id} {...rest}/>
      {error ? <span>{error.message}</span> : null}
    </div>
  );
});
