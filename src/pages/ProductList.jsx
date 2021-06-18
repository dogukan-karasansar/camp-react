import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Table, Menu, Icon, Button } from "semantic-ui-react";
import ProductService from "../services/productService";
import { addToCart } from "../store/actions/cartActions";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((res) => setProducts(res.data.data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>productName</Table.HeaderCell>
            <Table.HeaderCell>unitPrice</Table.HeaderCell>
            <Table.HeaderCell>unitsInStock</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((products) => (
            <Table.Row key={products.id}>
              <Table.Cell>{products.productName}</Table.Cell>
              <Table.Cell>{products.unitPrice}</Table.Cell>
              <Table.Cell>{products.unitsInStock}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCart(products)}>Ekle</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
