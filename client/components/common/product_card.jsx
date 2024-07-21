import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProduct, increaseCounter } from '../../redux/reducers/dish.js'

const Product = (props) => {
    const dispatch = useDispatch()
    const [buttonName, setButtonName] = useState('Добавить')

    return (
        <article className="relative w-44 sm:w-48 shadow-sm h-72 mx-auto my-2 md:my-6  bg-white rounded-xl overflow-hidden">
            <figure className="h-32 overflow-hidden">
                <img className="rounded-t-xl object-cover h-32 transform transition duration-300 hover:scale-110"
                src={props.img}
                alt={`Image of ${props.item}`}
                />
            </figure>
            <h2 className="text-md ml-2 mr-2 mt-2 font-semibold max-h-12 overflow-hidden ">{props.item}</h2>
            <p className="text-sm ml-4">grams: 100</p>
            <p className="text-sm ml-4">kcal: {props.kcal}</p>
            <button type="button"
            className="absolute bottom-0 ml-2 h-8 w-40 sm:w-44 text-gray-600 bg-orange-400 active:scale-95 active:bg-orange-400 rounded-md px-2 mb-4 hover:bg-orange-300 transform transition duration-500"
            onClick={() => {dispatch(addProduct(props.name, props.item, 100)); dispatch(increaseCounter()); setButtonName("Добавить ещё")}}
            >
                {buttonName}
            </button>
        </article>
    )

}

export default Product