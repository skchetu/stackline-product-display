import React from 'react';

// Utils
import { useAppSelector } from '../redux/hooks';
import { selectFirstProductSales } from '../redux/selectors';

// Components
import SalesTable from './SalesTable';

const TableContainer: React.FC = () => {
  // Get sales data from the redux store
  const sales = useAppSelector(selectFirstProductSales);

  return (
    <div className="table-container">
      <SalesTable salesData={sales} />
    </div>
  );
};

export default TableContainer;
