# React hour 8 - higher order components

- the purpose of a higher order component is to share functionality between components

```js
import React from 'react';

//take in a component and return a new component

const HOC = (InnerComponent) => class extends React.Component {
  constructor(){
    super();
    this.state = {count: 0}
  }
  update(){
    this.setState({count: this.state.count +1})
  }
  componentWillMount(){
    console.log('will mount')
  }
  render(){
    return (<InnerComponent {...this.props} {...this.state} update={this.update.bind(this)}>)
  }
}
const LabelHOC = HOC(Label)

class  App extends React.Component {
  render(){
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    );
  }
}
const Button = HOC((props) =>
  <button onClick={props.update}>{props.children} - {props.count}</button>
)

class Label extends React.Component {
  componentWillMount(){
    console.log('label will mount')
  }
  render(){
    return (
      <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
    )
  }
}
export default App
```
