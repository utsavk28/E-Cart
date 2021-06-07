import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import test from './comps/test';
import Navbar from './comps/Navbar'
import HomePage from './comps/HomePage'
import AboutUs from './comps/AboutUs'
import CategoryPage from './comps/CategoryPage'
import IndividualCategoryPage from './comps/IndividualCategoryPage'
import useInitialLoad from './Util/hooks/useInitialLoad';
import ProductPage from './comps/ProductPage'
import CartPage from './comps/CartPage'

function App() {
  const { loading } = useInitialLoad()

  return (
    <>
      { !loading && <div>
        <Router>

          <Navbar />
          <div className="container-lg" id="container-custom" >
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/category' component={CategoryPage} />
              <Route exact path='/category/:category/' component={IndividualCategoryPage} />
              <Route path='/category/:category/:id' component={ProductPage} />
              <Route path='/about-us' component={AboutUs} />
              <Route path='/cart' component={CartPage} />
              <Route exact path='/login' component={test} />
              <Route exact path='/signIn' component={test} />
            </Switch>
          </div>
        </Router>
      </div>

      }
    </>
  );
}

export default App;
