// pages/stories/form.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    formData: {}
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log('form onLoad')
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
    console.log('form onSHow')
    this.resetForm()
    // this doesnt work on a switchTab
    // const index = this.options.index

    const index = wx.getStorageSync('editedIndex')

    // console.log('options', this.options)
    if (index) {
      console.log('index found')
      const stories = wx.getStorageSync('stories')
      this.setData({
        formData: stories[index],
        editedIndex: index
      })
      wx.removeStorageSync('editedIndex')
    }
  },

  resetForm() {
    this.setData({formData: {}})
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

  save(e) {
    console.log(e)
    // { title: 'test', body: 'bla bla bla' }
    const story = e.detail.value
    // const stories = app.globalData.stories
    const stories = wx.getStorageSync('stories')

    if (this.data.editedIndex !== undefined && this.data.editedIndex !== null) {
      stories[this.data.editedIndex] = story
    } else {
      stories.push(story)
    }

    console.log('stories', stories)
    // app.globalData.stories = stories
    wx.setStorageSync('stories', stories)
    wx.switchTab({
      url: '/pages/stories/index',
    })
  }
})