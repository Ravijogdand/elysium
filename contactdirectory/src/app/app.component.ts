import { Component, ViewChild } from '@angular/core';
import { ContatComponent } from "./contact.component";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contactdirectory';
  @ViewChild('myconatct') contactInst: ContatComponent;
  method1(){
    this.contactInst.xyz="new baie"
  }
}
