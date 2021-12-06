import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import NotificationsList from "./components/NotificationsList";
import MealsTable from "./components/MealsTable";
import MealDetails from "./components/MealDetails";
import AddMealCard from "./components/AddMealCard";
import RegisterUser from "./components/RegisterUser";
import Login from "./components/Login";
import MealEdit from "./components/MealEdit";
import MyMeals from "./components/MyMeals";
import { useState } from "react";

import AuthContext from "./contexts/AuthContext.js";
import NotFound from "./components/NotFound";

function App() {
  const [user, setUser] = useState({});

  const login = (loggedUser) => {
    setUser(loggedUser);
  };

  const logout = () => {
    setUser({});
  };

  return (
    <AuthContext.Provider value={{ user: user, login, logout }}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/notifications" exact component={NotificationsList} />
        <Route path="/addMeal" exact component={AddMealCard} />
        <Route path="/allmeals" component={MealsTable} />
        <Route path="/meals/mymeals" component={MyMeals} />
        <Route path="/meals/:mealId" component={MealDetails} />
        <Route path="/edit/:mealId" component={MealEdit} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/login" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
