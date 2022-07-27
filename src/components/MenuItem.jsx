import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'

const MenueItem = ({ id, iconName, name, route ,setActiveMenue , activeMenue }) => {

    return (
        <li>
            <Link to={route} onClick={() => setActiveMenue(id)}
                className={activeMenue === id ? 'icon-link active' : 'icon-link'}>
                <i className={iconName}></i>
                <span className="link" href="#">{name}</span>
            </Link>
        </li>
    );
}

export default MenueItem;