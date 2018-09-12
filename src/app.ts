//our root app component
import {Component, NgModule, Input} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'dice',
  template: `
    <div>
      <button class="btn btn-primary btn-lg btn-block" (click)=roll()>Roll {{sides}} sided die!</button>
      <h1 class="number">{{value}}</h1>
    </div>
  `,
})
export class Dice {
  value: number;
  @Input() sides: number;
  constructor() {
  }
  roll() {
    this.value = Math.ceil(Math.random() * this.sides);
  }
}

@Component({
  selector: 'root',
  templateUrl: 'src/root.html',
})
export class Root {
  private numbers = [3, 4, 6, 8, 10, 12, 20, 100];
  constructor() {
  }

  setNumbers(numbersText) {
    this.numbers = numbersText.split(' ').map(numStr => Number(numStr.trim())).filter(num => !Number.isNaN(num));
  }
}


@NgModule({
  imports: [ BrowserModule ],
  declarations: [ Dice, Root ],
  bootstrap: [ Root ]
})
export class AppModule {}