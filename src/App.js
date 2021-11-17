import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import NotificationsList from './components/NotificationsList';
import MealsTable from './components/MealsTable';
import FormWrapper from './components/FormWrapper';

function App() {
  return (
    <div className="" id="home">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Content} />
        <Route path="/reports" exact component={NotificationsList} />
        <Route path="/addMeal" exact component={FormWrapper} />
        <Route path="/allmeals" component={MealsTable} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
