import { forwardRef } from "react";

export const Input = forwardRef((type, id, rest), ref => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input ref={ref} type={type} id={id} {...rest}/>
    </div>
  );
});
