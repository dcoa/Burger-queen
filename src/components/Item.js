import React, { useContext } from 'react';
import { P2 } from './Styling';
import './Item.scss';
import { AppContext } from '../AppContext';
import Delete from '../assets/delete.svg';

export default function Item({ name, price, quantity, grid, id }) {
  const { deleteProduct } = useContext(AppContext);

  const handleDelete = () => {
    deleteProduct(id);
  };

  return (
    <tr className='bill-box'>
      <td><P2 className="bill-box-quantities">{quantity}</P2></td>
      <td><P2>{name}</P2></td>
      <td>
        <P2 className="bill-box-price">
          {`$${price}`}
        </P2>
      </td>
      <td>
        <img
          src={Delete}
          alt="delete"
          className="bill-box-delete"
          onClick={handleDelete}
          height='30px'
        />
      </td>
    </tr>
  );
}
