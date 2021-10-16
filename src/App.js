import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Page/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import AuthProvider from "./Context/AuthProvider";
import Fooddetails from "./Components/Foods/FoodDetails/Fooddetails";

function App() {
  return (
    <div className="App">
       <AuthProvider>
           <BrowserRouter>
               <Header></Header>
               <Switch>
                   <Route exact path='/'>
                       <Home></Home>
                   </Route>
                   <Route  path='/home'>
                       <Home></Home>
                   </Route>
                   <Route path='/register'>
                       <Register></Register>
                   </Route>
                   <Route path="/login">
                       <Login></Login>
                   </Route>
                     <Route path="/:foodid">
                      <Fooddetails></Fooddetails>
                     </Route>
               </Switch>
           </BrowserRouter>
       </AuthProvider>
    </div>
  );
}

export default App;
