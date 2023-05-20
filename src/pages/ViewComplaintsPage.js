import { useEffect, useState, useContext } from 'react';
import ViewComplaintsList from '../components/Complaint/ViewComplaintsList';
import { AuthContext } from '../components/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ViewComplaintsPage = () => {
    const [complaints, setComplaints] = useState([]);
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
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/complaint/getAllcomplaints',{
                    signal: fetchSignal 
                    });
                    // parse returned data 
                    const data = await response.json();

                    // handle http errors 
                    if(!response.ok){
                        throw Error(data.error);
                    }
                    
                    setComplaints(data);
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
    }, [complaints]);

    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return ( 
        <ViewComplaintsList complaints = {complaints}/>
     );
}
 
export default ViewComplaintsPage;