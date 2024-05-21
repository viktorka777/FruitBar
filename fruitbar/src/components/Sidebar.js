
import React, { useState } from 'react';
import './Sidebar.css';
import Cart from './Cart';

function Sidebar() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [order, setOrder] = useState({});

  const handleSectionClick = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const handleAddToCart = (item) => {
    const newItem = { ...order };
    newItem[item] = newItem[item] ? newItem[item] + 1 : 1;
    setOrder(newItem);
  };

  const clearOrder = () => {
    setOrder({});
  };

  return (
    <div className="sidebar">
      <ul className="sections">
        <li onClick={() => handleSectionClick('Яблуня')}>
          Яблуня
          {expandedSection === 'Яблуня' && (
            <ul className="subsections">
              <li onClick={() => handleAddToCart('Сорт 1')}>Сорт 1</li>
              <li onClick={() => handleAddToCart('Сорт 2')}>Сорт 2</li>
              <li onClick={() => handleAddToCart('Сорт 3')}>Сорт 3</li>
            </ul>
          )}
        </li>
        
      </ul>

      
      <Cart order={order} clearOrder={clearOrder} />
    </div>
  );
}

export default Sidebar;
