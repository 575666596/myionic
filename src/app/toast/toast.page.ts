import { Component, OnInit } from '@angular/core';
// 1.引入toast
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  // 2.注入
  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: '提示信息',
      header: '标题',
      duration: 2000, // 持续时间
      color: 'dark',
      cssClass: 'mytoast', // 自定义类名，写在global.scss才有效果
      position: 'middle', // 默认bottom，可选middle，top
    });

    toast.present()


  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top', // toast位置
      duration: 2000,

      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
}
