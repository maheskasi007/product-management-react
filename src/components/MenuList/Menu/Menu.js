import { NavLink } from 'react-router-dom';

const Menu = ({ path, title }) => {
  return (
    <NavLink
      className="nav-item"
      sx={{ my: 2, color: '#dedede', display: 'block' }}
      to={path}
    >
      {title}
    </NavLink>
  );
};
export default Menu;
