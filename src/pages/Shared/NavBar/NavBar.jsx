
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from 'react-icons/hi';
import vPharma from "../../../assets/images/vPharma.png"
import { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import useOrder from "../../../hook/useOrder";
import { BsCart2 } from "react-icons/bs";

const NavBar = () => {

    const [changeHeader, setChangeHeader] = useState(false)
    const [mobileNav, setMobileNav] = useState(false)
    const navigate = useNavigate();
    const { orders } = useOrder();

    const menu = [
        { id: 1, text: 'Home', to: '/' },
        { id: 2, text: 'Products', to: '/products' },
        { id: 3, text: 'Contact', to: '/contact' },
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    //header change function 
    const onChangeHeader = () => {
        if (window.scrollY >= 50) {
            setChangeHeader(true)
        } else {
            setChangeHeader(false)
        }
    }

    //change header by scrolling
    window.addEventListener('scroll', onChangeHeader)
    return (
        <header className={changeHeader ? "bg-white fixed z-50 top-0 left-0 w-full shadow-md transition duration-500" : "bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500"}>
            {/* desktop nav  */}
            <nav className="flex items-center max-w-screen-xl mx-auto px-6 py-3">
                {/* brand  */}
                <div className="flex flex-grow">
                    <div className="flex items-center space-x-4">
                        <img className="select-none" src={vPharma} alt="logo" />
                    </div>
                </div>
                {/* menu s */}

                <div className="hidden md:flex lg:flex space-x-8">
                    <ul className="flex items-center space-x-4">
                        {menu.map(item => (
                            <li key={item.id}>
                                <NavLink exact="true" to={item.to} className="text-gray-600 text-lg poppins">{item.text}</NavLink>
                            </li>
                        ))}
                    </ul>
                    {/* Cart information  */}
                    <div className="relative flex cursor-pointer" onClick={() => navigate('/orders')}>
                        <span className="bg-teal-600  w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">{orders.length}</span>
                        <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700 " />
                    </div>
                    {/* <AuthorizeUser /> */}
                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Fade>
                    <nav className="bg-white shadow-lg mx-6 mt-2 p-4 rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden">
                        <ul className="mb-2">
                            {menu.map(item => (
                                <li key={item.id} className="mb-3">
                                    <NavLink exact="true" key={item.id} to={item.to} className="text-gray-600 poppins text-lg text-center py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default block rounded-lg" >
                                        {item.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>

                        <div>
                            {/* Cart information  */}
                            <div className="relative flex cursor-pointer" onClick={() => navigate('/orders')}>
                                <span className="bg-teal-600  w-6 h-6 rounded-full flex items-center justify-center text-white poppins absolute -right-2 -top-2">{orders.length}</span>
                                <BsCart2 className="cursor-pointer w-6 h-6 text-gray-700 " />
                            </div>
                            {/* <AuthorizeUserMobile /> */}
                        </div>
                    </nav>
                </Fade>
            )}
        </header>
    )
}

export default NavBar