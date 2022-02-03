import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  //string binding
  appName = 'This is a one-way data binding example';

  header1 = 'Number Interpolation';
  //numeric binding
  n1 = 70;
  n2 = 30;
  sum = 0;
  diff = 0;
  quo = 0;
  prod = 0;

  //property binding
  clientName:string = "Marjorie";

  //style binding 
  myColor ='red';

  //Class binding
  notappliedCSSClass = true; //boolean if true it will be applied if false will not be applied
  appliedCSSClass="green";
  

  //Structural Directives
  isLogin:boolean =true;  
  isLogout:boolean = true;
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
  studNum=""
  studSub=""
  studCode=""
  prelim =0
  midterm=0
  final=0
  x = Math.round((this.prelim + this.midterm+this.final)/3)
}


