import { Component } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.css']
})
export class EtaComponent {
  books : Array<Book> = []
  name : String = "";
  price : number = 0;
  auth : String = "";
  year : String = "";
  bookcount: number = 0;
  constructor(){
    this.bookcount=localStorage.length
    for(let i=0; i<this.bookcount; i++){
      let x = JSON.parse(""+localStorage.getItem(""+i))
      this.books.push(x)
    }
  }
  addBook(){
    let boop = new Book(this.name, this.price, this.auth, this.year)
    this.books.push(boop)
    console.log(this.name)
    localStorage.setItem(""+this.bookcount, JSON.stringify(boop))
    console.log(this.books[this.bookcount-1])
    this.bookcount++
  }

  burnBooks(){
    if(confirm("Delete all books?"))
    {
      for(let i=this.bookcount-1; i>=0; i--){
        this.books.pop()
      }
      localStorage.clear()
    }
  }
}
