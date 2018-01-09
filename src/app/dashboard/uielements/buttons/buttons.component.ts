import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  currentPage = 3;

  model = 1;

  model1 = {
   left: true,
   middle: false,
   right: false
 };

  constructor() { }

  ngOnInit() {
  }

}
