const TextAreaInputCustom = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <textarea
        className={props.className}
        placeholder={props.placeholder}
        value = {props.value}
        {...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextAreaInputCustom;
