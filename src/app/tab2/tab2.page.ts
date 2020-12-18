import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  tab = 'tab1'
  id = 123
  constructor() { }
  segmentChanged(e) {
    console.log(0);
  }
}
