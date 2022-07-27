import { createContext, useContext } from "react";


const AppContext = createContext()

const menuItems = [
    {
        name: 'جستجو',
        iconName: 'ri-search-line',
        id : 1,
        route : '/search'
    },
    {
        name: 'آگهی های من',
        iconName: 'ri-book-read-line',
        id : 2,
        route : '/myAds'

    },
    {
        name: 'نماینده ها',
        iconName: 'ri-user-line',
        id : 3,
        route : '/Representatives'

    },
    {
        name: 'پروفایل',
        iconName: 'ri-user-follow-line',
        id : 4,
        route : '/profile'

    },
    {
        name: 'ملک های ذخیره شده',
        iconName: 'ri-bookmark-line',
        id : 5,
        route : '/savedRealEstate'

    },
    {
        name: 'جستجو های اخیر',
        iconName: 'ri-book-line',
        id : 6,
        route : '/recentSearchs'

    },

]


const AppContextProvider = ({ children }) => {

    return (
        <>
            <AppContext.Provider
                value={menuItems}>
                {children}
            </AppContext.Provider>
        </>
    );
}

//  custome hook for access AppContext
export function useAppContext() {
    return useContext(AppContext)
}

export default AppContextProvider;