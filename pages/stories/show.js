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
    const id = options.id
    const page = this
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      success(res) {
        console.log({res})
        page.setData({
          story: res.data
        })
      }
    })
  },

  edit(e) {
    wx.setStorageSync('editedId', this.data.story.id)
    wx.switchTab({
      url: `/pages/stories/form`,
    })
  },

  delete(e) {
    // const index = this.options.index
    // const stories = wx.getStorageSync('stories')
    const id = this.data.story.id
    wx.showModal({
      title: 'Are you sure?',
      content: "Delete this story???",
      success(res) {
        if (res.confirm) {
          // delete
          // stories.splice(index, 1)
          // wx.setStorageSync('stories', stories)
          wx.request({
            url: `http://localhost:3000/api/v1/stories/${id}`,
            method: 'DELETE',
            success(res) {
              wx.switchTab({
                url: '/pages/stories/index',
              })
            }
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