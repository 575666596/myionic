import { Component, OnInit } from '@angular/core';

// 1.导入获取参数对象
import { NavParams } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // 2.声明参数对象
  constructor(public navParams: NavParams) {
    // 3.接收modal页面传过来的值
    console.log(this.navParams);
    console.log(this.navParams.data.id);
  }


  ngOnInit() { }
  onLogin() {
    console.log('登录');
  }

  doClose() {
    // 4.获取模态框对象，并调用其方法关闭模态框。模态框内置方法从官方找
    this.navParams.data.modal.dismiss(
      // 5.关闭的同时向父组件传值，如果不传值，参数对象可省略
      {
        result: {
          msg: '模态框销毁时回传的数据',
          flag: true
        }
      }
    )
  }
}
