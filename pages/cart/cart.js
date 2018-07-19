//logs.js
const util = require('../../utils/util.js')
/**
 * 微信小程序的生命周期
 * 1.初始化进入页面 onload （一次）=>> onshow (页面展示)=>> onready (资源加载完成HTML css 一次) =>>onhide (页面切换或者后台运行)
 * onunlod (页面销毁时)
 * 
 */
/**
 * 上拉加载 下拉刷新 
 * scroll-view 中设置
 * 动态获取页面高度 设置scroll-view高度
 * onload时去获取
 */
Page({
  data: {
    animationData: {}
  },
  onLoad: function () {
  },
  onShow: function () {
    // 动画效果
    /**
     * 可以再 utils中定义动画 导出 getApp() 
     * 全局使用
     */
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.scale(2, 2).rotate(20).step()

    this.setData({
      animationData: animation.export()
    })

    setTimeout(function () {
      animation.translate(30).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 1000)
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading()
    // 隐藏 
    setTimeout(function(){
      wx.hideNavigationBarLoading()
      // 小程序提供的api，通知页面停止下拉刷新效果
      wx.stopPullDownRefresh;
    },2000)
  },
  // 上拉加载 触底操作
  onReachBottom:function(){
    // 
    // loading 顶部
    wx.showNavigationBarLoading()
    console.log('下拉刷新')
  }
})
