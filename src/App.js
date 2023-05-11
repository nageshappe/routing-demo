import{BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';
import './App.css';
import Signup from './components/signup';
import AboutUs from './components/aboutus';
import Login from './components/login';
import Navbar from './components/navbar';
import ListEmployeeComponent from "./components/listEmployees"
import ViewEmployeeComponent from './components/viewComponent';
function App() {
  return (

          <Router>
              <Navbar/>
            <Switch>
                <Route exact path="/" component={ListEmployeeComponent}/>
                <Route path="/list" component={ListEmployeeComponent}/>
                <Route path="/viewEmployee/:id" component={ViewEmployeeComponent}/>
                <Route path="/login" component={Login}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/about" component={AboutUs}/>
            </Switch>
          </Router>


      );
}

export default App;
