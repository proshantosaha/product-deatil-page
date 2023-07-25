import React from 'react';
import styles from '../../styles/Home.module.css'
import Link from '@/utils/mui/Link';
// import Image from 'next/image';

const ProductCard = () => {
    return (
        <>
        <Link legacyBehavior className={styles.card} href="/productDetail/ProductDetail">
            <img  className={styles.myimg}  src='/p2.jpg'/>
            <div>
                <h2>product name</h2>
                <div className={styles.price}>
                    <p className={styles.mr2}>$20</p>
                    <p className={styles.textdecoration}>$25.00</p>
                    <p className={styles.ml2}>20% off</p>
                </div>
            
            
            </div>
            
        </Link>
        </>

    )
}

export default ProductCard