import { Component } from '@angular/core';

import { Navigator } from '../state/navigator';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private navigator:Navigator){
    document.body.style.overflowX = 'hidden'
  }

  

}
