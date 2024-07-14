import React, { useEffect } from 'react';
import Product from './Product';
import {useDispatch,useSelector} from 'react-redux'
import { setProducts,fetchProducts } from '../redux/actions/productAction';




function ProductList(props) {
    const products = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
    
     useEffect (()=>{
       dispatch(fetchProducts())
     },[])

    

    return (
        <div className='ui grid container'>

           <Product/> 
        </div>
    );
}

export default ProductList;