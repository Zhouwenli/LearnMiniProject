// pages/home/home.js
import {index} from '../../service/home.js'
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
   index().then(res =>{
      console.log(res)
      }).catch(err =>{
      console.log(err)
    })
  },
  //分享小程序，没有这个函数不能分享
  onShareAppMessage:function(options){
    return{
      title:'你好小可爱，进来看看',
      imageUrl:'/assets/bannar/1.jpg'
    }
  }
})