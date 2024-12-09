import { Typography } from '@mui/material';
import axios from 'axios';

export const productUrl = 'http://localhost:5000/products';

export const removeProduct = (id) => {
  axios.delete(`${productUrl}/${id}`).catch(() => {
    return (
      <Typography
        variant="h3"
        sx={{ margin: '5rem auto', textAlign: 'center' }}
      >
        Some error occured... Try again later :&#41;
      </Typography>
    );
  });
};

export const fetchProduct = axios.get(productUrl).then((res) => {
  let data = res?.data;
  return data;
});
