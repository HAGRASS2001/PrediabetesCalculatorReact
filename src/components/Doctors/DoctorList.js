import TableDesign from "../UI/tablesUI/TableDesign";
import HeaderDesign from "../UI/tablesUI/HeaderDesign";
import HeaderTh from "../UI/tablesUI/HeaderTh";
import BodyDesign from "../UI/tablesUI/BodyDesign";
import DoctorCard from "./DoctorCard";
import DoctorTable from "./DoctorTable";
import { useState } from 'react';

const DoctorList = (props) => {
    const [cardView, setCardView] = useState(true);

    const handleCardView = () => {
        setCardView(!cardView);
    }

    return ( 
        <div>
            <div className="text-center">
                <h1 className="text-4xl font-semibold italic text-gray-700 mb-2">Doctors List</h1>
                <button onClick={handleCardView} className="text-md text-cyan-700 mb-8 underline">
                    Table View/Card View
                </button>
            </div>
            
            {cardView? (
                <div className="grid grid-cols-2 gap-7 justify-center items-center">
                    {props.doctors.map((d)=>(
                        <DoctorCard doctor={d} key={d._id}/>
                    ))}
                </div>
            ):(
                <div className="justify-center items-center">
                <TableDesign>
                    <HeaderDesign>
                        <HeaderTh>
                            Doctor Name
                        </HeaderTh>
                        <HeaderTh>
                            Email
                        </HeaderTh>
                        <HeaderTh>
                            Phone Number
                        </HeaderTh>
                        <HeaderTh>
                            Clinic Number
                        </HeaderTh>
                        <HeaderTh>
                            Clinic Address
                        </HeaderTh>
                        <HeaderTh>
                            Open Time
                        </HeaderTh>
                        <HeaderTh>
                            Close Time
                        </HeaderTh>
                        <HeaderTh>
                            Update Action
                        </HeaderTh>
                        <HeaderTh>
                            Delete Actions
                        </HeaderTh>
                    </HeaderDesign>
                    <BodyDesign>
                        {
                            props.doctors.map((d) =>(
                                <DoctorTable doctor={d} key={d._id}/>
                            ))
                        }
                    </BodyDesign>
                </TableDesign>
            </div>
            )}
        </div>
     );
}
 
export default DoctorList;