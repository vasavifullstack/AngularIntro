import { Component ,ContentChild,ElementRef,ViewChild,TemplateRef,ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
@ViewChild('paragraph') p1 : ElementRef
@ViewChild('pressword') s1 : ElementRef
@ViewChild('firstName') firstName : ElementRef

@ContentChild('surName') surname : ElementRef
@ViewChild('testTemplate') template1 : TemplateRef<any>;
btnClick(){
  console.log(this.p1);
  console.log(this.p1.nativeElement);
}
presskey(){
  console.log(this.s1);
  console.log(this.s1.nativeElement);
  console.log(this.firstName.nativeElement);
  console.log(this.template1);

}

  
  @ViewChild('containerRef' , { read:ViewContainerRef })  containerRef : ViewContainerRef;
  @ViewChild('containerRef')                                 v1 : ViewContainerRef;  // v1 is the element
  

  btnClickme(){
    console.log(this.containerRef);
     this.containerRef.
     insert(this.template1.createEmbeddedView({"Firstname":"John" , "lastname" : "smith" , "Hometown" : "UK"}));
    // console.log(this.v1);
     //type 
     //console.log(this.template1);
  }



}

