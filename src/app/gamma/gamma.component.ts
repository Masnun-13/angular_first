import { Component } from '@angular/core';



@Component({
  selector: 'app-gamma',
  templateUrl: "./gamma.component.html",
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent {

  playerpic : String = ""
  pcpic : String = ""

  constructor(){
    this.playerpic = "assets/images/blank.png"
    this.pcpic = "assets/images/blank.png"
  }


}
