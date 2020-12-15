import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  arr = []
  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.arr.push(`第${i}条数据`)
    }
  }

}
