import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './comps/Layout/Navbar';
import HomePage from './comps/HomePage';
import CategoryPage from './comps/Category/CategoryPage';
import IndividualCategoryPage from './comps/Category/IndividualCategoryPage';
import useInitialLoad from './Util/hooks/useInitialLoad';
import ProductPage from './comps/Product/ProductPage';
import CartPage from './comps/Cart/CartPage';
import { getItem } from './redux/Cart/actions';

function App() {
    const dispatch = useDispatch();
    const { loading } = useInitialLoad();

    useEffect(() => {
        dispatch(getItem());
    }, []);

    return (
        <>
            {!loading && (
                <div>
                    <Router>
                        <Navbar />
                        <div className='container-lg' id='container-custom'>
                            <Switch>
                                <Route exact path='/' component={HomePage} />
                                <Route
                                    exact
                                    path='/category'
                                    component={CategoryPage}
                                />
                                <Route
                                    exact
                                    path='/category/:category/'
                                    component={IndividualCategoryPage}
                                />
                                <Route
                                    path='/category/:category/:id'
                                    component={ProductPage}
                                />
                                <Route path='/cart' component={CartPage} />
                            </Switch>
                        </div>
                    </Router>
                </div>
            )}
        </>
    );
}

export default App;
