# Testing

name of the file app_test.js
the sole purpose of this file is to test App component

### what is the behavior I want to test?

## describe
- use describe to group similar tests
## it
- use `it` to test a single attribute of a target
- the string is only used for a report - directions to us what the block is going to test
```
it('shows correct text')
```
## expect
- use expect to make an assertion about the target
- is a function that returns an object
- we pass a component to expect

```js
import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  it('shows correct text', () => {
    const component = renderComponent(App);
    expect(component).to.contain('React simple starter');
  });
});
```

 - Mocha queues up the tests
 - component is jQuery wrapped version
 - each individual test is self contained, if error thrown doesn't affect other tests
`npm run test:watch`

Assertions about end product
We care about
- it has a text area
- it has a button
- entering text into the text area updates the text
- it shows a commnent in LI
- given a list of comments, it shows all the comments

## beforeEach
```js
describe('CommentBox', () => {
  let component;
  beforeEach( () => {
    component = renderComponent(CommentBox);
  });

  it('has a text area', () => {
    expect(component.find('textarea')).to.exist;
  });
  it('has a button', () => {
    expect(component.find('button')).to.exist;

  });
  it('has a class', () => {
    expect(component).to.have.class('comment-box');
  });
});
```
