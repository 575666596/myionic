import { Component, OnInit } from '@angular/core';
// 格式化日期的第三方模块
import sd from 'silly-datetime';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  date = ''
  public now;
  public customPickerOptions = {
    buttons: [{
      text: '取消',
      handler: () => console.log("取消")
    }, {
      text: '确认',
      handler: () => {
        console.log('确认')
        // return false 注释掉，否则按确认键日期组件不会退出
      }
    }]
  }
  constructor() {
    this.now = sd.format(new Date(), 'YYYY-MM-DD')
    console.log(this.now);

  }

  ngOnInit() {
    // 模拟从后台获取数据，注意数据格式必须与显示格式一致
    this.date = '2020-11-11'
  }
  ionChange(e) {
    console.log(e);

  }

}
