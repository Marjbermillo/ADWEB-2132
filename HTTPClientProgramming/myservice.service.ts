import { Injectable } from '@angular/core'; //automatically generated

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  

  constructor() { }

  showTodayDate(){//show today date
    let ndate = new Date();
    return ndate;
  } 
  serviceproperty: string | undefined;




  
 /* allProducts() {
  [
  {
    "id": "SHL0001",
    "type":"T-Shirt",
    "name":"Classy Shirt",
    "prodName":"assets/A1.png",
    "prodDet": "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites.",
    "price": "P250.00",
  },
  {
    "id": "SHL0002",
    "type":"Shoes",
    "name":"Fancy Pink Shoes",
    "prodName":"assets/A2.png",
    "prodDet": "Fancy pink close shoes that can be worn in different occasions. It is water resistant and comfortable to wear. ",
    "price": "P300.00",
  }, 
  {
    "id": "SHL0003",
    "type":"Handbags",
    "name":"Classy Handbags",
    "prodName":"assets/A3.png",
    "prodDet": "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory.",
    "price": "P180.00",
  },
  {
    "id": "SHL0004",
    "type":"T-Shirt",
    "name":"Jogging Pants",
    "prodName":"assets/A4.png",
    "prodDet": "Made of fabric that allow for maximum comfort and ease. ", 
    "price": "P350.00",
  },
  {
    "id": "SHL0005",
    "type":"Faceshields",
    "name":"Classy Faceshields",
    "prodName":"assets/A5.png",
    "prodDet": "New and improved face shields with comfortable glasses frames for adults and kids are here.",
    "price": "P100.00",
  },
  {
    "id": "SHL0006",
    "type":"Mugs",
    "name":"Fancy Mug",
    "prodName":"assets/A6.png",
    "prodDet": "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening", 
    "price": "P350.00",

  }];
  }*/


}
