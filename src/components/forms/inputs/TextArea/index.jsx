import { forwardRef } from "react";

export const TextArea = forwardRef(({ label, id, error, ...rest }, ref) => {
  return (
    <div className="stack-small">
      {label ? (
        <label className="bold" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <textarea rows="10" className="w-full" ref={ref} id={id} {...rest} />
      {error ? <span>{error.message}</span> : null}
    </div>
  );
});
