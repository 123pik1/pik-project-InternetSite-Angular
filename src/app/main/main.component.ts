import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [HeaderComponent, BodyComponent]
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
