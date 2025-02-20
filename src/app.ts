import data from "../data.json";

import { Product } from "./entities/product";

for (const product of data) {
  new Product(
    product.name,
    product.category,
    product.price,
    product.image.desktop
  ).toHTML();
}

