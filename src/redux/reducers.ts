import { LOAD_PRODUCT_DATA } from './actions';

const initialState = {
  productData: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    // Handle the action type for loading product data into the store
    case LOAD_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
