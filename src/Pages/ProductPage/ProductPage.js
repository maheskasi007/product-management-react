import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Box, CircularProgress, Grid2, Typography } from '@mui/material';
import { AppContext, useGlobalContext } from '../../contexts/AppContext';
import Title from '../../components/Title/Title';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductPage = () => {
  const { product } = useGlobalContext();

  const newProduct = Array.from(product?.entries());

  return (
    <>
      <Title
        titleName="Products | Product Management System"
        description="Products - Product Management System"
        href={'/assets/product.png'}
      />
      <section>
        <Typography
          variant="h3"
          color="text.secondary"
          sx={{ mt: '2rem', textAlign: 'center' }}
        >
          Our Products
        </Typography>

        <Box sx={{ flexGrow: 1, p: 5 }}>
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 1, sm: 1, md: 12, lg: 16, xl: 20 }}
          >
            {newProduct?.map((product) => {
              const [id, item] = product;
              return (
                <Grid2
                  key={id}
                  size={{ xs: 2, sm: 4, md: 4 }}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <ProductCard {...item} />
                </Grid2>
              );
            })}
          </Grid2>
        </Box>
      </section>
    </>
  );
};
export default ProductPage;
