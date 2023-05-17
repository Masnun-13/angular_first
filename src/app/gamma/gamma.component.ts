import { Component } from '@angular/core';



@Component({
  selector: 'app-gamma',
  templateUrl: "./gamma.component.html",
  styleUrls: ['./gamma.component.css']
})
export class GammaComponent {

  playerpic : String = ""
  pcpic : String = ""

  player : String = ""
  pc : String = ""

  lighttext : String = ""
  color : String = "#000000"

  win : number = 0
  loss : number = 0

  constructor(){
    this.playerpic = "assets/images/blank.png"
    this.pcpic = "assets/images/blank.png"
    this.compick()
    this.refresh()
  }

    compick(){
    let x = Math.random()
    if(x<0.34){
        return "Rock"
    }
    else if(x<0.67){
        return "Scissors"
    }
    else{
        return "Paper"
    }
}

  rock(){

    this.player="Rock"
    this.playerpic="assets/images/rock.png"
    let g = this.compick()
    if(g=="Rock")
    {
        this.pc="Rock"
        this.pcpic="assets/images/rock.png"
        this.lighttext="Tie!"
        this.color="#8a7a1f"
    }
    else if(g=="Scissors")
    {
        this.pc="Scissors"
        this.pcpic="assets/images/scissor.png"
        this.lighttext="Win!"
        this.color="#378527"
        let c = Number(this.win)
        c++
        this.win=c
    }
    else if(g=="Paper")
    {
        this.pc="Paper"
        this.pcpic="assets/images/paper.png"
        this.lighttext="Lose!"
        this.color="#970f0f"
        let c = Number(this.loss)
        c++
        this.loss=c
    }
}

  scissor(){
    let g = this.compick()
    this.player="Scissors"
    this.playerpic="assets/images/scissor.png"
    if(g=="Rock")
    {
        this.pc="Rock"
        this.pcpic="assets/images/rock.png"
        this.lighttext="Lose!"
        this.color="#970f0f"
        let c = Number(this.loss)
        c++
        this.loss=c
    }
    else if(g=="Scissors")
    {
        this.pc="Scissors"
        this.pcpic="assets/images/scissor.png"
        this.lighttext="Tie!"
        this.color="#8a7a1f"
    }
    else if(g=="Paper")
    {
        this.pc="Paper"
        this.pcpic="assets/images/paper.png"
        this.lighttext="Win!"
        this.color="#378527"
        let c = Number(this.win)
        c++
        this.win=c
    }
}

  paper(){
    let g = this.compick()
    this.player="Paper"
    this.playerpic="assets/images/paper.png"
    if(g=="Rock")
    {
        this.pc="Rock"
        this.pcpic="assets/images/rock.png"
        this.lighttext="Win!"
        this.color="#378527"
        let c = Number(this.win)
        c++
        this.win=c
    }
    else if(g=="Scissors")
    {
        this.pc="Scissors"
        this.pcpic="assets/images/scissor.png"
        this.lighttext="Lose!"
        this.color="#970f0f"
        let c = Number(this.loss)
        c++
        this.loss=c
    }
    else if(g=="Paper")
    {
        this.pc="Paper"
        this.pcpic="assets/images/paper.png"
        this.lighttext="Tie!"
        this.color="#8a7a1f"
    }
}

refresh(){
  if(this.pc=="Rock"){
    this.pcpic="assets/images/rock.png"
  }
  else if(this.pc=="Scissors"){
    this.pcpic="assets/images/scissor.png"
  }
  else if(this.pc=="Paper"){
    this.pcpic="assets/images/paper.png"
  }
  else{
    this.pcpic="assets/images/blank.png"
  }
}
}
