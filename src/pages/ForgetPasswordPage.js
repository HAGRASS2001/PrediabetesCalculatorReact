import ForgetPassword from "../components/Admin/ForgetPassword";
import { useContext } from 'react';
import { AuthContext } from '../components/Auth/AuthProvider';

const LoginPage = () => {
    const { id } = useContext(AuthContext);

    return ( 
        <div className="flex items-center h-[657px]">
            <ForgetPassword />
        </div>
     );
}
 
export default LoginPage;