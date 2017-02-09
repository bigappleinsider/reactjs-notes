# Hour 13 - Redux intro

- Applicaton state is represented by a single object
- Application state can only be modified through actions

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
```
