import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MmUwZWEyOWUt/MmUwZWEyOWUt-OTM5MWYyNDgt-w3000._CB404706413_.jpg"
          alt="Home banner image"
          className="home_image"
        />
        <div className="home_row">
          <Product
            id="12321341"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater. Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product 
          id="98413203"
          title="Samsung Galaxy Watch 3 (41mm, GPS, Bluetooth)"
          price={199.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/81Iu41zFPwL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product 
          id="23445930"
          title="Amazon ECho (4rd generation) | Smart speaker with ALexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71JB6hM6Z6L._AC_UY436_FMwebp_QL65_.jpg"/>
          <Product 
          id="9847611310"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/815ztYEEwYL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home_row">
          <Product 
          id="4903850"
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={1094.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/71916r38cNL._AC_UY436_FMwebp_QL65_.jpg"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
