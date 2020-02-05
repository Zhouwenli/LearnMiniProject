// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['流行','新款','精选'],
    bannarImg: ['/assets/bannar/1.jpg', '/assets/bannar/2.jpg', '/assets/bannar/3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  handleItemClick(event){
    console.log(event)
  }
})