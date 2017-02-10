# Hour 13 - Redux intro

- Applicaton state is represented by a single object
- Application state can only be modified through actions
- **Dispatching** an action is the only way to modify the state

Pure functions - return of function only depends on arguments
- no side effects: pure functions don't have db calls
- do not modify values passed to them

- UI is most predictable when described by a pure function of application state
**Reducer** function - State mutations must be a pure function

```js
const counter = (state = 0, action) => {
  switch (action.type) {
    case: 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state -1;
    default:
      return state;
  }
}
import { createStore } from 'redux';
const store = createStore(counter);
store.getState()
store.dispatch({ type: 'INCREMENT' })

//register a callback that redux will call anytime action is dispatched
store.subscribe(() => {
  document.body.innerText = store.getState();
});

/*
Counter Component - dumb Component
It contains no business logic
It only specifies how application state transforms into renderable Component
*/
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}
      onIncrement={ ()=> store.dispatch({type: 'INCREMENT'}) }
      onDecrement={ ()=> store.dispatch({type: 'DECREMENT'}) }
    />,
    document.getElementById('root')
  );
};
```

Add element to array without modifying (mutating) the array
```js
const addCounter = (list) => {
  //would NOT WORK
  list.push(0);
  //would WORK - concat does not modify original array
  list.concat([0]);
  //ES6 array spread operator
  [...list, 0]
}
//Remove Item from array
const removeCounter = (list, index) => {
  //would not work because it modifies the original
  list.splice(index, 1)
  //Instead we can slice array - take section before index we need to skip and after
  list.slice(0, index)
      .concat(list.slice(index+1))
}
const incrementCounter = (list, index) => {
  //would NOT WORK
  list[index]++;
  //would WORK
  list.slice(0, index).
    .concat( [list[index] + 1] )
    .concat( list.slice(index+1) )
    //or use ES6
    [
      ...list.slice(0, index),
      list[index] + 1,
      ...list.slice(index+1)
    ]
}

```
## Object Assign
Assign new props to existing object
```js
Object.assign({}, todo, {completed: !todo.completed})
```
- left object is going to be mutated
- if several sources for the same prop are specified, the last one wins
- Object.assign is not available in all the browsers --> use polyfil

## ES7 Object spread op, enabled in babel if used stage2 preset
```js
{ ...todo, completed: !todo.completed }
```

## Reducer

```js
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state.
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed
        };
      })
    default:
      return state
  }
}

```
