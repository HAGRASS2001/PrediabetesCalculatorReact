import { useForm } from 'react-hook-form';
import TextInputCustom from "../UI/form/TextInputCustom";
import FormInputError from '../UI/form/FormInputError';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const AddDoctor = () => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    
    const handleValidation = (formData) => {
        let errors = {};
                
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
                try {
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/doctor/addNewDoctor', {
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
                    alert("Doctor added");
                    console.log(data);
              
                  } catch (err) {
                    console.log(err.message);
                  }
    };


    return ( 
        <div className="grid grid-cols-1">
            <form method="POST" className="flex flex-col p-10 w-full shadow-2xl rounded-lg bg-cyan-100" onSubmit={handleSubmit(submitHandler)}>
                <label className="text-left text-2xl font-semibold mb-4" >Doctor Registration</label>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Doctor Name</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "name"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                    {formState.errors.name && (
                      <FormInputError>Name must not be empty</FormInputError>
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
                      <FormInputError>Age must not be empty</FormInputError>
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
                          <FormInputError>Gander must not be empty</FormInputError>
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
                      <FormInputError>Email must not be empty</FormInputError>
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
                      <FormInputError>Phone number must not be empty</FormInputError>
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
                      <FormInputError>Address must not be empty</FormInputError>
                    )}
                    </div>
                </div> 

                <div className="grid grid-cols-2 gap-2 mt-4">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Clinic Number</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "clinicNumber"
                            placeholder = ""
                            register={register}
                            validation={{ required: true }}
                        />
                        {formState.errors.clinicNumber && (
                      <FormInputError>Clinic number must not be empty</FormInputError>
                    )}
                    </div>
                    <div>
                        <label className="text-left mb-4 ml-1 mt-4" >Working Hours</label>
                        <div className="grid grid-cols-2 gap-1 mt-2">
                          <div>
                            <TextInputCustom 
                                className = "placeholder-black px-4 py-2 border-2 w-28 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                                type = "text"
                                name = "openTime"
                                placeholder = "Open Time"
                                register={register}
                                validation={{ required: true }}
                            />
                            {formState.errors.openTime && (
                              <FormInputError>Required</FormInputError>
                            )}
                          </div>
                          <div>
                            <TextInputCustom 
                                className = "placeholder-black px-4 py-2 border-2 w-28 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                                type = "text"
                                name = "closeTime"
                                placeholder = "Close Time"
                                register={register}
                                validation={{ required: true }}
                            />
                            {formState.errors.closeTime && (
                              <FormInputError>Required</FormInputError>
                            )}
                          </div>
                        </div>
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
        );
}
 
export default AddDoctor;