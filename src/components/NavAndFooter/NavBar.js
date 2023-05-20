import NavItem from "./NavItem";
import { AuthContext } from "../Auth/AuthProvider";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const NavBar = () => {
  const { id, role, setRole, setUsername, setID } = useContext(AuthContext);

  const handleLogout = () => {
    setID('');
    setRole('');
    setUsername('');
    Navigate('/login');
  }

  return ( 
      <nav>
        
      <ul className="flex justify-center items-center" style={{background: "#189AB4"}}>
        {id && <NavItem to={"/Home"}>Home</NavItem>}
        {role==="Super Admin" && <NavItem to="/adminRegistration">Admin Registration </NavItem>}
        {id && <NavItem to={"/DoctorRegistration"}>Doctor Registration</NavItem>}
        {id && <NavItem to={"/DisplayDoctors"}>Display Doctors</NavItem>}
        {id && <NavItem to={"/ViewComplaints"}>View Complaints</NavItem>}
        {id && <NavItem to={"/UpdateAdmin"}>Account</NavItem>}
        {id &&<NavItem to="/login"><button onClick={handleLogout}>Log out</button></NavItem>}
      </ul>
    </nav>
   );
}
 
export default NavBar;