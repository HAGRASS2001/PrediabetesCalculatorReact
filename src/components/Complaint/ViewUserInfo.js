import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../UI/complaintCards/Card';
import CardActions from '../UI/complaintCards/CardActions';
import CardBody from '../UI/complaintCards/CardBody';
import CardHeader from '../UI/complaintCards/CardHeader';
import { AuthContext } from '../Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ViewUserInfo = (props) => {
    const [user, setUser] = useState('');
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

            const fetchUser = async () =>{
                console.log(params.userID);
                try{
                    // send HTTP GET request 
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/user/getUserByID/' + params.userID ,{
                    signal: fetchSignal 
                    });
                    // parse returned data 
                    const data = await response.json();
                    // handle http errors 
                    if(!response.ok){
                        throw Error(data.error);
                    }
                    
                    setUser(data);
                    setIsLoading(false);
                }catch(err){
                    console.log(err.message);
                }
            };

            fetchUser();

            return () => {
                fetchAbortController.abort();
            };
        }
    }, [user]);
    if (isLoading) {
        return <p>Please wait while we are loading data...</p>;
    }

    return ( 
        <div>
            <Card>
                <CardHeader>
                    <p className=" text-2xl font-semibold m-2">User Information</p>
                </CardHeader>
                <CardBody>
                    <div>
                        <p className="m-2">Name: {user.name}</p>
                        <p className="m-2">Phone Number: {user.phoneNumber}</p>
                        <p className="m-2">Email: <a href={"mailto:" + user.email} className="text-cyan-500 text-center underline">{user.email}</a></p>
                    </div>
                    <div>
                        <p className="m-2">Age: {user.age}</p>
                        <p className="m-2">Gender: {user.gender}</p>
                    </div>
                </CardBody>
                <CardActions>
                    <p className="m-2 font-bold">Note: You Can Contact User By Pressing On User's Email</p>
                </CardActions>
            </Card>
        </div>
     );
}
 
export default ViewUserInfo;