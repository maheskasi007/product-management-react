import { Route, Routes } from 'react-router-dom';
import HomePage from '../../Pages/HomePage/HomePage';
import ProductPage from '../../Pages/ProductPage/ProductPage';
import AddProductPage from '../../Pages/AddProductPage/AddProductPage';
import AboutUsPage from '../../Pages/AboutUsPage/AboutUsPage';
import ProductDetailsPage from '../../Pages/ProductPage/ProductDetailsPage/ProductDetailsPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage />} />
      <Route path="/add-product" element={<AddProductPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
    </Routes>
  );
};
export default AppRoutes;
