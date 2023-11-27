import { Component } from '@angular/core';

import { Navigator } from './components/main/state/navigator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BronClub';

  constructor(private navigator: Navigator){

  }

  goToclubs(){
    this.navigator.navigateToClubs()
  }
  goToMain(){
    this.navigator.NavigateToMain()
  }

}
