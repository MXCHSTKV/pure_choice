import React, { useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import SvgPlate from '../assets/svg/svg_plate.jsx'
import SvgCatalog from '../assets/svg/svg_catalog.jsx'
import SvgSearch from '../assets/svg/svg_search.jsx'



const Header = ({onChangeType, onFilter}) => {
    const store = useSelector((s) => s.pure)
    const navigate = useNavigate()
    const goToMain = () => navigate('/')
    const [isHidden, setIsHidden] = useState(true)
    let changeTypeSelection = (type) => onChangeType ? onChangeType(type) : goToMain()
    let filterSelection = (prod) => onFilter ? onFilter(prod) : goToMain()
    let timer
    const style = "block ml-4 mt-1 hover:bg-gray-100 cursor-pointer"

    useEffect(()=>{
        if(isHidden){
            clearTimeout(timer)
        }
    },[isHidden])

    return (
        <header className="fixed top-0 left-0 w-full z-10 bg-gray-00">
            <div className="flex items-center min-w-[370px] bg-orange-400 text-gray-600 h-12 rounded-b-xl sm:mx-2">
                <Link className="ml-1 sm:ml-5 text-lg sm:text-2xl font-semibold whitespace-nowrap transition-all duration-500 ease-linear"
                    to="/"
                    onClick={()=> onChangeType ? onChangeType('any') : ()=>{}}
                    >
                    Pure Choice
                </Link>
                <div className="flex items-center w-full">
                    <div className="relative ml-3 md:ml-11 transition-all duration-500 ease-linear">
                        <button type="button" onClick={() => {setIsHidden(!isHidden); clearTimeout(timer)}} className="z-10 rounded sm:border sm:pl-7 sm:pr-3 border-black bg-orange-400 hover:bg-orange-300">
                            <SvgCatalog class="sm:absolute w-6 h-6 mt-[8px] sm:mt-0 sm:ml-[-25px]"/>
                            <p className="hidden sm:block">Каталог</p>
                        </button>
                        <nav onMouseEnter={() => clearTimeout(timer)} onMouseLeave={() => timer = setTimeout(() => setIsHidden(true), 1500)} 
                        className={`absolute shadow-md z-10 sm:w-52 w-screen mt-2 ml-[-129px] sm:ml-0 rounded-lg bg-white max-h-screen h-screen sm:h-auto overflow-scroll ${isHidden ? 'hidden' : ''}`}>    
                            <ul>
                                <li><button type="button" className="block ml-4 mt-3 hover:bg-gray-100 text-orange-400 cursor-pointer" tabIndex="0" onClick={() => {changeTypeSelection('any'); setIsHidden(true)}}>Все продукты</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Vegetables'); setIsHidden(true)}}>Овощи</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Fruits'); setIsHidden(true)}}>Фрукты</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Berries'); setIsHidden(true)}} >Ягоды</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Dairy products'); setIsHidden(true)}}>Молочные продукты</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Meat'); setIsHidden(true)}}>Мясо</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Fish'); setIsHidden(true)}}>Рыба</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Seeds'); setIsHidden(true)}}>Орехи, семена</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Grocery'); setIsHidden(true)}}>Бакалея</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Greens'); setIsHidden(true)}}>Зелень</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Oils'); setIsHidden(true)}}>Масла</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Mushrooms'); setIsHidden(true)}}>Грибы</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Dried fruits'); setIsHidden(true)}}>Сухофрукты</button></li>
                                <li><button type="button" className={style} tabIndex="0" onClick={() => {changeTypeSelection('Eggs'); setIsHidden(true)}}>Яйца</button></li>
                            </ul>        
                        </nav>
                    </div>
                        <div className="relative ml-auto hidden sm:block">
                            <input type="text" onChange={(e)=> filterSelection(e.target.value)} id="searchInput" className="z-10 pl-7 sm:w-[250px] md:w-[350px] lg:w-[600px] transition-width duration-500 ease-in-out border border-gray-300 rounded focus:outline-none focus:border-blue-800" />
                            <label htmlFor="searchInput" className="absolute inset-y-0 flex items-center">
                            <SvgSearch class="w-6 h-6 pl-1"/>
                            </label>
                        </div>
                        <div className="relative ml-auto mr-[52px] items-center md:mr-[72px]">
                            <a className="absolute inset-y-0 flex items-center">
                                {store.clickCounter !== 0 && <div className="absolute bottom-[5px] left-[-10px] bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs opacity-50">
                                    {store.clickCounter}
                                </div>}
                                <Link to="/dish">
                                <SvgPlate class="w-10 h-10"/>  
                                </Link>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

    export default Header
