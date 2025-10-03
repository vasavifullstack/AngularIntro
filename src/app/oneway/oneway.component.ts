import { Component } from '@angular/core';
import {Button} from '@bootstrap/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent {
  fontColor="pink";

evtMouseOver(){
  console.log("ok ...")
}
}
