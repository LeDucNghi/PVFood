import "./styles/List.css";

import React from "react";
import { faker } from "@faker-js/faker";

export default function Favorites() {
  const favorites = [...Array(5)].map((_, key) => ({
    id: faker.datatype.uuid(),
    productName: faker.commerce.product(),
    productImg: faker.image.food(),
    productPrice: faker.commerce.price(),
  }));

  return <>{/* <List list={favorites} /> */}</>;
}
