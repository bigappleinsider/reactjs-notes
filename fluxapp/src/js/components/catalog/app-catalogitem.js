import React from 'react';
import AppActions from '../../actions/app-actions';
import CartButton from '../cart/app-cart-button';
import { Link } from 'react-router';


export default (props) => {
  let img = 'http://lorempixel.com/250/250/nightlife/'+props.idx+'/';
  return (
    <div className="col-xs-6 col-sm4 col-md-3">
      <h4>{ props.item.title }</h4>
      <img src={img} width="100%" className="img-responsive" />
      <p>{ props.item.summary }</p>
      <p>
      ${ props.item.cost }
      <span className="text-success">
      {props.item.qty && `(${props.item.qty} in cart)`}
      </span>
      </p>
      <div className="btn-group">
        <Link to={ `/item/${props.item.id}` } className="btn btn-default btn-sm">Learn More</Link>
        <CartButton handler={AppActions.addItem.bind(null, props.item)} txt="Add To Cart" />

      </div>
    </div>
  )
}
