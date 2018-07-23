// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_num:new String()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  listenerCarNum: function (e) {
    this.data.post_num = e.detail.value;

  },

  listenerSearch: function(e) {
    console.log(this.data.post_num)
    wx.request({
      url: 'http://140.143.9.16:8000/search/poster.json?key=' + this.data.post_num,
      method: 'GET',
      success: function(res) {
        console.log(res.data.data.poster)
        var data_url = res.data.data.poster
        wx.navigateTo({
          url: '../detail/detail?dataurl=' + data_url,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})