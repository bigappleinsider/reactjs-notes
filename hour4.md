# React hour 4

```js
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {currentEvent: '----'}
    this.update = this.update.bind(this)
  }
  update(e){
    this.setState({currentEvent: e.type})
  }
  render(){
    return (
        <div>
          <textarea
            onKeyPress={this.update}
            onCopy={this.update}
            onCut={this.update}
            onPaste={this.update}
            onFocus={this.update}
            onBlur={this.update}
            onDoubleClick={this.update}
            onTouchStart={this.update}
            onTouchMove={this.update}
            onTouchEnd={this.update}
            cols="30"
            rows="10" />
            <h1>{this.state.currentEvent}</h1>
        </div>
    )
  }
}
```
## Refs - a way to reference instance of a component in our application
- ref can also take a callback - it's returning the node/component that we are referencing
- ReactDOM.findDOMNode(this.a).value
```js
import React from 'react';

class App extends React.component {
  constructor(){
    super();
    this.state = {a: ''};
  }
  update(e){
    this.setState({
      a: this.a.value,
      b: this.refs.b.value
    })
  }
  render(){
    return (
      <div>
        <input
          ref={ node => this.a = node}
          type="text" onChange={this.update.bind(this)} /> {this.state.a}
        <hr />
        <input ref="b" type="text" onChange={this.update.bind(this)} /> {this.state.a}
      </div>
    );
  }
}
export default App
```
