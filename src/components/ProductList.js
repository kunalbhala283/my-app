import React, { useEffect } from 'react';
import Product from './Product';
import {useDispatch,useSelector} from 'react-redux'
import { setProducts } from '../redux/actions/productAction';
import apiCall from '../api/apiCall';



function ProductList(props) {
    const products = useSelector(state => state.allProducts)
    const dispatch = useDispatch()
     const fetchProducts = async () => {
        const response = await apiCall.get(`/products`)
        dispatch(setProducts(response.data))
     }
     useEffect (()=>{
        fetchProducts()
     },[])

    

    return (
        <div className='ui grid container'>

           <Product/> 
        </div>
    );
}

export default ProductList;