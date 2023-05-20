import { useForm } from 'react-hook-form';
import TextInput from "../UI/form/TextInput";
import { useNavigate } from 'react-router-dom';
import FormInputError from "../UI/form/FormInputError";
import { useState } from 'react';

const ForgetPassword = () => {
    const { register, handleSubmit, formState } = useForm();
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleForgetPassword = () => {
      navigate('/');  
    }

    const handleValidation = (formData) => {
      let errors = {};
      
      if(formData.password.length < 6){
        errors.password = 'Password must be at least 6 characters long';
      }else if(!/[A-Z]/.test(formData.password)){
        errors.password = 'Password must contain at least one uppercase letter';
      }else if(!/\d/.test(formData.password)){
        errors.password = 'Password must be contain at least one number';
      }
  
      setErrors(errors);
      return Object.keys(errors).length === 0;
    }

    const submitHandler = async (formData) => {
      console.log(formData);
      
      if(formData.password == formData.Repassword){
        if(handleValidation(formData)){
          try {
            const response = await fetch('https://prediabetescalculatornodejs.onrender.com/admin/forgetPassword', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
            });
      
            const data = await response.json();
      
            if (!response.ok) {
              throw Error(data.error);
            }
            if(data){
              navigate('/login');
            }else{
              alert("You enter the old password");
            }
               
            console.log(data);
      
          } catch (err) {
            console.log(err.message);
          }
        }
        }else{
          alert("Password does not match each other");
        }
      };

    return ( 
                <form method="POST" className="flex flex-col p-10 w-full shadow-2xl rounded-lg bg-cyan-100" onSubmit={handleSubmit(submitHandler)}>
                    <label className="text-left text-2xl font-semibold mb-4" >Forget Password</label>
                    <label className="text-left mb-2 ml-1" >Username</label>
                    <TextInput 
                        type = "text"
                        name = "username"
                        placeholder = ""
                        register={register}
                        validation={{ required: true }}
                    />
                    {formState.errors.username && (
                      <FormInputError>Username must not be empty</FormInputError>
                    )}  
                    <label className="text-left mb-2 ml-1 mt-4" >Password</label>
                    <TextInput 
                        type = "password"
                        name = "password"
                        placeholder = ""
                        register={register}
                        validation={{ required: true }}
                    />
                    {formState.errors.password && (
                      <FormInputError>password must not be empty</FormInputError>
                    )}
                    {errors.password && (
                      <FormInputError>{errors.password}</FormInputError>
                    )}   
                    <label className="text-left mb-2 ml-1 mt-4" >Re-password</label>
                    <TextInput 
                        type = "password"
                        name = "Repassword"
                        placeholder = ""
                        register={register}
                        validation={{ required: true }}
                    />
                    {formState.errors.Repassword && (
                      <FormInputError>Re-password must not be empty</FormInputError>
                    )}  
                    <button
                        type="submit"
                        className="rounded-xl mt-4 px-8 self-center bg-white py-3 w-1/2 border-2 border-gray-300 hover:bg-gray-300"
                    >
                        Forget
                    </button>
                    <div className="text-center mt-4">
                        You want to login? <button onClick={handleForgetPassword} className="text-md text-cyan-500">Login</button>
                    </div>
                </form>

     );
}
 
export default ForgetPassword;