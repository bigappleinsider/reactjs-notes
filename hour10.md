# React hour 10 - children utilities

- iterate children `React.Children.map(this.props.children, child => child)`
- toArray `React.Children.toArray(this.props.children)`
- forEach `React.Children.forEach(this.props.children, child => console.log(child.props.className))`
- return a single child, else throw an error `React.Children.only(this.props.children)`

```js
import React from 'react';

class App extends React.Component {
  render (){
    return (
        <Parent>
          <div className="childA"></div>
          <div className="childB"></div>
        </Parent>
    )
  }
}

class Parent extends React.Component {
  render(){
    let items = React.Children.map(this.props.children, child => child)
    console.log(items);
    return null;
  }
}

export default App

```
