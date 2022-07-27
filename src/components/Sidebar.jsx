import MenueItem from "./MenuItem";
import { useAppContext } from "../context/AppContext";
import logo from '../images/amlak.jpg'
import './sidebar.css'
import { useEffect, useState } from "react";
// Mobile Sidebar
import MobileSidebar from './MobileSidebar/MobileSidebar'

const Sidebar = () => {
    const MenuItems = useAppContext()
    const [activeMenue, setActiveMenue] = useState(0)

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const listener = () => {
            setIsMobile(window.innerWidth < 1000)
            console.log(window.innerWidth);
        }

        window.addEventListener("resize", listener)
        
        // check for first render
        setIsMobile(window.innerWidth < 1000)
        
        return () => {
            window.removeEventListener("resize", listener)
        }
    }, [])

    return (
        <>
            {isMobile ? 1 : (
                <div className="sidebar">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <h2>املاک هاشمی نصب</h2>
                    <div className="rating"></div>
                    <div className="menu-item">
                        <ul>
                            {MenuItems.map(menuItem => {
                                return (
                                    <MenueItem key={menuItem.id} {...menuItem}
                                        setActiveMenue={setActiveMenue}
                                        activeMenue={activeMenue}
                                    />
                                )
                            })}
                        </ul>
                    </div>
                </div>
            )}

        </>
    );
}

export default Sidebar;