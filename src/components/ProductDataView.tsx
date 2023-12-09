import React, { useEffect } from 'react';

// Utils
import { loadProductData } from '../redux/actions';
import { useAppDispatch } from '../redux/hooks';

// Components
import SidePanel from './SidePanel';
import GraphContainer from './GraphContainer';
import TableContainer from './TableContainer';

// Assets
import jsonProductData from '../assets/stackline_frontend_assessment_data_2021.json';

const ProductDataView: React.FC = () => {
  const dispatch = useAppDispatch(); // Access the Redux dispatch function

  // Dispatch an action for loading product data when the component mounts
  useEffect(() => {
    dispatch(loadProductData(jsonProductData)); // Use provided JSON data
  }, [dispatch, jsonProductData]);

  return (
    <div className="product-display">
      <SidePanel />
      <div className="product-data-display">
        <GraphContainer />
        <TableContainer />
      </div>
    </div>
  );
};

export default ProductDataView;
