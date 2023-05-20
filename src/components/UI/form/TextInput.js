const TextInput = (props) => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <input
        className="placeholder-black w-96 px-4 py-2 border-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
        type={props.type}
        placeholder={props.placeholder}
        {...props.register(props.name, props.validation)}
      />
    </div>
  );
};

export default TextInput;
