export class Book{
  name : String = "";
  price : number = 0;
  auth : String = "";
  year : String = "";
  constructor(name: String, price: number, auth: String, date: String){

		this.name = name;
    this.price = price;
    this.auth = auth;
		this.year = date;
	}
}
