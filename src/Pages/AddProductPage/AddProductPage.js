import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import { AppContext } from '../../contexts/AppContext';
import Title from '../../components/Title/Title';

const AddProductPage = () => {
  const addProduct = useContext(AppContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const onSubmit = (data, event) => {
    event.preventDefault();
    const productData = data.tags;
    data['tags'] = productData.split(' ');
    data['images'] = ['https://placehold.co/260x220'];
    setIsSubmitting(true);
    addProduct.productDispatch({ type: 'ADD_PRODUCT', payload: { data } });
    setIsSaved(true);
    setIsSubmitting(false);
    event.target.reset();
  };

  // if (addProduct.productState.isError) {
  //   return (
  //     <Typography
  //       variant="h3"
  //       sx={{ margin: '5rem auto', textAlign: 'center' }}
  //     >
  //       Some error occured... Try again later :)
  //     </Typography>
  //   );
  // }
  // if (addProduct.productState.isLoading) {
  //   return (
  //     <Box
  //       sx={{
  //         display: 'flex',
  //         p: 10,
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <CircularProgress size="10rem" />
  //     </Box>
  //   );
  // }

  return (
    <>
      <Title
        titleName="Add Product | Product Management System"
        description="Add Product - Product Management System"
        href={'/assets/add-product.png'}
      />
      <section>
        <Typography variant="h3" sx={{ maxWidth: '80%', margin: '1rem auto' }}>
          Add Product
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ maxWidth: '80%', margin: '0 auto' }}
        >
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productNameInput" className="form-label">
              Product Name
            </label>
            <input
              label="Product Name"
              id="productNameInput"
              placeholder="Enter your Product name..."
              className="form-control border border-secondary"
              {...register('title', { required: true, maxLength: 40 })}
            />
            {errors.title && (
              <p className="text-danger">Product name is required</p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productBrandInput" className="form-label">
              Product Brand
            </label>
            <input
              label="Product Brand"
              id="productBrandInput"
              placeholder="Enter your Product Brand..."
              className="form-control border border-secondary"
              {...register('brand', { required: true, maxLength: 40 })}
            />
            {errors.brand && (
              <p className="text-danger">Product Brand is required</p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productCategoryInput" className="form-label">
              Product Category
            </label>
            <input
              label="Product Category"
              id="productCategoryInput"
              placeholder="Enter your Product Category..."
              className="form-control border border-secondary"
              {...register('category', { required: true, maxLength: 50 })}
            />
            {errors.category && (
              <p className="text-danger">Product Category is required</p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productTagsInput" className="form-label">
              Product tags
            </label>
            <input
              label="Product Tags"
              id="productTagsInput"
              placeholder="Enter your Product Tags..."
              className="form-control border border-secondary"
              {...register('tags', { required: true, maxLength: 50 })}
            />
            {errors.tags && (
              <p className="text-danger">Product Tags is required</p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productPriceInput" className="form-label">
              Product Price (in dollars)
            </label>
            <input
              type="number"
              label="Product Price"
              id="productPriceInput"
              placeholder="Enter your Product Price..."
              className="form-control border border-secondary"
              {...register('price', {
                required: true,
                valueAsNumber: true,
                pattern: -/0-9\. /,
              })}
            />
            {errors.price && (
              <p className="text-danger">Product Price is required</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="productDescriptionInput" className="form-label">
              Product Description
            </label>
            <textarea
              label="Product Description"
              id="productDescriptionInput"
              placeholder="Enter your Product Description..."
              className="form-control border border-secondary"
              {...register('description', {
                required: true,
                maxLength: 1500,
                minLength: 2,
              })}
            />
            {errors.description && (
              <p className="text-danger">Product Description is required</p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productOfferInput" className="form-label">
              Product Offer Percentage
            </label>
            <input
              type="number"
              label="Product Offer"
              id="productOfferInput"
              placeholder="Enter your Product Offer..."
              className="form-control border border-secondary"
              {...register('discountPercentage', {
                required: true,
                valueAsNumber: true,
                pattern: -/0-9 /,
              })}
            />
            {errors.discountPercentage && (
              <p className="text-danger">
                Product Offer Percentage is required
              </p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productAvailabilityInput" className="form-label">
              Product Availability
            </label>
            <select
              className="form-select border-secondary"
              id="productAvailabilityInput"
              {...register('availabilityStatus')}
            >
              <option value={'In Stock'}>In Stock</option>
              <option value={'Out of Stock'}>Out of Stock</option>
            </select>
            {errors.availabilityStatus && (
              <p className="text-danger">
                Product Availability Value is required
              </p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productInStockInput" className="form-label">
              Product In Stock Value
            </label>
            <input
              type="number"
              label="Product InStock"
              id="productInStockInput"
              placeholder="Enter your Product In Stock..."
              className="form-control border border-secondary"
              {...register('stock', {
                required: true,
                valueAsNumber: true,
                pattern: -/0-9 /,
              })}
            />
            {errors.stock && (
              <p className="text-danger">Product In Stock Value is required</p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productReturnInput" className="form-label">
              Product Return Policy (In Months)
            </label>
            <input
              type="number"
              label="Product Return"
              id="productReturnInput"
              placeholder="Enter your Product Return policy..."
              className="form-control border border-secondary"
              {...register('returnPolicy', {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.returnPolicy && (
              <p className="text-danger">Product Return Policy is required</p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productShippingInput" className="form-label">
              Product Shipping Details (In Days)
            </label>
            <input
              type="number"
              label="Product Shipping"
              id="productShippingInput"
              placeholder="Enter your Product Shipping policy..."
              className="form-control border border-secondary"
              {...register('shippingInformation', {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.shippingInformation && (
              <p className="text-danger">
                Product Shipping Details is required
              </p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productMinOrderInput" className="form-label">
              Product Minimum Order
            </label>
            <input
              type="number"
              label="Product MinOrder"
              id="productMinOrderInput"
              placeholder="Enter your Product Minimum Order..."
              className="form-control border border-secondary"
              {...register('minimumOrderQuantity', {
                required: true,
                valueAsNumber: true,
                pattern: -/0-9 /,
              })}
            />
            {errors.minimumOrderQuantity && (
              <p className="text-danger">
                Product Minimum Order Quantity is required
              </p>
            )}
          </div>
          <div className="mb-3 mt-3 mt-md-0">
            <label htmlFor="productWeightInput" className="form-label">
              Product Weight (in grams)
            </label>
            <input
              type="number"
              label="Product Weight"
              id="productWeightInput"
              placeholder="Enter your Product Weight..."
              className="form-control border border-secondary"
              {...register('weight', {
                required: true,
                valueAsNumber: true,
                pattern: -/0-9 /,
              })}
            />
            {errors.weight && (
              <p className="text-danger">Product Weight is required</p>
            )}
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              {isSubmitting ? (
                <div className="spinner-border text-light" role="status"></div>
              ) : (
                'Submit'
              )}
            </button>
          </div>
          {isSaved && (
            <div className="alert alert-success">Saved Successfully!</div>
          )}
          {/* {addProduct.productState.isError && (
            <div className="alert alert-danger">
              Sorry! Some Error Occurred! Try again latter!
            </div>
          )} */}
        </form>
      </section>
    </>
  );
};
export default AddProductPage;
