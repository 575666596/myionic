import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.page.html',
  styleUrls: ['./gestures.page.scss'],
})
export class GesturesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  doTap() {
    console.log(0);

  }
  doPress() {
    console.log(1);

  }
  handle() {
    console.log(11);

  }
}