import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import Title from '../../components/Title/Title';
import Hero from './Hero/Hero';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';

const HomePage = () => {
  return (
    <>
      <Title
        titleName="Home | Product Management System"
        description="Home - Product Management System"
        href={'/assets/home.png'}
      />
      <section>
        <Hero />
        <hr style={{ margin: '2rem 0' }} />

        <FeaturedProducts />

        <Box sx={{ textAlign: 'center', pb: 5 }}>
          <Button variant="contained" size="large">
            <Link
              style={{ textDecoration: 'none', color: 'inherit' }}
              to="/products"
            >
              View More Products...
            </Link>
          </Button>
        </Box>
      </section>
    </>
  );
};
export default HomePage;
