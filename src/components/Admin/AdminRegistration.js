import { useForm } from 'react-hook-form';
import TextInputCustom from "../UI/form/TextInputCustom";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import 'react-phone-number-input/style.css';
import RoleSelectInput from '../UI/form/RoleSelectInput';
import FormInputError from "../UI/form/FormInputError";
import { useState } from 'react';

const AdminRegistration = () => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const roles = [
        { name: "None", value: "None" },
        { name: "Super Admin", value: "Super Admin" },
        { name: "Admin", value: "Admin" }
    ];

    const handleValidation = (formData) => {
        let errors = {};
        
        if(formData.username.length < 6){
          errors.username = 'username must be at least 6 characters long';
        }
        
        if(formData.password.length < 6){
          errors.password = 'Password must be at least 6 characters long';
        }else if(!/[A-Z]/.test(formData.password)){
          errors.password = 'Password must contain at least one uppercase letter';
        }else if(!/\d/.test(formData.password)){
          errors.password = 'Password must be contain at least one number';
        }
        
        if(!/^[0-9]+$/.test(formData.age)){
          errors.age = "Age must contain only numbers"
        }
        
        if (!/^[a-zA-Z]+$/.test(formData.gender)){
          errors.gender = "Gender must contain only letters"
        }
        
        if (!/\S+@\S+\.\S+/.test(formData.email)){
          errors.email = "Invalid email format"
        }
    
        setErrors(errors);
        return Object.keys(errors).length === 0;
      }

    const submitHandler = async (formData) => {
        handleValidation(formData);
        console.log(formData);
        if(formData.password === formData.Repassword){
            if(formData.role != "None"){
                try {
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/admin/register', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(formData)
                    });
              
                    const data = await response.json();
              
                    if (!response.ok) {
                      throw Error(data.error);
                    }
                    alert("Admin registered successfully");
                    navigate('/');
                    console.log(data);
              
                  } catch (err) {
                    console.log(err.message);
                  }
            }else{
                alert("Chose admin role");
            }
        }else{
            alert("passwords not matching each other please try again");
        }
    };


    return ( 
        <div className="grid grid-cols-2 flex-col items-center">
        <div className="w-96 mt-0 ml-36">
            <img src={Logo} width="400" alt="Description of the image" />
            <div><p className="ml-7">Welcome to the registration page! Please fill in the form below with your details to create a new admin account.</p></div>
        </div>
        <div className='border-l border-gray-500 pl-40'>
            <form method="POST" className="flex flex-col p-10 w-full shadow-2xl rounded-lg bg-cyan-100" onSubmit={handleSubmit(submitHandler)}>
                <label className="text-left text-2xl font-semibold mb-4" >Admin Registration</label>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <label className="text-left mb-2 ml-1" >Username</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "username"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                    {formState.errors.username && (
                      <FormInputError>Username must not be empty</FormInputError>
                    )}
                    {errors.username && (
                      <FormInputError>{errors.username}</FormInputError>
                    )}  
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1" >Role</label>
                        <RoleSelectInput
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            name="role"
                            type="text"
                            register={register}
                            validation={{ required: true }}
                            options={roles} 
                        />
                    </div>
                </div>  

                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                    <label className="text-left mb-2 ml-1 mt-4" >Password</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
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
                    </div>
                    <div>
                    <label className="text-left mb-2 ml-1 mt-4" >Re-Password</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "password"
                            name = "Repassword"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                </div>  

                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Name</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "name"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                    {formState.errors.name && (
                      <FormInputError>name must not be empty</FormInputError>
                    )}
                    {errors.name && (
                      <FormInputError>{errors.name}</FormInputError>
                    )}  
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Age</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "age"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                    {formState.errors.age && (
                      <FormInputError>age must not be empty</FormInputError>
                    )}
                    {errors.age && (
                      <FormInputError>{errors.age}</FormInputError>
                    )}  
                    </div>
                </div>  

                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Gender</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "gender"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                        
                    {formState.errors.gender && (
                      <FormInputError>gender must not be empty</FormInputError>
                    )}
                    {errors.gender && (
                      <FormInputError>{errors.gender}</FormInputError>
                    )}  
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Email</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "email"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                        
                    {formState.errors.email && (
                      <FormInputError>email must not be empty</FormInputError>
                    )}
                    {errors.email && (
                      <FormInputError>{errors.email}</FormInputError>
                    )}  
                    </div>
                </div>  

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Phone Number</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "phoneNumber"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                        
                    {formState.errors.phoneNumber && (
                      <FormInputError>phoneNumber must not be empty</FormInputError>
                    )}
                    {errors.phoneNumber && (
                      <FormInputError>{errors.phoneNumber}</FormInputError>
                    )}  
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >address</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "address"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                        
                    {formState.errors.address && (
                      <FormInputError>address must not be empty</FormInputError>
                    )}
                    {errors.address && (
                      <FormInputError>{errors.address}</FormInputError>
                    )}  
                    </div>
                </div> 

                <button
                    type="submit"
                    className="rounded-xl mt-4 px-8 self-center bg-white py-3 w-1/2 border-2 border-gray-300"
                >
                    Register
                </button>
            </form>
        </div>
    </div>
    );
}
 
export default AdminRegistration;