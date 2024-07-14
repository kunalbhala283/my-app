import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Headers(props) {
    
    const navigate = useNavigate()
    const cartItems = useSelector(state=>state.cart.cart);

    const gotohome = () => {
        navigate(`/`)
    }
    return (
        <div className='ui fixed menu'>
            <div style={{display:"flex",justifyContent:"space-between"}}className='ui container center'>
                <h1 onClick={gotohome} style={{ cursor: 'pointer' }}>E-SHOP</h1>
                <div className='ui vertical button' >
                    <i className='shop icon'></i>
                    <span>{cartItems.length}</span>
                </div>
            </div>
        </div>
    );
}

export default Headers;