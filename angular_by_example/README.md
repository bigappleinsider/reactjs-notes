# Angular by Example notes

### @Component decorator
```js
@Component({
  selector: 'my-app',
  template: `<div class="cnt"></div>`
});
export class GuessTheNumberComponent {
  guess: number;
  constructor() {
    this.initializeGame();
  }
  initializeGame() {
    this.guess = null;
  }
  verifyGuess() {
    this.deviation = this.original - this.guess;
  }
}
```
