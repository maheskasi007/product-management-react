import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuList from '../MenuList/MenuList';

const Header = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Using Link from react-router-dom for logo to navigate Home */}
          <Link to="/">
            <img src="/assets/logo.png" alt="Logo" width="40" />
          </Link>
          <MenuList />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
