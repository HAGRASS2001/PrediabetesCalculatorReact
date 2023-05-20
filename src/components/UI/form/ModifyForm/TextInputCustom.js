const TextInputCustom = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <input
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue = {props.defaultValue}
        {...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextInputCustom;
