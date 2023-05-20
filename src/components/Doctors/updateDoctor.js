import { useForm } from 'react-hook-form';
import TextInputCustom from "../UI/form/ModifyForm/TextInputCustom";
import { useNavigate } from 'react-router-dom';

const UpdateDoctor = (props) => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();

    const submitHandler = async (formData) => {
        console.log(formData);
                try {
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/doctor/updateDoctor/' + props.doctor._id , {
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
                    navigate('/DisplayDoctors');
                    console.log(data);
              
                  } catch (err) {
                    console.log(err.message);
                  }
    };


    return ( 
        <div className="grid grid-cols-1">
            <form method="POST" className="flex flex-col p-10 w-full shadow-2xl rounded-lg bg-cyan-100" onSubmit={handleSubmit(submitHandler)}>
                <label className="text-left text-2xl font-semibold mb-4" >Update Doctor Info</label>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Doctor Name</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "name"
                            placeholder = "Enter doctor name"
                            defaultValue = {props.doctor.name}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Age</label>
                        <TextInputCustom
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "age"
                            placeholder = "Enter doctor age"
                            defaultValue = {props.doctor.age}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                </div>  

                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Gender</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "gender"
                            placeholder = "Enter doctor gender"
                            defaultValue = {props.doctor.gender}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Email</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "email"
                            placeholder = "Enter doctor email"
                            defaultValue = {props.doctor.email}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                </div>  

                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Phone Number</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "phoneNumber"
                            placeholder = "Enter doctor phone number"
                            defaultValue = {props.doctor.phoneNumber}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >address</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "address"
                            placeholder = "Enter doctor address"
                            defaultValue = {props.doctor.address}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                </div> 

                <div className="grid grid-cols-2 gap-2 mt-4">
                    <div>
                        <label className="text-left mb-2 ml-1 mt-4" >Clinic Number</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "clinicNumber"
                            placeholder = "Enter doctor clinic number"
                            defaultValue = {props.doctor.clinicNumber}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                    <div>
                        <label className="text-left mb-4 ml-1 mt-4" >Working Hours</label>
                        <div className="grid grid-cols-2 gap-1 mt-2">
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 w-28 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "openTime"
                            placeholder = "Open Time"
                            defaultValue = {props.doctor.workinghours.openTime}
                            register={register}
                            validation={{ required: true }}
                        />
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 w-28 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "closeTime"
                            placeholder = "Close Time"
                            defaultValue = {props.doctor.workinghours.closeTime}
                            register={register}
                            validation={{ required: true }}
                        />
                        </div>
                    </div>
                </div> 

                <button
                    type="submit"
                    className="rounded-xl mt-4 px-8 self-center bg-white py-3 w-1/2 border-2 border-gray-300"
                >
                    Update
                </button>
            </form>
        </div>
        );
}
 
export default UpdateDoctor;