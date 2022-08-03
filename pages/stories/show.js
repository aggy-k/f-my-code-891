// pages/stories/show.js
const app = getApp()
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
    console.log('inside stories/show, options: ', options)
    const stories = wx.getStorageSync('stories')
    const story = stories[parseInt(options.index)]
    this.setData({
      story: story
    })
  },

  edit(e) {
    console.log('options:', this.options.index)
    const index = this.options.index
    console.log({index})
    wx.setStorageSync('editedIndex', index)
    wx.switchTab({
      url: `/pages/stories/form`,
    })
  },

  delete(e) {
    const index = this.options.index
    const stories = wx.getStorageSync('stories')
    wx.showModal({
      title: 'Are you sure?',
      content: "Delete this story???",
      success(res) {
        if (res.confirm) {
          // delete
          stories.splice(index, 1)
          wx.setStorageSync('stories', stories)
          wx.switchTab({
            url: '/pages/stories/index',
          })
        } else {
          // do nothing
        }
      }
    })
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

  }
})