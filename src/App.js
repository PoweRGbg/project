import { Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <div className="" id="home">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/reports" exact component={NotificationsList} />
        <Route path="/addMeal" exact component={FormWrapper} />
        <Route path="/allmeals" component={MealsTable} />
        <Route path="/meal/:mealId" component={MealDetails} />
        <Route path="/edit/:mealId" component={MealEdit} />
        <Route path="/register" component={RegisterUser} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
