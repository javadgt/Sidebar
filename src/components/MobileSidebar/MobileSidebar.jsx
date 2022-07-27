import { useAppContext } from '../../context/AppContext';
import {Link} from 'react-router-dom'
import './MobileSidebar.css'
const MobileSidebar = ({ activeMenue, setActiveMenue }) => {
    const items = useAppContext().slice(0, 4)
    console.log(activeMenue);
    return (
        <>
            <div className="sidebar-mobile">
                {items.map(munueItem => {
                    return (
                        <Link to={munueItem.route} key={munueItem.id}
                            onClick={() => setActiveMenue(munueItem.id)}
                            className={activeMenue === munueItem.id ? 'menu-item-mobile active' : 'menu-item-mobile'}>
                            <i className={munueItem.iconName}></i>
                            <span>{munueItem.name}</span>
                        </Link>
                    )
                })}

            </div>
        </>
    );
}

export default MobileSidebar;