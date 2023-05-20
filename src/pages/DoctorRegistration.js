import AddDoctor from "../components/Doctors/AddDoctor";
import { useContext, useEffect } from 'react';
import { AuthContext } from '../components/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const DoctorRegistration = () => {
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(id == ''){
            navigate('/login');
        }
    }, []);

    return(
        <div>
            <AddDoctor />
        </div>
     );
}
 
export default DoctorRegistration;