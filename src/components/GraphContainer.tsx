import React from 'react';

// Utils
import { useAppSelector } from '../redux/hooks';
import { selectFirstProductSales } from '../redux/selectors';

// Types
import { Sale } from '../types';

// Components
import SalesGraph from './SalesGraph';

const GraphContainer: React.FC = () => {
  // Fetch sales data from Redux store
  const sales = useAppSelector(selectFirstProductSales);

  // Initialize arrays to store data for the graph
  let weekEnding: string[] = [];
  let retailsSales: number[] = [];
  let wholesaleSales: number[] = [];

  // If data is available, extract necessary info to graph on chart
  if (sales.length > 0) {
    weekEnding = sales.map((s: Sale) => s.weekEnding);
    retailsSales = sales.map((s: Sale) => s.retailSales);
    wholesaleSales = sales.map((s: Sale) => s.wholesaleSales);
  }

  return (
    <div className="graph-container">
      <div className="graph-title">Retail Sales</div>
      <SalesGraph labels={weekEnding} retailData={retailsSales} wholesaleData={wholesaleSales} />
    </div>
  );
};

export default GraphContainer;
