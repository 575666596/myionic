import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      message: '加载中...',
      duration: 1000,
      spinner: 'bubbles' // "bubbles" | "circles" | "circular" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log(role); // undefinded
    console.log(data); // undefinded
  }

  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null, // 是否显示转圈
      duration: 2000,
      message: '请等待...',
      translucent: true, // 半透明效果
      cssClass: 'custom-class custom-loading' // 注意自定义样式写在全局文件，global.scss或variables.scss
    });
    return await loading.present();
  }
}
