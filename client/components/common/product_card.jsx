import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/reducers/dish.js'

const Product = (props) => {
    const dispatch = useDispatch()

    return (
        <div className="relative w-44 sm:w-48 shadow-sm h-72 mx-auto my-2 md:my-6 overflow-hidden bg-white cursor-pointer rounded-xl">
            <div className="overflow-hidden h-32">
                <img className="rounded-t-xl object-cover h-32 transform transition duration-300 hover:scale-110" src={props.img} alt={`Image of ${props.item}`} />
            </div>
            <div className="text-md ml-2 mr-2 mt-2 font-semibold ">{props.item}</div>
            <div className="text-sm ml-4">grams: 100</div>
            <div className="text-sm ml-4">kcal: {props.kcal}</div>
            <button type="button" className="absolute bottom-0 ml-2 h-8 w-40 sm:w-44 text-gray-600 bg-orange-400 active:scale-95 active:bg-orange-400 rounded-md px-2 mb-4 hover:bg-orange-300 transform transition duration-500" onClick={() => dispatch(addProduct(props.name, props.item, 100))}>Добавить</button>
        </div>
    )

}

export default Product