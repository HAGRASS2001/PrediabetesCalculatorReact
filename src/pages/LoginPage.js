import Login from "../components/Admin/Login";
import { useContext } from 'react';
import { AuthContext } from '../components/Auth/AuthProvider';

const LoginPage = () => {
    const { id } = useContext(AuthContext);

    return ( 
        <div className="flex items-center h-[657px]">
            <Login />
        </div>
     );
}
 
export default LoginPage;