import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent {
  customerRole="Admin";
  evtngModelChange($event:any){
    console.log($event);
    this.customerRole=$event;
  }
employeeName="vasavireddy";

// [ngStyle]

divColor="blue"
  fontColor='grey'
  isAdmin=true;
btnClick(){
  this.divColor="green";
  this.fontColor='yellow';
}
}


