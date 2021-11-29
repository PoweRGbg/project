import { Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import NotificationsList from './components/NotificationsList';
import MealsTable from './components/MealsTable';
import MealDetails from './components/MealDetails';
import FormWrapper from './components/FormWrapper';
import RegisterUser from './components/RegisterUser';
import Login from './components/Login';
import MealEdit from './components/MealEdit';
import MyMeals from './components/MyMeals';
import {useEffect, useState} from 'react';

import AuthContext from './contexts/AuthContext.js';

function App() {
  let historyHook = useLocation();
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log('APP we are at '+ historyHook.pathname);
  }, [historyHook]);


  const login = (loggedUser) => {
    setUser(loggedUser);
  };

  const logout = () => {
    setUser({});
  };
  
  return (
    <AuthContext.Provider value={{user:user, login, logout}}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/notifications" exact component={NotificationsList} />
        <Route path="/addMeal" exact component={FormWrapper} />
        <Route path="/allmeals" component={MealsTable} />
        <Route path="/meals/mymeals" component={MyMeals} />
        <Route path="/meals/:mealId" component={MealDetails} />
        <Route path="/edit/:mealId" component={MealEdit} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
