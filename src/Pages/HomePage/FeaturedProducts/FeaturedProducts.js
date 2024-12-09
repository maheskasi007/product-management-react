

import { Box, Typography, Grid2 } from '@mui/material';
import { useGlobalContext } from '../../../contexts/AppContext';
import ProductCard from '../../../components/ProductCard/ProductCard';

const FeaturedProducts = () => {
  const { product } = useGlobalContext();

  const newproduct = Array.from(product.entries()).slice(0, 5);

  return (
    <>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        Featured Products
      </Typography>
      <Box sx={{ flexGrow: 1, p: 5 }}>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 1, md: 12, lg: 16, xl: 20 }}
          sx={{ justifyContent: 'center' }}
        >
          {newproduct?.map((product) => {
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
    </>
  );
};
export default FeaturedProducts;
