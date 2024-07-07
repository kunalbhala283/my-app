import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import {useEffect} from 'react'
import axios from 'axios'
const URL = 'https://fakestoreapi.com/products'
function ProductDetail(props) {
    const {pid} = useParams()
    console.log(pid)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
       const response = await axios.get(`${URL}/${pid}`)
   
        console.log(response.data)
    }
    useEffect (()=>{
       fetchProducts()
    },[])


    return (
       <div>
        <p> details:{pid}</p>
       </div>
    );
}

export default ProductDetail;