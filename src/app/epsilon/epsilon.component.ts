import { Component } from '@angular/core';

@Component({
  selector: 'app-epsilon',
  templateUrl: './epsilon.component.html',
  styleUrls: ['./epsilon.component.css']
})
export class EpsilonComponent {
  initem : String = "Add an item"
  items : Array<String> = []
  check: boolean = false
  addItem(){
    this.items.push(this.initem)
  }
  kill(){
    for(let item in this.items){

    }
  }
}
