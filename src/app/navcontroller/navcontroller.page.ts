import { Component, OnInit } from '@angular/core';
// 1.引入路由跳转模块
import { NavController } from '@ionic/angular'

// 1.引入get传参模块
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-navcontroller',
  templateUrl: './navcontroller.page.html',
  styleUrls: ['./navcontroller.page.scss'],
})
export class NavcontrollerPage implements OnInit {
  // 2.实例化
  constructor(public nav: NavController, public activatedRoute: ActivatedRoute) { }
  public returnUrl = '' // 指定要返回的url
  ngOnInit() {
    // 3. 获取参数
    this.activatedRoute.queryParams.subscribe(data => {
      this.returnUrl = data.returnUrl
    })
  }
  // 3.绑定事件处理方法
  goBack() {
    // this.nav.back() // 这个back方法在官网不好找，进源码查找，这个方法返回上一级，tab2<->navcontroller<->loading 这时候就会出现问题，不建议使用，另一个bug是没有默认默认跳转地址，分享给别人的链接，返回的不是希望的页面？？

    // this.nav.navigateBack('/tabs/tab2') // 这个方法也有bug 默认所有页面都返回tab2，可能也有这个需求，但是更过希望从哪里跳转从哪里返回，因此跳转路由的时候要加上唯一标识，这里使用get传参方式

    if (this.returnUrl === 'tab2') {
      this.nav.navigateBack('/tabs/tab2')
    }
    if (this.returnUrl === 'tab3') {
      this.nav.navigateBack('/tabs/tab3')
    }
  }
  // 总结： 这个返回bug只存在于一级页面（tab1、tab2、tab3），如果是二级页面可以直接使用ion-back-button返回上一级页面。但是根据实测，ion-back-button按钮在一级页面使用现在没有bug，总之可以用ion-back-button实现返回上一级页面效果，如果要跳转到指定页面，就用js跳转（navigateRoot方法）
}
