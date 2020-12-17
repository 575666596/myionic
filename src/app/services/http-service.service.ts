import { Injectable } from '@angular/core';
// 引入http模块
import { HttpClient } from "@angular/common/http";
// 引入rxjs模块
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  // 实例化
  constructor(public http: HttpClient) { }
  // 封装请求方法
  rxjsData(api) {
    return new Observable((observer: any) => {
      this.http.get(api).subscribe((response) => {
        observer.next(response)
      }, (err) => {
        observer.error(err)
      }
      )
    })
  }

}
