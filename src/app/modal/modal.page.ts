import { Component, OnInit } from '@angular/core';
// 1.引入模态框依赖
import { ModalController } from '@ionic/angular';
// 2.引入login组件
import { LoginComponent } from './components/login/login.component'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  // 3.实例化模态框
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  // 4.调用方法
  async showModal() {
    const modal = await this.modalController.create({
      component: LoginComponent, // 要弹出的组件
      componentProps: {
        id: 123, // 父子传值
        age: 18,
        uname: 'lisi'
      }
    });
    await modal.present()
    // return await modal.present() 去掉return，因为要监听下面的事件;
    // 5.监听模态框销毁事件
    const { data } = await modal.onDidDismiss()
    console.log(data.result);
  }

}
