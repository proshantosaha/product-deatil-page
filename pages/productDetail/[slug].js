// import styled from '@emotion/styled'
import React from 'react'
import styles from '../../styles/productDeatil.module.css'
import ProductCaro from '@/components/productCaro'
import { Button } from '@mui/material'

const ProductDetail = () => {
    return (
        <div className={styles.pDetail}>
            {/* <h2>hi i ma productdetail</h2> */}

            <div className={styles.css}>
                <div className={styles.left}>

                    <h2>left</h2>

                    <ProductCaro />



                </div>
                <div className={styles.right}>
                    <div> hello ps</div>
                    <div>p&apos;s proproduct</div>
                    <div>MRP :$56.00</div>
                    <di>
                        {`(all part includes)`}
                    </di>


                    {/* product size */}
                    <div>
                        <div className={styles.pprice}>
                            <div >
                                select size
                            </div>
                            <div>
                                select guide
                            </div>
                        </div>
                        <div >
                            <div className={styles.prodctCol}>

                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>
                                <div className={styles.pborder} >
                                    uk 6
                                </div>

                            </div>

                            <div className={styles.selection}>
                                soze selection is required

                            </div>

                            <div>
                                <Button variant='contained' size='large' edge='start' sx={{
                                    width: 300,
                                    margin: .2,
                                    color: 'success.main',
                                    '& .MuiSlider-thumb': {
                                        borderRadius: '100px',
                                    },
                                }}>add to cart</Button>
                            </div>
                            <div>
                                <Button variant='contained' size='large' edge='start' sx={{
                                    width: 300,
                                    margin: .2,
                                    color: 'success.main',
                                    '& .MuiSlider-thumb': {
                                        borderRadius: '100px',
                                    },
                                }}>add to cart</Button>
                            </div>

                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                </p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                    molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                    numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                    optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                </p>
                            </div>

                        </div>
                    </div>
                </div>



            </div>



        </div>
    )
}

export default ProductDetail



