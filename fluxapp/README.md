# Flux

- Store - manages all the state in the application
- When store receives an action and something is changed in the state
it ounounced the changes to subscribers

```
npm install flux react react-dom react-router --save

npm install webpack webpack-dev-server babel-core b
abel-loader babel-preset-es2015 babel-preset-react --save-dev

```

```


```
Dispatcher

- register - register a callback in an object that dispatcher is going to keep track of
- dispatch - preventing race condition, all calls are executed in the order they are received

app-dispatcher.js - very simple facade over dispatcher
```js
import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register( callback ) {
  return flux.register( callback );
}
export function dispatch( actionType, action){
  flux.dispatch( actionType, action );
}
```
Creating a list of actions for our app
constants/app-constants.js
```js
export default {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  INCREASE_ITEM: 'INCREASE_ITEM',
  DECREASE_ITEM: 'DECREASE_ITEM'
}
```
actions/app-actions.js
```js
import AppConstants from '../constants/app-constants';
import {dispatch, register} from  '../dispatchers/app-dispatcher';
export default {
  addItem( item ){
    dispatch({
      actionType: AppConstants.ADD_ITEM, item
    })
  },
  removeItem( item ){
    dispatch({
      actionType: AppConstants.REMOVE_ITEM, item
    })
  },
  increaseItem( item ){
    dispatch({
      actionType: AppConstants.INCREASE_ITEM, item
    })
  },
  decreaseItem( item ){
    dispatch({
      actionType: AppConstants.DECREASE_ITEM, item
    })
  },

}
```

In flux application the store manages state of the application
stores/app-store.js
```js
import {dispatch, register} from '../dispatcher/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';//from node

const CHANGE_EVENT = 'change';

let _catalog = [];

for(let i = 1; i < 9; i++){
  _catalog.push({
    '_id': 'Widget' + i,
    'title': 'Widget #' + i,
    'summary': 'A great widget',
    'description': 'Lorem ipsum dolor sit amet',
    'cost': i
  })
}

let cartItems = [];

const _removeItem = (item) => {
  _cartItems.splice( _cartItems.findIndex( i => i === item ), 1)
};

const _findCartItem = (item) => {
  return _cartItems.find( cartItem => cartItem.id === item.id )
};

const _increaseItem = ( item ) => item.qty++;

const _decreaseItem = ( item ) => {
  item.qty--;
  if( item.qty === 0 ) {
    _removeItem ( item )
  }
};

const _addItem = ( item ) => {
    const cartItem = _findCartItem( item );
    if( !cartItem ){
      _cartItems.push(Object.assign( {qty:1}, item ));
    }
    else {
      _increaseItem( cartItem );
    }
};

const _cartTotals = ( qty = 0, total = 0 ) => {
  _cartItems.forEach( cartItem => {
    qty += cartItem.qty;
    total += cartItem.qty * cartItem.const;
  });
  return {qty, total};
}

//Object.assign you can extend the Object
const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getCart(){
    return _cartItems;
  },

  getCatalog(){
    return _catalog.map(item => {
      return Object.assign( {}, item, _cartItems.find( cItem => cItem.id === item.id))
    });
  },

  getCartTotals(){
    return _cartTotals();
  }

  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.ADD_ITEM:
      _addItem( action.item );
      break;

      case AppConstants.INCREASE_ITEM:
      _increaseItem( action.item );
      break;

      case AppConstants.DECREASE_ITEM:
      _decreaseItem( action.item );
      break;
    }
    AppStore.emitChange();
  })
});

export default AppStore;
```
