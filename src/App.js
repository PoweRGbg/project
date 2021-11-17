import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import NotificationsList from './components/NotificationsList';
import AddMealForm from './components/AddMealForm';
import MealsTable from './components/MealsTable';

function App() {
  return (
    <div className="" id="home">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/reports" exact component={NotificationsList} />
        <Route path="/addMeal" exact component={AddMealForm} />
        <Route path="/allMeals" exact component={MealsTable} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
