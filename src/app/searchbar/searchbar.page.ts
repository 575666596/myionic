import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ionChange() {
    console.log('值更改时发出');
  }
  ionCancel() {
    console.log('单击清除输入按钮时发出。');
  }
  ionInput() {
    console.log('发生键盘输入时发出');
  }
}
