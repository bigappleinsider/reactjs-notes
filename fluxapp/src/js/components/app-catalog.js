import React from 'react';
import AppStore from '../stores/app-store';
import CatalogItem from './app-catalogitem';

function getCatalog(){
  return { items: AppStore.getCatalog() };
}

class Catalog extends React.Component {
  constructor(){
    super();
    this.state = getCatalog();
  }
  render(){
    let items = this.state.items.map( (item, key) => {
      return <CatalogItem key={ key } idx={key} item={ item } />
    });
    return (
      <div className="row">
        { items }
      </div>
    )
  }
}
export default Catalog;
