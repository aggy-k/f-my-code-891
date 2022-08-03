// pages/landing/landing.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    console.log('onReady')
    // setTimeout(() => {
    //   console.log('in setTimeOut')
    //   this.goToStories()
    // }, 2000)
  },
  goToStories() {
    wx.showToast({
      title: 'All good',
    })
    // wx.navigateTo({
    //   url: '/pages/stories/index',
    // })
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    console.log('onShow')

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {
    console.log('onHide')

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {
    console.log('onUnload')

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})