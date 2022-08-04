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
    const page = this
    // const index = wx.getStorageSync('editedIndex')
    const id = wx.getStorageSync('editedId')

    // console.log('options', this.options)
    if (id) {
      console.log('id found -> update')
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${id}`,
        success(res) {
          page.setData({
            formData: res.data,
            editedId: id
          })
          wx.removeStorageSync('editedId')
        }
      })
      
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

    const page = this

    if (this.data.editedId !== undefined && this.data.editedId !== null) {
      // stories[this.data.editedIndex] = story
      wx.request({
        url: `http://localhost:3000/api/v1/stories/${page.data.editedId}`,
        method: 'PUT',
        data: {story: story},
        success(res) {
          console.log('update success?', res)
          wx.switchTab({
            url: '/pages/stories/index',
          })
        }
      })
    } else {
      // stories.push(story)
      wx.request({
        url: 'http://localhost:3000/api/v1/stories',
        method: 'POST',
        data: { story: story },
        success(res) {
          console.log('update success?', res)
          if (res.statusCode === 422) {
            wx.showModal({
              title: 'Error!',
              content: res.data.errors.join(', '),
              showCancel: false,
              confirmText: 'OK'
            })
          } else {
            wx.switchTab({
              url: '/pages/stories/index',
            })
          }
          
        },
        fail(error) {
          console.log({error})
        }
      })
    }

    // console.log('stories', stories)
    // app.globalData.stories = stories
    // wx.setStorageSync('stories', stories)
    // wx.switchTab({
    //   url: '/pages/stories/index',
    // })
  }
})