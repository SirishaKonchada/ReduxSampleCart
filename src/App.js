import './App.css';
import { BrowserRouter as Router,Switch,Link,Route } from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/productListing';
import ProductDetails from './containers/productDetails';
import productComponent from './containers/productComponent';


function App() {
  return (
    <div className="App">
      <Header />&#10;&#13;
      <br/><br/><br/><br/><br/>
    <Router>
    <Switch>
      <Route path="/" exact component={ProductListing}/>
      <Route path="/product/:id" exact component={ProductDetails}/>
      <Route >404 Not Found</Route>
      </Switch>
    </Router>
  
    </div>
  );
}

export default App;
