import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-attributedirectives',
  templateUrl: './attributedirectives.component.html',
  styleUrls: ['./attributedirectives.component.css']
})
export class AttributedirectivesComponent implements OnInit {

  public name: string = "manoj gupta";
  public bgcolor: boolean = false;
  @ViewChild('myh1') public myh2:ElementRef;
  public cssClass: Object;
  public inlineCss: Object;

  constructor() {
    this.inlineCss = {
      'font-size': '50px'
    }
  }
  method1() {
    this.bgcolor = !this.bgcolor;
    this.cssClass = {
      pinkbackground: this.bgcolor
    }
   this.myh2.nativeElement.style.backgroundColor='pink';
   this.myh2.nativeElement.style.fontSize='55px';

  }
  ngOnInit() {
  }

}
