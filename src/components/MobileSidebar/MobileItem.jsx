import { Link } from "react-router-dom";
const MobileItem = ({ id, iconName, name, route, setActiveMenue, activeMenue }) => {
    console.log(route);
    return (
        <>
            <Link to={route} key={id}
                onClick={() => setActiveMenue(id)}
                className={activeMenue === id ? 'menu-item-mobile active' : 'menu-item-mobile'}>
                <i className={iconName}></i>
                <span>{name}</span>
            </Link>
        </>
    );
}

export default MobileItem;