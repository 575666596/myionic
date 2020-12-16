import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment-tab',
  templateUrl: './segment-tab.page.html',
  styleUrls: ['./segment-tab.page.scss'],
})
export class SegmentTabPage implements OnInit {
  tab = 'tab1'
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(e) {
    console.log(0);
  }
}
