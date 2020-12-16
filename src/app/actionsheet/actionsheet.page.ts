import { Component, OnInit } from '@angular/core';
// 1.引入actionsheet
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-actionsheet',
  templateUrl: './actionsheet.page.html',
  styleUrls: ['./actionsheet.page.scss'],
})
export class ActionsheetPage implements OnInit {
  // 2.注入
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  // 3.调用
  async showActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: '标题',
      mode: 'ios', // 所有平台都显示ios的样式，因为安卓这边样式比较原生，比较差
      buttons: [{
        text: '删除',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('删除');
        }
      }, {
        text: '分享',
        icon: 'share',
        handler: () => {
          console.log('分享');
        }
      }, {
        text: '运动',
        icon: 'bicycle-outline',
        handler: () => {
          console.log('运动');
        }
      }, {
        text: '爱好',
        icon: 'heart',
        handler: () => {
          console.log('取消');
        }
      }, {
        text: '取消',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('取消');
        }
      }]
    });
    await actionSheet.present(); // 这个方法是异步函数
  }
}
