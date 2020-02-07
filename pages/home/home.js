// pages/home/home.js
import request from '../../service/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannarImg: ['/assets/bannar/1.jpg', '/assets/bannar/2.jpg', '/assets/bannar/3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  onLoad:function(options){
    request({
      url:'http://lh.mall.padmins.com/api/shop/mobilecard/hotSummary'
    }).then(res =>{
      console.log(res)
      }).catch(err =>{
      console.log(err)
    })
  }
})