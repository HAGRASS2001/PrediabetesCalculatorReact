import BodyTdDesign from '../UI/tablesUI/BodyTdDesign';
import { useNavigate } from 'react-router-dom';

const DoctorTable = (props) => {

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

    return(

        <tr>
            <BodyTdDesign>{props.doctor.name}</BodyTdDesign>
            <BodyTdDesign>{props.doctor.email}</BodyTdDesign>
            <BodyTdDesign>{props.doctor.phoneNumber}</BodyTdDesign>
            <BodyTdDesign>{props.doctor.clinicNumber}</BodyTdDesign>
            <BodyTdDesign>{props.doctor.address}</BodyTdDesign>
            <BodyTdDesign>{props.doctor.workinghours.openTime}</BodyTdDesign>
            <BodyTdDesign>{props.doctor.workinghours.closeTime}</BodyTdDesign>
            <BodyTdDesign><button onClick={editBtnHandler}>Update</button></BodyTdDesign>
            <BodyTdDesign><button onClick={deleteBtnHandler}>Delete</button></BodyTdDesign>
        </tr>
    );
};

export default DoctorTable; 