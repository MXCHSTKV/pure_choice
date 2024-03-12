import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Header = ({onChangeType, onFilter}) => {
    const navigate = useNavigate()
    const goToMain = () => navigate('/')
    const goToDish = () => navigate('/dish')
    const [isHidden, setIsHidden] = useState(false)
    const [isHiddenMobile, setIsHiddenMobile] = useState(false)
    let timer
    let changeTypeSelection = (type) => onChangeType ? onChangeType(type) : goToMain()
    let filterSelection = (prod) => onFilter ? onFilter(prod) : goToMain()

    return (
        <div className="fixed top-0 left-0 w-full z-10 bg-gray-100">
            <div className="flex items-center min-w-[370px] bg-orange-400 text-gray-600 h-12 rounded-b-xl sm:mx-2">
                <div className="ml-1 sm:ml-5 text-lg sm:text-2xl font-semibold cursor-pointer whitespace-nowrap transition-all duration-500 ease-linear" onClick={()=>changeTypeSelection("any")}>Pure Choice</div>
                <div className="flex items-center w-full">
                    <div className="relative ml-3 md:ml-11 transition-all duration-500 ease-linear" onMouseEnter={() => {setIsHidden(true) ; clearTimeout(timer)}} onMouseLeave={() => timer = setTimeout(() => setIsHidden(!isHidden), 700)}>
                        <button type="button" id='catalog_button' className="z-10 rounded border pl-7 pr-3 border-black bg-orange-400 hover:bg-orange-300 hidden sm:block "><div>Каталог</div></button>
                        <label onClick={() => setIsHiddenMobile(!isHiddenMobile)  } htmlFor="catalog_button" className="absolute inset-y-0 flex items-center cursor-pointer">
                            <svg className="w-6 h-6 ml-1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000">
                                <line x1="16" y1="32" x2="48" y2="32"/>
                                <line x1="16" y1="20" x2="48" y2="20"/>
                                <line x1="16" y1="44" x2="48" y2="44"/>
                            </svg>
                        </label>
                        {isHidden && <div onMouseEnter={() => clearTimeout(timer)} onMouseLeave={() => timer = setTimeout(() => setIsHidden(!isHidden), 700)} className="absolute shadow-md z-10 w-52 mt-2 rounded-lg bg-white max-h-screen overflow-scroll">    
                            <div className="pl-4 mt-3 hover:bg-gray-100 text-orange-400 cursor-pointer" onClick={() => {changeTypeSelection('any'); setIsHidden(!isHidden) }}>Все продукты</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Vegetables'); setIsHidden(!isHidden) }}>Овощи</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Fruits'); setIsHidden(!isHidden) }}>Фрукты</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Berries'); setIsHidden(!isHidden) }}>Ягоды</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Dairy products'); setIsHidden(!isHidden) }}>Молочные продукты</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Meat'); setIsHidden(!isHidden) }}>Мясо</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Fish'); setIsHidden(!isHidden) }}>Рыба</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Seeds'); setIsHidden(!isHidden) }}>Орехи, семена</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Grocery'); setIsHidden(!isHidden) }}>Бакалея</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Greens'); setIsHidden(!isHidden) }}>Зелень</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Oils'); setIsHidden(!isHidden) }}>Масла</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Mushrooms'); setIsHidden(!isHidden) }}>Грибы</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Dried fruits'); setIsHidden(!isHidden) }}>Сухофрукты</div>
                            <div className="pl-4 mt-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Eggs'); setIsHidden(!isHidden) }}>Яйца</div>
                        </div> }
                    </div>
                    <div className="relative ml-auto hidden sm:block">
                        <input type="text" onChange={(e)=> filterSelection(e.target.value)} id="searchInput" className="z-10 pl-7 sm:w-[250px] md:w-[350px] lg:w-[600px] transition-width duration-500 ease-in-out border border-gray-300 rounded focus:outline-none focus:border-blue-800" />
                        <label htmlFor="searchInput" className="absolute inset-y-0 flex items-center">
                            <svg className="w-6 h-6 pl-1 cursor-pointer" onClick={goToMain} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15_152)">
                                    <rect width="24" height="24" fill="white"/>
                                    <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"/>
                                    <path d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z" fill="#000000"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_15_152">
                                        <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                        </label>
                    </div>
                    <div className="relative ml-auto mr-[52px] md:mr-[72px]" id='plate' onClick={goToDish}>
                        <label htmlFor="plate" className="absolute inset-y-0 flex items-center cursor-pointer">
                            <svg fill="#000000" className="w-10 h-10" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199.603 199.603">
                                <path d="M187.251,173.172c-4.141,0-7.509-3.369-7.509-7.509V32.074c0-1.952,1.569-5.644,7.509-5.644
                                c9.424,0,12.352,33.462,12.352,45.651c0,18.908-4.182,36.269-4.843,38.893v54.688C194.76,169.803,191.392,173.172,187.251,173.172z
                                M184.742,113.161v52.502c0,1.383,1.125,2.509,2.509,2.509s2.509-1.125,2.509-2.509v-52.502H184.742z M184.742,108.161h5.548
                                c1.187-5.159,4.313-20.256,4.313-36.079c0-20.876-4.906-38.858-7.546-40.649c-1.542,0.033-2.218,0.461-2.314,0.771V108.161z
                                M16.632,173.172c-1.87,0-3.67-0.734-4.938-2.014c-1.165-1.177-1.799-2.711-1.783-4.318l0.806-81.785
                                C4.583,82.688,0.142,76.768,0.001,69.852C-0.001,69.79,0,69.727,0.003,69.664L1.718,31.96c0.063-1.378,1.259-2.421,2.61-2.384
                                c1.38,0.063,2.447,1.232,2.384,2.611l-1.596,35.09h4.361l0.802-35.26c0.031-1.381,1.208-2.48,2.556-2.443
                                c1.381,0.032,2.474,1.176,2.442,2.556L14.48,67.278h4.306l-0.799-35.147c-0.031-1.38,1.062-2.524,2.442-2.556
                                c1.358-0.042,2.525,1.062,2.556,2.443l0.802,35.26h4.361l-1.595-35.09c-0.063-1.379,1.004-2.548,2.384-2.611
                                c1.367-0.052,2.549,1.005,2.61,2.384l1.714,37.703c0.003,0.063,0.004,0.126,0.002,0.188c-0.141,6.915-4.582,12.836-10.716,15.203
                                l0.807,81.785c0.016,1.607-0.618,3.141-1.783,4.318C20.302,172.438,18.502,173.172,16.632,173.172z M15.706,86.156l-0.795,80.732
                                c-0.003,0.337,0.181,0.595,0.336,0.751c0.67,0.677,2.099,0.676,2.771,0c0.155-0.157,0.339-0.415,0.336-0.751l-0.796-80.732H15.706z
                                M5.333,72.278c1.256,5.078,5.878,8.878,11.299,8.878c5.422,0,10.044-3.8,11.299-8.878h-6.587c0,0-0.003,0-0.005,0h-9.414
                                c-0.001,0-0.001,0-0.002,0c0,0-0.001,0-0.002,0H5.333z M102.781,163.258c-36.692,0-66.544-29.852-66.544-66.544
                                s29.852-66.544,66.544-66.544c36.693,0,66.545,29.852,66.545,66.544S139.475,163.258,102.781,163.258z M102.781,35.169
                                c-33.936,0-61.544,27.609-61.544,61.544s27.608,61.544,61.544,61.544s61.545-27.609,61.545-61.544S136.717,35.169,102.781,35.169z
                                M102.781,145.155c-26.711,0-48.441-21.731-48.441-48.441s21.73-48.441,48.441-48.441s48.441,21.731,48.441,48.441
                                S129.492,145.155,102.781,145.155z M102.781,53.272c-23.954,0-43.441,19.488-43.441,43.441s19.487,43.441,43.441,43.441
                                s43.441-19.488,43.441-43.441S126.735,53.272,102.781,53.272z"/>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
            {isHiddenMobile && <div className="bg-white mt-2 py-3 mx-4 rounded-md shadow-md select-none h-full sm:hidden block transition-width duration-500 ease-in-out max-h-screen overflow-scroll">
                <div className="pl-4 mb-1 text-orange-400 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('any'); setIsHiddenMobile(!isHiddenMobile) } }>Все продукты</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Vegetables'); setIsHiddenMobile(!isHiddenMobile) }}>Овощи</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Fruits'); setIsHiddenMobile(!isHiddenMobile) } }>Фрукты</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Dairy products'); setIsHiddenMobile(!isHiddenMobile) } }>Молочные продукты</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Meat'); setIsHiddenMobile(!isHiddenMobile) } }>Мясо</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Fish'); setIsHiddenMobile(!isHiddenMobile) } }>Рыба</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Seeds'); setIsHiddenMobile(!isHiddenMobile) } }>Орехи, семена</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Grocery'); setIsHiddenMobile(!isHiddenMobile) } }>Бакалея</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Greens'); setIsHiddenMobile(!isHiddenMobile) } }>Зелень</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Oils'); setIsHiddenMobile(!isHiddenMobile) } }>Масла</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Mushrooms'); setIsHiddenMobile(!isHiddenMobile) } }>Грибы</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Dried fruits'); setIsHiddenMobile(!isHiddenMobile) } }>Сухофрукты</div>
                <div className="pl-4 mb-1 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Flour and grains'); setIsHiddenMobile(!isHiddenMobile) } }>Мука</div>
                <div className="pl-4 pb-4 hover:bg-gray-100 cursor-pointer" onClick={() => {changeTypeSelection('Eggs'); setIsHiddenMobile(!isHiddenMobile) } }>Яйца</div>
            </div>}
        </div>
    )
}

export default Header

