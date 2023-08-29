import { forwardRef } from "react";


export const InputPassword = forwardRef(({ placeholder, label, id, ...rest}, ref) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input placeholder={placeholder} type="password" id={id} {...rest} ref={ref}/>
    </div>
  );
});
