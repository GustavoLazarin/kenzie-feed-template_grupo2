import { forwardRef } from "react";

export const Input = forwardRef(({ placeholder, label, type, id, ...rest}, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label>: null}
      <input placeholder={placeholder} type={type} id={id} {...rest} ref={ref}/>
    </div>
  );
});
