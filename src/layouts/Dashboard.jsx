import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import AddCategory from "../pages/AddCategory";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <ProductList />
          </Grid.Column>
          <GridColumn>
            <AddCategory />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </div>
  );
}
