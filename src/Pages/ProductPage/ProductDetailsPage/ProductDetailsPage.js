import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  CardActions,
  CircularProgress,
  Grid2,
  Typography,
} from '@mui/material';
import Title from '../../../components/Title/Title';
import formatPrice from '../../../utils/formatPriceUtils';
import discountPercent from '../../../utils/discountPercentUtils';

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productItem, setProductItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${productId}`)
      .then((res) => {
        setIsLoading(false);
        setIsError(false);
        setProductItem(res.data);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [productId]);

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          p: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress size="10rem" />
      </Box>
    );
  }

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
    <>
      <Title
        titleName={`${productItem.title}`}
        description={`${productItem.description}`}
        href={'/assets/product.png'}
      />
      <section>
        <Box
          sx={{
            flexGrow: 1,
            m: 5,
          }}
        >
          <Grid2
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 1, sm: 1, md: 8 }}
          >
            <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
              <img
                src={productItem.images[0]}
                alt={`${productItem.title} - ${productItem.description}`}
                style={{ width: '100%' }}
              />
            </Grid2>
            <Grid2 size={{ xs: 2, sm: 4, md: 4 }}>
              <Typography variant="h3" color="text.primary">
                {productItem.title}
              </Typography>

              <Typography variant="caption" color="text.secondary">
                Tags:{' '}
                {productItem.tags.map((tag, index) => {
                  return (
                    <Typography
                      variant="caption"
                      key={index}
                      color="text.secondary"
                    >
                      {tag},{' '}
                    </Typography>
                  );
                })}
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  display: 'block',
                  fontSize: '1rem',
                  width: '60px',
                  textAlign: 'center',
                  background: '#388E3C',
                  color: '#fff',
                  borderRadius: '5px',
                  p: '0.3rem',
                }}
              >
                &#9733;{productItem.rating}
              </Typography>

              <Typography variant="h3" color="text.primary" pt={3}>
                {formatPrice(productItem.price)}
              </Typography>

              <Typography variant="subtitle1" color="text.primary">
                offer: {discountPercent(productItem.discountPercentage)}% extra
                discount
              </Typography>

              <Typography variant="subtitle1" color="text.primary">
                In Stock: {productItem.stock}
              </Typography>

              <Typography variant="h6" color="text.primary" pt={3}>
                Product Details:
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Description:
                </Typography>{' '}
                {productItem.description}
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Brand:
                </Typography>{' '}
                {productItem.brand}
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Weight:
                </Typography>{' '}
                {productItem.weight} gm
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Warranty:
                </Typography>{' '}
                {productItem.warrantyInformation} months warranty
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Shipping:
                </Typography>{' '}
                {productItem.shippingInformation} days
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Availablity:
                </Typography>{' '}
                {productItem.availabilityStatus}
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Return:
                </Typography>{' '}
                {productItem.returnPolicy} Days Return Policy
              </Typography>

              <Typography variant="body1" color="text.secondary" pt={1}>
                <Typography variant="button" color="text.secondary">
                  Minimum Order:
                </Typography>{' '}
                {productItem.minimumOrderQuantity}
              </Typography>
            </Grid2>
          </Grid2>
        </Box>
      </section>
    </>
  );
};
export default ProductDetailsPage;
