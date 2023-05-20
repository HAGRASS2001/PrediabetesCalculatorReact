import { useForm } from 'react-hook-form';
import TextInput from "../UI/form/TextInput";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.png";
import { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import FormInputError from "../UI/form/FormInputError";

const Login = () => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const { setRole, setUsername, setID } = useContext(AuthContext);

    const handleForgetPassword = () => {
      navigate('/ForgetPassword');  
    }

    const submitHandler = async (formData) => {
        try {
          const response = await fetch('https://prediabetescalculatornodejs.onrender.com/admin/login/' + formData.username + "/" + formData.password , {
            method: 'GET'
          });
    
          const data = await response.json();
    
          if (!response.ok) {
            throw Error(data.error);
          }
          if(data.role == "Super Admin"){
            setRole(data.role);
            setUsername(data.username);
            setID(data._id);
          }else if (data.role == "Admin"){
            setRole(data.role);
            setUsername(data.username);
            setID(data._id);
          }
          navigate('/Home');   
          console.log(data);
    
        } catch (err) {
          alert("Wrong username or password. Please try again later.");
        }
      };

    return ( 
        <div className="grid grid-cols-2">
            <div className="w-96 mt-9 ml-20">
                <img src={Logo} width="400" alt="Description of the image" />
                <div><p className="ml-7">Access your account by logging in with your email and password. If you don't have an account yet, contact super admin.</p></div>
            </div>
            <div className='border-l border-gray-500 pl-40'>
                <form method="POST" className="flex flex-col p-10 w-full shadow-2xl rounded-lg bg-cyan-100" onSubmit={handleSubmit(submitHandler)}>
                    <label className="text-left text-2xl font-semibold mb-4" >Login</label>
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
                      <FormInputError>Password must not be empty</FormInputError>
                    )}  
                    <button
                        type="submit"
                        className="rounded-xl mt-4 px-8 self-center bg-white py-3 w-1/2 border-2 border-gray-300 hover:bg-gray-300"
                    >
                        Sign in
                    </button>
                    <div class="flex items-center my-8">
                        <div class="border-b border-gray-300 flex-grow"></div>
                            <span class="px-4 text-gray-500 font-medium">or</span>
                        <div class="border-b border-gray-300 flex-grow"></div>
                    </div>
                    <div className="text-center mb-2">
                        Can not remember? <button onClick={handleForgetPassword} className="text-md text-cyan-500">Forget Password</button>
                    </div>
                    <div className="text-center">
                        Contact Us on <a href="mailto:sugarsmart.sspc@gmail.com" className="text-cyan-500 text-center"> sugarsmart.sspc@gmail.com</a>
                    </div>
                </form>
            </div>
        </div>

     );
}
 
export default Login;