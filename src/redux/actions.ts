import { ProductData } from '../types';

// Action type constant for loading product data into the Redux store
export const LOAD_PRODUCT_DATA = 'LOAD_PRODUCT_DATA';

export const loadProductData = (jsonData: ProductData[]) => ({
  type: LOAD_PRODUCT_DATA, // Action type to load product data
  payload: jsonData, // Payload containing data to be laoded
});
