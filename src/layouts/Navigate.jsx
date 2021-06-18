import React from "react";
import { useSelector } from "react-redux";
import { Button, Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";

export default function Navigate() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length > 0 && <CartSummary />}

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
