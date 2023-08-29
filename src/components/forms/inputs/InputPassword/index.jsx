import { forwardRef } from "react";

export const InputPassword = forwardRef(({id, rest}), ref => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input ref={ref} type="password" id={id} {...rest}/>
    </div>
  );
});
