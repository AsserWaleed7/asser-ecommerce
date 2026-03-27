import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <tr>
      <td className="align-middle">
        <div className="d-flex align-items-center">
          <Image
            src={item.image}
            thumbnail
            style={{ width: '60px', height: '60px' }}
            className="me-3"
          />
          <div>
            <div className="fw-bold">{item.name}</div>
          </div>
        </div>
      </td>
      <td className="align-middle">${item.price.toFixed(2)}</td>
      <td className="align-middle">
        <div className="d-flex align-items-center">
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </Button>
          <span className="mx-3 px-3 py-1 bg-light rounded">{item.quantity}</span>
          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
      </td>
      <td className="align-middle fw-bold">
        ${(item.price * item.quantity).toFixed(2)}
      </td>
      <td className="align-middle">
        <Button
          variant="danger"
          size="sm"
          onClick={() => onRemove(item.id)}
        >
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;