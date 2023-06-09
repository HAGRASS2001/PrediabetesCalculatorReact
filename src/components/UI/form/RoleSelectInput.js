const RoleSelectInput = (props) => {
    return (
      <div className="flex flex-col justify-center gap-2">
        <select
          className="placeholder-black px-4 py-2 border-2 mt-2 min-w-[238px] border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
          defaultValue={props.defaultValue}
          {...props.register(props.name, props.validation)}
        >
          {props.options.map((o) => (
            <option value={o.value} key={o.value}>
              {o.name}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default RoleSelectInput;
  