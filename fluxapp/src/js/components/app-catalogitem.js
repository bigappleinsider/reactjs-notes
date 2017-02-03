import React from 'react';
import AppActions from '../actions/app-actions';
import CartButton from './app-cart-button';

export default (props) => {
  let img = 'http://lorempixel.com/250/250/nightlife/'+props.idx+'/';
  return (
    <div className="col-xs-6 col-sm4 col-md-3">
      <h4>{ props.item.title }</h4>
      <img src={img} width="100%" className="img-responsive" />
      <p>{ props.item.summary }</p>
      <p>{ props.item.cost }</p>
      <CartButton handler={AppActions.addItem.bind(null, props.item)} txt="Add To Cart" />
    </div>
  )
}
