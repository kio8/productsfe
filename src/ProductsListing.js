import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductsListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4006/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log("error in fetching products: ", err);
      });
  }, []);
  //   console.log(products, "prod");
  return (
    <div>
      {products.length > 0 &&
        products.map((prod, index) => {
          return (
            <div>
              <h3>{prod.title}</h3>
              <img src={prod.thumbnail} style={{ width: 150, height: 150 }} />
              <h5 style={{ marginBottom: 0 }}>${prod.price}</h5>
              <h5>{prod.description}</h5>
              <br />
            </div>
          );
        })}
      {/* <p>kio</p> */}
    </div>
  );
}

export default ProductsListing;
