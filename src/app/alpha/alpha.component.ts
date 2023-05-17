import { Component } from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent {
  i: number = 0; //counter value
  j: number = 1; //increment/decrement value

  inc(){
    this.i+=this.j;
  }
  dec(){
    this.i-=this.j;
  }

  amount(){
    this.j=Number(prompt("Insert value to increment/decrement"))
  }

  save(){
    let permission = confirm("Save Value?")
    if(permission==true){
        localStorage.setItem("counter", JSON.stringify(this.i))
        alert("Save Complete")
    }
  }

  load(){
    let permission = confirm("Load Value?")
    if(permission==true){
        this.i = Number(localStorage.getItem("counter"))
        alert("Load Complete")
    }
  }

  reset(){
    this.i=0
    this.j=1
    localStorage.clear()
  }
}
