import React from 'react';
import { Jumbotron } from '../jumbotron/Jumbotron';
import { LicensePlateService } from '../LicensePlateService';
import { PopupWindowComponent } from '../popup/PopupWindowComponent';
import {addToCart} from '../cart-service/cart-service';
 
export class StoreViewComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup : false
        }
        this.setItemAddedToCart = this.setItemAddedToCart.bind(this);
    }
 
    setItemAddedToCart(plate) {
        addToCart(plate);
        this.setState({ showPopup : true });
    }
 
    render() {
        return (
            <>
            <PopupWindowComponent show={this.state.showPopup} close={() => { this.setState( { showPopup: false } ); }}>
            </PopupWindowComponent>
            <Jumbotron title="Welcome to our store" description="Browse our collection of license plates"/>
            <div className="row" >
            <LicensePlateService currency={this.props.currency} setItemAddedToCart={this.setItemAddedToCart}/>
            </div>
            </>
        );
    }
};
