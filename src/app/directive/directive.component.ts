import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  isWarning=false;
  myStyle={
    'color':this.isWarning?'blue':
    'grey',
    'font-weight':'bold',

  };
  isHighlighted=false;
get dynamicStyle(){
  return {
    'background-color':
    this.isHighlighted ?'yellow': 'white',
    'cursor':'pointer'
  };
}
  toggleHighlight(){
    this.isHighlighted=!
  this.isHighlighted;
  }

}
