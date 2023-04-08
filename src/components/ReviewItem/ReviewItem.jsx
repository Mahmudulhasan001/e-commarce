import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, name, price, quantity } = product;
  return (
    <div className="review-items">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-titles">{name}</p>
        <p>
          PRice : <span className="orange-text">${price}</span>
        </p>
        <p>
          Quantity : <span className="orange-text">{quantity}</span>
        </p>
      </div>

      <button onClick={() => handleRemoveFromCart(id)} className="btn-delate">
        <FontAwesomeIcon className="delate-icon" icon={faTrash} />
      </button>
    </div>
  );
};

export default ReviewItem;
