import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import menuListReducer from '../../reducers/menuListReducer';
import Menu from './Menu/Menu';

const MenuList = () => {
  const [menuState, menuDispatch] = useReducer(menuListReducer);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/menus')
      .then((res) => {
        menuDispatch({
          type: 'LIST_MENU',
          payload: res.data,
        });
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return (
      <Typography
        variant="h3"
        sx={{ margin: '5rem auto', textAlign: 'center' }}
      >
        Some error occured... Try again later :)
      </Typography>
    );
  }

  return (
    <Box
      className="nav-menu"
      sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}
    >
      {menuState?.map((menu) => {
        return <Menu key={menu.id} path={menu.path} title={menu.title} />;
      })}
    </Box>
  );
};
export default MenuList;
