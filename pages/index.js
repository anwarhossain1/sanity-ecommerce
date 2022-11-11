import React from 'react'
import { HeroBanner } from '../components'
import { client } from '../lib/client'
const Home = ({ products, bannerData}) => {
  console.log('gg', products)
  return (
   <>
   <HeroBanner/>
    <div>

       <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
      </div>
   </>
  )
}

export const getServerSideProps = async () => {
  //grab all from sanity 
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  //grab all banner

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home
