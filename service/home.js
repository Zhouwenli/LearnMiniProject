import request from './network.js'


export function index(){
  return request({
    url:'/api/shop/mobilecard/hotSummary'
  })
}