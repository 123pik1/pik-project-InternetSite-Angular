import { Component } from '@angular/core';
import { MainComponent } from "./main/main.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [MainComponent]
})
export class AppComponent {
  title = '123pik1-project';
}
