import { Component } from '@angular/core';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent {
  i: number = 0;

  inc(){
    this.i++
  }
  dec(){
    this.i--
  }
}
