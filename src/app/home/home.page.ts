import { Component, OnInit } from '@angular/core';
// 1.引入获取get参数模块
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  // 2.实例化
  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // 3.获取get传值
    this.activatedRoute.queryParams.subscribe(data => {
      console.log(data);

    })
  }

}
