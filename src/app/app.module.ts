// 这个文件是Ionic根模块，告诉Ionic如何组装应用
// angular核心模块
import { NgModule } from '@angular/core';
// 浏览器解析模块
import { BrowserModule } from '@angular/platform-browser';
// 路由
import { RouteReuseStrategy } from '@angular/router';
// Ionic核心模块
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// 启动画面插件相关服务
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// 导航条插件相关服务
import { StatusBar } from '@ionic-native/status-bar/ngx';
// 路由模块
import { AppRoutingModule } from './app-routing.module';
// 根组件
import { AppComponent } from './app.component';

// 配置ionic5.x手势事件
import { HammerModule } from '@angular/platform-browser';

@NgModule({
  // 配置当前项目运行的组件
  declarations: [AppComponent],
  // 配置不会再模板中使用的组件，在3.x中用得多，这里不用
  entryComponents: [],
  // 配置当前模块运行依赖的其他模块
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HammerModule],
  // 配置项目所需要的服务
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  // 启动根组件
  bootstrap: [AppComponent]
})
export class AppModule { }
