import React from 'react'
import PropTypes from 'prop-types'
import Footer from './Layout/Footer'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HomePage from './Home';
import { useSelector } from 'react-redux';
import SingleProductContainer from '../Containers/SingleProductContainer';
import HeaderContainer from '../Containers/HeaderContainer';
import ShopContainer from '../Containers/ShopContainer';
import CarContainer from '../Containers/CarContainer';
import ProductCategoryContainer from '../Containers/ProductCategoryContainer';
import CheckoutContainer from '../Containers/CheckoutContainer';
import OrderSuccsess from './Cart/OrderSuccsess';
import ContactContainer from '../Containers/ContactContainer';
import ShowPostContainer from '../Containers/ShowPostContainer';
import SinglePostContainer from '../Containers/SinglePostContainer';
import SearchProduct from './Search/SearchProduct';
const WebStore = ({GetCategory,LayTokenDangXuat}) => {
    const user = useSelector(state => state.auth.infoUser);
    return (
    <div className="site-wrap" style={{backgroundColor:"#fff"}}>
        <HeaderContainer/>
            <Switch>

            <Route  exact path='/Store/Search/:key'>
                <SearchProduct />
            </Route>
            <Route exact path='/Store/' component={HomePage}/>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/Store/Checkout' component={CheckoutContainer}/>
            <Route exact path='/Store/Cart/' component={CarContainer}/>
            <Route exact path='/Store/Product/:id'  component={SingleProductContainer}/>
            <Route exact path='/Store/Category/:id'  component={ProductCategoryContainer}/>
            <Route path='/Store/Shop/' exact component={ShopContainer} />
            <Route  exact path='/Store/OrderSuccess' component={OrderSuccsess} />
            <Route  exact path='/Store/Contact' component={ContactContainer} />
            <Route exact path='/Store/SinglePost/:id'  component={SinglePostContainer}/>
            <Route to="/Store/Post/" exact component={ShowPostContainer} />
              
            </Switch>
        <Footer />
    </div>
    )
}

WebStore.propTypes = {

}

export default WebStore
