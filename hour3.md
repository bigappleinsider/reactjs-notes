# React hour 3
- react component can render other components

```js
class App extends React.component {
  constructor(){
    super();
    this.state = {
      txt: 'some txt'
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
      </div>
    );
  }
}
const Widget = (props) => <input type="text" onChange={props.update} />
export default App
```

- We can access nested values or components we can use props.children
```
import React from 'react';
class App extends React.Component {
  render(){
    return <Button>I <Heart /> React</Button>
  }
}
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}
export default App
```
# Custom props validation
```
Title.propTypes = {
  text(props, propName, component){
    if(!(propName in props)){
      return new Error(`missing ${propName}`)
    }
    if(props[propName].length < 6){
      return new Error(`${propName} was too short`)
    }
  }
}
```
