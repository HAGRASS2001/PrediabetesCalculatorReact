import { useForm } from 'react-hook-form';
import TextInputCustom from "../UI/form/ModifyForm/TextInputCustom";
import { useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css';
import RoleSelectInput from '../UI/form/RoleSelectInput';
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';

const UpdateAdminAcc = (props) => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const { id, role, setRole, setUsername, setID } = useContext(AuthContext);

    const handleLogout = () => {
        setID('');
        setRole('');
        setUsername('');
        navigate('/login');
    }

    const roles = [
        { name: "None", value: "None" },
        { name: "Super Admin", value: "Super Admin" },
        { name: "Admin", value: "Admin" }
    ];

    const submitHandler = async (formData) => {
        if(formData.Newpassword != "" || formData.Repassword != ""){
            formData.adminID = props.admin._id;
            console.log(formData);
            if(formData.Newpassword === formData.Repassword){
                if(formData.role != "None"){
                    if(formData.password != formData.Newpassword){
                            try {
                                const response = await fetch('https://prediabetescalculatornodejs.onrender.com/admin/updateAdmin', {
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
                                    alert("Your acc updated");
                                    handleLogout();
                                }else{
                                    alert("Wrong old password");
                                }
                                console.log(data);
                          
                              } catch (err) {
                                console.log(err.message);
                            }
                    }else{
                        alert("New password same as old password");
                    }
                }else{
                    alert("Chose admin role");
                }
            }else{
                alert("passwords not matching each other please try again");
            }
        }else{
            if(formData.password != ""){
                formData.adminID = props.admin._id;
                try {
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/admin/updateAdmin', {
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
                        alert("Your acc updated");
                        handleLogout();
                    }else{
                        alert("Wrong old password");
                    }
                    console.log(data);
            
                } catch (err) {
                    console.log(err.message);
                }
            }else{
                alert("Enter your old password to update");
            }
            
        }
    };


    return ( 
            <form method="POST" className="flex flex-col p-10 w-[600px] shadow-2xl rounded-lg bg-cyan-100" onSubmit={handleSubmit(submitHandler)}>
                <label className="text-left text-2xl font-semibold mb-4" >Update Account</label>
                <div className="grid grid-cols-2 gap-2 mb-4">
                    <div>
                        <label className="text-left mb-2 ml-1" >Username</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "text"
                            name = "username"
                            placeholder = "Enter username"
                            defaultValue = {props.admin.username}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                    <div>
                        <label className="text-left mb-2 ml-1" >Role</label>
                        <RoleSelectInput
                            name="role"
                            type="text"
                            defaultValue = {props.admin.role}
                            register={register}
                            validation={{ required: true }}
                            options={roles} 
                        />
                    </div>
                </div>  

                <div className="grid grid-cols-3 gap-2 mb-4">
                    <div>
                    <label className="text-left mb-2 ml-1 mt-4" >Old Password</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "password"
                            name = "password"
                            placeholder = ""
                            register={register}
                            validation={{ required: false }}
                        />
                    </div>
                    <div>
                    <label className="text-left mb-2 ml-1 mt-4" >New Password</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "password"
                            name = "Newpassword"
                            placeholder = ""
                            register={register}
                            validation={{ required: false }}
                        />
                    </div>
                    <div>
                    <label className="text-left mb-2 ml-1 mt-4" >Re-Password</label>
                        <TextInputCustom 
                            className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 hover:bg-cyan-50 rounded-md"
                            type = "password"
                            name = "Repassword"
                            placeholder = ""
                            register={register}
                            validation={{ required: false }}
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
                            placeholder = "Enter your name"
                            defaultValue = {props.admin.name}
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
                            placeholder = "Enter your age"
                            defaultValue = {props.admin.age}
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
                            placeholder = "Enter your gender"
                            defaultValue = {props.admin.gender}
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
                            placeholder = "Enter your email"
                            defaultValue = {props.admin.email}
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
                            placeholder = "Enter your phone number"
                            defaultValue = {props.admin.phoneNumber}
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
                            placeholder = "Enter your address"
                            defaultValue = {props.admin.address}
                            register={register}
                            validation={{ required: true }}
                        />
                    </div>
                </div> 

                <button
                    type="submit"
                    className="rounded-xl mt-4 px-8 self-center bg-white py-3 w-1/2 border-2 border-gray-300"
                >
                    Update
                </button>
            </form>
    );
}
 
export default UpdateAdminAcc;