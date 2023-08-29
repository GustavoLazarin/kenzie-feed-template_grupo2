import { forwardRef } from "react";

export const TextArea = forwardRef((type, id, rest), ref => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <textarea ref={ref} type={type} id={id} {...rest}/>
    </div>
  );
});
