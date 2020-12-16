import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  @ViewChild('slide1') slide1;
  // 获取dom元素并赋值给slide
  @ViewChild('myslide') slide;

  slideOptions = {
    effect: 'flip', // 轮播效果
    autoplay: {
      delay: 2000
    },
    loop: true
  }
  constructor() { }

  ngOnInit() {
  }
  slideDidChange() {
    this.slide1.startAutoplay() // 手动滑动后轮播图不自动轮播的解决方法
  }
  slideNext() {
    this.slide.slideNext() // 触发方法轮播下一页
  }
  slidePrev() {
    this.slide.slidePrev() // 触发方法轮播上一页
  }
  slideUpdade() {
    this.slide.updated() // 请求数据完成后如果轮播图工作异常,这时候调用这句话更新轮播图
  }
}
