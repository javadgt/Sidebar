import { useAppContext } from '../../context/AppContext';
import './MobileSidebar.css'
import MobileItem from './MobileItem';
const MobileSidebar = ({ activeMenue, setActiveMenue }) => {
    const items = useAppContext().slice(0, 4)
    console.log(activeMenue);
    return (
        <>
            <div className="sidebar-mobile">
                {items.map(munueItem => {
                    console.log(munueItem);
                    return (
                        <MobileItem {...munueItem} key={munueItem.id}
                            setActiveMenue={setActiveMenue}
                            activeMenue={activeMenue} />
                    )
                })}

            </div>
        </>
    );
}

export default MobileSidebar;