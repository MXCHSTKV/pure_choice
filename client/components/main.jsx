import React, { useState, useEffect } from 'react'
import Head from './head'
import Header from './header'
import Footer from './footer'
import Product from './common/product_card'


const Main = () => {

    const [products, setProducts] = useState([])
    const [type, setType] = useState('any')
    const [inputValue, setInputValue] = useState('')

    const handleChangeType = (newType) => setType(newType)
    const handleFilter = (newValue) => setInputValue(newValue)

    const productsTypes = [{ru:"Овощи", type:"Vegetables"},{ru:"Фрукты", type:"Fruits"},{ru:"Ягоды", type:"Berries"},
        {ru:"Молочные продукты", type:"Dairy products"},{ru: "Мясо", type:"Meat"},{ru:"Рыба", type:"Fish"},
        {ru:"Орехи и Семена", type:"Seeds"},{ru:"Бакалея", type:"Grocery"},{ru:"Зелень", type:"Greens"},
        {ru:"Масла", type:"Oils"},{ru:"Грибы", type:"Mushrooms"},{ru:"Сухофрукты", type:"Dried fruits"},
        {ru:"Яйца", type:"Eggs"},{ru:"Полный список продуктов", type:"any"}
    ]
    const category = productsTypes.filter(it => it.type === type).map(it => it.ru)
    const server = process.env.REACT_APP_SERVER_ADDRESS

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${server}/products`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(`ERROR with fetching data from server: ${error}`)
            }
        };
    
        fetchData();
    }, [type])

    return (
        <div className='bg-gray-100 select-none flex flex-col min-h-screen min-w-[370px] '>
            <Head title="Main"/>
            <Header onChangeType={handleChangeType} onFilter={handleFilter} />
            <div className="mt-12 pt-1 mx-auto text-md text-bold whitespace-nowrap rounded-lg bg-gray-100 text-gray-600">
                {category}
            </div>
            <main className="flex flex-wrap min-w-[370px] xl:mx-auto xl:min-w-[1200px] xl:max-w-[1300px] items-center justify-center bg-gray-100">
                {products
                .filter((it) => it.type && it.type.includes(type))
                .filter((it) => it.item.toLowerCase().includes(inputValue.toLowerCase()))
                .map((it) => <div className="w-1/2 sm:w-1/3 md:w-1/4 xl:w-1/5 2xl:w-1/6 max-w-2xl">
                    <Product key={it._id} name={it.name} item={it.item} kcal={it.kcal} img={it.img} fdcId={it.fdcId}/>
                </div>)}
            </main>
            <div className="flex-grow min-w-[370px]"></div>
            <Footer />
        </div>
    )
}

export default Main