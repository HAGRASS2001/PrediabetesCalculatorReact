import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink to={props.to}>
      <li className="text-white hover:bg-cyan-700 py-5 px-5 text-lg font-normal">
        {props.children}
      </li>
    </NavLink>
  );
};

export default NavItem;
