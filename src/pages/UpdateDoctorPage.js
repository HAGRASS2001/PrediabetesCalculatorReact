import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import UpdateDoctor from '../components/Doctors/updateDoctor';
import { AuthContext } from '../components/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateDoctorPage = () => {
    const [doctor, setDoctor] = useState('');
    const [isLoading, setIsLoading]= useState(true);
    const params = useParams();
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(id == ''){
            navigate('/login');
        }else{
            const fetchAbortController = new AbortController();
            const fetchSignal = fetchAbortController.signal;
        
            const fetchDoctor = async () =>{
                try{
                    // send HTTP GET request 
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/doctor/getDoctorById/' + params.doctorID ,{
                    signal: fetchSignal 
                    });
                    // parse returned data 
                    const data = await response.json();

                    // handle http errors 
                    if(!response.ok){
                        throw Error(data.error);
                    }
                    
                    setDoctor(data);
                    setIsLoading(false);
                }catch(err){
                    console.log(err.message);
                }
            };
            //console.log("refresh");
            fetchDoctor();
            return () => {
                fetchAbortController.abort();
            };
        }
    }, [doctor]);
    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return (
        <UpdateDoctor doctor={doctor}/>
     );
}
 
export default UpdateDoctorPage;