import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import appReducer from '../reducers/appReducer';
import { fetchProduct } from '../services/AppServices';
import { Typography } from '@mui/material';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const initialState = {
    isError,
    product: new Map(),
  };
  const [productState, productDispatch] = useReducer(appReducer, initialState);
  const products = { ...productState, productDispatch };

  useEffect(() => {
    fetchProduct
      .then((data) => {
        products?.productDispatch({
          type: 'DISPLAY_ITEMS',
          payload: { data },
        });
        setIsError(false);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  if (isError) {
    return (
      <div>
        <Typography
          variant="h3"
          sx={{ margin: '5rem auto', textAlign: 'center' }}
        >
          Some error occured... Try again later :&#41;
        </Typography>
      </div>
    );
  }

  return <AppContext.Provider value={products}>{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
