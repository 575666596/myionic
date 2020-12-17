import { Component, OnInit } from '@angular/core';
// 引入服务，注意路径变化
import { HttpServiceService } from '../services/http-service.service'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.page.html',
  styleUrls: ['./rxjs.page.scss'],
})
export class RxjsPage implements OnInit {
  // 实例化
  constructor(public httpService: HttpServiceService) { }

  public list = []
  public page = 1 // 默认请求第一页数据

  ngOnInit() {
    // 最后在ngOnInit函数中调用接口
    this.getData()
  }

  // 二次封装请求函数。获取第一页数据
  getData() {
    let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page
    this.httpService.rxjsData(api).subscribe((ret: any) => {
      console.log(ret);
      this.list = ret.result
      this.page++ // 下一次请求第二页数据，以此类推
    })
  }
  // 获取第X页数据
  loadData(e) {
    let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page
    this.httpService.rxjsData(api).subscribe((ret: any) => {
      console.log(ret);
      this.list = this.list.concat(ret.result) // 当前list与请求返回数据进行拼接
      this.page++
      // 判断下一页有没有数据。前6页的数据都大于20条，第7页数据小于20条，第八页开始没有数据
      if (ret.result.length < 20) {
        e.target.disabled = true
      }
      e.target.complete() // 请求完成数据以后告诉ion-infinite-scro11更新数据
    })
  }
  // 做下拉分页加载更多，要考虑网速比较慢时，没有及时请求到数据，如果用户不停的往上拉，会不断触发方法，调用后台数据，ionic4中解决了这个问题，如果是其他框架，要注意这个问题。

  /*简化操作
  ngOnInit() {
    this.loadData(null)
  } 
  loadData(e) {
    let api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=' + this.page
    this.httpService.rxjsData(api).subscribe((ret: any) => {
      this.list = this.list.concat(ret.result)
      this.page++
      if (ret.result.length < 20) {
        e.target.disabled = true
      }
      e ? e.target.complete() : '' // 第一次返回空，第二次开始更新数据
    })
  }
  */
}
