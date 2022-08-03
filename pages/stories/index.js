// pages/stories/index.js
// const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    name: 'Aggy',
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('hello from stories/index onLoad')
    // get the stories from the globalData
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    // const stories = app.globalData.stories
    const stories = wx.getStorageSync('stories')
    this.setData({
      stories: stories
      // stories: []
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

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

  },

  goToStory(e) {
    console.log('function goToStory e', e)
    const story = this.data.stories[e.currentTarget.dataset.index]
    console.log({story})
    // wx.showToast({
    //   title: 'Not good',
    //   icon: 'error'
    // })
    // wx.showModal({
    //   title: 'Oops',
    //   content: "You can't access the story",
    //   showCancel: false,
    //   confirmText: 'OK'
    //   // cancelColor: 'cancelColor',
    // })
    wx.navigateTo({
      url: `/pages/stories/show?index=${e.currentTarget.dataset.index}`,
    })
  }
})