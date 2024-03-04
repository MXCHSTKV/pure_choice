import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from './head'
import Header from './header'
import Footer from './footer'
import Row from './common/row'
import { cleanTheDish } from '../redux/reducers/dish'



const Dish = () => {
    const store = useSelector((s) => s.pure.dish)
    const dispatch = useDispatch()
    const counter = (property) => {
        return store.reduce((acc, rec)=>{
            return acc + rec[property]
        }, 0)
    }

    return (
        <div className='bg-gray-100 flex flex-col min-w-[370px] min-h-screen select-none'>
            <Head title="Main"/>
            <Header />
            <div className="flex items-center justify-center mt-12 mx-2 bg-gray-100">
                <table className="bg-gray-100 mt-10 border border-gray-300 rounded-lg overflow-hidden shadow-md select-text">
                    <thead className="bg-gray-100">
                        <tr className="text-left text-sm font-medium text-gray-600 uppercase">
                            <th className="px-1 py-2">имя</th>
                            <th className="px-1 py-2">вес</th>
                            <th className="px-1 py-2"><div className="hidden sm:block">калории</div><div className="sm:hidden">к</div></th>
                            <th className="px-1 py-2"><div className="hidden sm:block">белки</div><div className="sm:hidden">б</div></th>
                            <th className="px-1 py-2"><div className="hidden sm:block">жиры</div><div className="sm:hidden">ж</div></th>
                            <th className="px-1 py-2"><div className="hidden sm:block">углеводы</div><div className="sm:hidden">у</div></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {store.map(product => {
                        return <Row key={product.name} name={product.name} item={product.item}/>
                        })}
                        <tr className="bg-gray-100">
                            <td className="text-gray-600 text-right px-1">Total:</td>
                            <td className="px-1 text-gray-600">{counter('weight')}</td>
                            <td className="px-1 text-gray-600">{Math.round(counter('energy') * 10) / 10}</td>
                            <td className="px-1 text-gray-600">{Math.round(counter('protein') * 10) / 10}</td>
                            <td className="px-1 text-gray-600">{Math.round(counter('lipid') * 10) / 10}</td>
                            <td className="px-1 text-gray-600">{Math.round(counter('carbohydrate') * 10) / 10}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex min-w-[370px] justify-center my-8">
            <button type="button" className="h-8 w-44 text-gray-600 bg-orange-400 active:scale-95 active:bg-orange-400 rounded-md px-2 hover:bg-orange-300 transform transition duration-500 overflow-hidden" onClick={() => dispatch(cleanTheDish())}>Очистить тарелку</button>
            </div>
            <div className="flex-grow"></div>
            <Footer />
        </div>
    )
}

export default Dish