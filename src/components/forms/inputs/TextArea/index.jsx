export const TextArea = ({label, id, ...rest}) => {
  return (
    <div>
      {label ? <label htmlFor={id}>{label}</label> : null}
      <textarea id={id} {...rest}/>
    </div>
  );
};
