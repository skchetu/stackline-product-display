import React from 'react';

// Utils
import { useAppSelector } from '../redux/hooks';
import { selectFirstProductData } from '../redux/selectors';

// Types
import { ProductData } from '../types';

const SidePanel: React.FC = () => {
  const { image, title, subtitle, tags } = useAppSelector(selectFirstProductData) as ProductData;

  return (
    <div className="side-panel">
      {image && title && subtitle && tags && (
        <div>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <div className="horizontal-line"></div>
          <div className="tags-container">
            {tags.map((tag: string, index: number) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
          <div className="horizontal-line"></div>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
