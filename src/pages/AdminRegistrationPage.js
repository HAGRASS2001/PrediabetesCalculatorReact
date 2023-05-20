import AdminRegistration from "../components/Admin/AdminRegistration";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../components/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AdminRegistrationPage = () => {
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(id == ''){
            navigate('/login');
        }
    }, []);

    return(
        <div className="flex items-center justify-center">
            <AdminRegistration />
        </div>
     );
}
 
export default AdminRegistrationPage;