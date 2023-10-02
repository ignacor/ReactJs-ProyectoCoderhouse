import React, { useState, useEffect, useContext } from 'react'
import ItemDetail from './ItemDetail'
import useFetch from '../../hooks/useFetch';

const ItemDetailContainer = ({ id }) => {
    const [item] = useFetch(`https://fakestoreapi.com/products/${id}`);

    return (
        <>
            {
                item !== null &&
                <ItemDetail item={item}  />

            }
        </>
    )
}

export default ItemDetailContainer