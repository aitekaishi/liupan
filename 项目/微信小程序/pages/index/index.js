//index.js
var app = getApp()
Page({
  data: {
    imgUrls: [
      '../../images/img1.jpg',
      '../../images/img2.jpg',
      '../../images/img3.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    navItems:[
      {
        name:'食堂',
        url:'dishes'
      },
      {
        name:'外卖',
        url:'take',
        isSplot:true
      },
      {
        name:'外带',
        url:'out'
      },
      {
        name:'订单',
        url:'bill'
      },
      {
        name:'帐单',
        url:'dan',
        isSplot:true
      },
      {
        name:'报表',
        url:'bill'
      }
    ]
  },
  onLoad: function () {
    console.log('onLoad')
  }
    
})
