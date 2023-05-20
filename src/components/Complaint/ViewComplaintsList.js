import ViewComplaintsCard from "./ViewComaplintsCard";

const ViewComplaintsList = (props) => {
    let counter = 0;

    return (
        <div> 
            <div className="text-center">
                <h1 className="text-4xl font-semibold italic text-gray-700 mb-8">Complaints List</h1>
            </div>
            <div className="grid grid-cols-2 gap-7 justify-center items-center">
                {props.complaints.map((c)=>(
                    <ViewComplaintsCard counter = {++counter} complaint={c} key={c._id}/>
                ))}
            </div>
        </div>
     );
}
 
export default ViewComplaintsList;