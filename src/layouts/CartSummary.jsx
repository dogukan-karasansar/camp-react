import React from "react";
import { useSelector } from "react-redux";
import { Dropdown, Label } from "semantic-ui-react";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      <Dropdown item text="Sepet">
        <Dropdown.Menu>
          {cartItems.map((cardItem) => (
            <Dropdown.Item key={cardItem.product.id}>
              {cardItem.product.productName}
              <Label>{cardItem.queantity}</Label>
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
