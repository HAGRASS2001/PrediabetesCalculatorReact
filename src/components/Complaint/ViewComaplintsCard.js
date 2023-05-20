import { useNavigate } from 'react-router-dom';
import Card from '../UI/complaintCards/Card';
import CardActions from '../UI/complaintCards/CardActions';
import CardBody from '../UI/complaintCards/CardBody';
import CardHeader from '../UI/complaintCards/CardHeader';
import { useForm } from 'react-hook-form';
import TextAreaInputCustom from "../UI/form/TextAreaInputCustom";
import { useState, useEffect } from 'react';

const ViewComplaintsCard = (props) => {
    const { register, handleSubmit, formState } = useForm();
    const navigate = useNavigate();
    const [solvedSolution, setSolvedSolution] = useState('');
    const [solved, setSolved] = useState('Pending');
    const [isLoading, setIsLoading]= useState(true);
    useEffect(() => {
        const fetchAbortController = new AbortController();
        const fetchSignal = fetchAbortController.signal;
    
        const fetchDoctors = async () =>{
            try{
                // send HTTP GET request 
                const response = await fetch('https://prediabetescalculatornodejs.onrender.com/Solvedcomplaints/Solvedcomplaint/' + props.complaint._id ,{
                   signal: fetchSignal 
                });
                // parse returned data 
                const data = await response.json();
                // handle http errors 
                if(!response.ok){
                    throw Error(data.error);
                }
                
                setSolvedSolution(data);
                if(data.solved == true){
                    setSolved('true');
                }else if(data.solved == false){
                    setSolved('false');
                }
                setIsLoading(false);
            }catch(err){
                console.log(err.message);
            }
        };

        fetchDoctors();

        return () => {
            fetchAbortController.abort();
        };
    }, []);



    const handleSolvedChange = (event) => {
        setSolved(event.target.value);
    };

    const handleUserInfo = () =>{
        navigate("/ViewUserInfo/" + props.complaint.userID);
    }

    const submitHandler = async (formData) => {
        formData.solved = solved;
        formData.complaintID = props.complaint._id;
        console.log(formData);
                try {
                    const response = await fetch('https://prediabetescalculatornodejs.onrender.com/Solvedcomplaints/createSolution', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(formData)
                    });
              
                    const data = await response.json();
              
                    if (!response.ok) {
                      throw Error(data.error);
                    }
                    console.log(solvedSolution);
                    console.log(data);
              
                  } catch (err) {
                    console.log(err.message);
                  }
    };

    return ( 
        <Card>
            <CardHeader>
                <h1 className="text-lg font-bold">Complaint Number: {props.counter}</h1>
            </CardHeader>
            <CardBody>
                <div>
                    <p className="text-sm mb-2"><span className="font-semibold">Problem Descrption:</span> {props.complaint.problemDescrption}</p>
                    <p className="text-sm mb-2"><span className="font-semibold">Email:</span> {props.complaint.email}</p>
                    <p className="text-sm mb-2"><span className="font-semibold">Phone Number:</span> {props.complaint.phoneNumber}</p>
                </div>
                <div>
                    <form method="POST" className="flex flex-col w-full" onSubmit={handleSubmit(submitHandler)}>
                        <label className="text-left ml-1" >Solution:</label>
                            <TextAreaInputCustom 
                                className = "placeholder-black px-4 py-2 border-2 mt-2 border-gray-300 outline-none  active:bg-gray-400 focus:outline-none  focus:ring-gray-400 h-[90px] hover:bg-cyan-50 rounded-md"
                                type = "text"
                                name = "solution"
                                value = {solvedSolution.solution}
                                register={register}
                                validation={{ required: true }}
                            />
                            <div className="flex flex-row justify-center items-center gap-4 mt-4">
                                <label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="solved"
                                        value= "true"
                                        checked={solved === "true"}
                                        onChange={handleSolvedChange}
                                    />
                                    Solved
                                </label>
                                <label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="solved"
                                        value="false"
                                        checked={solved === 'false'}
                                        onChange={handleSolvedChange}
                                    />
                                    Not Solved
                                </label>
                                <label>
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        checked={solved === 'Pending'}
                                        disabled={true}
                                        onChange={handleSolvedChange}
                                    />
                                    Pending
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="rounded-xl mt-4 px-5 self-center bg-white py-3 w-1/2 border-2 border-gray-300 hover:bg-gray-300 text-xs">
                                Solve
                            </button>
                    </form> 
                </div>

            </CardBody>
            <CardActions>
                        <a href={"mailto:"+ props.complaint.email}  className="rounded-xl mt-4 px-5 self-center bg-white py-3 w-1/4 border-2 border-gray-300 hover:bg-gray-300 text-xs text-center"> Send Email</a>
                        <button onClick={handleUserInfo} className="rounded-xl mt-4 px-5 self-center bg-white py-3 w-1/4 border-2 border-gray-300 hover:bg-gray-300 text-xs">View User Info</button>
            </CardActions>
        </Card>
    );
}
 
export default ViewComplaintsCard;