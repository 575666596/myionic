import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  // alert1
  async presentAlert() {
    const alert = await this.alertController.create({
      message: '确定离开',
      backdropDismiss: false, // 点击屏幕时，弹框不消失
      buttons: ['取消', '确定']
    });

    await alert.present();
  }
  // alert2
  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      header: '标题',
      subHeader: '二级标题',
      message: '确定离开？',
      buttons: ['取消', '确定', '删除']
    });

    await alert.present();
  }
  // alert3
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '标题!',
      message: '提示信息',
      buttons: [
        {
          text: '文本',
          role: '角色',
          cssClass: 'secondary', // 全局样式
          handler: (blah) => {
            console.log(blah);
          }
        }, {
          text: '确定',
          handler: (val) => {
            console.log(val);
          }
        }
      ]
    });
    await alert.present();
  }
  // alert4
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: '请输入信息',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com', // 默认值
          type: 'url',
          placeholder: 'Favorite site ever' // 去掉默认值才会显示
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number' // 只能输入数字
        }
      ],
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          cssClass: 'secondary', // 全局样式
          handler: (ret) => {
            console.log(ret); // undefined
          }
        }, {
          text: '确认',
          handler: (ret) => {
            // ret就是用户输入的值，官网没有，自测
            console.log(ret);
          }
        }
      ]
    });

    await alert.present();
  }
}
