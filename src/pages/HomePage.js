import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../components/Auth/AuthProvider';
import Home from '../components/Home/Home';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const [Admin, setAdmin] = useState('');
    const [isLoading, setIsLoading]= useState(true);
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();
    
    useEffect(() => {
        if(id == ''){
            navigate('/login')
        }else{
            const fetchAbortController = new AbortController();
            const fetchSignal = fetchAbortController.signal;
        
            const fetchAdmin = async () =>{
                try{
                    // send HTTP GET request 
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/admin/getAdminById/' + id ,{
                    signal: fetchSignal 
                    });
                    // parse returned data 
                    const data = await response.json();

                    // handle http errors 
                    if(!response.ok){
                        throw Error(data.error);
                    }
                    
                    setAdmin(data);
                    setIsLoading(false);
                }catch(err){
                    console.log(err.message);
                }
            };
            fetchAdmin();
            return () => {
                fetchAbortController.abort();
            };
        }
    }, [Admin]);
    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return ( 
        <Home admin = {Admin}/>
     );
}
 
export default HomePage;