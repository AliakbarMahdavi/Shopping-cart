import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

// Context
import { ProductsContext } from '../context/ProductContextProvider';

// Style
import styles from "./Store.module.css";

const Store = () => {

    const products = useContext(ProductsContext)
    console.log(products)
    return (
        <div className={styles.container} >
            {
                products.length ?
                products.map(product => <Product 
                        key={product.id} 
                        productData = {product}
                    />)
                    :
                    <h1 style={{margin:"300px auto"}}>Lodding ...</h1>
            }
        </div>
    );
};

export default Store;