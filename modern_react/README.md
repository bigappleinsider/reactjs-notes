# Modern React

Google API
https://console.developers.google.com/
API Manager -> Library -> YouTube Data API v3 -> Enable

Install package Youtube API Search
```
npm i -S youtube-api-search
npm i -S lodash
```

## ES6
```js
//extract props.video --> const video = props.video;
const VideoDetail = ({ video }) => {...

//One liners
onChange={event => this.onInputChange(event.target.value)} />

this.setState({term});//this.setState({term:term});

//String interpolation
const url = `https://www.youtube.com/embed/${videoId}`;
```
## Reducers
- function that returns a piece of the application state
- because application can have many different pieces of state, we can have many different Reducers
- application state is a plain JS object
```js
{
  books: [{title: 'Harry Potter'}, {title: 'Javascript'}],//produced by Books reducer
  activeBook: {title: 'Jacascript: The Good Parts'}//produced by ActiveBook Reducer
}
```
## Container Component
- react Component that has direct connection to a state managed by Redux
- smart component
- place in diff directory `containers`

App doesn't care when state is changed
- BookList - cares about when the list of books changes
- BookDetail - cares about when the active book changes

Glue between react and redux
connect - takes a function and a component and produces a container
`export default connect(mapStateToProps)(BookList);`
