import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  list = []
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.list.push(`这是第${i}条数据`)
    }
  }

  ngOnInit() {
  }
  doRefresh(e) {
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.list.unshift(`这是从后台请求的第${i}条数据`) // 头部添加数据
      }
      e.target.complete() // 告诉ion-refresher更新数据完成
      if (this.list.length > 40) {
        e.target.disabled = true // 禁用
      }
    }, 1000)
  }
}
