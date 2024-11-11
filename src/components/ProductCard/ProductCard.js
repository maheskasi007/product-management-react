import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { AppContext } from '../../contexts/AppContext';
import formatPrice from '../../utils/formatPriceUtils';
import capitalize from '../../utils/capitalizeUtils';

const ProductCard = ({ ...item }) => {
  const price = formatPrice(item.price);
  const removeProduct = useContext(AppContext);

  const handleRemoveProduct = (id) => {
    removeProduct.productDispatch({ type: 'REMOVE_PRODUCT', payload: { id } });
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      <CardContent>
        <Link
          to={`/products/${item.id}`}
          style={{
            textDecoration: 'none',
            color: 'inherit',
            display: 'block',
            height: '65px',
          }}
        >
          <Typography variant="h5" sx={{ textDecoration: 'none' }}>
            {item.title}
          </Typography>
        </Link>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            height: '120px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {item.description}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="caption">
          Category: {capitalize(item.category)}
        </Typography>
        <Typography variant="h4" sx={{ color: 'text.secondary' }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', color: 'red' }}>
        <Button size="small" onClick={handleRemoveProduct.bind(this, item.id)}>
          <DeleteOutlineIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
export default ProductCard;
