# React hour 9  - JSX transpiler
- custom properties should have `data-` in front, for example,
`<a href="#" data-test="x">Test</a>`
- comments `{/* this is a comment */}`
- conditionals `{i>1 ? 'More than one':'one or less'}` or
`{i>1 && 'More than one'}`

```js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '/* add your jsx here */',
      output: '',
      err: ''
    }
  }
  update(e){
    let code = e.target.value;
    try {
      this.setState({
        output: window.Babel
        .transform(code, { presets: ['es2015', 'react']})
        .code,
        err: ''
      })
    }
    catch(err){
      this.setState({err: err.message})
    }
  }
  render(){
    return (
      <div>
        <header>{this.state.err}</header>
        <div className="container">
          <textarea onChange={this.update.bind(this)} defaultValue={this.state.input} />
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    )
  }
}
```

## Inline styles
```js
import React from 'react';
const App  = (props) => {
  var myStyle = {
    backgroundColor: '#000',
    height: 10 //react would add px
  }
  return (<div style={myStyle}></div>)
}
```
