import React from 'react'
import ProductCard from '@/components/ProductCard'
import styles from '../../styles/Home.module.css'

const Products = () => {
  return (
    <div className={styles.grid}>


      {/* <img src='/p2.png'/> */}

      <ProductCard/>
      <ProductCard/>

      <ProductCard/>

      <ProductCard/>

      <ProductCard/>


    </div>
  )
}

export default Products



