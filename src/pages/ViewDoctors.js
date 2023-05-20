import { useEffect, useState, useContext } from 'react';
import DoctorList from '../components/Doctors/DoctorList';
import { AuthContext } from '../components/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ViewDoctorsPage = () => {
    const [doctors, setDoctor] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(id == ''){
            navigate('/login');
        }else{
            const fetchAbortController = new AbortController();
            const fetchSignal = fetchAbortController.signal;
        
            const fetchDoctors = async () =>{
                try{
                    // send HTTP GET request 
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/doctor/getAllDoctors',{
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

            fetchDoctors();

            return () => {
                fetchAbortController.abort();
            };
        }
    }, [doctors]);

    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return ( 
        <div className="flex flex-col items-center justify-center">
            <DoctorList doctors={doctors}/>
        </div>
     );
}
 
export default ViewDoctorsPage;