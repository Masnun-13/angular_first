import { Component } from '@angular/core';

@Component({
  selector: 'app-zeta',
  templateUrl: './zeta.component.html',
  styleUrls: ['./zeta.component.css']
})
export class ZetaComponent {
  val1 : number = 0;
  val2 : number = 1;
  myans : String = "";
  opera : String = "+";
  ans : number = 1;
  correctans : String = "?"
  lighttext : String = "";
  color : String = "#000000"
  over : boolean = false
  win : boolean = false
  fail : boolean = false
  wins : number = 0
  losses : number = 0

  constructor(){
    this.again()
  }

  again(){
    this.val1=this.numpick()
    this.val2=this.numpick()
    this.opera=this.oppick()
    this.win=false
    this.fail=false
    this.over=false
    this.lighttext=""
    this.color="#000000"
    this.myans=""
    this.checkans()
  }

  answer(){
    let x = Number(this.myans)
    let y = Number(this.ans)
    this.correctans = String(this.ans)
    if(x==y){
      this.win=true
    }
    else{
      this.fail=true
    }
    if(this.win==true)
    {
        this.lighttext="Win!"
        this.color="#378527"
        this.over=true
        this.wins++
    }
    else if (this.fail==true)
    {
        this.lighttext="Lose!"
        this.color="#970f0f"
        this.over=true
        this.losses++
    }
  }

  numpick(){
    let x = Math.floor(Math.random() * 100) + 1
    return x;
  }

  oppick(){
    let x = Math.random()
    if(x<0.26){
        return "+"
    }
    else if(x<0.51){
        return "-"
    }
    else if(x<0.76){
        return "*"
    }
    else{
        return "/"
    }
  }

  checkans(){
    switch(this.opera)
    {
      case "+":
        this.ans = Number(this.val1+this.val2)
        break
      case "-":
        this.ans = Number(this.val1-this.val2)
        break
      case "*":
        this.ans = Number(this.val1*this.val2)
        break
      case "/":
        this.ans = Math.floor(Number(this.val1/this.val2))
        break
    }
    console.log(this.ans)
  }
}
