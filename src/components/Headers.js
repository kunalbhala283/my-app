import React from 'react';
import { useNavigate } from 'react-router-dom';

 


function Headers(props) {

    const navigate = useNavigate()


    const gotohome = () => {
        navigate(`/`)
     }
    return (
        <div className='ui fixed menu'>
            <div className='ui container center'>
           <h1 onClick={gotohome} style={{ cursor: 'pointer' }}>E-SHOP</h1> 
        </div>
        </div>
    );
}

export default Headers;