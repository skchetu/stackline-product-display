import { Root } from 'react-dom/client';
import { RootState } from './store';
import { ProductData, Sale } from '../types';
import { createSelector } from 'reselect';

// Selector function to get the productData from the Redux state
const selectProductData = (state: RootState) => state.productData;

// Selector using reselect to get the first product data from the productData array
export const selectFirstProductData = createSelector(
  [selectProductData],
  (productData: ProductData[]): ProductData | {} => {
    return productData.length > 0 ? productData[0] : {};
  }
);

// Selector using reselect to get the sales data from the first product data
export const selectFirstProductSales = createSelector([selectProductData], (productData: ProductData[]): Sale[] => {
  return productData.length > 0 ? productData[0].sales : [];
});
