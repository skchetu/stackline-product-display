import React, { useState } from 'react';

// Types
import { Sale } from '../types/Sale';

// Enum for column labels
enum ColumnLabels {
  WeekEnding = 'weekEnding',
  RetailSales = 'retailSales',
  WholesaleSales = 'wholesaleSales',
  UnitsSold = 'unitsSold',
  RetailerMargin = 'retailerMargin',
}

// Enum for sorting directions
enum SortingDirection {
  Ascending = 'ascending',
  Descending = 'descending',
}

interface SalesTableProps {
  salesData: Sale[];
}

const SalesTable: React.FC<SalesTableProps> = ({ salesData }) => {
  // Create state to manage sorting configuration of table by column keys
  const [sortConfig, setSortConfig] = useState<{ key: keyof Sale; direction: SortingDirection }>({
    key: ColumnLabels.WeekEnding,
    direction: SortingDirection.Ascending,
  });

  // Format sales data for display
  const formattedSales = salesData.map((sale) => ({
    ...sale,
    weekEndingFormatted: formatWeekEnding(sale.weekEnding),
    retailSales: formatCurrency(sale.retailSales),
    wholesaleSales: formatCurrency(sale.wholesaleSales),
    retailerMargin: formatCurrency(sale.retailerMargin),
  }));

  // Handle sorting by column
  const handleSort = (key: keyof Sale) => {
    const direction =
      key === sortConfig.key && sortConfig.direction === SortingDirection.Ascending
        ? SortingDirection.Descending
        : SortingDirection.Ascending;

    setSortConfig({ key, direction });
  };

  // Sort the sales data based on the set sorting configuration
  const sortedSales = [...formattedSales].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (sortConfig.direction === SortingDirection.Ascending) {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  return (
    <table className="product-data-table">
      <thead>
        <tr>
          <SortableHeader
            label={ColumnLabels.WeekEnding}
            onClick={() => handleSort(ColumnLabels.WeekEnding)}
            sortConfig={sortConfig}
          >
            WEEK ENDING
          </SortableHeader>
          <SortableHeader
            label={ColumnLabels.RetailSales}
            onClick={() => handleSort(ColumnLabels.RetailSales)}
            sortConfig={sortConfig}
          >
            RETAIL SALES
          </SortableHeader>
          <SortableHeader
            label={ColumnLabels.WholesaleSales}
            onClick={() => handleSort(ColumnLabels.WholesaleSales)}
            sortConfig={sortConfig}
          >
            WHOLESALE SALES
          </SortableHeader>
          <SortableHeader
            label={ColumnLabels.UnitsSold}
            onClick={() => handleSort(ColumnLabels.UnitsSold)}
            sortConfig={sortConfig}
          >
            UNITS SOLD
          </SortableHeader>
          <SortableHeader
            label={ColumnLabels.RetailerMargin}
            onClick={() => handleSort(ColumnLabels.RetailerMargin)}
            sortConfig={sortConfig}
          >
            RETAILER MARGIN
          </SortableHeader>
        </tr>
      </thead>
      <tbody>
        {sortedSales.map((sale) => (
          <tr key={sale.weekEnding}>
            <td className="leftAlign">{sale.weekEndingFormatted}</td>
            <td>{sale.retailSales}</td>
            <td>{sale.wholesaleSales}</td>
            <td>{sale.unitsSold}</td>
            <td>{sale.retailerMargin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

interface SortableHeaderProps {
  label: string;

  onClick: () => void;
  sortConfig: { key: keyof Sale; direction: SortingDirection };
  children: React.ReactNode;
}

// Components to render header cells with sorting capability
const SortableHeader: React.FC<SortableHeaderProps> = ({ label, onClick, sortConfig, children }) => {
  const isSorting = sortConfig.key === label;
  const isAscending = sortConfig.direction === SortingDirection.Ascending;
  return (
    <th className={label === ColumnLabels.WeekEnding ? 'leftAlign' : ''} onClick={onClick}>
      {children} <span className="sort-icons">{isAscending || !isSorting ? '▼' : '▲'}</span>
    </th>
  );
};

// Helper function to format the weekEnding string
const formatWeekEnding = (weekEnding: string): string => {
  const [year, month, day] = weekEnding.split('-');
  return `${month}-${day}-${year.slice(-2)}`;
};

// Helper function to format currency value
const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

export default SalesTable;
