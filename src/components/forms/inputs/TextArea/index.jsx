import { forwardRef } from "react";

export const TextArea = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <div className="stack-small">
      {label ? (
        <label className="bold" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <textarea rows="10" ref={ref} id={id} {...rest} />
      {error ? <span className="color-red">{`* ${error.message}`}</span> : null}
    </div>
  );
});
