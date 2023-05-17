import { Component } from '@angular/core';



@Component({
  selector: 'app-beta',
  templateUrl: "./beta.component.html",
  styleUrls: ['./beta.component.css']
})
export class BetaComponent {
  val1 : number = 0;
  val2 : number = 1;
  res : number = 0;

  add(){
    let x = Number(this.val1)
    let y = Number(this.val2)
    let z = Number(x+y)
    this.res=z
  }

  sub(){
    let x = Number(this.val1)
    let y = Number(this.val2)
    let z = Number(x-y)
    this.res=z
  }

  mul(){
    let x = Number(this.val1)
    let y = Number(this.val2)
    let z = Number(x*y)
    this.res=z
  }


  div(){
    let x = Number(this.val1)
    let y = Number(this.val2)
    let z = Number(x/y)
    this.res=z
  }

  mod(){
    let x = Number(this.val1)
    let y = Number(this.val2)
    let z = Number(x%y)
    this.res=z
  }

  pow(){
    let x = Number(this.val1)
    let y = Number(this.val2)
    let z = Number(x**y)
    this.res=z
  }
}
