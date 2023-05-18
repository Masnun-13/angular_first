import { Component } from '@angular/core';
import { listitem } from './item';
@Component({
  selector: 'app-epsilon',
  templateUrl: './epsilon.component.html',
  styleUrls: ['./epsilon.component.css']
})
export class EpsilonComponent {
  initem : String = "Add an item"
  items : Array<listitem> = []

  addItem(){
    this.items.push(new listitem(this.initem, false))
  }

  kill(){
    let killarray : Array<number> = []
    let i = 0
    for(let item of this.items){
    if(item.tick==true)
      {
        killarray.push(i)
      }
      i++
    }
    console.log(killarray)
    for(let j=killarray.length-1; j>=0; j--)
    {
      this.items.splice(killarray[j], 1)
    }
  }
}
