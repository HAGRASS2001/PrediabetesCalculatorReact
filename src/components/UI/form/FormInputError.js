const FormInputError = (props) => {
  return (
    <p className=" text-red-600 rounded-lg p-2">
      {props.children}
    </p>
  );
};

export default FormInputError;
