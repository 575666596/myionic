import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
  public peopleInfo: any = {
    username: '',
    age: 20,
    flag: true,
    payType: '1',
    checkBoxLis: [
      { val: '吃饭', ischecked: true },
      { val: '睡觉', ischecked: false },
      { val: '敲代码', ischecked: false }
    ],
    citylist: ['北京', '上海', '深圳'],
    city: '上海'
  }
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    console.log(this.peopleInfo);

  }
}
