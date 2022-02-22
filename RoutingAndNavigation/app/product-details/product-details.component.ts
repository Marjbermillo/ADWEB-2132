import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  //STRUCTURAL DIRECTIVES 
  apparels: any[] = [{
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
  
  trackByData(index:number, apparels:any): number {
    return apparels.id;
  }

  necklaces: any[] = [{
    "id": "SHL0007",
    "type":"Rosegold Necklaces",
    "name":"Airene",
    "prodName":"assets/N1.jpg",
    "prodDet": "18 inches - Rosegold Necklace",
    "price": "P250.00",
  },
  {
    "id": "SHL0008",
    "type":"Rosegold Necklaces",
    "name":"Filo",
    "prodName":"assets/N2.jpg",
    "prodDet": "18 inches - Rosegold Necklace ",
    "price": "P250.00",
  }, 
  {
    "id": "SHL0009",
    "type":"Rosegold Necklaces",
    "name":"Rosey",
    "prodName":"assets/N3.jpg",
    "prodDet": "18 inches - Rosegold Necklace",
    "price": "P250.00",
  },
  {
    "id": "SHL0010",
    "type":"Rosegold Necklaces",
    "name":"Hearty",
    "prodName":"assets/N4.jpg",
    "prodDet": "18 inches - Rosegold Necklace", 
    "price": "P250.00",

  }];
  
  trackByData1(index:number, necklaces:any): number {
    return necklaces.id;
  }


  earrings: any[] = [{
    "id": "SHL0011",
    "type":"Earcuff Earrings",
    "name":"Rachel",
    "prodName":"assets/ear1.jpg",
    "prodDet": "Fancy Earcuff Earrings",
    "price": "P180.00",
  },
  {
    "id": "SHL0012",
    "type":"Earcuff Earrings",
    "name":"Erich",
    "prodName":"assets/ear2.jpg",
    "prodDet": "Fancy Earcuff Earrings",
    "price": "P180.00",
  }, 
  {
    "id": "SHL0013",
    "type":"Earcuff Earrings",
    "name":"Glaiza",
    "prodName":"assets/ear3.jpg",
    "prodDet": "Fancy Earcuff Earrings",
    "price": "P180.00",
  },
  {
    "id": "SHL0014",
    "type":"Earcuff Earrings",
    "name":"Taylor",
    "prodName":"assets/ear4.jpg",
    "prodDet": "Fancy Earcuff Earrings", 
    "price": "P180.00",

  }];
  
  trackByData2(index:number, earrings:any): number {
    return earrings.id;
  }

  
  rings: any[] = [{
    "id": "SHL0015",
    "type":"Princess Rings",
    "name":"Belle Crown",
    "prodName":"assets/R1.jpg",
    "prodDet": "Rosegold Ring",
    "price": "P250.00",
  },
  {
    "id": "SHL0016",
    "type":"Princess Rings",
    "name":"Cinderella Crown",
    "prodName":"assets/R2.jpg",
    "prodDet": "Rosegold Ring",
    "price": "P250.00",
  }, 
  {
    "id": "SHL0017",
    "type":"Princess Rings",
    "name":"Rapunzel Crown",
    "prodName":"assets/R3.jpg",
    "prodDet": "Rosegold Ring",
    "price": "P250.00",
  },
  {
    "id": "SHL0018",
    "type":"Princess Rings",
    "name":"Ariel Crown",
    "prodName":"assets/R4.jpg",
    "prodDet": "Rosegold Ring", 
    "price": "P250.00",

  }];
  
  trackByData3(index:number, rings:any): number {
    return rings.id;
  }


  
  constructor() { }

  ngOnInit(): void {
  }

}
