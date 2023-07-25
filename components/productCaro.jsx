import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styles from '../styles/productDeatil.module.css'



const ProductCaro = () => {
  return (
    <div className={styles.caro}>
         <Carousel
         infiniteLoop={true}
         showIndicators={false}
         showStatus={false}
         thumbWidth={60}
         className="productdel"
         
         
         >
           <img src="/p2.jpg" />
           <img src="/p2.jpg" />
           <img src="/p2.jpg" />
           <img src="/p2.jpg" /> 
           <img src="/p2.jpg" />
      </Carousel>
    </div>
  )
}

export default ProductCaro