import React from 'react';

const CategoryButton = ({ category, className, onChangeCategory }) => {
  return (
    <button className={className} onClick={() => onChangeCategory(category)} aria-label={`Filter projects by ${category}`}>
      {category}
    </button>
  );
};

export default CategoryButton;