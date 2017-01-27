# React hour1

Create react app package - scaffolding react app
npm i create-react-app -g

Launch scaffolded application
npm start

target div with id#root

```
import React from 'react';

const App = () => <h1>Hello</h1>

export default App
```
## react - lib to build react components
## ReactDOM - place componenets and work in context of DOM

```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

render method returns DOM representation
HTML vs JSX - use className
all JSX gets compiled down to js
`return React.createElement('h1', null, 'Hello there')`
Args:
1. el h1
2. props
3. another element or a string representating text content
- Native html vs custom component: custom react components need to start with a capital letter


```
import React from 'react';
class App extends React.Component {
  render(){
    return <h1>Hello World</h1>
  }
}
export default App
```

There is another way to create a component - *Stateless function* component
Class component can have a state
```
import React from 'react';
const App = () => <h1>Stateless component</h1>
export default App
```
