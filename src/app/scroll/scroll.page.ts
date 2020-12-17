import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular'; // 官方提供的方法，实测无效
@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.page.html',
  styleUrls: ['./scroll.page.scss'],
})
export class ScrollPage implements OnInit {
  @ViewChild('myscroll') myscroll
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  list = []
  constructor() {
    for (let i = 0; i < 20; i++) {
      this.list.push(`这是第${i}条数据`)
    }
  }

  ngOnInit() {
    console.log(this.infiniteScroll); // undefined
  }
  loadData(e) {
    // 1.模拟请求数据，实现上拉分页加载更多
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(`这是从服务器获取的第${i}条数据`)
      }
      e.target.complete(); // 告诉ion-infinite-scroll数据已经更新完成，不加这行代码第一次可以加载成功，第二次就会一直转圈圈，不会更新数据

      // 2.后台数据是有限的，数据都加载万之后就要禁用上拉分页加载
      if (this.list.length > 40) {
        // 通过事件对象控制ion-infinite-scroll
        e.target.disabled = true // disabled是ion-infinite-scroll的属性
        // 通过ViewChild操作dom
        // this.myscroll.disabled = true
      }
    }, 1500);
  }
}
