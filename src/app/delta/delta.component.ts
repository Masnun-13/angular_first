import { Component } from '@angular/core';

@Component({
  selector: 'app-delta',
  templateUrl: './delta.component.html',
  styleUrls: ['./delta.component.css']
})
export class DeltaComponent {
  images : Array<String> = []
  cards : Array<number> = []
  x : number = 0
  hand : number = 0
  lighttext : String = ""
  color : String = "#FFFFFF"
  disabl : boolean = false

  constructor(){
    this.drawCard()
    this.drawCard()
  }


  drawCard(){
    this.x = Number(Math.floor(Math.random() * 10))
    this.cards.push(this.x)
    this.hand++
    switch(this.x)
    {
      case 1:
            this.images.push("assets/images/1.png")
            break;
        case 2:
            this.images.push("assets/images/2.png")
            break;
        case 3:
            this.images.push("assets/images/3.png")
            break;
        case 4:
            this.images.push("assets/images/4.png")
            break;
        case 5:
            this.images.push("assets/images/5.png")
            break;
        case 6:
            this.images.push("assets/images/6.png")
            break;
        case 7:
            this.images.push("assets/images/7.png")
            break;
        case 8:
            this.images.push("assets/images/8.png")
            break;
        case 9:
            this.images.push("assets/images/9.png")
            break;
    }
    this.checkWinCond()
  }

  checkWinCond(){
    let fail = false
    let win = false
    let z = 0
    let i = 0
    for(i=0; i<this.cards.length; i++)
    {
        z=z+this.cards[i]
        if(z>21){
            fail=true
            break
        }
        else if(z==21)
        {
            win = true
            break
        }
        else continue
    }
    console.log(z)
    if(win==true)
    {
        this.lighttext="Win!"
        this.color="#378527"
        this.disabl=true
    }
    else if (fail==true)
    {
        this.lighttext="Lose!"
        this.color="#970f0f"
        this.disabl=true
    }
}



}
