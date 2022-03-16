import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  employee() 
  {
  return[{
    "ID": "101",
    "FirstName":"Joseph",
    "Lastname": "Dizon",
    "Email": "jdizon@hau.edu.ph",
  },
  {
    "ID": "102",
    "FirstName":"James",
    "Lastname": "Atienza",
    "Email": "jatienza@hau.edu.ph",
  }, 
  {
    "ID": "103",
    "FirstName":"John",
    "Lastname": "Cena",
    "Email": "jcena@hau.edu.ph",
  },
  {
    "ID": "104",
    "FirstName":"Robert",
    "Lastname": "Quintana",
    "Email": "rquintana@hau.edu.ph",
  },
  {
    "ID": "105",
    "FirstName":"Marjorie",
    "Lastname": "Bermillo",
    "Email": "mbermillo@hau.edu.ph",
  }];
  }
}