import './App.css';
import Sidebar from './components/Sidebar';
import AppContextProvider from './context/AppContext';
import { Route, Switch, Redirect } from 'react-router-dom';

// import components
import Search from './components/Search';
import MyAds from './components/MyAds';
import Representatives from './components/Representatives';
import Profile from './components/Profile';
import savedRealEstate from './components/savedRealEstate';
import RecentSearchs from './components/RecentSearchs';


function App() {
  
  return (
    <AppContextProvider>
      <Sidebar />

      <Switch>
        <Route path={'/search'} component={Search} />
        <Route path={'/myAds'} component={MyAds} />
        <Route path={'/Representatives'} component={Representatives} />
        <Route path={'/profile'} component={Profile} />
        <Route path={'/savedRealEstate'} component={savedRealEstate} />
        <Route path={'/recentSearchs'} component={RecentSearchs} />
        <Route path={'/'}  />
      </Switch>

    </AppContextProvider>
  );
}

export default App;
