// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'zhouwenli',
    age:'25',
    students:[
      { id: '101', name: 'zhou1', age: '30' },
      { id: '102', name: 'zhou2', age: '30' },
      { id: '103', name: 'zhou3', age: '30' }
    ],
    counter:0
  },
  handleClick(){
    this.setData({
      counter: this.data.counter +1
    })
  }
})