import React, { useState, useEffect } from "react";
import { Table, Menu, Icon } from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((res) => setProducts(res.data.data));
  }, []);

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
