import React, { useState } from "react";

const Product = (props) => {
  const {
    available_product,
    discount_available,
    picture,
    product_category_id,
    product_descripition,
    product_id,
    product_name,
    quantity_per_unit,
    store_id,
    unit_price,
  } = props.data;

  return (
    <div className="store">
      <img src={picture} alt={product_name} />
      <div className="store-info">
        <h3>{product_name}</h3>
      </div>
      <div>
        <p>
          {unit_price} {quantity_per_unit}
        </p>
      </div>
      <div>
        <spam>{product_descripition}</spam>
      </div>
    </div>
  );
};

export default Product;
