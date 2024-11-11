import axios from 'axios';
import { addProduct, productUrl, removeProduct } from '../services/AppServices';

const appReducer = (state, action) => {
  let newProductList = new Map(state.product);

  switch (action.type) {
    case 'REMOVE_PRODUCT':
      newProductList.delete(action.payload.id);
      removeProduct(action.payload.id);
      alert('Product Deleted!! :)');
      return {
        ...state,
        isLoading: false,
        product: newProductList,
      };

    case 'ADD_PRODUCT':
      let newData = action.payload.data;
      axios.post(productUrl, newData).then((res) => {
        newProductList.set(res.data.id, res.data);
      });
      return {
        ...state,
        isLoading: false,
        product: newProductList,
      };

    case 'DISPLAY_ITEMS':
      newProductList = new Map(
        action.payload.data.map((item) => [item.id, item])
      );
      return { ...state, isLoading: false, product: newProductList };

    default:
      return {
        product: newProductList,
      };
  }
};
export default appReducer;
