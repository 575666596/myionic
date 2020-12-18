import { Component, OnInit } from '@angular/core';
// 1.引入
import { NavController } from '@ionic/angular'
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // 2.实例化
  constructor(public nav: NavController) { }

  ngOnInit() {
  }
  // 3.绑定事件处理逻辑
  goroot() {
    // 指定注册成功后想要返回的根页面，实测返回其他页面也可以
    this.nav.navigateRoot('/tabs/tab2')
  }
}
