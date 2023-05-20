const TextInput = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <input
        className="placeholder-black w-96 px-4 py-2 border-b-2 border-gray-400 outline-none  focus:border-gray-400 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-400 rounded-lg hover:bg-gray-200"
        type={props.type}
        placeholder={props.placeholder}
        defaultValue = {props.defaultValue}
        {...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextInput;
