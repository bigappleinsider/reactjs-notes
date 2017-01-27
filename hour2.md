# React hour 2
- Render method can only return a single node
- Wrapping our nodes in a parent node solves the above issue
- wrapping html in parentheses to utilize the whitespace

```
import React from 'react';

class App extends React.component {
  render(){
    return (
      <div>
        <h1>Hello there</h1>
        <b>Bold</b>
      </div>
    );
  }
}
```

# Props - collection of static values passed to our component and are not meant to be changed
- We can pass data to componenets using props `<App txt='hello'>`
- We can access data `this.props.txt`
- We can define properties for our component with `App.propTypes`
- We can set validation with `txt: React.PropTypes.string.isRequired`
- We can set default values with `App.defaultProps = {txt:'abc'}`

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App txt="this is a prop text" cat="5" />,
  document.getElementById('root')
);
```

```
import React from 'react';

class App extends React.component {
  render(){
    let txt = this.props.txt;
    return <h1>{this.props.txt}</h1>
  }
}
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}
App.defaultProps = {
  txt: "this is the default text"
};
export default App
```
# State - collection of values that are meant to be changed and managed by our component
- access state `this.state.txt`
- set state `this.setState({txt:'val'})`
```
import React from 'react';

class App extends React.component {
  constructor(){
    super();//will give the keyword this the context within our component
    this.state = {
      txt: 'this is the state txt'
    }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
        <div>
          <input type="text" onChange={this.update.bind(this)} />
          <h1>State: {this.state.txt}</h1>
        </div>
    )
  }
}
export default App
```
