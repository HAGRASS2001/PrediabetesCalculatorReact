import { useNavigate } from 'react-router-dom';
import Card from '../UI/cards/Card';
import CardActions from '../UI/cards/CardActions';
import CardBody from '../UI/cards/CardBody';
import CardHeader from '../UI/cards/CardHeader';

const DoctorCard = (props) => {
    
    const navigate = useNavigate();

    const editBtnHandler = () => {
        navigate(`/UpdateDoctor/${props.doctor._id}`);
    };

    const deleteBtnHandler = async () => {
        try {
            const response = await fetch('https://prediabetescalculatornodejs.onrender.com/doctor/deleteDoctor/' + props.doctor._id , {
              method: 'DELETE'
            });
      
            const data = await response.json();
      
            if (!response.ok) {
              throw Error(data.error);
            }
            console.log(data);
      
          } catch (err) {
            console.log(err.message);
          }
    };

    return ( 

        <Card>
            <CardHeader>
                <h1 className="text-lg font-semibold">Dr. {props.doctor.name}</h1>
            </CardHeader>
            <CardBody>
                <div>
                    <p className="text-sm mb-2">Email: {props.doctor.email}</p>
                    <p className="text-sm mb-2">Phone Number: {props.doctor.phoneNumber}</p>
                    <p className="text-sm mb-2">Clinic Number: {props.doctor.clinicNumber}</p>
                </div>
                <div>
                    <p className="text-sm mb-2">Clinic Address: {props.doctor.address}</p>
                    <p className="text-sm mb-2">Open Time: {props.doctor.workinghours.openTime}</p>
                    <p className="text-sm mb-2">Close Time: {props.doctor.workinghours.closeTime}</p>
                </div>
                </CardBody>
                <CardActions>
                    <button onClick={editBtnHandler} className="rounded-xl mt-4 px-8 self-center bg-white py-3 w-1/2 border-2 border-gray-300 hover:bg-gray-300 text-sm">Update Doctor</button>
                    <button onClick={deleteBtnHandler} className="rounded-xl mt-4 px-8 self-center bg-white py-3 w-1/2 border-2 border-gray-300 hover:bg-gray-300 text-sm">Delete Doctor</button>
                </CardActions>
        </Card>
     );
}
 
export default DoctorCard;