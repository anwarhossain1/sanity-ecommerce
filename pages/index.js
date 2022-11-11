import React from "react";
import { FooterBanner, HeroBanner, Product } from "../components";
import { client } from "../lib/client";
const Home = ({ products, bannerData }) => {
  console.log("gg", products);
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div>
        <div className="products-heading">
          <h2>Best Seller Products</h2>
          <p>speaker There are many variations passages</p>
        </div>
        <div className="products-container">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  //grab all from sanity
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  //grab all banner

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};
export default Home;
