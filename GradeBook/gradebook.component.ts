import { Component, OnInit } from '@angular/core';
import{User} from'../user';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //Attribute Directive

  users:User[]=[
    {"userId":1,"userName":'User1'},
    {"userId":2,"userName":'User2'},
  ];

      //Ng Switch Directive
      logInName='admin';
      user="users";
      admin ="admin";

  //TWO-WAY DATA BINDING
  
  //event
  showData($event:any){
    console.log("button is clicked!"); if($event){// eto ung lalabas sa console
    console.log($event.target);
    }
  }
  //Other Actions
  //keyup function
  getData(data:any){
    console.warn(data)
  }
  //meron to sa html
  studName=""
  prelim =0
  midterm=0
  final=0
  average = ((this.prelim + this.midterm+this.final)/3)

  //Structural Directives
  isLogin:boolean =true;  
  isLogout:boolean = true;

  //list (Marjorie Bermillo)
  list = [1,2,3,4,5];
  list1 = ["apple","banana"," mango","watermelon"];
  
  //trackBy
    studentArr:any[]=[
    {"id":1,
      "name":"Marj"
    },
    {"id":2,
      "name":"Shai"},
    {"id":3,
      "name":"Audrey"}, 
    {"id":4,
      "name":"Krisha"}];
      trackByData(index:number, studentArr:any):number{
        return studentArr.id;
      }
    //ANGULAR-DISPLAY A LIST OF ITEMS WITH ngFor (marjorie bermillo)
      users1 = [
        {firstName: 'Marjorie', lastName: 'Bermillo', email: 'mbermillo@gmail.com', role: 'Admin'},
        {firstName: 'Shaira', lastName: 'Mallari', email: 'smallari@gmail.com', role: 'Admin'},
        {firstName: 'Audrey', lastName: 'Deguzman', email: 'adeguzman@gmail.com', role: 'User'},
        {firstName: 'Krisha', lastName: 'Mea', email: 'kMea@gmail.com', role: 'User'},
        {firstName: 'Jack', lastName: 'Dela Cruz', email: 'JDelaCruz@gmail.com', role: 'User'}
      ]
      

    constructor() { }
    ngOnInit(): void {
    }

}
