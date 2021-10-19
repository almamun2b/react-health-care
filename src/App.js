import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import About from './components/About/About';
import Departments from './components/Departments/Departments';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path='/services'>
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path='/department'>
              <Departments></Departments>
            </PrivateRoute>
            <PrivateRoute path='/service/:id'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path='/doctors'>
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
