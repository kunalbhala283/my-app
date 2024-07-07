import React, { useEffect } from 'react';
import Product from './Product';
import {useDispatch,useSelector} from 'react-redux'
import axios from 'axios'
import { setProducts } from '../redux/actions/productAction';
const URL = 'https://fakestoreapi.com/products'


function ProductList(props) {
    const products = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
     const fetchProducts = async () => {
        const response = await axios.get(URL)
        dispatch(setProducts(response.data))
     }
     useEffect (()=>{
        fetchProducts()
     },[])

    console.log(products)

    return (
        <div className='ui grid container'>

           <Product/> 
        </div>
    );
}

export default ProductList;